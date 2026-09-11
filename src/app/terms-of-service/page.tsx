"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageBanner from "@/components/ui/PageBanner";

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    body: "By accessing or using the Logicware LLC website (logicware.tech) or any of our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services. These terms apply to all visitors, clients, and others who access or use the site.",
  },
  {
    title: "2. Description of Services",
    body: "Logicware LLC provides dental billing, revenue cycle management, provider credentialing, insurance verification, and related administrative services to dental practices and providers. The specific scope of services provided to each client is governed by the individual service agreement between Logicware LLC and that client.",
  },
  {
    title: "3. Client Responsibilities",
    body: "Clients are responsible for providing accurate and complete information necessary for billing and credentialing services, including correct patient demographics, insurance information, provider credentials, and clinical documentation. Clients are also responsible for maintaining valid licensure, malpractice coverage, and any credentialing requirements applicable to their practice.",
  },
  {
    title: "4. Intellectual Property",
    body: "All content on this website, including text, graphics, logos, and software, is the property of Logicware LLC or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our express written permission.",
  },
  {
    title: "5. Confidentiality",
    body: "Logicware LLC treats all client practice information and patient data with strict confidentiality. For clients who have executed a Business Associate Agreement (BAA) with us, Protected Health Information (PHI) is handled in accordance with HIPAA requirements. Client business information is not shared with third parties except as necessary to perform contracted services or as required by law.",
  },
  {
    title: "6. Payment Terms",
    body: "Fees for Logicware LLC services are set forth in the applicable service agreement. Invoices are due and payable according to the payment schedule specified in that agreement. Logicware LLC reserves the right to suspend services for accounts that are past due by more than 30 days, with written notice provided to the client.",
  },
  {
    title: "7. Limitation of Liability",
    body: "Logicware LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services or website, including but not limited to lost revenue resulting from insurance claim denials, credentialing delays outside our control, or third-party payer decisions. Our total liability for any claim shall not exceed the fees paid by the client in the three months preceding the claim.",
  },
  {
    title: "8. Disclaimer of Warranties",
    body: "Our services are provided on an \"as is\" basis. Logicware LLC does not warrant that claim submission will result in payment from any particular payer, that credentialing applications will be approved by any specific panel, or that our services will be uninterrupted. Insurance payer decisions are outside our control.",
  },
  {
    title: "9. Governing Law",
    body: "These Terms of Service are governed by the laws of the State of Delaware, without regard to conflict of law principles. Any dispute arising under these terms shall be resolved in the courts located in New Castle County, Delaware, and both parties consent to personal jurisdiction in that venue.",
  },
  {
    title: "10. Changes to These Terms",
    body: "Logicware LLC reserves the right to update these Terms of Service at any time. Material changes will be communicated to active clients by email or posted on this page with an updated effective date. Continued use of our services after changes constitutes acceptance of the revised terms.",
  },
  {
    title: "11. Contact",
    body: "If you have questions about these Terms of Service, contact us at contact@logicware.tech or by mail at: Logicware LLC, 1007 N Orange St. 4th Floor, 4682, Wilmington, DE 19801.",
  },
];

export default function TermsOfServicePage() {
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
        title="Terms of Service"
        subtitle="Effective January 1, 2026 · Last updated June 1, 2026"
        iconPath="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
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
