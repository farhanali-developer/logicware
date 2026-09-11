"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Message = {
  role: "user" | "assistant";
  text: string;
};

const STORAGE_KEY = "logicware-chat-history";

const INITIAL_SYSTEM_PROMPT =
  "Hi there! I'm the Logicware Assistant. I can help with questions about our dental billing services: credentialing, claims, denial management, reporting, or how to get started. What can I help you with?";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [wiggle, setWiggle] = useState(false);
  const greetingPlayed = useRef(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const visibleMessages = useMemo(() => messages, [messages]);

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [visibleMessages.length, open]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as Message[];
        if (Array.isArray(parsed) && parsed.every((item) => item && typeof item.role === "string" && typeof item.text === "string")) {
          // Always show the current greeting, never the cached version
          if (parsed.length > 0 && parsed[0].role === "assistant") {
            parsed[0] = { role: "assistant", text: INITIAL_SYSTEM_PROMPT };
          }
          setMessages(parsed);
          return;
        }
      } catch {
        /* ignore invalid storage */
      }
    }
    setMessages([{ role: "assistant", text: INITIAL_SYSTEM_PROMPT }]);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (messages.length > 0) {
      // Keep first greeting + last 19 messages to cap storage growth
      const toStore =
        messages.length > 20
          ? [messages[0], ...messages.slice(-(19))]
          : messages;
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(toStore));
    }
  }, [messages]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const openListener = () => setOpen(true);
    window.addEventListener("open-logicware-chat", openListener);
    return () => window.removeEventListener("open-logicware-chat", openListener);
  }, []);

  useEffect(() => {
    if (!open && messages.length === 1 && !greetingPlayed.current) {
      setWiggle(true);
      if (typeof window !== "undefined") {
        const AudioContextConstructor =
          window.AudioContext || (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;

        if (AudioContextConstructor) {
          const audioContext = new AudioContextConstructor();
          const oscillator = audioContext.createOscillator();
          const gainNode = audioContext.createGain();
          oscillator.type = "sine";
          oscillator.frequency.value = 520;
          oscillator.connect(gainNode);
          gainNode.connect(audioContext.destination);
          gainNode.gain.setValueAtTime(0, audioContext.currentTime);
          gainNode.gain.linearRampToValueAtTime(0.15, audioContext.currentTime + 0.01);
          oscillator.start();
          gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.25);
          oscillator.stop(audioContext.currentTime + 0.25);
        }
      }
      greetingPlayed.current = true;
      const timer = window.setTimeout(() => setWiggle(false), 800);
      return () => window.clearTimeout(timer);
    }
  }, [open, messages.length]);

  const clearChat = () => {
    const resetMessages: Message[] = [
      { role: "assistant", text: INITIAL_SYSTEM_PROMPT },
    ];
    setMessages(resetMessages);
    setInput("");
    setError(null);
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  };

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setError(null);

    const newMessages: Message[] = [
      ...messages,
      { role: "user", text: trimmed },
    ];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });

      if (!response.ok) {
        throw new Error("Chat request failed");
      }

      const data = await response.json();
      if (!data?.answer) {
        throw new Error(data?.error || "No answer returned");
      }

      setMessages((current) => [...current, { role: "assistant", text: data.answer }]);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to get a response. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await sendMessage();
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open Logicware chat"
        className={`fixed left-8 bottom-8 z-50 w-14 h-14 rounded-full bg-blue text-white shadow-[0_10px_30px_rgba(0,122,255,0.35)] flex items-center justify-center transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-blue/50 ${wiggle ? "animate-wiggle" : "hover:-translate-y-0.5"}`}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10Z" />
        </svg>
      </button>

      {open && (
        <div className="fixed left-8 bottom-20 z-50 w-full max-w-[440px] px-2 sm:px-0">
          <div className="relative rounded-3xl bg-[var(--color-bg-elevated)] border border-[rgba(0,122,255,0.18)] shadow-[0_25px_70px_rgba(0,0,0,0.18)] overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-[rgba(0,122,255,0.12)] gap-3">
              <div>
                <p className="text-sm font-semibold text-[var(--color-text-primary)]">Logicware Assistant</p>
                <p className="text-[11px] text-[var(--color-text-secondary)]">Ask only about Logicware services and billing support.</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={clearChat}
                  className="inline-flex h-9 px-3 items-center justify-center rounded-full border border-[rgba(0,122,255,0.16)] text-[var(--color-text-secondary)] text-[13px] transition-colors duration-200 hover:border-blue hover:text-blue"
                >
                  Clear
                </button>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close chat"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[var(--color-text-secondary)] transition-colors duration-200 hover:text-blue hover:bg-[rgba(0,122,255,0.08)]"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="overflow-y-auto px-5 py-4 space-y-4" style={{ maxHeight: "60vh" }}>
              {visibleMessages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`flex ${message.role === "assistant" ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)] ${
                      message.role === "assistant"
                        ? "bg-[rgba(0,122,255,0.08)] text-[var(--color-text-primary)]"
                        : "bg-blue text-white"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            <form onSubmit={handleSubmit} className="border-t border-[rgba(0,122,255,0.12)] px-4 py-4 bg-[var(--color-surface)]">
              <div className="flex items-center gap-2">
                <label htmlFor="chat-input" className="sr-only">
                  Type your question
                </label>
                <textarea
                  id="chat-input"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  rows={1}
                  placeholder="Ask about billing, credentialing, or contact..."
                  className="flex-1 min-h-[46px] resize-none rounded-2xl border border-[rgba(0,122,255,0.12)] bg-[var(--color-bg)] px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-blue focus:ring-2 focus:ring-[rgba(0,122,255,0.12)]"
                  disabled={loading}
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="flex-shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue text-white transition-colors duration-200 hover:bg-blue-dim disabled:cursor-not-allowed disabled:bg-[rgba(0,122,255,0.35)]"
                  aria-label="Send message"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2 21L23 12 2 3v7l15 2-15 2v7Z" />
                  </svg>
                </button>
              </div>
              {error && <p className="mt-3 text-xs text-red-400">{error}</p>}
            </form>
          </div>
        </div>
      )}
    </>
  );
}
