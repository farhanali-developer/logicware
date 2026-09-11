"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap";

const FEATURE_CARDS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3Z" />
      </svg>
    ),
    title: "HIPAA Compliant",
    body: "Every workflow, tool, and communication is HIPAA-compliant. We sign a BAA before handling a single patient record.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
    title: "Daily Claim Submission",
    body: "Claims go out every business day. No backlogs. No delays. Your AR moves fast.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <rect x="7" y="11" width="3" height="6" />
        <rect x="12" y="7" width="3" height="10" />
        <rect x="17" y="13" width="3" height="4" />
      </svg>
    ),
    title: "Transparent Reporting",
    body: "Monthly PDF reports showing claims submitted, collections, denial rates, and recovered revenue.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12l2.5 2.5L16 9" />
      </svg>
    ),
    title: "95%+ Clean Claim Rate",
    body: "We average a 95%+ first-pass acceptance rate across all dental payer types.",
  },
];

const PROOF_POINTS = [
  { value: "7+ Years", label: "Healthcare Admin Experience" },
  { value: "Delaware LLC", label: "US-Registered & HIPAA Compliant" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".about-label-line", {
        scaleX: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".about-label", {
        opacity: 0,
        x: -10,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".about-word", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.03,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      gsap.from(".about-paragraph", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-paragraphs",
          start: "top 80%",
        },
      });

      gsap.from(".about-proof", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-proofs",
          start: "top 85%",
        },
      });

      gsap.fromTo(
        ".about-card",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-cards",
            start: "top 80%",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  const headingWords = "We Are a Delaware-Registered Billing Partner You Can Trust".split(" ");

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-[var(--color-bg)] py-32"
    >
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* LEFT COLUMN */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="about-label-line block w-10 h-px bg-blue origin-left" />
            <span className="about-label text-xs font-medium tracking-widest uppercase text-blue">
              About Logicware
            </span>
          </div>

          <h2
            className="text-[var(--color-text-primary)] font-bold leading-[1.2] mb-8"
            style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}
          >
            {headingWords.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden">
                <span className="about-word inline-block mr-[0.25em]">{word}</span>
              </span>
            ))}
          </h2>

          <div className="about-paragraphs flex flex-col gap-5 mb-12">
            <p className="about-paragraph text-[var(--color-text-secondary)] text-base leading-[1.8]">
              Logicware LLC is a US-registered dental billing company operated
              by a seasoned team with deep expertise in dental revenue
              cycle management. We serve solo dentists, specialists, and
              small group practices across the United States.
            </p>
            <p className="about-paragraph text-[var(--color-text-secondary)] text-base leading-[1.8]">
              From our remote operations hub, we work US business hours to
              ensure your claims are submitted daily, denials are resolved
              fast, and you receive transparent monthly reporting, without
              the overhead of an in-house biller.
            </p>
          </div>

          <div className="about-proofs flex gap-8 mb-10">
            {PROOF_POINTS.map((proof, i) => (
              <div
                key={proof.value}
                className={`about-proof flex flex-col gap-1 ${
                  i > 0 ? "pl-8 border-l border-[var(--color-border-strong)]" : ""
                }`}
              >
                <span className="text-[var(--color-text-primary)] font-bold text-lg">{proof.value}</span>
                <span className="text-[var(--color-text-secondary)] text-sm">{proof.label}</span>
              </div>
            ))}
          </div>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 border border-blue text-blue px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:bg-blue hover:text-white hover:shadow-[0_0_20px_rgba(0,122,255,0.4)]"
          >
            Learn More About Us
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* RIGHT COLUMN */}
        <div className="about-cards grid grid-cols-1 sm:grid-cols-2 gap-5">
          {FEATURE_CARDS.map((card) => (
            <div
              key={card.title}
              className="about-card group rounded-xl p-6 bg-[var(--color-surface)] border border-[rgba(0,122,255,0.15)] transition-all duration-300 hover:border-[rgba(0,122,255,0.4)] hover:bg-[rgba(0,122,255,0.05)] hover:-translate-y-1 will-change-transform"
            >
              <div className="w-6 h-6 text-blue mb-4">{card.icon}</div>
              <h3 className="text-[var(--color-text-primary)] font-semibold mb-2">{card.title}</h3>
              <p className="text-[var(--color-text-secondary)] text-sm leading-[1.6]">{card.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section transition gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-gradient-to-b from-transparent to-[var(--color-bg)] pointer-events-none" />
    </section>
  );
}
