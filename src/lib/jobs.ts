export interface Job {
  slug: string;
  title: string;
  type: string;
  location: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
}

export const JOBS: Job[] = [
  {
    slug: "medical-billing-specialist",
    title: "Dental Billing Specialist",
    type: "Full-time",
    location: "Onsite · Karachi, Pakistan",
    summary:
      "Handle daily claim submission, payment posting, and denial management for a portfolio of US dental practices. You'll work closely with our team to keep client AR aging low and clean claim rates high.",
    responsibilities: [
      "Submit electronic claims (ADA Dental Claim Form) daily via clearinghouse for assigned practices",
      "Post payments and reconcile EOBs/ERAs against expected reimbursement",
      "Review denied and rejected claims, correct errors, and resubmit within payer deadlines",
      "Track accounts receivable aging and flag accounts that need follow-up",
      "Communicate claim status updates to the client success team",
    ],
    requirements: [
      "1+ years of US dental billing experience",
      "Familiarity with CDT codes (D0120, D0150, D1110, D2140–D2394, D4341)",
      "Experience with clearinghouses and dental practice management software such as Dentrix, Eaglesoft, or Open Dental",
      "Strong attention to detail and comfort working US business-hour shifts",
      "Based in or able to commute daily to our Karachi office",
    ],
    niceToHave: [
      "Experience with insurance appeals and reconsiderations",
      "Working knowledge of tooth numbering and surface documentation conventions",
    ],
  },
  {
    slug: "insurance-verification-specialist",
    title: "Insurance Verification Specialist",
    type: "Full-time",
    location: "Onsite · Karachi, Pakistan",
    summary:
      "Verify patient dental insurance benefits, eligibility, annual maximums, and frequency limitations before appointments, ensuring our clients' patients never face billing surprises.",
    responsibilities: [
      "Run eligibility and benefits checks (VOB/VOE) for new and returning patients",
      "Confirm in-network vs. out-of-network coverage, remaining annual maximum, and deductibles",
      "Identify and flag pre-treatment estimate or prior authorization requirements",
      "Document verification results clearly in the client's practice management software",
      "Escalate coverage issues to the client success team before appointments",
    ],
    requirements: [
      "Experience with insurance eligibility verification (VOB/VOE)",
      "Understanding of in-network vs. out-of-network dental benefits",
      "Comfortable navigating payer portals and calling insurance companies",
      "Detail-oriented with strong organizational skills",
      "Based in or able to commute daily to our Karachi office",
    ],
    niceToHave: [
      "Experience with major US dental payers (Delta Dental, MetLife, Cigna Dental, Guardian)",
      "Prior experience supporting general dentistry or specialty dental practices",
    ],
  },
  {
    slug: "provider-credentialing-coordinator",
    title: "Provider Credentialing Coordinator",
    type: "Full-time",
    location: "Onsite · Karachi, Pakistan",
    summary:
      "Manage end-to-end credentialing and re-credentialing for dental providers across multiple insurance panels, including document tracking and application follow-up.",
    responsibilities: [
      "Prepare and submit payer credentialing and re-credentialing applications",
      "Maintain and update provider credentialing document packets (license, malpractice, DEA)",
      "Track application status and follow up with payers until approval",
      "Maintain an accurate log of panel statuses and expiration dates per provider",
      "Coordinate with providers to collect required documentation",
    ],
    requirements: [
      "Experience with payer credentialing processes",
      "Strong follow-up and documentation skills",
      "Ability to manage multiple applications and deadlines simultaneously",
      "Familiarity with dental provider enrollment a plus",
      "Based in or able to commute daily to our Karachi office",
    ],
    niceToHave: [
      "Experience with NPI/NPPES and state Medicaid enrollment",
      "Prior experience in a credentialing-focused role for dental providers",
    ],
  },
  {
    slug: "sales-specialist",
    title: "Sales Specialist",
    type: "Full-time",
    location: "Remote · United States",
    summary:
      "Drive new business by connecting with solo dentists and small group practices, running free billing audits, and converting qualified leads into long-term billing clients.",
    responsibilities: [
      "Source and qualify leads among solo dentists and small group practices",
      "Run discovery calls and present free billing audit findings",
      "Manage a pipeline of prospects through our CRM from first contact to signed agreement",
      "Collaborate with the onboarding team for a smooth client handoff",
      "Provide market feedback to help refine our offer and messaging",
    ],
    requirements: [
      "2+ years of B2B sales or business development experience",
      "Comfortable with outbound outreach, discovery calls, and CRM pipelines",
      "Healthcare, SaaS, or services sales experience preferred",
      "Excellent written and verbal communication skills",
    ],
    niceToHave: [
      "Existing network within dental or healthcare practices",
      "Experience selling outsourced services or BPO solutions",
    ],
  },
  {
    slug: "client-success-associate",
    title: "Client Success Associate",
    type: "Full-time",
    location: "Remote · United States",
    summary:
      "Be the friendly face of Logicware for our clients, handling onboarding, monthly report walkthroughs, and day-to-day questions about claims and payments.",
    responsibilities: [
      "Lead onboarding calls for new practices and coordinate practice management software/clearinghouse setup",
      "Walk clients through their monthly reports and answer billing questions",
      "Act as the primary point of contact for client communication",
      "Relay client feedback and recurring issues to the billing team",
      "Help identify upsell opportunities for additional services",
    ],
    requirements: [
      "Excellent written and verbal English communication",
      "Comfortable explaining billing concepts in plain language",
      "Experience in client-facing healthcare or SaaS support roles preferred",
      "Organized, proactive, and empathetic",
    ],
    niceToHave: [
      "Familiarity with Dentrix, Eaglesoft, Open Dental, or similar dental practice management software",
      "Experience working with dental providers",
    ],
  },
];

export function getJobBySlug(slug: string): Job | undefined {
  return JOBS.find((job) => job.slug === slug);
}
