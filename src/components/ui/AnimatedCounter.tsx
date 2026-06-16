"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

interface AnimatedCounterProps {
  end: string | number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export default function AnimatedCounter({
  end,
  duration = 2,
  suffix = "",
  prefix = "",
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  const numericEnd =
    typeof end === "number" ? end : parseFloat(end.toString().replace(/[^0-9.]/g, ""));
  const isPureNumber = /^[0-9.]+$/.test(end.toString());

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      if (!isPureNumber) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
        return;
      }

      const counter = { val: 0 };
      gsap.to(counter, {
        val: numericEnd,
        duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          if (el) {
            const value = Number.isInteger(numericEnd)
              ? Math.round(counter.val).toString()
              : counter.val.toFixed(1);
            el.innerText = `${prefix}${value}${suffix}`;
          }
        },
      });
    },
    { scope: ref, dependencies: [end] }
  );

  if (!isPureNumber) {
    return (
      <span ref={ref} className={className}>
        {prefix}
        {end}
        {suffix}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
