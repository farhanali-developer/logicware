"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import { gsap, useGSAP } from "@/lib/gsap";

const FEATURES = ["No setup fee", "No long-term contracts", "Results in 30 days"];

export default function ContactCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const router = useRouter();

  useGSAP(
    () => {
      gsap.to(".cta-logo", {
        rotate: 2,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".cta-pulse", {
        scale: 1.2,
        opacity: 0,
        duration: 2,
        repeat: -1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      gsap.from(".cta-eyebrow", {
        y: 16,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".cta-word", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.04,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      gsap.from(".cta-fade-up", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
        },
      });
    },
    { scope: sectionRef }
  );

  const headingWords = "Get Your Free 30-Day Billing Audit".split(" ");

  return (
    <section
      ref={sectionRef}
      className="relative py-32"
      style={{
        background:
          "linear-gradient(180deg, var(--color-bg) 0%, var(--color-bg-elevated) 100%)",
      }}
    >
      <div className="max-w-[800px] mx-auto px-6 flex flex-col items-center text-center">
        <svg
          width={80}
          height={80}
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="cta-logo mb-6 will-change-transform opacity-30"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M144.901 115.484L144.901 297.124L166.328 318.546L144.898 339.973L144.898 342.191C144.898 371.596 165.373 396.498 194.77 396.498H367V339.51L226.166 339.51L366.874 198.366L326.547 158.349L201.804 283.075L201.804 115.484L144.901 115.484Z"
            fill="#007AFF"
          />
        </svg>

        <span className="cta-eyebrow inline-flex items-center rounded-full px-3 py-1 text-xs font-medium text-blue bg-[rgba(0,122,255,0.1)] border border-[rgba(0,122,255,0.3)] mb-6">
          Free Offer
        </span>

        <h2
          className="text-[var(--color-text-primary)] font-bold text-center leading-[1.15] mb-6"
          style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
        >
          {headingWords.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden">
              <span className="cta-word inline-block mr-[0.25em]">{word}</span>
            </span>
          ))}
        </h2>

        <p className="cta-fade-up text-[var(--color-text-secondary)] text-center text-lg leading-[1.7] max-w-[600px] mb-8">
          We&apos;ll review your last 30 days of claims at no cost. No
          commitment. If we don&apos;t find revenue you&apos;re leaving on the
          table, you owe us nothing.
        </p>

        <div className="cta-fade-up flex flex-wrap items-center justify-center gap-6 mb-10">
          {FEATURES.map((feature) => (
            <span key={feature} className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
              <span className="text-blue">✓</span> {feature}
            </span>
          ))}
        </div>

        <div className="cta-fade-up relative">
          <div
            className="cta-pulse absolute inset-0 rounded-full bg-blue pointer-events-none"
            style={{ opacity: 0.15 }}
            aria-hidden="true"
          />
          <button
            onClick={() => router.push("/contact")}
            className="relative bg-blue text-white hover:text-white px-10 py-4 rounded-full font-semibold text-[17px] transition-all duration-300 hover:bg-blue-dim hover:shadow-[0_0_50px_rgba(0,122,255,0.5)] hover:scale-[1.03]"
          >
            Start Your Free Audit →
          </button>
        </div>

        <p className="cta-fade-up text-xs text-[var(--color-text-muted)] text-center mt-4">
          Response within 24 hours · HIPAA Compliant · No spam
        </p>
      </div>
    </section>
  );
}
