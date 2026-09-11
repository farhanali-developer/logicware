"use client";

import { useRef } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { gsap, useGSAP } from "@/lib/gsap";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageBanner from "@/components/ui/PageBanner";
import { SERVICES, getServiceBySlug } from "@/lib/services";

export default function ServiceDetailPage() {
  const params = useParams<{ slug: string }>();
  const service = getServiceBySlug(params.slug);
  const pageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      pageRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power1.out" }
    );
  }, []);

  if (!service) {
    return (
      <div ref={pageRef}>
        <Navbar />
        <main className="bg-[var(--color-bg)] min-h-screen">
          <section className="pt-48 pb-32 px-6 text-center">
            <h1 className="text-[var(--color-text-primary)] font-bold text-3xl mb-4">
              Service not found
            </h1>
            <p className="text-[var(--color-text-secondary)] mb-8">
              This page may have moved. Take a look at everything we offer instead.
            </p>
            <Link
              href="/services"
              className="inline-block bg-blue text-[var(--color-text-primary)] px-8 py-3.5 rounded-full font-semibold text-[15px] transition-all duration-300 hover:bg-blue-dim"
            >
              View All Services
            </Link>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  const otherServices = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <div ref={pageRef}>
      <Navbar />
      <PageBanner
        badge={`Service ${service.number}`}
        title={service.title}
        subtitle={service.tagline}
      />
      <main className="bg-[var(--color-bg)] min-h-screen">
        {/* Back link */}
        <section className="px-6 pt-8 pb-2">
          <div className="max-w-[900px] mx-auto">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)] hover:text-blue transition-colors duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              All services
            </Link>
          </div>
        </section>

        {/* Overview + included */}
        <section className="px-6 pb-16">
          <div className="max-w-[900px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 items-start">
            <div>
              <div className="w-[52px] h-[52px] rounded-[12px] bg-[rgba(0,122,255,0.1)] flex items-center justify-center mb-6">
                <span className="w-7 h-7 text-blue [&>svg]:w-full [&>svg]:h-full">
                  {service.icon}
                </span>
              </div>
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
        </section>

        {/* Process */}
        <section className="px-6 pb-16">
          <div className="max-w-[900px] mx-auto">
            <h2 className="text-[var(--color-text-primary)] font-bold text-xl sm:text-2xl mb-6">
              How It Works
            </h2>
            <div className="relative flex flex-col gap-6">
              <div
                className="absolute left-5 top-5 bottom-5 w-px bg-[rgba(0,122,255,0.15)]"
                aria-hidden="true"
              />
              {service.process.map((step, i) => (
                <div key={step.title} className="relative flex items-start gap-5">
                  <span className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-[var(--color-bg)] border border-[rgba(0,122,255,0.3)] text-blue text-sm font-semibold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <div className="pt-1.5 flex-1 rounded-xl p-5 bg-[var(--color-surface)] border border-[rgba(0,122,255,0.12)]">
                    <p className="text-[var(--color-text-primary)] font-semibold text-sm mb-1">{step.title}</p>
                    <p className="text-[var(--color-text-secondary)] text-sm leading-[1.7]">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="px-6 pb-16">
          <div className="max-w-[900px] mx-auto">
            <h2 className="text-[var(--color-text-primary)] font-bold text-xl sm:text-2xl mb-6">
              Common Questions
            </h2>
            <div className="flex flex-col gap-4">
              {service.faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-xl p-6 bg-[var(--color-surface)] border border-[rgba(0,122,255,0.12)]"
                >
                  <h3 className="text-[var(--color-text-primary)] font-semibold mb-2">{faq.q}</h3>
                  <p className="text-[var(--color-text-secondary)] text-sm leading-[1.7]">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 pb-24">
          <div
            className="max-w-[900px] mx-auto rounded-[24px] px-8 py-10 border border-[rgba(0,122,255,0.2)] text-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,122,255,0.1) 0%, rgba(0,122,255,0.05) 100%)",
            }}
          >
            <h2 className="text-[var(--color-text-primary)] font-bold text-xl sm:text-2xl mb-3">
              Want this handled for you?
            </h2>
            <p className="text-[var(--color-text-secondary)] text-sm leading-[1.7] max-w-[480px] mx-auto mb-6">
              Start with a free billing audit and we&apos;ll show you exactly
              where {service.title.toLowerCase()} fits into your practice.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue text-white hover:text-white px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:bg-blue-dim hover:shadow-[0_0_30px_rgba(0,122,255,0.5)]"
            >
              Get Your Free Billing Audit →
            </Link>
          </div>
        </section>

        {/* Other services */}
        <section className="px-6 pb-32">
          <div className="max-w-[1100px] mx-auto">
            <h2 className="text-[var(--color-text-primary)] font-bold text-2xl mb-6 text-center">
              Explore Other Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {otherServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="flex items-center justify-between rounded-xl p-5 bg-[var(--color-surface)] border border-[rgba(0,122,255,0.12)] transition-all duration-300 hover:border-[rgba(0,122,255,0.4)] hover:bg-[rgba(0,122,255,0.05)]"
                >
                  <div>
                    <p className="text-[var(--color-text-primary)] font-semibold">{s.title}</p>
                    <p className="text-xs text-[var(--color-text-muted)] mt-1">{s.tagline}</p>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue flex-shrink-0">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
