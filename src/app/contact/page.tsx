"use client";

import { useRef, useState, FormEvent, useCallback } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { gsap, useGSAP } from "@/lib/gsap";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageBanner from "@/components/ui/PageBanner";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

interface FormState {
  firstName: string;
  lastName: string;
  practiceName: string;
  email: string;
  phone: string;
  role: string;
  practiceSize: string;
  ehr: string;
  challenge: string;
  source: string;
  consent: boolean;
}

const INITIAL_STATE: FormState = {
  firstName: "",
  lastName: "",
  practiceName: "",
  email: "",
  phone: "",
  role: "General Dentist (DDS/DMD)",
  practiceSize: "Solo",
  ehr: "",
  challenge: "",
  source: "Google",
  consent: false,
};

const inputClasses =
  "w-full rounded-lg px-4 py-3 text-[15px] font-poppins text-[var(--color-text-primary)] bg-[var(--color-surface-3)] border border-[var(--color-border-strong)] placeholder-[var(--color-text-faint)] transition-all duration-200 focus:outline-none focus:border-blue focus:bg-[rgba(0,122,255,0.05)] focus:ring-[3px] focus:ring-[rgba(0,122,255,0.1)]";

const labelClasses = "block text-sm font-medium text-[var(--color-text-secondary)] mb-1.5";

const ICON_PROPS = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const STEPS = [
  {
    title: "We Review Your Request",
    body: "Our team reviews your practice details and current billing setup within hours.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M22 12h-6l-2 3h-4l-2-3H2" />
        <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11Z" />
      </svg>
    ),
  },
  {
    title: "We Audit Your Billing",
    body: "We analyze your claims, denial patterns, and AR aging to find revenue you're missing.",
    icon: (
      <svg {...ICON_PROPS}>
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
  },
  {
    title: "You Get a Free Report",
    body: "Receive a detailed PDF report with actionable findings, no cost, no obligation.",
    icon: (
      <svg {...ICON_PROPS}>
        <rect x="8" y="2" width="8" height="4" rx="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <path d="m9 14 2 2 4-4" />
      </svg>
    ),
  },
];

