"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import PageBanner from "@/components/ui/PageBanner";

const VALUES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3Z" />
      </svg>
    ),
    title: "HIPAA Compliant by Default",
    body: "Every workflow, tool, and communication channel we use is HIPAA-compliant. We sign a BAA with every practice before handling a single patient record.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
    title: "Daily, Not Batched",
    body: "Claims go out every business day. Payments are posted every business day. Your accounts receivable moves continuously, not in monthly catch-up sprints.",
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
    title: "Radically Transparent",
    body: "No black boxes. You get monthly reports showing exactly what was billed, collected, denied, and recovered — in plain language, not billing jargon.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12l2.5 2.5L16 9" />
      </svg>
    ),
    title: "Specialists, Not Generalists",
    body: "We focus exclusively on mental and behavioral health billing — CPT codes 90791, 90834, 90837, 90847, 90853, and the payer quirks that come with them.",
  },
];

const PROOF_POINTS = [
  { end: 7, suffix: "+ Years", label: "Healthcare Admin Experience" },
  { end: 500, suffix: "+", label: "Claims Processed Monthly" },
  { end: 95, suffix: "%+", label: "Clean Claim Rate" },
  { end: 2, prefix: "$", suffix: "M+", label: "Revenue Recovered for Clients" },
];

export default function AboutPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      pageRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power1.out" }
    );

    gsap.fromTo(
      ".value-card",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".values-grid",
          start: "top 85%",
        },
      }
    );

    gsap.fromTo(
      ".proof-point",
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".proof-grid",
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <div ref={pageRef}>
      <Navbar />
      <PageBanner
          badge="About Logicware"
          title="A Billing Partner You Can Trust"
          subtitle="Logicware LLC is a US-registered medical billing company built by a team with deep expertise in mental health revenue cycle management — so solo therapists and small practices never have to think about claims again."
          iconPath="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3Z"
        />
      <main className="bg-[var(--color-bg)] min-h-screen">

        {/* Story */}
        <section className="px-6 pb-20">
          <div className="max-w-[800px] mx-auto flex flex-col gap-5">
            <h2 className="text-[var(--color-text-primary)] font-bold text-2xl sm:text-3xl mb-2">
              Our Story
            </h2>
            <p className="text-[var(--color-text-secondary)] text-base leading-[1.8]">
              Logicware was founded after years of watching talented
              therapists, counselors, and psychologists lose hours every week
              — and thousands of dollars every year — to billing they never
              wanted to learn in the first place. Insurance portals, denial
              codes, and AR aging reports aren&apos;t why anyone goes into
              mental health care.
            </p>
            <p className="text-[var(--color-text-secondary)] text-base leading-[1.8]">
              We serve solo LCSWs, licensed counselors, psychologists,
              psychiatrists, and small group practices across the United
              States. From our remote operations hub, our team works US
              business hours to make sure claims are submitted daily, denials
              are resolved quickly, and you receive transparent monthly
              reporting — without the cost and overhead of hiring an in-house
              biller.
            </p>
            <p className="text-[var(--color-text-secondary)] text-base leading-[1.8]">
              Every client starts with a free billing audit. We review your
              last 30 days of claims, identify revenue you&apos;re leaving on
              the table, and show you exactly what working with us would look
              like — before you commit to anything.
            </p>
          </div>
        </section>

        {/* Proof points */}
        <section className="px-6 pb-20">
          <div className="proof-grid max-w-[1100px] mx-auto rounded-[24px] border border-[rgba(0,122,255,0.15)] bg-[var(--color-surface)] px-8 py-10 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {PROOF_POINTS.map((p) => (
              <div key={p.label} className="proof-point flex flex-col items-center text-center">
                <span className="text-[var(--color-text-primary)] font-bold text-[32px]">
                  <AnimatedCounter end={p.end} prefix={p.prefix} suffix={p.suffix} />
                </span>
                <span className="text-[var(--color-text-secondary)] text-sm mt-1">{p.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="px-6 pb-32">
          <div className="max-w-[1100px] mx-auto">
            <h2 className="text-[var(--color-text-primary)] font-bold text-2xl sm:text-3xl mb-8 text-center">
              What We Stand For
            </h2>
            <div className="values-grid grid grid-cols-1 sm:grid-cols-2 gap-6">
              {VALUES.map((value) => (
                <div
                  key={value.title}
                  className="value-card rounded-xl p-7 bg-[var(--color-surface)] border border-[rgba(0,122,255,0.15)] transition-all duration-300 hover:border-[rgba(0,122,255,0.4)] hover:bg-[rgba(0,122,255,0.05)]"
                >
                  <div className="w-7 h-7 text-blue mb-4">{value.icon}</div>
                  <h3 className="text-[var(--color-text-primary)] font-semibold mb-2">{value.title}</h3>
                  <p className="text-[var(--color-text-secondary)] text-sm leading-[1.7]">{value.body}</p>
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
              Let&apos;s see what Logicware can do for your practice.
            </h2>
            <p className="text-[var(--color-text-secondary)] text-base leading-[1.7] max-w-[560px] mx-auto mb-8">
              Start with a free, no-obligation review of your last 30 days of
              billing.
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
