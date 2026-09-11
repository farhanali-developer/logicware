"use client";

import { useRef, useState, FormEvent, useCallback } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { gsap, useGSAP } from "@/lib/gsap";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PhoneField from "@/components/ui/PhoneField";
import FieldError from "@/components/ui/FieldError";
import Req from "@/components/ui/Req";
import { getJobBySlug, JOBS } from "@/lib/jobs";
import {
  sanitizeNameInput,
  validateName,
  validateEmail,
  validatePhone,
  validateRequiredText,
  validatePdfFile,
} from "@/lib/validation";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  resume: File | null;
  coverLetter: File | null;
  message: string;
  consent: boolean;
}

type FieldName = keyof FormState;

const INITIAL_STATE: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  resume: null,
  coverLetter: null,
  message: "",
  consent: false,
};

function validateField(name: FieldName, value: FormState[FieldName]): string | null {
  switch (name) {
    case "firstName":
      return validateName(value as string, "First name");
    case "lastName":
      return validateName(value as string, "Last name");
    case "email":
      return validateEmail(value as string);
    case "phone":
      return validatePhone(value as string, true);
    case "message":
      return validateRequiredText(value as string, "This field", { min: 10, max: 3000 });
    case "resume":
      return validatePdfFile(value as File | null, true, "Resume").error;
    case "coverLetter":
      return validatePdfFile(value as File | null, false, "Cover letter").error;
    case "consent":
      return value ? null : "Please confirm to continue.";
    default:
      return null;
  }
}

function validateAll(values: FormState): Record<FieldName, string | null> {
  const result = {} as Record<FieldName, string | null>;
  (Object.keys(values) as FieldName[]).forEach((key) => {
    result[key] = validateField(key, values[key]);
  });
  return result;
}

const inputClasses =
  "w-full rounded-lg px-4 py-3 text-[15px] font-poppins text-[var(--color-text-primary)] bg-[var(--color-surface-3)] border border-[var(--color-border-strong)] placeholder-[var(--color-text-faint)] transition-all duration-200 focus:outline-none focus:border-blue focus:bg-[rgba(0,122,255,0.05)] focus:ring-[3px] focus:ring-[rgba(0,122,255,0.1)]";

const inputErrorClasses = "border-red-500 focus:border-red-500 focus:ring-[rgba(239,68,68,0.15)]";

const labelClasses = "block text-sm font-medium text-[var(--color-text-secondary)] mb-1.5";

function FileUploadField({
  id,
  label,
  required,
  file,
  error,
  onChange,
}: {
  id: string;
  label: string;
  required?: boolean;
  file: File | null;
  error?: string | null;
  onChange: (file: File | null) => void;
}) {
  return (
    <div>
      <label htmlFor={id} className={labelClasses}>
        {label}{required && <Req />}
      </label>
      <label
        htmlFor={id}
        className={`flex items-center gap-3 w-full rounded-lg px-4 py-3 text-[15px] font-poppins bg-[var(--color-surface-3)] border border-dashed cursor-pointer transition-all duration-200 hover:border-blue hover:bg-[rgba(0,122,255,0.05)] ${
          error ? "border-red-500" : "border-[var(--color-border-strong)]"
        }`}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 text-[var(--color-text-muted)]">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <path d="M17 8 12 3 7 8" />
          <path d="M12 3v12" />
        </svg>
        <span className={file ? "text-[var(--color-text-primary)]" : "text-[var(--color-text-faint)]"}>
          {file ? file.name : "Click to upload PDF"}
        </span>
      </label>
      <input
        id={id}
        name={id}
        type="file"
        accept=".pdf,application/pdf"
        onChange={(e) => onChange(e.target.files?.[0] ?? null)}
        className="sr-only"
      />
      <FieldError message={error} />
    </div>
  );
}

