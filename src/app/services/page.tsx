"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageBanner from "@/components/ui/PageBanner";
import ServiceCard from "@/components/ui/ServiceCard";
import { SERVICES } from "@/lib/services";

export default function ServicesPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      pageRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power1.out" }
    );

    gsap.fromTo(
      ".service-card",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".services-grid",
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
          title="End-to-End Dental Billing"
          subtitle="From the moment a patient books their first appointment to the moment revenue lands in your account, we manage every step of the billing cycle so you can focus on care, not claims."
          iconPath="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm-2 13H8m6-4H8M14 2v6h6"
        />
      <main className="bg-[var(--color-bg)] min-h-screen">

        {/* Services grid */}
        <section className="px-6 pb-24">
          <div className="services-grid max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.slug}
                number={service.number}
                icon={service.icon}
                title={service.title}
                body={service.summary}
                href={`/services/${service.slug}`}
              />
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
