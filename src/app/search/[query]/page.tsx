"use client";

import { useRef } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { gsap, useGSAP } from "@/lib/gsap";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { searchSite } from "@/lib/searchIndex";

export default function SearchResultsPage() {
  const params = useParams<{ query: string }>();
  const rawQuery = decodeURIComponent(params.query ?? "");
  const results = searchSite(rawQuery);
  const pageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      pageRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power1.out" }
    );
    gsap.fromTo(
      ".result-card",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.07, ease: "power2.out", delay: 0.15 }
    );
  }, []);

  return (
    <div ref={pageRef}>
      <Navbar />
      <main className="bg-[var(--color-bg)] min-h-screen">
        <section className="pt-40 pb-32 px-6">
          <div className="max-w-[760px] mx-auto">
            {/* Header */}
            <div className="mb-10">
              <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium text-blue bg-[rgba(0,122,255,0.1)] border border-[rgba(0,122,255,0.3)] mb-4">
                Search
              </span>
              <h1
                className="text-[var(--color-text-primary)] font-bold mb-2"
                style={{ fontSize: "clamp(26px, 3.5vw, 40px)" }}
              >
                {results.length > 0
                  ? `${results.length} result${results.length === 1 ? "" : "s"} for`
                  : "No results for"}{" "}
                <span className="text-blue">&ldquo;{rawQuery}&rdquo;</span>
              </h1>
              {results.length === 0 && (
                <p className="text-[var(--color-text-secondary)] text-base mt-2">
                  Try a different term, or browse the site using the links below.
                </p>
              )}
            </div>

            {/* Results */}
            {results.length > 0 ? (
              <ul className="flex flex-col gap-4">
                {results.map((entry) => (
                  <li key={entry.url}>
                    <Link
                      href={entry.url}
                      className="result-card group flex items-start justify-between gap-4 rounded-2xl p-6 bg-[var(--color-surface)] border border-[rgba(0,122,255,0.12)] transition-all duration-300 hover:border-[rgba(0,122,255,0.4)] hover:bg-[rgba(0,122,255,0.05)]"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[var(--color-text-primary)] font-semibold">
                            {entry.title}
                          </span>
                          <span className="text-[10px] font-semibold tracking-widest uppercase text-blue bg-[rgba(0,122,255,0.1)] border border-[rgba(0,122,255,0.25)] rounded-full px-2 py-0.5">
                            {entry.category}
                          </span>
                        </div>
                        <p className="text-sm text-[var(--color-text-secondary)] leading-[1.6]">
                          {entry.description}
                        </p>
                        <p className="text-xs text-blue mt-2">{entry.url}</p>
                      </div>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue flex-shrink-0 mt-1 transition-transform duration-200 group-hover:translate-x-1"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              /* No results — helpful links */
              <div className="flex flex-col gap-3">
                {[
                  { label: "Home", href: "/", desc: "Start from the beginning" },
                  { label: "Services", href: "/services", desc: "What we handle for your practice" },
                  { label: "Blog", href: "/blog", desc: "Billing guides and tips" },
                  { label: "Careers", href: "/careers", desc: "Open roles at Logicware" },
                  { label: "Contact", href: "/contact", desc: "Get a free billing audit" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between rounded-xl p-5 bg-[var(--color-surface)] border border-[rgba(0,122,255,0.12)] transition-all duration-300 hover:border-[rgba(0,122,255,0.4)] hover:bg-[rgba(0,122,255,0.05)]"
                  >
                    <div>
                      <p className="text-[var(--color-text-primary)] font-semibold">{link.label}</p>
                      <p className="text-xs text-[var(--color-text-secondary)] mt-0.5">{link.desc}</p>
                    </div>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue flex-shrink-0">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
