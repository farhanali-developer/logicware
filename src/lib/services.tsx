import { ReactNode } from "react";

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceStep {
  title: string;
  body: string;
}

export interface Service {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  icon: ReactNode;
  summary: string;
  body: string;
  included: string[];
  stat: { value: string; label: string };
  process: ServiceStep[];
  faqs: ServiceFaq[];
}

const ICON_PROPS = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const SERVICES: Service[] = [
  {
    slug: "insurance-verification",
    number: "01",
    title: "Insurance Verification",
    tagline: "Know the coverage before the first appointment.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="m9 15 2 2 4-4" />
      </svg>
    ),
    summary:
      "We verify every new patient's benefits before their first appointment, so nobody is surprised by the bill.",
    body: "Before a new patient sits down in the chair, we've already checked their coverage. In-network and out-of-network benefits, remaining annual maximum, deductible, frequency limits, waiting periods. Your front desk gets a clear summary, not a guess, and the patient hears about their likely out-of-pocket cost before treatment starts, not after.",
    included: [
      "Real-time eligibility and benefits checks for every new patient",
      "Annual maximum and deductible breakdowns before treatment",
      "Frequency limitation and waiting period verification",
      "Prior authorization flags before treatment begins",
      "Periodic re-verification for long-term, active patients",
    ],
    stat: { value: "< 24hrs", label: "Verification turnaround for new patients" },
    process: [
      { title: "You send us the appointment", body: "New patient booked, or an existing patient scheduled for major work. We take it from there." },
      { title: "We check the coverage", body: "Directly with the payer, through their portal or by phone if the details aren't online." },
      { title: "You get a clear summary", body: "What's covered, what isn't, and what the patient should expect to pay, delivered before the appointment." },
    ],
    faqs: [
      {
        q: "What if a plan doesn't cover part of the treatment?",
        a: "We flag it before the appointment, so your team can have that conversation with the patient upfront instead of at checkout.",
      },
      {
        q: "Do you re-verify existing patients?",
        a: "Yes. Coverage changes, especially at the start of a new year, so we periodically re-check benefits for your active patients.",
      },
    ],
  },
  {
    slug: "claim-submission",
    number: "02",
    title: "Claim Submission",
    tagline: "Clean claims, submitted daily, without the backlog.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="m22 2-7 20-4-9-9-4Z" />
        <path d="M22 2 11 13" />
      </svg>
    ),
    summary:
      "Claims go out every business day through the ADA Dental Claim Form, scrubbed for errors before they ever reach a payer.",
    body: "Appointments logged by end of business are typically submitted the same day. Every claim gets scrubbed for CDT code accuracy, tooth and surface data, and missing attachments before it leaves our hands, so far fewer of them come back.",
    included: [
      "Daily electronic batch submission through clearinghouse",
      "Automated claim scrubbing for CDT codes and attachment requirements",
      "Same-day submission for appointments logged by end of day",
      "Clearinghouse rejection monitoring with same-day correction",
      "Claim status tracking from submission through adjudication",
    ],
    stat: { value: "95%+", label: "First-pass clean claim acceptance rate" },
    process: [
      { title: "Appointment gets logged", body: "In your existing practice management software. Nothing changes on your end." },
      { title: "We scrub the claim", body: "Codes, tooth numbers, surfaces, and attachments checked before submission." },
      { title: "It goes out same day", body: "Electronically, through clearinghouse, tracked until it's adjudicated." },
    ],
    faqs: [
      {
        q: "How fast do claims actually go out?",
        a: "Same day for anything logged by end of business. We don't batch and wait.",
      },
      {
        q: "What happens if a clearinghouse rejects a claim?",
        a: "We catch it and fix it the same day, before it ever turns into a denial.",
      },
    ],
  },
  {
    slug: "payment-posting",
    number: "03",
    title: "Payment Posting",
    tagline: "Every payment reconciled, every shortfall flagged.",
    icon: (
      <svg {...ICON_PROPS}>
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    summary:
      "We post every EOB and ERA against the original claim and flag underpayments the moment they happen.",
    body: "Every payment gets checked against your contracted fee schedule as it comes in, not weeks later during a monthly review. If a payer shorts you, we catch it right away and follow up, instead of letting it quietly disappear into your AR.",
    included: [
      "Daily ERA and EOB payment posting against open claims",
      "Contractual adjustment verification against payer fee schedules",
      "Automatic underpayment and short-pay flagging",
      "Patient responsibility calculation and tracking",
      "Real-time accounts receivable balance for your practice",
    ],
    stat: { value: "Daily", label: "Payment reconciliation cadence" },
    process: [
      { title: "Payment arrives", body: "EOB or ERA comes in from the payer." },
      { title: "We post it", body: "Against the original claim, checked line by line against your fee schedule." },
      { title: "Shortfalls get flagged", body: "Immediately, not at the end of the month." },
    ],
    faqs: [
      {
        q: "How do you catch an underpayment?",
        a: "We compare every payment against your contracted fee schedule as it's posted, so shortfalls surface right away instead of months later.",
      },
      {
        q: "Can I see my real AR balance anytime?",
        a: "It's part of your monthly report, and we can share it more often if that's useful for your practice.",
      },
    ],
  },
  {
    slug: "denial-management",
    number: "04",
    title: "Denial Management",
    tagline: "Denials get fixed and resubmitted, fast.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
        <path d="M21 3v5h-5" />
        <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
        <path d="M3 21v-5h5" />
      </svg>
    ),
    summary:
      "Denied claims are reviewed daily, corrected, and resubmitted before payer deadlines close.",
    body: "We review denied and rejected claims every day, figure out what actually caused each one, and correct and resubmit within the payer's deadline. When something is worth a formal appeal, we write the letter, gather the documentation, and make the follow-up calls ourselves.",
    included: [
      "Daily denial and rejection queue review",
      "Root cause categorization by payer, code, and reason",
      "Corrected claim resubmission within payer deadlines",
      "Formal written appeals with supporting documentation",
      "Denial trend reporting so the same issue doesn't repeat",
    ],
    stat: { value: "< 4%", label: "Average denial rate across our caseload" },
    process: [
      { title: "Denial comes in", body: "Reviewed the same day it's received, not weeks later." },
      { title: "We figure out why", body: "Eligibility, frequency, missing documentation, whatever the actual cause is." },
      { title: "We fix it and resend", body: "Corrected and resubmitted, or appealed if that's the right move." },
    ],
    faqs: [
      {
        q: "What's your average denial rate?",
        a: "Under 4% across our caseload, well below the industry average of 10 to 15%.",
      },
      {
        q: "Do you handle formal appeals?",
        a: "Yes, including the letter, supporting documentation, and any follow-up calls the payer requires.",
      },
    ],
  },
  {
    slug: "monthly-reporting",
    number: "05",
    title: "Monthly Reporting",
    tagline: "Full financial visibility, every single month.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <line x1="8" y1="13" x2="16" y2="13" />
        <line x1="8" y1="17" x2="16" y2="17" />
      </svg>
    ),
    summary:
      "A clear, easy-to-read PDF every month showing exactly where your practice's billing actually stands.",
    body: "No black boxes. Every month you get a report covering claims submitted, amounts collected, denial rates, AR aging, and revenue recovered through appeals, written in plain language instead of billing jargon, so you always know exactly where things stand.",
    included: [
      "Monthly revenue summary and collections breakdown",
      "Claims submitted vs. claims paid comparison",
      "Denial rate trends with category breakdowns",
      "Accounts receivable aging buckets (30/60/90+ days)",
      "Payer mix analysis and practical recommendations",
    ],
    stat: { value: "Monthly", label: "Detailed PDF reports delivered" },
    process: [
      { title: "We track everything", body: "Every claim and payment, all month long, as it happens." },
      { title: "We compile it", body: "Into a report that's actually readable, not a wall of billing codes." },
      { title: "You get it on schedule", body: "Every month, like clockwork, with a walkthrough if you want one." },
    ],
    faqs: [
      {
        q: "What's actually in the report?",
        a: "Collections, denial trends, AR aging, and payer mix, in plain language, not billing jargon.",
      },
      {
        q: "Can I get reports more often than monthly?",
        a: "Yes. We can set up a more frequent cadence if that's more useful for how you run your practice.",
      },
    ],
  },
  {
    slug: "provider-credentialing",
    number: "06",
    title: "Provider Credentialing",
    tagline: "Get on insurance panels without the paperwork headache.",
    icon: (
      <svg {...ICON_PROPS}>
        <circle cx="12" cy="8" r="6" />
        <path d="M15.5 13.5 17 22l-5-3-5 3 1.5-8.5" />
      </svg>
    ),
    summary:
      "We manage your credentialing documents, submit and track panel applications, and chase payers until you're approved.",
    body: "Credentialing with insurance panels is slow and full of follow-up calls nobody wants to make. We manage your credentialing document packet, submit and track every application, and follow up with payers on your behalf, all for a flat fee per payer with no surprise charges.",
    included: [
      "Credentialing document packet setup and renewal reminders",
      "Insurance panel application submission and tracking",
      "Proactive follow-up with payers until approval",
      "Re-credentialing reminders so you never lapse out-of-network",
      "Transparent flat fee per payer, no hourly billing",
    ],
    stat: { value: "Flat Fee", label: "Per-payer credentialing pricing" },
    process: [
      { title: "We gather your documents", body: "License, malpractice certificate, NPI, W-9, whatever each payer requires." },
      { title: "We submit and track", body: "Applications go out to every panel you want to join, tracked individually." },
      { title: "We follow up until you're approved", body: "Every two to three weeks, so your application doesn't sit forgotten in a queue." },
    ],
    faqs: [
      {
        q: "How long does credentialing actually take?",
        a: "Most payers take 60 to 120 days. We keep it moving with proactive follow-up instead of waiting for them to reach out.",
      },
      {
        q: "What does it cost?",
        a: "A flat fee per payer, agreed upfront. No hourly billing, no surprise invoices.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((service) => service.slug === slug);
}