function ChecklistSection({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2 className="text-[var(--color-text-primary)] font-semibold text-lg mb-3">{title}</h2>
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)] leading-[1.7]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
              <path d="m9 14 2 2 4-4" />
              <circle cx="12" cy="12" r="9" />
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function JobDetailPage() {
  const params = useParams<{ slug: string }>();
  const job = getJobBySlug(params.slug);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<Partial<Record<FieldName, string | null>>>({});
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);
  const pageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      pageRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power1.out" }
    );
  }, []);

  const setFieldValue = (name: FieldName, value: FormState[FieldName]) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const field = name as FieldName;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFieldValue(field, checked);
      return;
    }
    const nextValue = field === "firstName" || field === "lastName" ? sanitizeNameInput(value) : value;
    setFieldValue(field, nextValue);
  };

  const handleBlur = (name: FieldName) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, form[name]) }));
  };

  const handlePhoneChange = (value: string) => {
    setFieldValue("phone", value);
  };

  const handleFileChange = (name: "resume" | "coverLetter", file: File | null) => {
    setForm((prev) => ({ ...prev, [name]: file }));
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, file) }));
  };

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      if (!job) return;
      setSubmitError(null);

      const allErrors = validateAll(form);
      setErrors(allErrors);
      setTouched(
        Object.fromEntries((Object.keys(form) as FieldName[]).map((key) => [key, true])) as Partial<
          Record<FieldName, boolean>
        >
      );

      const firstInvalid = (Object.keys(allErrors) as FieldName[]).find((key) => allErrors[key]);
      if (firstInvalid) {
        document.getElementById(firstInvalid)?.focus();
        return;
      }

      setStatus("sending");
      try {
        const token = executeRecaptcha ? await executeRecaptcha("apply") : "";
        const data = new FormData();
        data.append("firstName", form.firstName);
        data.append("lastName", form.lastName);
        data.append("email", form.email);
        data.append("phone", form.phone);
        data.append("message", form.message);
        data.append("jobTitle", job.title);
        data.append("jobLocation", job.location);
        data.append("recaptchaToken", token);
        if (form.resume) data.append("resume", form.resume);
        if (form.coverLetter) data.append("coverLetter", form.coverLetter);

        const res = await fetch("/api/apply", { method: "POST", body: data });

        if (res.status === 400) {
          const responseData = await res.json().catch(() => null);
          if (responseData?.errors) {
            setErrors((prev) => ({ ...prev, ...responseData.errors }));
          }
          setStatus("idle");
          setSubmitError(responseData?.error ?? "Please fix the highlighted fields and try again.");
          return;
        }

        if (res.status === 403 || res.status === 429) {
          const responseData = await res.json().catch(() => null);
          setStatus("idle");
          setSubmitError(responseData?.error ?? "We couldn't process that submission. Please try again shortly.");
          return;
        }

        if (!res.ok) throw new Error("Network error");
        setStatus("success");
      } catch {
        setStatus("idle");
        setSubmitError("Something went wrong. Please try again or email us directly at careers@logicware.tech");
      }
    },
    [form, job, executeRecaptcha]
  );

  const fieldClass = (name: FieldName) => `${inputClasses} ${errors[name] && touched[name] ? inputErrorClasses : ""}`;

  if (!job) {
    return (
      <div ref={pageRef}>
        <Navbar />
        <main className="bg-[var(--color-bg)] min-h-screen">
          <section className="pt-48 pb-32 px-6 text-center">
            <h1 className="text-[var(--color-text-primary)] font-bold text-3xl mb-4">
              Role not found
            </h1>
            <p className="text-[var(--color-text-secondary)] mb-8">
              This job posting may have closed or moved.
            </p>
            <Link
              href="/careers"
              className="inline-block bg-blue text-[var(--color-text-primary)] px-8 py-3.5 rounded-full font-semibold text-[15px] transition-all duration-300 hover:bg-blue-dim"
            >
              View Open Roles
            </Link>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div ref={pageRef}>
      <Navbar />
      <main className="bg-[var(--color-bg)] min-h-screen">
        {/* Header */}
        <section className="pt-40 pb-12 px-6">
          <div className="max-w-[800px] mx-auto">
            <Link
              href="/careers"
              className="inline-flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)] hover:text-blue transition-colors duration-200 mb-6"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              All open roles
            </Link>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-semibold tracking-widest uppercase text-blue bg-[rgba(0,122,255,0.1)] border border-[rgba(0,122,255,0.25)] rounded-full px-2 py-1">
                {job.type}
              </span>
              <span className="text-[10px] font-semibold tracking-widest uppercase text-[var(--color-text-muted)] bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-full px-2 py-1">
                {job.location}
              </span>
            </div>
            <h1
              className="text-[var(--color-text-primary)] font-bold mb-4"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              {job.title}
            </h1>
            <p className="text-[var(--color-text-secondary)] text-lg leading-[1.7]">
              {job.summary}
            </p>
          </div>
        </section>

        {/* Job description */}
        <section className="px-6 pb-16">
          <div className="max-w-[760px] mx-auto flex flex-col gap-8">
            <ChecklistSection title="What You'll Do" items={job.responsibilities} />
            <ChecklistSection title="What We're Looking For" items={job.requirements} />
            <ChecklistSection title="Nice to Have" items={job.niceToHave} />
          </div>
        </section>

        {/* Application form */}
        <section className="px-6 pb-32">
          <div className="max-w-[760px] mx-auto">
            <div
              id="apply"
              className="w-full rounded-[20px] p-8 bg-[var(--color-surface)] border border-[rgba(0,122,255,0.2)]"
            >
              {status === "success" ? (
                <div className="flex flex-col items-center text-center py-6">
                  <div className="w-16 h-16 rounded-full bg-[rgba(0,122,255,0.1)] border border-[rgba(0,122,255,0.3)] flex items-center justify-center mb-6">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <h2 className="text-[var(--color-text-primary)] font-bold text-2xl mb-2">
                    Application Received!
                  </h2>
                  <p className="text-[var(--color-text-secondary)] max-w-[320px]">
                    Thanks for applying to {job.title}. Our team will review
                    your application and reach out if there&apos;s a fit.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-[var(--color-text-primary)] font-semibold text-lg mb-1">
                    Apply for this role
                  </h2>
                  <p className="text-sm text-[var(--color-text-secondary)] mb-6">
                    {job.title} · {job.location}
                  </p>
                  <p className="text-xs text-[var(--color-text-muted)] mb-2">
                    Fields marked <span className="text-red-500">*</span> are required.
                  </p>
                  <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className={labelClasses}>
                          First Name<Req />
                        </label>
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          autoComplete="given-name"
                          required
                          value={form.firstName}
                          onChange={handleChange}
                          onBlur={() => handleBlur("firstName")}
                          className={fieldClass("firstName")}
                          aria-invalid={Boolean(errors.firstName && touched.firstName)}
                        />
                        <FieldError message={touched.firstName ? errors.firstName : null} />
                      </div>
                      <div>
                        <label htmlFor="lastName" className={labelClasses}>
                          Last Name<Req />
                        </label>
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          autoComplete="family-name"
                          required
                          value={form.lastName}
                          onChange={handleChange}
                          onBlur={() => handleBlur("lastName")}
                          className={fieldClass("lastName")}
                          aria-invalid={Boolean(errors.lastName && touched.lastName)}
                        />
                        <FieldError message={touched.lastName ? errors.lastName : null} />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className={labelClasses}>
                        Email Address<Req />
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        onBlur={() => handleBlur("email")}
                        className={fieldClass("email")}
                        aria-invalid={Boolean(errors.email && touched.email)}
                      />
                      <FieldError message={touched.email ? errors.email : null} />
                    </div>

                    <div>
                      <label htmlFor="phone" className={labelClasses}>
                        Phone Number<Req />
                      </label>
                      <PhoneField
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={handlePhoneChange}
                        onBlur={() => handleBlur("phone")}
                        error={touched.phone ? errors.phone : null}
                      />
                      <FieldError message={touched.phone ? errors.phone : null} />
                    </div>

                    <FileUploadField
                      id="resume"
                      label="Resume"
                      required
                      file={form.resume}
                      error={touched.resume ? errors.resume : null}
                      onChange={(file) => handleFileChange("resume", file)}
                    />

                    <FileUploadField
                      id="coverLetter"
                      label="Cover Letter (optional)"
                      file={form.coverLetter}
                      error={touched.coverLetter ? errors.coverLetter : null}
                      onChange={(file) => handleFileChange("coverLetter", file)}
                    />

                    <div>
                      <label htmlFor="message" className={labelClasses}>
                        Why are you a good fit?<Req />
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        value={form.message}
                        onChange={handleChange}
                        onBlur={() => handleBlur("message")}
                        className={fieldClass("message")}
                        placeholder="Tell us briefly about your relevant experience..."
                        aria-invalid={Boolean(errors.message && touched.message)}
                      />
                      <FieldError message={touched.message ? errors.message : null} />
                    </div>

                    <div>
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
                          I confirm this information is accurate and I consent
                          to being contacted about this role.
                        </span>
                      </label>
                      <FieldError message={touched.consent ? errors.consent : null} />
                    </div>

                    {submitError && (
                      <p className="text-sm text-red-500 -mt-1">{submitError}</p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full bg-blue text-white hover:text-white py-4 rounded-full font-semibold text-base transition-all duration-300 hover:bg-blue-dim hover:shadow-[0_0_30px_rgba(0,122,255,0.5)] disabled:opacity-70 flex items-center justify-center gap-2"
                    >
                      {status === "sending" ? (
                        <>
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        "Submit Application →"
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Other roles */}
        <section className="px-6 pb-32">
          <div className="max-w-[960px] mx-auto">
            <h2 className="text-[var(--color-text-primary)] font-bold text-2xl mb-6 text-center">
              Other Open Roles
            </h2>
            <div className="flex flex-col gap-3">
              {JOBS.filter((j) => j.slug !== job.slug).map((other) => (
                <Link
                  key={other.slug}
                  href={`/careers/${other.slug}`}
                  className="flex items-center justify-between rounded-xl p-5 bg-[var(--color-surface)] border border-[rgba(0,122,255,0.12)] transition-all duration-300 hover:border-[rgba(0,122,255,0.4)] hover:bg-[rgba(0,122,255,0.05)]"
                >
                  <div>
                    <p className="text-[var(--color-text-primary)] font-semibold">{other.title}</p>
                    <p className="text-xs text-[var(--color-text-muted)] mt-1">{other.location}</p>
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
