"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import TestimonialCard from "@/components/ui/TestimonialCard";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { TESTIMONIALS } from "@/lib/testimonials";

const STATS = [
  { end: 500, suffix: "+", label: "Claims/Month" },
  { end: 96, suffix: "%", label: "Client Retention" },
  { end: 2, prefix: "$", suffix: "M+", label: "Revenue Recovered" },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".testimonials-header > *", {
        y: 24,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".testimonials-header",
          start: "top 80%",
        },
      });

      const tween1 = gsap.to(row1Ref.current, {
        xPercent: -50,
        repeat: -1,
        duration: 30,
        ease: "none",
      });

      const tween2 = gsap.fromTo(
        row2Ref.current,
        { xPercent: -50 },
        {
          xPercent: 0,
          repeat: -1,
          duration: 35,
          ease: "none",
        }
      );

      const row1El = row1Ref.current;
      const row2El = row2Ref.current;

      const pause1 = () => tween1.pause();
      const play1 = () => tween1.play();
      const pause2 = () => tween2.pause();
      const play2 = () => tween2.play();

      row1El?.addEventListener("mouseenter", pause1);
      row1El?.addEventListener("mouseleave", play1);
      row2El?.addEventListener("mouseenter", pause2);
      row2El?.addEventListener("mouseleave", play2);

      return () => {
        row1El?.removeEventListener("mouseenter", pause1);
        row1El?.removeEventListener("mouseleave", play1);
        row2El?.removeEventListener("mouseenter", pause2);
        row2El?.removeEventListener("mouseleave", play2);
      };
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative py-32 bg-[var(--color-surface)]"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="testimonials-header flex flex-col items-center text-center mb-16">
          <span className="text-xs font-medium tracking-widest uppercase text-blue mb-4">
            What Clients Say
          </span>
          <h2
            className="text-[var(--color-text-primary)] font-bold text-center mb-4"
            style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}
          >
            Practices That Trust Logicware
          </h2>
          <p className="text-[var(--color-text-secondary)] text-center max-w-[560px]">
            Real feedback from solo dentists and small practices we support
            every day.
          </p>
        </div>
      </div>

      {/* Marquee rows */}
      <div className="flex flex-col gap-6 overflow-hidden">
        <div ref={row1Ref} className="flex gap-6 w-fit will-change-transform">
          {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
            <TestimonialCard key={`row1-${i}`} {...t} />
          ))}
        </div>
        <div ref={row2Ref} className="flex gap-6 w-fit will-change-transform">
          {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
            <TestimonialCard key={`row2-${i}`} {...t} />
          ))}
        </div>
      </div>

      {/* Stats bar */}
      <div className="max-w-[1280px] mx-auto px-6 mt-20">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-0">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center px-10 ${
                i > 0 ? "sm:border-l border-[rgba(0,122,255,0.2)]" : ""
              }`}
            >
              <span className="text-[var(--color-text-primary)] font-bold text-[32px]">
                <AnimatedCounter
                  end={stat.end}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </span>
              <span className="text-[var(--color-text-secondary)] text-sm mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Section transition gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-gradient-to-b from-transparent to-[var(--color-bg)] pointer-events-none" />
    </section>
  );
}
