"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageBanner from "@/components/ui/PageBanner";

const SECTIONS = [
  {
    title: "1. What Are Cookies?",
    body: "Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work efficiently, to remember your preferences, and to provide information to site owners about how the site is used. Cookies cannot run programs or deliver viruses to your device. They are uniquely assigned to your browser and can only be read by the web server that issued them.",
  },
  {
    title: "2. How We Use Cookies",
    body: "Logicware LLC uses cookies and similar tracking technologies on our website (logicware.tech) to understand how visitors interact with our content, to improve site performance, and to measure the effectiveness of our marketing. We do not use cookies to collect, store, or transmit Protected Health Information (PHI) or any patient data.",
  },
  {
    title: "3. Types of Cookies We Use",
    body: "We use three categories of cookies on our website. Essential cookies are required for the website to function and cannot be switched off. These include session management and security tokens. Analytics cookies help us understand how visitors use our site, for example, which pages are visited most often and whether visitors encounter errors. We use Google Analytics (GA4) for this purpose. Preference cookies remember your settings, such as your selected color theme (light or dark mode), so you do not need to reset them on each visit.",
  },
  {
    title: "4. Google Analytics",
    body: "Our website uses Google Analytics 4 (GA4) to collect anonymized data about site traffic, page views, and user interactions. Google Analytics uses cookies to track these interactions. The data collected is aggregated and does not identify individual visitors. Google may process this data on servers outside your country of residence. You can opt out of Google Analytics tracking by installing the Google Analytics Opt-out Browser Add-on, available at tools.google.com/dlpage/gaoptout.",
  },
  {
    title: "5. Third-Party Cookies",
    body: "Some pages on our website may include content or links from third-party services, such as embedded maps, social media links, or external tools, that may set their own cookies. Logicware LLC does not control these third-party cookies. We recommend reviewing the privacy and cookie policies of any third-party service you interact with through our website.",
  },
  {
    title: "6. Managing and Disabling Cookies",
    body: "You can control cookies through your browser settings. Most browsers allow you to refuse cookies, delete existing cookies, or be notified when a cookie is set. Note that disabling certain cookies may affect site functionality: disabling preference cookies, for example, means your theme setting will not be remembered between visits. Instructions for managing cookies are available in your browser's help documentation.",
  },
  {
    title: "7. Do Not Track",
    body: "Some browsers transmit a \"Do Not Track\" signal to websites. Our website does not currently respond to Do Not Track signals because there is no industry-standard mechanism for doing so. We will revisit this position if a standard is established.",
  },
  {
    title: "8. Updates to This Policy",
    body: "We may update this Cookie Policy from time to time to reflect changes in the cookies we use or for other operational, legal, or regulatory reasons. Material changes will be reflected by updating the date at the top of this page. We encourage you to review this policy periodically.",
  },
  {
    title: "9. Contact Us",
    body: "If you have questions about our use of cookies or this Cookie Policy, contact us at contact@logicware.tech.",
  },
];

export default function CookiePolicyPage() {
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
        title="Cookie Policy"
        subtitle="Effective January 1, 2026 · Last updated June 1, 2026"
        iconPath="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
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
