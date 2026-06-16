"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageBanner from "@/components/ui/PageBanner";

const SECTIONS = [
  {
    title: "What Is HIPAA and Why It Matters for Billing",
    body: "The Health Insurance Portability and Accountability Act (HIPAA) establishes federal standards for protecting sensitive patient health information. When a therapist or mental health practice engages an outside billing company, that company becomes a Business Associate under HIPAA — a third party that creates, receives, maintains, or transmits Protected Health Information (PHI) on behalf of a covered entity. HIPAA requires that a formal written agreement — the Business Associate Agreement (BAA) — be in place before any PHI changes hands. Engaging a billing partner without a signed BAA is a HIPAA violation, regardless of how secure that partner's practices are.",
  },
  {
    title: "What Our BAA Covers",
    body: "Logicware LLC signs a Business Associate Agreement with every practice before accessing any patient records or beginning claims work. Our BAA specifies: the permitted uses of PHI (limited to the billing, credentialing, and revenue cycle services outlined in your service agreement); our obligation to implement appropriate safeguards; our duty to report any breach or security incident to you without unreasonable delay; the process for returning or destroying PHI upon termination of the agreement; and our obligation to ensure that any subcontractors we use also sign BAAs. You will receive a signed copy of the BAA before your onboarding is complete.",
  },
  {
    title: "How We Protect Protected Health Information",
    body: "Logicware LLC implements the administrative, technical, and physical safeguards required by the HIPAA Security Rule for all electronic PHI (ePHI) we handle on your behalf. This includes access controls limiting PHI access to authorized billing staff assigned to your account; encrypted data transmission for all ePHI sent between our systems and yours, payer clearinghouses, and insurance portals; audit logging of ePHI access and activity; and a documented incident response procedure for detecting, reporting, and mitigating any security event. We do not transmit PHI via standard email. All patient data is handled through HIPAA-compliant channels.",
  },
  {
    title: "Minimum Necessary Standard",
    body: "Under HIPAA's Minimum Necessary standard, covered entities and their business associates may use or disclose only the PHI needed to accomplish the intended purpose. In practice, this means Logicware LLC requests only the patient information required to submit claims, post payments, and manage denials — not entire medical records. Our staff access is scoped to the specific accounts and functions each team member handles.",
  },
  {
    title: "Breach Notification",
    body: "If Logicware LLC discovers a breach of unsecured PHI, we are required to notify you without unreasonable delay and in no case more than 60 days after discovery. Our notification will include the nature of the breach, the PHI involved, the individuals affected, what we are doing to investigate and mitigate the breach, and steps you can take. We maintain a documented breach assessment and notification procedure, and all staff are trained on breach identification and reporting obligations.",
  },
  {
    title: "Your Responsibilities as a Covered Entity",
    body: "As a mental health provider, you are a HIPAA covered entity and are responsible for your own compliance obligations independent of our BAA. This includes your own Notice of Privacy Practices for patients, maintaining the security of PHI within your own systems and practice, ensuring that any other business associates you engage (EHRs, clearinghouses, practice management tools) have signed BAAs with you, and training your staff on HIPAA requirements applicable to your practice.",
  },
  {
    title: "Subcontractors and Downstream BAAs",
    body: "Logicware LLC may use clearinghouses, secure transmission services, and other vendors to perform specific functions within the billing workflow. Any subcontractor that handles PHI on our behalf is required to sign a BAA with Logicware LLC before accessing any patient data. We vet these vendors for HIPAA compliance and do not engage subcontractors who cannot demonstrate appropriate security practices.",
  },
  {
    title: "Requesting a Copy of Our BAA",
    body: "If you are evaluating Logicware LLC as a billing partner and would like to review our BAA template before signing a service agreement, we are happy to provide it. Contact us at contact@logicware.tech and reference \"BAA review\" in your message. We can typically provide the document within one business day.",
  },
];

export default function HipaaBaaPage() {
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
        badge="Compliance"
        title="HIPAA Compliance & BAA"
        subtitle="How Logicware protects your patients' data and what our Business Associate Agreement covers"
        iconPath="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
      <main className="bg-[var(--color-bg)] min-h-screen">
        <section className="px-6 pb-16">
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

        {/* CTA */}
        <section className="px-6 pb-32">
          <div
            className="max-w-[800px] mx-auto rounded-[24px] px-8 py-10 border border-[rgba(0,122,255,0.2)] text-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,122,255,0.06) 0%, rgba(0,122,255,0.02) 100%)",
            }}
          >
            <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">
              Ready to review our BAA?
            </h2>
            <p className="text-sm text-[var(--color-text-secondary)] max-w-md mx-auto mb-6">
              We provide our BAA template to all prospective clients before onboarding. Contact us and we will send it within one business day.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue text-white px-7 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Request BAA
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
