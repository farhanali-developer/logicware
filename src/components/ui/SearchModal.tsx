"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { searchSite, SearchEntry } from "@/lib/searchIndex";

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export default function SearchModal({ open, onClose, onOpen }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const results: SearchEntry[] = searchSite(query);

  // Global Cmd+K / Ctrl+K shortcut
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onOpen();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onOpen]);

  // Reset state when opened, focus input, lock scroll
  useEffect(() => {
    if (open) {
      setQuery("");
      setActiveIndex(0);
      document.body.style.overflow = "hidden";
      const t = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(t);
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  const navigateTo = (url: string) => {
    onClose();
    router.push(url);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, Math.max(results.length - 1, 0)));
      return;
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
      return;
    }
    if (e.key === "Enter") {
      e.preventDefault();
      if (results.length > 0) {
        navigateTo(results[activeIndex]?.url ?? results[0].url);
      } else if (query.trim()) {
        navigateTo(`/search/${encodeURIComponent(query.trim())}`);
      }
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex justify-center px-4 pt-[12vh] sm:pt-[15vh]"
      role="dialog"
      aria-modal="true"
      aria-label="Site search"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[rgba(0,0,0,0.6)] backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative w-full max-w-[600px] max-h-[70vh] flex flex-col rounded-2xl bg-[var(--color-bg-elevated)] border border-[rgba(0,122,255,0.25)] shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden">
        {/* Input row */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-[var(--color-border)]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-text-muted)] flex-shrink-0" aria-hidden="true">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActiveIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Search the site..."
            className="flex-1 bg-transparent text-[var(--color-text-primary)] placeholder-[var(--color-text-faint)] text-base focus:outline-none"
            aria-label="Search query"
          />
          <kbd className="hidden sm:inline-flex items-center justify-center px-2 py-1 rounded-md text-[11px] font-medium text-[var(--color-text-muted)] bg-[var(--color-surface-2)] border border-[var(--color-border)]">
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div className="flex-1 overflow-y-auto py-2">
          {query.trim() === "" ? (
            <div className="px-5 py-10 text-center text-sm text-[var(--color-text-muted)]">
              Start typing to search pages and services across the site.
            </div>
          ) : results.length > 0 ? (
            <ul>
              {results.map((entry, i) => (
                <li key={entry.url}>
                  <button
                    onClick={() => navigateTo(entry.url)}
                    onMouseEnter={() => setActiveIndex(i)}
                    className={`w-full flex items-start gap-3 px-5 py-3 text-left transition-colors duration-150 ${
                      i === activeIndex
                        ? "bg-[rgba(0,122,255,0.1)]"
                        : "hover:bg-[var(--color-surface-2)]"
                    }`}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-[var(--color-text-primary)] font-medium text-sm">
                          {entry.title}
                        </span>
                        <span className="text-[10px] font-semibold tracking-widest uppercase text-blue bg-[rgba(0,122,255,0.1)] border border-[rgba(0,122,255,0.25)] rounded-full px-2 py-0.5">
                          {entry.category}
                        </span>
                      </div>
                      <p className="text-xs text-[var(--color-text-secondary)] mt-1 truncate">
                        {entry.description}
                      </p>
                    </div>
                    <span className="text-[var(--color-text-muted)] text-xs mt-1 flex-shrink-0">
                      ↵
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-5 py-10 text-center">
              <p className="text-sm text-[var(--color-text-secondary)]">
                No results for &ldquo;{query}&rdquo;
              </p>
              <p className="text-xs text-[var(--color-text-muted)] mt-2">
                Press <kbd className="px-1.5 py-0.5 rounded bg-[var(--color-surface-2)] border border-[var(--color-border)]">Enter</kbd> to continue — you&apos;ll land on our 404 page.
              </p>
            </div>
          )}
        </div>

        {/* Footer hint */}
        <div className="flex items-center justify-between px-5 py-2.5 border-t border-[var(--color-border)] text-[11px] text-[var(--color-text-muted)]">
          <span>Logicware Search</span>
          <span className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 rounded bg-[var(--color-surface-2)] border border-[var(--color-border)]">↑</kbd>
            <kbd className="px-1.5 py-0.5 rounded bg-[var(--color-surface-2)] border border-[var(--color-border)]">↓</kbd>
            to navigate
          </span>
        </div>
      </div>
    </div>
  );
}
