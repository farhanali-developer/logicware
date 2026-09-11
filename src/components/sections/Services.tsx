"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import ServiceCard from "@/components/ui/ServiceCard";

const ICON_PROPS = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const SERVICES = [
  {
    number: "01",
    anchor: "insurance-verification",
    title: "Insurance Verification",
    body: "We verify every new patient's out-of-network benefits before their first appointment, eliminating billing surprises and improving show-up rates.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="m9 15 2 2 4-4" />
      </svg>
    ),
  },
  {
    number: "02",
    anchor: "claim-submission",
    title: "Claim Submission",
    body: "Daily electronic claim submission via clearinghouse using the ADA Dental Claim Form. We submit same-day for appointments logged by end of business.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="m22 2-7 20-4-9-9-4Z" />
        <path d="M22 2 11 13" />
      </svg>
    ),
  },
  {
    number: "03",
    anchor: "payment-posting",
    title: "Payment Posting",
    body: "We record all EOB payments, identify underpayments, and maintain an accurate real-time accounts receivable balance for your practice.",
    icon: (
      <svg {...ICON_PROPS}>
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    number: "04",
    anchor: "denial-management",
    title: "Denial Management",
    body: "Denied claims are identified, corrected, and resubmitted within payer deadlines, recovering revenue that would otherwise be written off.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
        <path d="M21 3v5h-5" />
        <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
        <path d="M3 21v-5h5" />
      </svg>
    ),
  },
  {
    number: "05",
    anchor: "monthly-reporting",
    title: "Monthly Reporting",
    body: "Clear monthly PDF reports: claims submitted, amount collected, denial rate, AR aging, and recovered revenue. Full financial visibility.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <line x1="8" y1="13" x2="16" y2="13" />
        <line x1="8" y1="17" x2="16" y2="17" />
      </svg>
    ),
  },
  {
    number: "06",
    anchor: "provider-credentialing",
    title: "Provider Credentialing",
    body: "We enroll your practice with insurance panels and manage the credentialing process, charged as a transparent flat fee per payer.",
    icon: (
      <svg {...ICON_PROPS}>
        <circle cx="12" cy="8" r="6" />
        <path d="M15.5 13.5 17 22l-5-3-5 3 1.5-8.5" />
      </svg>
    ),
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".services-header > *", {
        y: 24,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".services-header",
          start: "top 80%",
        },
      });

      gsap.fromTo(
        ".service-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".services-grid",
            start: "top 85%",
          },
        }
      );

      gsap.from(".services-banner", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".services-banner",
          start: "top 90%",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative bg-[var(--color-bg)] py-32 border-t border-[rgba(0,122,255,0.1)]"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="services-header flex flex-col items-center text-center mb-16">
          <span className="text-xs font-medium tracking-widest uppercase text-blue mb-4">
            What We Do
          </span>
          <h2
            className="text-[var(--color-text-primary)] font-bold text-center mb-4"
            style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}
          >
            End-to-End Dental Billing
          </h2>
          <p className="text-[var(--color-text-secondary)] text-center max-w-[560px]">
            Specialized billing services for solo dentists, specialists,
            and dental practices.
          </p>
        </div>

        <div className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <ServiceCard key={service.number} {...service} href={`/services/${service.anchor}`} />
          ))}
        </div>

        <div
          className="services-banner mt-16 rounded-xl px-10 py-6 border border-[rgba(0,122,255,0.2)] text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,122,255,0.1) 0%, rgba(0,122,255,0.05) 100%)",
          }}
        >
          <p className="text-sm text-[var(--color-text-secondary)]">
            Specializing in: D0120 · D0150 · D1110 · D2140 · D2740 · D4341
          </p>
          <p className="text-xs text-blue mt-2">
            The core CDT codes for dental billing. We know them inside out.
          </p>
        </div>
      </div>

      {/* Section transition gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-gradient-to-b from-transparent to-[var(--color-bg)] pointer-events-none" />
    </section>
  );
}
