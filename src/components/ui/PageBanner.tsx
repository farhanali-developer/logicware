"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

interface PageBannerProps {
  badge: string;
  title: string;
  subtitle?: string;
  /** SVG path string for the decorative icon (24×24 viewBox, stroke-based) */
  iconPath?: string;
}

export default function PageBanner({ badge, title, subtitle, iconPath }: PageBannerProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".banner-badge", { opacity: 0, y: 10, duration: 0.5, ease: "power2.out", delay: 0.1 });
      gsap.from(".banner-title", { opacity: 0, y: 20, duration: 0.6, ease: "power2.out", delay: 0.2 });
      if (subtitle) gsap.from(".banner-sub", { opacity: 0, y: 14, duration: 0.6, ease: "power2.out", delay: 0.35 });
    },
    { scope: ref }
  );

  return (
    <section
      ref={ref}
      className="relative overflow-hidden pt-40 pb-16 px-6"
      style={{
        background:
          "linear-gradient(160deg, rgba(0,122,255,0.12) 0%, rgba(0,122,255,0.04) 40%, var(--color-bg) 100%)",
      }}
    >
      {/* Grid overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,122,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,122,255,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 0%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 0%, black 40%, transparent 100%)",
        }}
      />

      {/* Glow orb */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(0,122,255,0.18) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 max-w-[800px] mx-auto text-center">
        {/* Badge with icon */}
        <div className="banner-badge inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-blue bg-[rgba(0,122,255,0.1)] border border-[rgba(0,122,255,0.3)] mb-6">
          {iconPath && (
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue"
            >
              <path d={iconPath} />
            </svg>
          )}
          {badge}
        </div>

        <h1
          className="banner-title text-[var(--color-text-primary)] font-bold"
          style={{ fontSize: "clamp(32px, 5vw, 60px)", lineHeight: 1.15 }}
        >
          {title}
        </h1>

        {subtitle && (
          <p className="banner-sub text-[var(--color-text-secondary)] text-lg leading-[1.7] max-w-[600px] mx-auto mt-4">
            {subtitle}
          </p>
        )}
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-[var(--color-bg)] pointer-events-none" />
    </section>
  );
}
