"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageBanner from "@/components/ui/PageBanner";

const ICON_PROPS = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const STEPS = [
  {
    number: "01",
    title: "Free Billing Audit",
    duration: "Day 1–2",
    body: "You tell us about your practice and share your last 30 days of claims. We review your current billing setup, denial patterns, and AR aging — at no cost and with no obligation.",
    icon: (
      <svg {...ICON_PROPS}>
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Onboarding & System Setup",
    duration: "Day 3–5",
    body: "We sign a BAA, connect to your EHR/clearinghouse, and set up secure access to the systems we need — SimplePractice, TherapyNotes, or whatever you already use. No workflow changes on your end.",
    icon: (
      <svg {...ICON_PROPS}>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 9h6v6H9z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Insurance Verification",
    duration: "Ongoing",
    body: "Every new patient's benefits are verified before their first session — in-network and out-of-network coverage, copays, deductibles, and prior authorization requirements.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="m9 15 2 2 4-4" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Daily Claim Submission",
    duration: "Every business day",
    body: "Sessions logged by end of business are scrubbed for errors and submitted electronically the same day via clearinghouse. No batching, no backlogs.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="m22 2-7 20-4-9-9-4Z" />
        <path d="M22 2 11 13" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Payment Posting & Denial Management",
    duration: "Every business day",
    body: "Payments are posted and reconciled daily. Any denial is reviewed, corrected, and resubmitted within the payer's deadline — or appealed if needed.",
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
    number: "06",
    title: "Monthly Reporting & Optimization",
    duration: "Every month",
    body: "You receive a clear PDF report covering collections, denial trends, and AR aging. We use it to flag recurring issues and continuously tighten your revenue cycle.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <line x1="8" y1="13" x2="16" y2="13" />
        <line x1="8" y1="17" x2="16" y2="17" />
      </svg>
    ),
  },
];

const FAQS = [
  {
    q: "Do I need to switch my EHR or billing software?",
    a: "No. We work within your existing EHR or practice management system — SimplePractice, TherapyNotes, and most major platforms are supported.",
  },
  {
    q: "How long does onboarding take?",
    a: "Most practices are fully onboarded within 5 business days of completing the free billing audit.",
  },
  {
    q: "What does the free billing audit actually involve?",
    a: "You share your last 30 days of claims data. We review submission accuracy, denial rates, and AR aging, and send you a short report — whether or not you decide to work with us.",
  },
  {
    q: "Is there a long-term contract?",
    a: "No long-term contracts and no setup fee. You can cancel with 30 days' notice at any time.",
  },
];

export default function HowItWorksPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      pageRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power1.out" }
    );

    gsap.fromTo(
      ".timeline-step",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".timeline",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".faq-item",
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".faq-grid",
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <div ref={pageRef}>
      <Navbar />
      <PageBanner
          badge="How It Works"
          title="From Free Audit to Faster Revenue"
          subtitle="Here's exactly what happens when you start working with Logicware — from your first conversation to ongoing monthly reporting."
          iconPath="M3 3v18h18M7 16l4-8 4 4 4-8"
        />
      <main className="bg-[var(--color-bg)] min-h-screen">

        {/* Timeline */}
        <section className="px-6 pb-32">
          <div className="timeline max-w-[800px] mx-auto relative flex flex-col gap-10">
            <div
              className="absolute left-7 top-7 bottom-7 w-px bg-[rgba(0,122,255,0.15)]"
              aria-hidden="true"
            />
            {STEPS.map((step) => (
              <div key={step.number} className="timeline-step relative flex items-start gap-6">
                <span className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full bg-[var(--color-bg)] border border-[rgba(0,122,255,0.3)] text-blue flex items-center justify-center">
                  <span className="w-6 h-6">{step.icon}</span>
                </span>
                <div className="flex-1 pt-1 rounded-2xl p-6 bg-[var(--color-surface)] border border-[rgba(0,122,255,0.12)]">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-[var(--color-text-primary)] font-semibold text-lg">
                      {step.title}
                    </h3>
                    <span className="text-[10px] font-semibold tracking-widest uppercase text-blue bg-[rgba(0,122,255,0.1)] border border-[rgba(0,122,255,0.25)] rounded-full px-2 py-1">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-[var(--color-text-secondary)] text-sm leading-[1.7]">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="px-6 pb-32">
          <div className="max-w-[800px] mx-auto">
            <h2 className="text-[var(--color-text-primary)] font-bold text-2xl sm:text-3xl mb-8 text-center">
              Common Questions
            </h2>
            <div className="faq-grid flex flex-col gap-4">
              {FAQS.map((faq) => (
                <div
                  key={faq.q}
                  className="faq-item rounded-xl p-6 bg-[var(--color-surface)] border border-[rgba(0,122,255,0.12)]"
                >
                  <h3 className="text-[var(--color-text-primary)] font-semibold mb-2">{faq.q}</h3>
                  <p className="text-[var(--color-text-secondary)] text-sm leading-[1.7]">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 pb-32">
          <div
            className="max-w-[1100px] mx-auto rounded-[24px] px-10 py-12 border border-[rgba(0,122,255,0.2)] text-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,122,255,0.1) 0%, rgba(0,122,255,0.05) 100%)",
            }}
          >
            <h2 className="text-[var(--color-text-primary)] font-bold text-2xl sm:text-3xl mb-3">
              Ready to get started?
            </h2>
            <p className="text-[var(--color-text-secondary)] text-base leading-[1.7] max-w-[560px] mx-auto mb-8">
              Step one is always the same: a free, no-obligation audit of your
              current billing.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue text-white hover:text-white px-8 py-3.5 rounded-full font-semibold text-[15px] transition-all duration-300 hover:bg-blue-dim hover:shadow-[0_0_30px_rgba(0,122,255,0.5)]"
            >
              Get Your Free Billing Audit →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
