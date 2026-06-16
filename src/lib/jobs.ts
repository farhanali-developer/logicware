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
    title: "Medical Billing Specialist",
    type: "Full-time",
    location: "Onsite · Karachi, Pakistan",
    summary:
      "Handle daily claim submission, payment posting, and denial management for a portfolio of US mental health practices. You'll work closely with our team to keep client AR aging low and clean claim rates high.",
    responsibilities: [
      "Submit electronic claims (CMS-1500) daily via clearinghouse for assigned practices",
      "Post payments and reconcile EOBs/ERAs against expected reimbursement",
      "Review denied and rejected claims, correct errors, and resubmit within payer deadlines",
      "Track accounts receivable aging and flag accounts that need follow-up",
      "Communicate claim status updates to the client success team",
    ],
    requirements: [
      "1+ years of US medical billing experience (mental/behavioral health a plus)",
      "Familiarity with CPT codes 90791, 90834, 90837, 90847, 90853",
      "Experience with clearinghouses and EHRs such as SimplePractice or TherapyNotes",
      "Strong attention to detail and comfort working US business-hour shifts",
      "Based in or able to commute daily to our Karachi office",
    ],
    niceToHave: [
      "Experience with insurance appeals and reconsiderations",
      "Working knowledge of ICD-10 diagnosis coding",
    ],
  },
  {
    slug: "insurance-verification-specialist",
    title: "Insurance Verification Specialist",
    type: "Full-time",
    location: "Onsite · Karachi, Pakistan",
    summary:
      "Verify patient insurance benefits, eligibility, copays, and prior authorization requirements before appointments, ensuring our clients' patients never face billing surprises.",
    responsibilities: [
      "Run eligibility and benefits checks (VOB/VOE) for new and returning patients",
      "Confirm in-network vs. out-of-network coverage, copays, and deductibles",
      "Identify and flag prior authorization or referral requirements",
      "Document verification results clearly in the client's EHR",
      "Escalate coverage issues to the client success team before appointments",
    ],
    requirements: [
      "Experience with insurance eligibility verification (VOB/VOE)",
      "Understanding of in-network vs. out-of-network benefits",
      "Comfortable navigating payer portals and calling insurance companies",
      "Detail-oriented with strong organizational skills",
      "Based in or able to commute daily to our Karachi office",
    ],
    niceToHave: [
      "Experience with major US payers (Aetna, Cigna, BCBS, UnitedHealthcare)",
      "Prior experience supporting mental/behavioral health practices",
    ],
  },
  {
    slug: "provider-credentialing-coordinator",
    title: "Provider Credentialing Coordinator",
    type: "Full-time",
    location: "Onsite · Karachi, Pakistan",
    summary:
      "Manage end-to-end credentialing and re-credentialing for providers across multiple insurance panels, including CAQH profile maintenance and application tracking.",
    responsibilities: [
      "Prepare and submit payer credentialing and re-credentialing applications",
      "Maintain and update provider CAQH profiles",
      "Track application status and follow up with payers until approval",
      "Maintain an accurate log of panel statuses and expiration dates per provider",
      "Coordinate with providers to collect required documentation",
    ],
    requirements: [
      "Experience with payer credentialing and CAQH",
      "Strong follow-up and documentation skills",
      "Ability to manage multiple applications and deadlines simultaneously",
      "Familiarity with mental health provider enrollment a plus",
      "Based in or able to commute daily to our Karachi office",
    ],
    niceToHave: [
      "Experience with NPI/PECOS and state Medicaid enrollment",
      "Prior experience in a credentialing-focused role for behavioral health providers",
    ],
  },
  {
    slug: "sales-specialist",
    title: "Sales Specialist",
    type: "Full-time",
    location: "Remote · United States",
    summary:
      "Drive new business by connecting with solo therapists and small group practices, running free billing audits, and converting qualified leads into long-term billing clients.",
    responsibilities: [
      "Source and qualify leads among solo therapists and small group practices",
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
      "Existing network within mental health or healthcare practices",
      "Experience selling outsourced services or BPO solutions",
    ],
  },
  {
    slug: "client-success-associate",
    title: "Client Success Associate",
    type: "Full-time",
    location: "Remote · United States",
    summary:
      "Be the friendly face of Logicware for our clients — handling onboarding, monthly report walkthroughs, and day-to-day questions about claims and payments.",
    responsibilities: [
      "Lead onboarding calls for new practices and coordinate EHR/clearinghouse setup",
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
      "Familiarity with SimplePractice, TherapyNotes, or similar EHRs",
      "Experience working with mental health providers",
    ],
  },
];

export function getJobBySlug(slug: string): Job | undefined {
  return JOBS.find((job) => job.slug === slug);
}
