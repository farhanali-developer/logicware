"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap";
import Logo from "@/components/ui/Logo";

const SERVICE_LINKS = [
  { label: "Insurance Verification", href: "/services#insurance-verification" },
  { label: "Claim Submission", href: "/services#claim-submission" },
  { label: "Payment Posting", href: "/services#payment-posting" },
  { label: "Denial Management", href: "/services#denial-management" },
  { label: "Monthly Reporting", href: "/services#monthly-reporting" },
  { label: "Provider Credentialing", href: "/services#provider-credentialing" },
];

const COMPANY_LINKS = [
  { label: "About Logicware", href: "/about" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Careers", href: "/careers" },
  { label: "Blogs", href: "/blogs" },
  { label: "Free Billing Audit", href: "/contact" },
  { label: "Contact Us", href: "/contact" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "HIPAA / BAA", href: "/hipaa-baa" },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".footer-col", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
      });
    },
    { scope: footerRef }
  );

  return (
    <footer
      ref={footerRef}
      className="bg-[var(--color-bg-footer)] border-t border-[rgba(0,122,255,0.1)]"
    >
      <div className="max-w-[1280px] mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10">
        {/* Brand */}
        <div className="footer-col">
          <div>
            <Logo height={32} />
          </div>
          <p className="text-sm text-[var(--color-text-muted)] mt-3 max-w-[220px] leading-[1.6]">
            Mental health billing specialists. US-registered. HIPAA compliant.
          </p>
          <div className="flex items-center gap-3 mt-4">
            <a
              href="https://x.com/logicwarellc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Logicware on X (Twitter)"
              className="text-[var(--color-text-muted)] hover:text-blue transition-colors duration-200"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.9 2H22l-7.5 8.57L22.5 22h-6.6l-5.18-6.78L4.7 22H1.6l8.1-9.27L1 2h6.6l4.7 6.18L18.9 2Zm-2.32 18h1.83L7.5 4H5.56l11.02 16Z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/company/logicwarellc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Logicware on LinkedIn"
              className="text-[var(--color-text-muted)] hover:text-blue transition-colors duration-200"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
              </svg>
            </a>
            <a
              href="https://facebook.com/logicwarellc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Logicware on Facebook"
              className="text-[var(--color-text-muted)] hover:text-blue transition-colors duration-200"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.16 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.51 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.91h-2.33V22c4.78-.78 8.44-4.94 8.44-9.94Z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/logicwarellc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Logicware on Instagram"
              className="text-[var(--color-text-muted)] hover:text-blue transition-colors duration-200"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h3 className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-semibold mb-4">
            Services
          </h3>
          <ul className="space-y-2">
            {SERVICE_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div className="footer-col">
          <h3 className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-semibold mb-4">
            Company
          </h3>
          <ul className="space-y-2">
            {COMPANY_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div className="footer-col">
          <h3 className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-semibold mb-4">
            Legal
          </h3>
          <ul className="space-y-2">
            {LEGAL_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h3 className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-semibold mb-4">
            Get In Touch
          </h3>
          <p className="text-sm text-[var(--color-text-secondary)]">contact@logicware.tech</p>
          <p className="text-sm text-[var(--color-text-secondary)] mt-1">US: +1 (302) 000-0000</p>

          <div className="mt-4">
            <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-widest mb-1">
              USA Office
            </p>
            <p className="text-xs text-[var(--color-text-secondary)] leading-[1.6]">
              1007 N Orange St. 4th Floor, 4682,
              <br />
              Wilmington, DE 19801, New Castle, US
            </p>
          </div>

          <div className="mt-3">
            <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-widest mb-1">
              Pakistan Office
            </p>
            <p className="text-xs text-[var(--color-text-secondary)] leading-[1.6]">
              Karachi, Pakistan
            </p>
          </div>

          <span className="inline-flex items-center rounded-full px-3 py-1 text-xs text-blue-400 bg-[rgba(0,122,255,0.08)] border border-[rgba(0,122,255,0.2)] mt-3">
            Delaware LLC · HIPAA Compliant
          </span>
          <p className="text-xs text-[var(--color-text-muted)] mt-2">
            Serving US clients across all time zones.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1280px] mx-auto px-6 py-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-xs text-[var(--color-text-muted)]">
          © {new Date().getFullYear()} Logicware LLC. All rights reserved. Delaware, USA.
        </p>
        <p className="text-xs text-[var(--color-text-muted)]">
          Built with precision for healthcare providers.
        </p>
      </div>
    </footer>
  );
}
