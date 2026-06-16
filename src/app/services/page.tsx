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

const SERVICES = [
  {
    id: "insurance-verification",
    number: "01",
    title: "Insurance Verification",
    tagline: "Know the coverage before the first session.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="m9 15 2 2 4-4" />
      </svg>
    ),
    body: "Before a new patient ever sits down for their first appointment, we verify their insurance benefits — in-network and out-of-network — so you and your client know exactly what to expect financially. No surprise bills, no awkward conversations after the fact.",
    included: [
      "Real-time eligibility and benefits checks for every new patient",
      "Out-of-network reimbursement rate and deductible breakdowns",
      "Copay, coinsurance, and session-limit verification",
      "Prior authorization requirement flags before treatment begins",
      "Periodic re-verification for long-term, active clients",
    ],
    stat: { value: "< 24hrs", label: "Verification turnaround for new patients" },
  },
  {
    id: "claim-submission",
    number: "02",
    title: "Claim Submission",
    tagline: "Clean claims, submitted daily, without the backlog.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="m22 2-7 20-4-9-9-4Z" />
        <path d="M22 2 11 13" />
      </svg>
    ),
    body: "Claims go out every business day via electronic clearinghouse using the CMS-1500 format. Sessions logged by end of business are typically submitted same-day. Every claim is scrubbed for coding and formatting errors before it ever reaches a payer.",
    included: [
      "Daily electronic batch submission through clearinghouse",
      "Automated claim scrubbing for CPT, ICD-10, and modifier errors",
      "Same-day submission for sessions logged by EOD",
      "Clearinghouse rejection monitoring and same-day correction",
      "Claim status tracking from submission to adjudication",
    ],
    stat: { value: "95%+", label: "First-pass clean claim acceptance rate" },
  },
  {
    id: "payment-posting",
    number: "03",
    title: "Payment Posting",
    tagline: "Every payment reconciled, every shortfall flagged.",
    icon: (
      <svg {...ICON_PROPS}>
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    body: "We record every EOB and ERA payment against the original claim, reconcile it against your contracted rates, and flag underpayments the moment they happen — so revenue you're owed never quietly slips through the cracks.",
    included: [
      "Daily ERA/EOB payment posting against open claims",
      "Contractual adjustment verification against payer fee schedules",
      "Automatic underpayment and short-pay flagging",
      "Patient responsibility (copay/coinsurance) calculation and tracking",
      "Real-time accounts receivable balance for your practice",
    ],
    stat: { value: "Daily", label: "Payment reconciliation cadence" },
  },
  {
    id: "denial-management",
    number: "04",
    title: "Denial Management",
    tagline: "Denials get fixed and resubmitted — fast.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
        <path d="M21 3v5h-5" />
        <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
        <path d="M3 21v-5h5" />
      </svg>
    ),
    body: "Denied and rejected claims are reviewed daily, the root cause is identified, and the claim is corrected and resubmitted within the payer's filing deadline. When a denial warrants a formal appeal, we handle the letter, documentation, and follow-up calls.",
    included: [
      "Daily denial and rejection queue review",
      "Root-cause categorization (eligibility, coding, auth, timely filing, etc.)",
      "Corrected claim resubmission within payer deadlines",
      "Formal written appeals with supporting documentation",
      "Denial trend reporting so issues don't repeat",
    ],
    stat: { value: "< 4%", label: "Average denial rate across our caseload" },
  },
  {
    id: "monthly-reporting",
    number: "05",
    title: "Monthly Reporting",
    tagline: "Full financial visibility, every single month.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <line x1="8" y1="13" x2="16" y2="13" />
        <line x1="8" y1="17" x2="16" y2="17" />
      </svg>
    ),
    body: "Every month you receive a clear, easy-to-read PDF report covering claims submitted, amounts collected, denial rates, AR aging, and revenue recovered through appeals — so you always know exactly where your practice stands financially.",
    included: [
      "Monthly revenue summary and collections breakdown",
      "Claims submitted vs. claims paid comparison",
      "Denial rate trends with category breakdowns",
      "Accounts receivable aging buckets (30/60/90+ days)",
      "Payer mix analysis and actionable recommendations",
    ],
    stat: { value: "Monthly", label: "Detailed PDF reports delivered" },
  },
  {
    id: "provider-credentialing",
    number: "06",
    title: "Provider Credentialing",
    tagline: "Get on insurance panels without the paperwork headache.",
    icon: (
      <svg {...ICON_PROPS}>
        <circle cx="12" cy="8" r="6" />
        <path d="M15.5 13.5 17 22l-5-3-5 3 1.5-8.5" />
      </svg>
    ),
    body: "Credentialing with insurance panels is slow, repetitive, and full of follow-up calls. We manage your CAQH profile, submit and track panel applications, and follow up with payers on your behalf — all for a transparent flat fee per payer, with no surprise charges.",
    included: [
      "CAQH profile setup, maintenance, and attestation reminders",
      "Insurance panel application submission and tracking",
      "Proactive follow-up with payers until approval",
      "Re-credentialing reminders so you never lapse out-of-network",
      "Transparent flat fee per payer — no hourly billing",
    ],
    stat: { value: "Flat Fee", label: "Per-payer credentialing pricing" },
  },
];

