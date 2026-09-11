"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageBanner from "@/components/ui/PageBanner";

const SECTIONS = [
  {
    title: "1. Introduction",
    body: "Logicware LLC (\"Logicware\", \"we\", \"us\", or \"our\") provides dental billing and revenue cycle management services to dental practices across the United States. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit our website or engage our services.",
  },
  {
    title: "2. Information We Collect",
    body: "We collect information you provide directly to us, such as your name, email address, phone number, practice details, and information submitted through our contact and billing audit forms. When you engage us as a billing partner, we may also process Protected Health Information (PHI) on behalf of your practice as part of claims submission, payment posting, and reporting.",
  },
  {
    title: "3. How We Use Information",
    body: "We use the information we collect to respond to inquiries, provide and improve our billing services, communicate with you about your account, and comply with legal and regulatory obligations. PHI is used solely to perform the billing functions outlined in our service agreement and Business Associate Agreement (BAA).",
  },
  {
    title: "4. HIPAA & Protected Health Information",
    body: "Logicware is HIPAA-compliant and signs a Business Associate Agreement (BAA) with every practice before handling any patient records. PHI is accessed only by authorized team members on a need-to-know basis, transmitted through encrypted, secure channels, and never used for purposes outside the scope of the billing services we provide.",
  },
  {
    title: "5. Data Security",
    body: "We implement administrative, technical, and physical safeguards designed to protect information against unauthorized access, alteration, disclosure, or destruction. This includes encrypted data transmission, access controls, and regular review of our security practices.",
  },
  {
    title: "6. Cookies & Website Analytics",
    body: "Our website may use cookies and similar technologies to understand how visitors use our site and to improve the user experience. You can disable cookies through your browser settings; doing so may affect certain site functionality.",
  },
  {
    title: "7. Third-Party Services",
    body: "We may use third-party service providers, such as clearinghouses, practice management platforms, and communication tools, to deliver our services. These providers are contractually obligated to maintain the confidentiality and security of any information they handle on our behalf.",
  },
  {
    title: "8. Your Rights",
    body: "You may request access to, correction of, or deletion of the personal information we hold about you, subject to our legal and contractual recordkeeping obligations. To make a request, contact us using the details below.",
  },
  {
    title: "9. Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. Material changes will be reflected by updating the \"last updated\" date at the top of this page. Continued use of our website or services after changes constitutes acceptance of the revised policy.",
  },
  {
    title: "10. Contact Us",
    body: "If you have questions about this Privacy Policy or how we handle your information, contact us at contact@logicware.tech.",
  },
];

export default function PrivacyPolicyPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      pageRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power1.out" }
    );
  }, []);

  return (
    <div ref={pageRef}>
      <Navbar />
      <PageBanner
          badge="Legal"
          title="Privacy Policy"
          subtitle="Last updated: January 1, 2026"
          iconPath="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3zm0 5v8m-3-4h6"
        />
      <main className="bg-[var(--color-bg)] min-h-screen">

        <section className="px-6 pb-32">
          <div className="max-w-[800px] mx-auto flex flex-col gap-6">
            {SECTIONS.map((section) => (
              <div
                key={section.title}
                className="rounded-2xl p-7 bg-[var(--color-surface)] border border-[rgba(0,122,255,0.12)]"
              >
                <h2 className="text-[var(--color-text-primary)] font-semibold text-lg mb-3">
                  {section.title}
                </h2>
                <p className="text-[var(--color-text-secondary)] text-sm leading-[1.8]">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
