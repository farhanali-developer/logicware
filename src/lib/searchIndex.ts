export interface SearchEntry {
  title: string;
  description: string;
  url: string;
  category: string;
  keywords: string[];
}

export const SEARCH_INDEX: SearchEntry[] = [
  {
    title: "Home",
    description: "Dental billing specialists helping practices get paid faster.",
    url: "/",
    category: "Page",
    keywords: ["home", "logicware", "landing", "billing", "dental"],
  },
  {
    title: "About Logicware",
    description: "Our story, mission, values, and why practices trust us with their billing.",
    url: "/about",
    category: "Company",
    keywords: ["about", "company", "mission", "story", "team", "values", "delaware", "hipaa"],
  },
  {
    title: "How It Works",
    description: "A step-by-step look at our onboarding and billing process.",
    url: "/how-it-works",
    category: "Company",
    keywords: ["how it works", "process", "onboarding", "steps", "workflow", "timeline"],
  },
  {
    title: "Testimonials",
    description: "Real feedback and results from dentists and practices we support.",
    url: "/#testimonials",
    category: "Company",
    keywords: ["testimonials", "reviews", "clients", "feedback", "case studies", "results"],
  },
  {
    title: "Free Billing Audit",
    description: "Request a free, no-obligation review of your current billing setup.",
    url: "/contact",
    category: "Company",
    keywords: ["free billing audit", "contact", "audit", "consultation", "request", "form"],
  },
  {
    title: "Privacy Policy",
    description: "How Logicware collects, uses, and protects your information.",
    url: "/privacy-policy",
    category: "Company",
    keywords: ["privacy", "policy", "data", "hipaa", "security", "terms", "legal"],
  },
  {
    title: "Careers",
    description: "Open roles at Logicware. Join our team in Karachi or the US.",
    url: "/careers",
    category: "Company",
    keywords: ["careers", "jobs", "hiring", "open roles", "work with us", "employment", "karachi"],
  },
  {
    title: "Blogs",
    description: "Practical guides on claims, credentialing, denials, and revenue cycle management.",
    url: "/blogs",
    category: "Company",
    keywords: ["blog", "articles", "guides", "billing tips", "insights"],
  },
  {
    title: "Services Overview",
    description: "End-to-end dental billing services for solo and small practices.",
    url: "/services",
    category: "Services",
    keywords: ["services", "billing services", "what we do", "overview"],
  },
  {
    title: "Insurance Verification",
    description: "We verify out-of-network and in-network benefits before the first appointment.",
    url: "/services/insurance-verification",
    category: "Services",
    keywords: ["insurance verification", "eligibility", "benefits", "coverage", "voe"],
  },
  {
    title: "Claim Submission",
    description: "Daily electronic claim submission via clearinghouse using the ADA Dental Claim Form.",
    url: "/services/claim-submission",
    category: "Services",
    keywords: ["claim submission", "ada claim form", "clearinghouse", "claims", "edi"],
  },
  {
    title: "Payment Posting",
    description: "Accurate EOB payment posting and real-time accounts receivable tracking.",
    url: "/services/payment-posting",
    category: "Services",
    keywords: ["payment posting", "eob", "era", "accounts receivable", "ar"],
  },
  {
    title: "Denial Management",
    description: "Denied claims are corrected and resubmitted within payer deadlines.",
    url: "/services/denial-management",
    category: "Services",
    keywords: ["denial management", "denials", "appeals", "resubmission", "rejections"],
  },
  {
    title: "Monthly Reporting",
    description: "Clear monthly PDF reports on claims, collections, and denial rates.",
    url: "/services/monthly-reporting",
    category: "Services",
    keywords: ["monthly reporting", "reports", "analytics", "revenue report", "pdf"],
  },
  {
    title: "Provider Credentialing",
    description: "We enroll your practice with insurance panels for a flat fee per payer.",
    url: "/services/provider-credentialing",
    category: "Services",
    keywords: ["provider credentialing", "credentialing", "enrollment", "panels"],
  },
];

export function searchSite(query: string): SearchEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  return SEARCH_INDEX.filter((entry) => {
    return (
      entry.title.toLowerCase().includes(q) ||
      entry.description.toLowerCase().includes(q) ||
      entry.keywords.some((k) => k.toLowerCase().includes(q))
    );
  });
}