export default function ServicesPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      pageRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power1.out" }
    );

    gsap.fromTo(
      ".service-detail",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.05,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".service-detail",
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <div ref={pageRef}>
      <Navbar />
      <PageBanner
          badge="What We Do"
          title="End-to-End Mental Health Billing"
          subtitle="From the moment a patient books their first session to the moment revenue lands in your account, we manage every step of the billing cycle — so you can focus on care, not claims."
          iconPath="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm-2 13H8m6-4H8M14 2v6h6"
        />
      <main className="bg-[var(--color-bg)] min-h-screen">

        {/* Service details */}
        <section className="px-6 pb-32">
          <div className="max-w-[1100px] mx-auto flex flex-col gap-10">
            {SERVICES.map((service, i) => (
              <div
                key={service.id}
                id={service.id}
                className="service-detail rounded-[24px] p-8 sm:p-12 bg-[var(--color-surface)] border border-[rgba(0,122,255,0.12)] scroll-mt-28"
              >
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 items-start">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-[52px] h-[52px] rounded-[12px] bg-[rgba(0,122,255,0.1)] flex items-center justify-center flex-shrink-0">
                        <span className="w-7 h-7 text-blue [&>svg]:w-full [&>svg]:h-full">
                          {service.icon}
                        </span>
                      </div>
                      <div>
                        <span className="text-blue text-[11px] font-semibold tracking-widest">
                          SERVICE {service.number}
                        </span>
                        <h2 className="text-[var(--color-text-primary)] font-bold text-2xl sm:text-3xl">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-blue font-medium text-base mb-4">
                      {service.tagline}
                    </p>
                    <p className="text-[var(--color-text-secondary)] text-base leading-[1.8]">
                      {service.body}
                    </p>
                  </div>

                  <div className="rounded-2xl p-6 bg-[var(--color-surface-2)] border border-[rgba(0,122,255,0.15)]">
                    <h3 className="text-[var(--color-text-primary)] font-semibold text-sm uppercase tracking-widest mb-4">
                      What&apos;s Included
                    </h3>
                    <ul className="flex flex-col gap-3 mb-6">
                      {service.included.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-[var(--color-text-secondary)] leading-[1.6]">
                          <span className="text-blue mt-0.5 flex-shrink-0">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-5 border-t border-[var(--color-border)]">
                      <div className="text-blue font-bold text-2xl">{service.stat.value}</div>
                      <div className="text-[var(--color-text-muted)] text-xs mt-1">{service.stat.label}</div>
                    </div>
                  </div>
                </div>

                {i < SERVICES.length - 1 && (
                  <div className="mt-10 h-px bg-[var(--color-border)]" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="px-6 pb-32">
          <div
            className="max-w-[1100px] mx-auto rounded-[24px] px-10 py-12 border border-[rgba(0,122,255,0.2)] text-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,122,255,0.1) 0%, rgba(0,122,255,0.05) 100%)",
            }}
          >
            <h2 className="text-[var(--color-text-primary)] font-bold text-2xl sm:text-3xl mb-3">
              Not sure which services you need?
            </h2>
            <p className="text-[var(--color-text-secondary)] text-base leading-[1.7] max-w-[560px] mx-auto mb-8">
              Start with a free billing audit. We&apos;ll review your current
              setup and tell you exactly where Logicware can help.
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