const QUICK_STATS = [
  { end: 95, suffix: "%+", label: "Clean Claim Rate" },
  { end: "48hr", label: "Avg. Turnaround" },
  { end: 0, prefix: "$", suffix: "", label: "Setup Fee" },
];

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const formRef = useRef<HTMLDivElement>(null);
  const { executeRecaptcha } = useGoogleReCaptcha();

  useGSAP(() => {
    gsap.fromTo(
      formRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power2.out", delay: 0.2 }
    );
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setForm((prev) => ({ ...prev, [name]: checked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = useCallback(async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const token = executeRecaptcha ? await executeRecaptcha("contact") : "";
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, recaptchaToken: token }),
      });
      if (!res.ok) throw new Error("Network error");
      setStatus("success");
    } catch {
      setStatus("idle");
      alert("Something went wrong. Please try again or email us directly at contact@logicware.tech");
    }
  }, [form, executeRecaptcha]);

  return (
    <>
      <Navbar />
      <PageBanner
        badge="Free Consultation"
        title="Let's Audit Your Billing"
        subtitle="Fill out the form below and we'll review your current billing setup at no cost. Expect a response within 24 business hours."
        iconPath="M22 12h-6l-2 3h-4l-2-3H2M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11Z"
      />
      <main className="bg-[var(--color-bg)] min-h-screen">
        <section className="pb-20 px-6">

          <div className="max-w-[960px] mx-auto mt-12 px-0 flex flex-col lg:flex-row gap-8 items-start">
            {/* Form container */}
            <div
              ref={formRef}
              className="flex-1 w-full rounded-[20px] p-8 sm:p-12 bg-[var(--color-surface)] border border-[rgba(0,122,255,0.2)]"
            >
              {status === "success" ? (
                <div className="flex flex-col items-center text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-[rgba(0,122,255,0.1)] border border-[rgba(0,122,255,0.3)] flex items-center justify-center mb-6">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#22C55E"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <h2 className="text-[var(--color-text-primary)] font-bold text-2xl mb-2">
                    Request Received!
                  </h2>
                  <p className="text-[var(--color-text-secondary)] max-w-[400px]">
                    We&apos;ve received your request! Expect our response
                    within 24 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className={labelClasses}>
                        First Name
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={form.firstName}
                        onChange={handleChange}
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className={labelClasses}>
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        value={form.lastName}
                        onChange={handleChange}
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="practiceName" className={labelClasses}>
                      Practice Name
                    </label>
                    <input
                      id="practiceName"
                      name="practiceName"
                      type="text"
                      required
                      value={form.practiceName}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className={labelClasses}>
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelClasses}>
                        Phone Number (optional)
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="role" className={labelClasses}>
                        Your Role
                      </label>
                      <select
                        id="role"
                        name="role"
                        value={form.role}
                        onChange={handleChange}
                        className={inputClasses}
                      >
                        {["General Dentist (DDS/DMD)", "Orthodontist", "Periodontist", "Endodontist", "Oral Surgeon", "Pediatric Dentist", "Practice Manager", "Other"].map(
                          (option) => (
                            <option key={option} value={option} className="bg-[var(--color-bg)]">
                              {option}
                            </option>
                          )
                        )}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="practiceSize" className={labelClasses}>
                        Practice Size
                      </label>
                      <select
                        id="practiceSize"
                        name="practiceSize"
                        value={form.practiceSize}
                        onChange={handleChange}
                        className={inputClasses}
                      >
                        {["Solo", "2–5 providers", "5+ providers"].map((option) => (
                          <option key={option} value={option} className="bg-[var(--color-bg)]">
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="ehr" className={labelClasses}>
                      Current Practice Management Software
                    </label>
                    <input
                      id="ehr"
                      name="ehr"
                      type="text"
                      value={form.ehr}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="e.g., Dentrix, Eaglesoft, Open Dental..."
                    />
                  </div>

                  <div>
                    <label htmlFor="challenge" className={labelClasses}>
                      Main Challenge
                    </label>
                    <textarea
                      id="challenge"
                      name="challenge"
                      rows={4}
                      value={form.challenge}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="e.g., high denial rates, slow reimbursements, no time for billing admin..."
                    />
                  </div>

                  <div>
                    <label htmlFor="source" className={labelClasses}>
                      How did you hear about us?
                    </label>
                    <select
                      id="source"
                      name="source"
                      value={form.source}
                      onChange={handleChange}
                      className={inputClasses}
                    >
                      {["Google", "Upwork", "LinkedIn", "Referral", "Other"].map((option) => (
                        <option key={option} value={option} className="bg-[var(--color-bg)]">
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="consent"
                      required
                      checked={form.consent}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 rounded border-[var(--color-border-light)] bg-[var(--color-surface-3)] text-blue accent-[#007AFF] focus:ring-[rgba(0,122,255,0.4)]"
                    />
                    <span className="text-sm text-[var(--color-text-secondary)]">
                      I confirm this information is accurate and I consent to
                      being contacted.
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full bg-blue text-white hover:text-white py-4 rounded-full font-semibold text-base transition-all duration-300 hover:bg-blue-dim hover:shadow-[0_0_30px_rgba(0,122,255,0.5)] disabled:opacity-70 flex items-center justify-center gap-2"
                  >
                    {status === "sending" ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Send My Free Audit Request →"
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <aside className="w-full lg:w-[300px] flex-shrink-0">
              <h3 className="text-[var(--color-text-primary)] font-semibold mb-6">What happens next?</h3>
              <ol className="relative flex flex-col gap-8 mb-10">
                <div
                  className="absolute left-5 top-5 bottom-5 w-px bg-[rgba(0,122,255,0.15)]"
                  aria-hidden="true"
                />
                {STEPS.map((step) => (
                  <li key={step.title} className="relative flex items-start gap-4">
                    <span className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-[var(--color-bg)] border border-[rgba(0,122,255,0.3)] text-blue flex items-center justify-center">
                      <span className="w-5 h-5">{step.icon}</span>
                    </span>
                    <div className="pt-2">
                      <p className="text-[var(--color-text-primary)] text-sm font-semibold mb-1">{step.title}</p>
                      <p className="text-xs text-[var(--color-text-secondary)] leading-[1.6]">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>

              {/* Quick stats */}
              <div className="rounded-xl p-5 bg-[var(--color-surface)] border border-[rgba(0,122,255,0.15)] flex flex-col gap-5 mb-6">
                {QUICK_STATS.map((stat, i) => (
                  <div
                    key={stat.label}
                    className={`flex items-center justify-between ${
                      i > 0 ? "pt-5 border-t border-[var(--color-border)]" : ""
                    }`}
                  >
                    <span className="text-[var(--color-text-secondary)] text-sm">{stat.label}</span>
                    <span className="text-blue font-bold text-lg">
                      <AnimatedCounter end={stat.end} prefix={stat.prefix} suffix={stat.suffix} />
                    </span>
                  </div>
                ))}
              </div>

              <div className="rounded-xl p-5 bg-[var(--color-surface)] border border-[rgba(0,122,255,0.15)] flex flex-col gap-4 mb-6">
                <div>
                  <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-widest mb-1">
                    USA Office
                  </p>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-[1.6]">
                    1007 N Orange St. 4th Floor, 4682,
                    <br />
                    Wilmington, DE 19801, New Castle, US
                  </p>
                </div>
                <div className="pt-4 border-t border-[var(--color-border)]">
                  <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-widest mb-1">
                    Pakistan Office
                  </p>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-[1.6]">
                    Karachi, Pakistan
                  </p>
                </div>
              </div>

              <div className="rounded-xl p-5 bg-[var(--color-surface)] border border-[rgba(0,122,255,0.15)]">
                <p className="text-xs text-[var(--color-text-secondary)] leading-[1.7]">
                  Logicware LLC · Delaware · HIPAA Compliant · No Spam
                </p>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
