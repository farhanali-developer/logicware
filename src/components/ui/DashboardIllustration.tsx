"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const BARS = [
  { x: 10, h: 40 },
  { x: 50, h: 55 },
  { x: 90, h: 38 },
  { x: 130, h: 62 },
  { x: 170, h: 50 },
  { x: 210, h: 78 },
  { x: 250, h: 95 },
];

const LINE_POINTS = "20,54 60,39 100,56 140,32 180,44 220,16 260,0";

export default function DashboardIllustration({
  className = "",
}: {
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const approvedRef = useRef<HTMLDivElement>(null);
  const postedRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".dash-bar", {
        scaleY: 0,
        transformOrigin: "bottom",
        duration: 0.9,
        stagger: 0.07,
        ease: "power3.out",
        delay: 1.2,
      });

      const line = containerRef.current?.querySelector(".dash-line") as
        | SVGPathElement
        | null;
      if (line) {
        const length = line.getTotalLength();
        gsap.set(line, { strokeDasharray: length, strokeDashoffset: length });
        gsap.to(line, {
          strokeDashoffset: 0,
          duration: 1.2,
          ease: "power2.out",
          delay: 1.6,
        });
      }

      gsap.from(".dash-dot", {
        scale: 0,
        opacity: 0,
        duration: 0.4,
        ease: "back.out(2)",
        delay: 2.6,
      });

      gsap.to(approvedRef.current, {
        y: 10,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1,
      });

      gsap.to(postedRef.current, {
        y: -10,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.5,
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Main dashboard card */}
      <div className="rounded-2xl p-5 bg-[var(--color-surface-2)] border border-[rgba(0,122,255,0.2)] backdrop-blur-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue" />
            <span className="text-xs text-[var(--color-text-secondary)]">Revenue Overview</span>
          </div>
          <span className="text-xs font-semibold text-blue bg-[rgba(0,122,255,0.1)] border border-[rgba(0,122,255,0.3)] rounded-full px-2 py-0.5">
            +18%
          </span>
        </div>

        <svg viewBox="-5 -10 290 115" className="w-full h-auto" aria-hidden="true">
          {BARS.map((bar, i) => (
            <rect
              key={bar.x}
              className="dash-bar [transform-box:fill-box] [transform-origin:bottom]"
              x={bar.x}
              y={100 - bar.h}
              width={20}
              height={bar.h}
              rx={4}
              fill={i === BARS.length - 1 ? "#007AFF" : "rgba(0,122,255,0.18)"}
            />
          ))}
          <polyline
            className="dash-line"
            points={LINE_POINTS}
            fill="none"
            stroke="#007AFF"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle className="dash-dot" cx={260} cy={0} r={4} fill="#007AFF" />
        </svg>

        <div className="flex items-center justify-between mt-4 text-xs text-[var(--color-text-secondary)]">
          <span>Last 7 days</span>
          <span>142 claims submitted</span>
        </div>
      </div>

      {/* Floating badge: claim approved */}
      <div
        ref={approvedRef}
        className="hidden sm:flex absolute -top-4 -left-6 items-center gap-2 rounded-full pl-2 pr-3 py-1.5 bg-[var(--color-bg-elevated-2)] border border-[rgba(34,197,94,0.3)] shadow-lg will-change-transform"
      >
        <span className="w-5 h-5 rounded-full bg-[rgba(34,197,94,0.15)] flex items-center justify-center">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </span>
        <span className="text-xs font-medium text-[var(--color-text-primary)] whitespace-nowrap">Claim Approved</span>
      </div>

      {/* Floating badge: payment posted */}
      <div
        ref={postedRef}
        className="hidden sm:flex absolute -bottom-4 -right-4 items-center gap-2 rounded-full pl-2 pr-3 py-1.5 bg-[var(--color-bg-elevated-2)] border border-[rgba(0,122,255,0.3)] shadow-lg will-change-transform"
      >
        <span className="w-5 h-5 rounded-full bg-[rgba(0,122,255,0.15)] flex items-center justify-center text-blue text-xs font-bold">
          $
        </span>
        <span className="text-xs font-medium text-[var(--color-text-primary)] whitespace-nowrap">Payment Posted</span>
      </div>
    </div>
  );
}
