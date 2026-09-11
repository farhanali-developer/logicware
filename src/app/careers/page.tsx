"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageBanner from "@/components/ui/PageBanner";
import { JOBS } from "@/lib/jobs";

const ICON_PROPS = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const PERKS = [
  {
    title: "Two Offices, One Team",
    body: "Our Karachi office handles billing operations day-to-day, working closely with our US-based sales and client success team.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M3 21h18" />
        <path d="M5 21V7l8-4v18" />
        <path d="M19 21V11l-6-4" />
      </svg>
    ),
  },
  {
    title: "Growth-Focused",
    body: "We're a small, growing team. Your work has visible impact and your role grows with the company.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-4 4" />
      </svg>
    ),
  },
  {
    title: "Healthcare-Focused Mission",
    body: "Help dental providers get paid fairly and on time, so they can focus on patient care.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3Z" />
      </svg>
    ),
  },
];

export default function CareersPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      pageRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power1.out" }
    );

    gsap.fromTo(
      ".perk-card",
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".perks-grid",
          start: "top 85%",
        },
      }
    );

    gsap.fromTo(
      ".job-card",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".jobs-list",
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <div ref={pageRef}>
      <Navbar />
      <PageBanner
          badge="Careers"
          title="Help Us Fix Dental Billing"
          subtitle="Logicware operates from two offices, Wilmington, Delaware and Karachi, Pakistan, bringing together US-based sales and client success with a dedicated billing operations team."
          iconPath="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM12 12h.01M8 12h.01M16 12h.01"
        />
      <main className="bg-[var(--color-bg)] min-h-screen">

        {/* Perks */}
        <section className="px-6 pb-20">
          <div className="perks-grid max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
            {PERKS.map((perk) => (
              <div
                key={perk.title}
                className="perk-card rounded-xl p-7 bg-[var(--color-surface)] border border-[rgba(0,122,255,0.15)]"
              >
                <div className="w-7 h-7 text-blue mb-4">{perk.icon}</div>
                <h3 className="text-[var(--color-text-primary)] font-semibold mb-2">{perk.title}</h3>
                <p className="text-[var(--color-text-secondary)] text-sm leading-[1.7]">{perk.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Open roles */}
        <section className="px-6 pb-32">
          <div className="max-w-[800px] mx-auto">
            <h2 className="text-[var(--color-text-primary)] font-bold text-2xl sm:text-3xl mb-8 text-center">
              Open Roles
            </h2>
            <div className="jobs-list flex flex-col gap-5">
              {JOBS.map((job) => (
                <Link
                  key={job.slug}
                  href={`/careers/${job.slug}`}
                  className="job-card block rounded-2xl p-7 bg-[var(--color-surface)] border border-[rgba(0,122,255,0.12)] transition-all duration-300 hover:border-[rgba(0,122,255,0.4)] hover:bg-[rgba(0,122,255,0.05)]"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <h3 className="text-[var(--color-text-primary)] font-semibold text-lg">
                      {job.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-semibold tracking-widest uppercase text-blue bg-[rgba(0,122,255,0.1)] border border-[rgba(0,122,255,0.25)] rounded-full px-2 py-1">
                        {job.type}
                      </span>
                      <span className="text-[10px] font-semibold tracking-widest uppercase text-[var(--color-text-muted)] bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-full px-2 py-1">
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <p className="text-[var(--color-text-secondary)] text-sm leading-[1.7] mb-4">
                    {job.summary}
                  </p>
                  <span className="inline-flex items-center gap-1 text-blue text-sm font-medium">
                    View role & apply
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
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
              Don&apos;t see the right role?
            </h2>
            <p className="text-[var(--color-text-secondary)] text-base leading-[1.7] max-w-[560px] mx-auto mb-8">
              We&apos;re always open to hearing from talented people in
              medical billing, sales, and client support. Reach out and tell
              us how you can help.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue text-white hover:text-white px-8 py-3.5 rounded-full font-semibold text-[15px] transition-all duration-300 hover:bg-blue-dim hover:shadow-[0_0_30px_rgba(0,122,255,0.5)]"
            >
              Get in Touch →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
