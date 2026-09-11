"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import DashboardIllustration from "@/components/ui/DashboardIllustration";

const TRUST_ITEMS = [
  "HIPAA Compliant",
  "US LLC Registered",
  "95%+ Clean Claim Rate",
];

const HEADLINE_LINE_1 = "Your Practice Deserves";
const HEADLINE_LINE_2 = "Faster Revenue.";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.4 });

      tl.from(".hero-eyebrow", {
        y: 16,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      })
        .from(
          ".hero-word",
          {
            y: 40,
            opacity: 0,
            duration: 0.7,
            stagger: 0.06,
            ease: "power3.out",
          },
          "-=0.2"
        )
        .from(
          ".hero-subheading",
          { y: 20, opacity: 0, duration: 0.7, ease: "power2.out" },
          "-=0.3"
        )
        .fromTo(
          ".hero-cta",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
          "-=0.4"
        )
        .from(
          ".hero-trust",
          { y: 16, opacity: 0, duration: 0.6, stagger: 0.08, ease: "power2.out" },
          "-=0.3"
        )
        .from(
          ".hero-dashboard",
          { x: 60, opacity: 0, duration: 0.9, ease: "power3.out" },
          "-=0.8"
        )
        .from(
          cardRef.current,
          { x: 60, opacity: 0, duration: 0.9, ease: "power3.out" },
          "-=0.6"
        )
        .fromTo(
          ".hero-trusted-by",
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          "-=0.2"
        );

      // Floating animation for the stat card
      gsap.to(cardRef.current, {
        y: 8,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.5,
      });

      // Scroll indicator fade out
      gsap.to(scrollIndicatorRef.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "200 top",
          scrub: true,
        },
      });
    },
    { scope: containerRef }
  );

  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[var(--color-bg)] pt-24"
    >
      {/* Background decorative blurred circle */}
      <div
        className="absolute top-1/4 right-[10%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,122,255,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Diagonal decorative line */}
      <svg
        className="absolute top-0 right-0 w-full h-full pointer-events-none"
        preserveAspectRatio="none"
      >
        <line
          x1="100%"
          y1="0%"
          x2="40%"
          y2="60%"
          stroke="rgba(0,122,255,0.1)"
          strokeWidth="1"
        />
      </svg>

      <div className="relative z-10 max-w-[1280px] w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 items-center">
        {/* LEFT COLUMN */}
        <div className="flex flex-col">
          <span className="hero-eyebrow inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-medium text-blue bg-[rgba(0,122,255,0.1)] border border-[rgba(0,122,255,0.3)] mb-6">
            Dental Billing Specialists · Delaware LLC
          </span>

          <h1
            className="font-bold leading-[1.1] mb-6"
            style={{ fontSize: "clamp(40px, 5vw, 72px)" }}
          >
            <span className="block text-[var(--color-text-primary)]">
              {HEADLINE_LINE_1.split(" ").map((word, i) => (
                <span key={i} className="inline-block overflow-hidden align-bottom">
                  <span className="hero-word inline-block mr-[0.25em]">
                    {word}
                  </span>
                </span>
              ))}
            </span>
            <span className="block text-blue">
              {HEADLINE_LINE_2.split(" ").map((word, i) => (
                <span key={i} className="inline-block overflow-hidden align-bottom">
                  <span className="hero-word inline-block mr-[0.25em]">
                    {word}
                  </span>
                </span>
              ))}
            </span>
          </h1>

          <p className="hero-subheading text-[var(--color-text-secondary)] text-lg font-light max-w-[520px] leading-[1.7] mb-8">
            We handle the full billing cycle for solo dentists and dental
            practices across the US, from claim submission to denial
            management, so you can focus entirely on your patients.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <Link
              href="/contact"
              className="hero-cta bg-blue hover:text-white text-white text-[var(--color-text-primary)] px-7 py-3.5 rounded-full font-semibold text-[15px] transition-all duration-300 hover:bg-blue-dim hover:shadow-[0_0_30px_rgba(0,122,255,0.5)]"
            >
              Get Your Free Billing Audit
            </Link>
            <button
              onClick={scrollToServices}
              className="hero-cta bg-transparent border border-[var(--color-border-light)] text-[var(--color-text-primary)] px-7 py-3.5 rounded-full font-semibold text-[15px] transition-all duration-300 hover:border-blue hover:text-blue"
            >
              See How It Works
            </button>
          </div>

          <div className="flex flex-wrap gap-6 items-center">
            {TRUST_ITEMS.map((item) => (
              <span
                key={item}
                className="hero-trust flex items-center gap-2 text-xs text-[var(--color-text-secondary)]"
              >
                <span className="text-blue">✓</span> {item}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="relative flex flex-col items-center lg:items-end gap-12 w-full">
          {/* Decorative large logo mark */}
          <svg
            width={400}
            height={400}
            viewBox="0 0 512 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="absolute right-0 top-1/2 -translate-y-1/2 rotate-12 pointer-events-none hidden lg:block opacity-[0.06]"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M144.901 115.484L144.901 297.124L166.328 318.546L144.898 339.973L144.898 342.191C144.898 371.596 165.373 396.498 194.77 396.498H367V339.51L226.166 339.51L366.874 198.366L326.547 158.349L201.804 283.075L201.804 115.484L144.901 115.484Z"
              fill="#007AFF"
            />
          </svg>

          {/* Mini revenue dashboard illustration */}
          <DashboardIllustration className="hero-dashboard w-full max-w-[360px]" />

          {/* Floating stat card */}
          <div
            ref={cardRef}
            className="relative w-full max-w-[340px] rounded-2xl p-7 bg-[var(--color-bg-elevated)] border border-[rgba(0,122,255,0.2)] will-change-transform"
          >
            <div className="flex flex-col gap-6">
              <div>
                <div className="text-blue font-bold text-[36px]">
                  <AnimatedCounter end={95} suffix="%+" />
                </div>
                <div className="text-[var(--color-text-secondary)] text-[13px] mt-1">
                  First-Pass Claim Rate
                </div>
              </div>
              <div>
                <div className="text-blue font-bold text-[36px]">
                  <AnimatedCounter end={0} prefix="$" />
                </div>
                <div className="text-[var(--color-text-secondary)] text-[13px] mt-1">
                  Zero Setup Fee
                </div>
              </div>
              <div>
                <div className="text-blue font-bold text-[36px]">
                  <AnimatedCounter end="48hr" />
                </div>
                <div className="text-[var(--color-text-secondary)] text-[13px] mt-1">
                  Average Claim Turnaround
                </div>
              </div>
            </div>
          </div>

          <p className="hero-trusted-by text-xs text-[var(--color-text-muted)] mt-4">
            Trusted by practices in 8+ US states
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-blue opacity-50"
        aria-hidden="true"
      >
        <svg
          className="animate-bounce"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>

      {/* Section transition gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-gradient-to-b from-transparent to-[var(--color-bg)] pointer-events-none" />
    </section>
  );
}
