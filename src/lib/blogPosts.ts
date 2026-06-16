export interface BlogSection {
  heading?: string;
  level?: 2 | 3;
  body?: string;
  list?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  content: BlogSection[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "common-reasons-mental-health-claims-get-denied",
    title: "5 Common Reasons Mental Health Claims Get Denied (And How to Fix Them)",
    excerpt:
      "Denials drain time and revenue from every practice. Here are the five most common causes we see — and the simple process fixes that prevent them.",
    category: "Denial Management",
    date: "2026-05-18",
    readTime: "6 min read",
    author: "Logicware Editorial Team",
    content: [
      {
        body:
          "Claim denials are one of the biggest hidden costs in a mental health practice. Every denied claim means delayed payment, extra administrative work, and — if it's not corrected in time — revenue you simply never collect. The good news is that the vast majority of denials come from a small set of recurring, preventable issues.",
      },
      {
        heading: "1. Eligibility wasn't verified before the session",
        body:
          "Coverage can change month to month, especially with marketplace plans. If a patient's policy lapsed or their plan changed, the claim will come back denied for 'no coverage' — even if they were covered last month. Verifying eligibility before every new patient's first session (and periodically for ongoing patients) catches this before it becomes a billing problem.",
      },
      {
        heading: "2. Missing or incorrect prior authorization",
        body:
          "Some plans require authorization before a certain number of sessions, particularly for testing or higher-level care. If authorization isn't on file, the claim is denied regardless of how clean the rest of it is. Tracking authorization requirements and session counts per payer prevents this entirely.",
      },
      {
        heading: "3. Diagnosis and procedure code mismatches",
        body:
          "Payers check that the CPT code billed is appropriate for the diagnosis code submitted. A mismatch — like billing 90837 for a diagnosis that doesn't support an hour-long session — triggers an automatic denial. Keeping documentation and codes aligned avoids this.",
      },
      {
        heading: "4. Timely filing limits",
        body:
          "Every payer has a deadline for submitting claims, often 90 to 180 days from the date of service. Once that window closes, the claim is denied permanently — no appeal will recover it. Daily claim submission, rather than monthly batching, is the single best protection against timely filing denials.",
      },
      {
        heading: "5. Duplicate claim submissions",
        body:
          "When a claim status isn't tracked properly, it's easy to accidentally resubmit a claim that's already in process, triggering a 'duplicate claim' denial. A clear system for tracking claim status — submitted, paid, denied, appealed — prevents this kind of unforced error.",
      },
      {
        body:
          "Most denials are process problems, not coding problems. With daily submission, proactive eligibility checks, and clear tracking, the majority of these issues disappear before they ever become a denial.",
      },
    ],
  },
  {
    slug: "cpt-codes-90791-vs-90837",
    title: "CPT Codes Every Therapist Should Know: 90791 vs. 90837",
    excerpt:
      "Two of the most-used codes in mental health billing, explained in plain English — what they mean, when to use them, and how payers treat them differently.",
    category: "Billing Basics",
    date: "2026-05-10",
    readTime: "4 min read",
    author: "Logicware Editorial Team",
    content: [
      {
        body:
          "If you're a therapist handling your own billing, two codes will show up constantly: 90791 and 90837. Understanding the difference — and getting them right — has a direct impact on how quickly and accurately you get paid.",
      },
      {
        heading: "90791 — Psychiatric Diagnostic Evaluation",
        body:
          "This code is used for the initial intake assessment, typically the first session with a new client. It covers a comprehensive evaluation of the patient's history, presenting concerns, and initial treatment plan. It's billed once per client at the start of treatment (and occasionally again if there's a significant gap in care or a major change in clinical presentation).",
      },
      {
        heading: "90837 — Psychotherapy, 60 Minutes",
        body:
          "This is the standard code for an individual therapy session lasting 53 minutes or more. It's the most commonly billed code for ongoing weekly therapy. Its shorter sibling, 90834, covers sessions between 38 and 52 minutes — payers often reimburse 90837 at a meaningfully higher rate, so accurate session-length documentation matters.",
      },
      {
        heading: "Why getting this right matters",
        body:
          "Billing 90837 for a 30-minute session — or 90791 for a routine follow-up — can trigger documentation requests, audits, or denials. Consistent, accurate use of these codes (backed by session notes that support the time billed) keeps claims clean and protects your practice if a payer ever requests records.",
      },
    ],
  },
  {
    slug: "verify-insurance-benefits-before-first-session",
    title: "How to Verify Insurance Benefits Before a Client's First Session",
    excerpt:
      "A step-by-step look at what insurance verification actually involves, and why doing it before the first appointment saves both you and your client from surprise bills.",
    category: "Insurance Verification",
    date: "2026-04-28",
    readTime: "5 min read",
    author: "Logicware Editorial Team",
    content: [
      {
        body:
          "Nothing damages a new client relationship faster than an unexpected bill. Verifying benefits before the first session takes 10–15 minutes per patient, but it sets clear expectations and prevents downstream billing headaches.",
      },
      {
        heading: "What to check",
        body:
          "At minimum, verification should confirm: active coverage status, whether the plan covers outpatient mental health services, in-network vs. out-of-network benefits for your practice, copay or coinsurance amount, remaining deductible, and any session limits or prior authorization requirements.",
      },
      {
        heading: "How to verify",
        body:
          "Most payers offer an online portal (Availity, payer-specific portals) where eligibility can be checked in real time. For more detail — especially deductible amounts and session limits — a phone call to the number on the back of the insurance card is often necessary. Document the date, representative name, and reference number for every call.",
      },
      {
        heading: "Setting expectations with the client",
        body:
          "Once verification is complete, share a clear summary with the client: their copay or coinsurance amount, whether you're in-network, and any limits on covered sessions. A short, written summary — sent before the first appointment — avoids awkward billing conversations later.",
      },
    ],
  },
  {
    slug: "in-network-vs-out-of-network-billing",
    title: "In-Network vs. Out-of-Network Billing: What Solo Therapists Need to Know",
    excerpt:
      "The decision to join insurance panels affects everything from your rates to your billing workload. Here's how to think about the tradeoffs.",
    category: "Billing Basics",
    date: "2026-04-15",
    readTime: "7 min read",
    author: "Logicware Editorial Team",
    content: [
      {
        body:
          "Whether to accept insurance — and which panels to join — is one of the biggest business decisions a solo therapist makes. It affects your client pipeline, your rates, and the amount of administrative work your practice generates.",
      },
      {
        heading: "In-network billing",
        body:
          "Joining a payer's network means agreeing to their contracted rate in exchange for being listed in their provider directory — a steady source of referrals for many practices. The tradeoff is lower per-session reimbursement and more billing overhead: claims must be submitted for every session, and reimbursement timelines depend on the payer.",
      },
      {
        heading: "Out-of-network billing",
        body:
          "Out-of-network providers set their own rates and are paid directly by the client, who can then seek reimbursement from their insurer if their plan includes out-of-network benefits. This means less billing administration for the provider, but it shifts the burden — and some financial risk — onto the client, which can limit your client pool.",
      },
      {
        heading: "A hybrid approach",
        body:
          "Many practices land somewhere in between: in-network with one or two major payers for referral volume, while seeing other clients out-of-network at full fee. The right mix depends on your local market, your specialty, and how much billing administration you're willing to take on (or outsource).",
      },
      {
        body:
          "Whichever path you choose, the billing workload doesn't have to fall on you. Outsourcing claim submission, payment posting, and credentialing lets you take insurance without taking on a second job as a biller.",
      },
    ],
  },
  {
    slug: "credentialing-101-how-long-does-it-take",
    title: "Credentialing 101: How Long Does It Really Take?",
    excerpt:
      "Credentialing timelines are one of the most common sources of frustration for new practices. Here's a realistic look at what to expect from each major payer.",
    category: "Credentialing",
    date: "2026-04-02",
    readTime: "5 min read",
    author: "Logicware Editorial Team",
    content: [
      {
        body:
          "If you've started the process of joining insurance panels, you've probably already discovered the most frustrating part: the wait. Credentialing timelines vary widely by payer, and managing expectations early prevents a lot of stress.",
      },
      {
        heading: "Typical timelines",
        body:
          "Most commercial payers take 60–120 days from a complete application to an effective date. Medicare and Medicaid can take 30–90 days depending on the state. Some payers also have application windows or quotas, meaning even a complete, error-free application can sit in a queue for weeks before review even begins.",
      },
      {
        heading: "What slows things down",
        body:
          "The most common delays come from incomplete CAQH profiles, expired documents (malpractice insurance, licenses), missing W-9s, or NPI/taxonomy mismatches. Payers typically won't proactively flag these — the application simply sits until someone follows up.",
      },
      {
        heading: "How to speed it up",
        body:
          "Keep your CAQH profile fully attested and up to date at all times — many payers pull directly from it. Submit applications as early as possible (credentialing can often start before your official start date). And follow up proactively, every 2–3 weeks, rather than waiting for the payer to reach out.",
      },
      {
        body:
          "Because credentialing is mostly about persistent follow-up rather than complex paperwork, it's one of the easiest things to hand off — freeing you up to focus on clients while someone else tracks the process to completion.",
      },
    ],
  },
  {
    slug: "daily-claim-submission-vs-monthly-batching",
    title: "Why Daily Claim Submission Beats Monthly Batching",
    excerpt:
      "Submitting claims once a month feels manageable, but it quietly costs practices money. Here's the math on why daily submission wins.",
    category: "Operations",
    date: "2026-03-22",
    readTime: "4 min read",
    author: "Logicware Editorial Team",
    content: [
      {
        body:
          "It's common for solo practices to let claims pile up and submit them in a batch once a month. It feels efficient — but it introduces real financial and operational risk.",
      },
      {
        heading: "Cash flow takes a hit",
        body:
          "Claims submitted at the end of the month don't get paid until weeks later. That means your practice is effectively financing a month-long gap between providing services and getting paid — every single month, on a rolling basis.",
      },
      {
        heading: "Errors compound",
        body:
          "If there's a systemic issue — an expired authorization, an eligibility problem, a coding error — batching means you won't discover it until 30 days of claims are affected, instead of catching it on day one and fixing it before it spreads.",
      },
      {
        heading: "Timely filing risk increases",
        body:
          "The closer you get to a payer's filing deadline, the less room there is to correct and resubmit a denied claim. Daily submission means denials are caught and corrected with weeks of runway left — batching can mean a denial arrives with the deadline already gone.",
      },
      {
        body:
          "Daily submission isn't about working harder — it's about building a small, repeatable habit (or outsourcing it) that protects cash flow and catches problems while they're still easy to fix.",
      },
    ],
  },
  {
    slug: "reading-your-eob-plain-english-guide",
    title: "Reading Your EOB: A Plain-English Guide for Therapists",
    excerpt:
      "Explanation of Benefits documents are dense and full of jargon. Here's how to read one in under five minutes — and what to actually pay attention to.",
    category: "Payment Posting",
    date: "2026-03-08",
    readTime: "5 min read",
    author: "Logicware Editorial Team",
    content: [
      {
        body:
          "An Explanation of Benefits (EOB) — or its electronic equivalent, an ERA — arrives after every processed claim. It's dense, full of codes and abbreviations, and easy to ignore. But it's also the single best source of information about how a payer is actually treating your claims.",
      },
      {
        heading: "The key numbers",
        body:
          "Every EOB shows the billed amount (what you charged), the allowed amount (what the payer's contract permits for that service), the paid amount (what was actually sent to you), and the patient responsibility (copay, coinsurance, or deductible the patient owes).",
      },
      {
        heading: "Adjustment and denial codes",
        body:
          "If the paid amount is less than expected, the EOB will include a code explaining why — a contractual adjustment (normal, expected), an applied deductible, or a denial code indicating a problem with the claim itself (eligibility, authorization, coding, etc.).",
      },
      {
        heading: "What to track over time",
        body:
          "A single EOB tells you about one claim. Looking at EOBs across a month tells you about patterns — are denials clustering around one payer? One CPT code? One type of error? That pattern is exactly what monthly reporting should surface, so you can fix the root cause instead of re-fighting the same denial every month.",
      },
    ],
  },
  {
    slug: "hipaa-compliance-checklist-outsourced-billing",
    title: "A HIPAA Compliance Checklist for Outsourced Billing Partners",
    excerpt:
      "If you're considering outsourcing your billing, here's what to look for to make sure your patients' data — and your practice — stay protected.",
    category: "Compliance",
    date: "2026-02-20",
    readTime: "6 min read",
    author: "Logicware Editorial Team",
    content: [
      {
        body:
          "Handing billing to an outside partner means handing over access to Protected Health Information (PHI). Before signing on with any billing company, a few HIPAA-related questions can tell you a lot about how seriously they take compliance.",
      },
      {
        heading: "1. Will they sign a Business Associate Agreement (BAA)?",
        body:
          "A BAA is a legal requirement, not a nice-to-have. Any billing partner handling PHI on your behalf must sign one before they touch a single record. If a vendor hesitates or treats this as optional, that's a red flag.",
      },
      {
        heading: "2. How is data transmitted and stored?",
        body:
          "PHI should be transmitted only through encrypted, secure channels — never over plain email. Ask how claims data, EOBs, and patient information move between your systems and theirs, and how it's stored on their end.",
      },
      {
        heading: "3. Who has access, and why?",
        body:
          "Access to PHI should be limited to the people who actually need it to do their jobs — billers and credentialing staff working on your account, not the entire company. Ask how access is controlled and reviewed.",
      },
      {
        heading: "4. What happens if something goes wrong?",
        body:
          "Ask about their breach notification process. A compliant partner should be able to clearly explain how they detect, respond to, and report potential security incidents — and how quickly they'd notify you.",
      },
      {
        body:
          "A billing partner that can answer these questions clearly — and puts a signed BAA in place before onboarding — is one that treats your patients' data with the seriousness HIPAA requires.",
      },
    ],
  },
  {
    slug: "cpt-codes-mental-health-billing-guide-2025",
    title: "CPT Codes for Mental Health Billing: A Complete Guide for Therapists (2025)",
    excerpt:
      "A detailed breakdown of every CPT code used in outpatient therapy — exact session-time thresholds, documentation requirements, and the coding mistakes most likely to trigger audits and denials.",
    category: "Billing Basics",
    date: "2026-06-10",
    readTime: "10 min read",
    author: "Logicware Editorial Team",
    content: [
      {
        body: "If you bill insurance as a therapist, your CPT codes determine how much you get paid — and whether your claims clear on the first submission. Most solo practices use fewer than a dozen procedure codes, but getting even one consistently wrong costs thousands of dollars annually in underpayments and denials. This guide covers every CPT code used in outpatient mental health billing: what each one means, exactly when to use it, what your documentation needs to say, and the specific mistakes that turn clean claims into problems.",
      },
      {
        heading: "The Intake Code: 90791 — Psychiatric Diagnostic Evaluation",
        body: "CPT 90791 is used for the comprehensive diagnostic evaluation at the first appointment — reviewing the patient's history, presenting symptoms, prior treatment, functional status, and establishing a working diagnosis and treatment plan. Reimbursement for 90791 is typically 25–40% higher than a standard therapy session, reflecting the additional complexity. Most payers allow one 90791 per patient per year; some limit it to once per provider relationship. Do not use 90791 for follow-up appointments, even if they feel like re-assessment sessions. That is a documentation mismatch auditors look for specifically.",
      },
      {
        heading: "The Three Individual Therapy Codes: 90832, 90834, and 90837",
        body: "These three codes cover the full range of individual outpatient psychotherapy sessions. They are time-based codes — the actual face-to-face session time, not the scheduled time or the appointment slot, determines which code applies. Billing the wrong code for a documented session time is one of the most common audit triggers in outpatient mental health billing.",
      },
      {
        heading: "90832 — Psychotherapy, 30 Minutes (16–37 Minutes of Actual Session Time)",
        level: 3,
        body: "90832 applies to sessions lasting between 16 and 37 minutes. This is the right code for brief check-ins, follow-ups in collaborative care, or sessions that end early. Medicare reimburses approximately $43–54 for 90832 in Delaware and the mid-Atlantic region. If a session runs 38 minutes, the correct code is 90834 — and the reimbursement difference is material enough to track on every claim.",
      },
      {
        heading: "90834 — Psychotherapy, 45 Minutes (38–52 Minutes of Actual Session Time)",
        level: 3,
        body: "90834 covers sessions lasting 38–52 minutes — the \"45-minute hour\" in practice. This code is underused because therapists default to 90837 for sessions in this range. If your documentation shows a 48-minute session, 90834 is the correct code. Medicare reimburses approximately $74–88 for 90834; commercial payers often pay 15–30% above Medicare rates. The difference between 90834 and 90837 on a single claim can be $25–50, compounding across a full caseload.",
      },
      {
        heading: "90837 — Psychotherapy, 60 Minutes (53+ Minutes of Actual Session Time)",
        level: 3,
        body: "90837 covers sessions of 53 minutes or longer and is the highest-reimbursing individual therapy code. Medicare reimburses approximately $130–152 for 90837 in Delaware, and most commercial payers reimburse 15–35% above Medicare rates. The 53-minute threshold is exact: a session documented as 52 minutes is a 90834. If you consistently run 55-minute sessions and document them accurately, billing 90837 is correct. If you are billing 90837 for sessions your notes document at 45–50 minutes, you have audit exposure.",
      },
      {
        heading: "Time Documentation: The Detail That Determines Your Code",
        body: "Because 90832, 90834, and 90837 are distinguished entirely by face-to-face time, your progress note must record start time, end time, and total session duration. \"Approximately 60 minutes\" does not hold up on audit. \"Session began at 2:04 PM and concluded at 3:06 PM — 62 minutes of psychotherapy\" does. This single-sentence addition to every note protects you against every time-code challenge. Payers are increasingly cross-referencing documented session times against billed codes when they request records — this is not a theoretical risk.",
      },
      {
        heading: "Crisis Codes: 90839 and 90840",
        body: "CPT 90839 covers the first 60 minutes of crisis psychotherapy — defined as urgent assessment and intervention for a patient in psychiatric emergency: active suicidal ideation with intent or plan, acute psychotic decompensation, or crisis-level escalation requiring immediate intervention. CPT 90840 is the add-on for each additional 30 minutes beyond the first hour. Reimbursement is substantially higher than standard session codes, but documentation requirements match: the note must establish the clinical basis for crisis-level care, the patient's specific crisis presentation, and the intervention provided. Using 90839 for a difficult session is a compliance violation, not a gray area.",
      },
      {
        heading: "Add-On Codes for Prescribers: 90833, 90836, and 90838",
        body: "Psychiatrists and prescribing PMHNPs who bill Evaluation and Management codes (99213–99215) can add a therapy component using 90833 (30 minutes), 90836 (45 minutes), or 90838 (60 minutes). These codes bundle psychotherapy with a medication management visit on the same date of service. LCSWs and LPCs cannot bill these codes — they require a base E/M code, which therapists are not licensed to generate.",
      },
      {
        heading: "Group and Family Therapy Codes",
        body: "Group and family sessions use distinct CPT codes with their own billing rules.",
        list: [
          "90853 — Group psychotherapy: one therapist, multiple patients, each patient billed separately. Per-patient reimbursement is lower than individual therapy but per-hour revenue is often comparable. Some payers require prior authorization.",
          "90847 — Family psychotherapy with patient present: the identified patient participates in the session.",
          "90846 — Family psychotherapy without patient present: collateral sessions with family members only.",
          "90849 — Multiple-family group psychotherapy: used in structured outpatient programs; uncommon in solo private practice.",
        ],
      },
      {
        heading: "The Coding Mistakes That Trigger Audits",
        body: "Most billing audits in outpatient mental health practices trace to a short list of documentation mismatches. None require intent to create compliance exposure.",
        list: [
          "Time-code mismatch: Note documents 48 minutes; claim billed 90837. The most common audit finding and the easiest to generate on a records request.",
          "Repeated 90791 use: Billing 90791 more than once per year per patient without documented clinical justification raises flags at most payers.",
          "Crisis codes without crisis documentation: A note describing a productive session billed under 90839 creates serious compliance exposure.",
          "Missing session time in notes: Any time-based code without documented start and end time is indefensible on appeal.",
          "Billing 90837 for scheduled 45-minute slots: Scheduled time and documented time are not the same — payers know this and apply it on audit.",
        ],
      },
      {
        body: "Managing CPT codes, documentation requirements, and payer-specific billing rules alongside a full clinical caseload is a real burden. Logicware handles claim submission, coding review, and denial management for mental health practices in Delaware and across the US. Contact us for a free billing audit to see where your current process has gaps.",
      },
    ],
  },
  {
    slug: "insurance-credentialing-therapist-delaware-lcsw-lpc",
    title: "How to Get Credentialed with Insurance as a Solo LCSW or LPC in Delaware",
    excerpt:
      "A step-by-step guide to credentialing with the major health plans in Delaware — including Highmark BCBS, Aetna, Cigna, United Healthcare, and DMAP — with realistic timelines and the mistakes that delay approval.",
    category: "Credentialing",
    date: "2026-06-05",
    readTime: "9 min read",
    author: "Logicware Editorial Team",
    content: [
      {
        body: "Credentialing with insurance panels is the prerequisite for billing insurance directly as a solo therapist. In Delaware, the credentialing landscape is dominated by a small number of payers — and the process for each follows a different timeline, has different documentation requirements, and involves different portals. Getting this right the first time means seeing insurance patients months sooner. Getting it wrong means resubmitting applications while your open schedule sits unfilled.",
      },
      {
        heading: "Step 1 — Obtain Your National Provider Identifier (NPI)",
        body: "Every provider who bills insurance needs a Type 1 NPI (individual). If you operate as a solo entity, you also need a Type 2 NPI for your business. Apply through the NPPES portal at nppes.cms.hhs.gov — it is free and typically processed within 3–10 business days. Your NPI is permanent and moves with you regardless of practice location or payer. If you already have one, verify that your NPPES record reflects your current address, credentials, and taxonomy code. Outdated NPPES information delays credentialing at every payer and is easy to overlook.",
      },
      {
        heading: "Step 2 — Build and Attest Your CAQH ProView Profile",
        body: "CAQH ProView is the centralized credentialing database used by virtually every commercial payer in the US. Most payers will not process your application without a complete, attested CAQH profile. The profile requires your NPI, Delaware license number and expiration date, malpractice insurance details, 10-year work history, education and training history, and a signed attestation. You must re-attest every 120 days or the profile deactivates — suspending any in-progress credentialing applications without notice. Set a recurring reminder at 90 days post-attestation. Complete CAQH fully before submitting any payer applications.",
      },
      {
        heading: "Step 3 — Apply to the Right Panels for Delaware",
        body: "Delaware is a small state with a concentrated payer market. The panels that matter most for a solo mental health practice depend on your target population, but the following cover the large majority of insured lives in the state.",
      },
      {
        heading: "Highmark Blue Cross Blue Shield Delaware",
        level: 3,
        body: "Highmark BCBS Delaware is the largest commercial payer in the state. Apply through Highmark's provider portal at providerportal.highmark.com. Timeline: 90–120 days from complete application submission. Highmark requires a fully attested CAQH profile, a copy of your Delaware license, and proof of malpractice coverage (minimum $1M per occurrence / $3M aggregate for most behavioral health providers). Effective dates are typically the first of the month following final approval — a mid-month approval means waiting until the following month to bill Highmark patients.",
      },
      {
        heading: "Highmark Health Options (Delaware Medicaid Managed Care)",
        level: 3,
        body: "Highmark Health Options is the managed care organization administering Medicaid benefits for most of Delaware's Medicaid population. Enrollment is entirely separate from commercial Highmark BCBS credentialing — being approved for one does not enroll you with the other. Apply through the Highmark Health Options provider enrollment portal separately. Timeline: 60–90 days. This panel is critical if you plan to serve Medicaid patients, foster care youth, or individuals enrolled through the Delaware Behavioral Health Consortium.",
      },
      {
        heading: "Aetna, Cigna/Evernorth, and United Healthcare",
        level: 3,
        body: "Aetna, Cigna, and United Healthcare each credential through their own portals and pull data from CAQH. Timeline: 60–90 days for Aetna and Cigna, 90–120 days for United Healthcare. Apply to all three simultaneously rather than sequentially — the applications do not conflict, and parallel submissions compress your total credentialing timeline significantly. Cigna/Evernorth mental health credentialing runs through Evernorth Behavioral Health, which has a separate portal from Cigna medical credentialing. Confirm you are in the behavioral health track.",
      },
      {
        heading: "Realistic Credentialing Timelines in Delaware",
        body: "These timelines assume a complete application and all supporting documents submitted on first request.",
        list: [
          "Highmark BCBS Delaware: 90–120 days (largest commercial payer; longer due to application volume)",
          "Highmark Health Options (Medicaid MCO): 60–90 days",
          "Delaware Medicaid DMAP fee-for-service: 30–60 days (through DXC Technology portal)",
          "Aetna: 60–90 days",
          "Cigna/Evernorth Behavioral Health: 60–90 days",
          "United Healthcare/Optum: 90–120 days",
        ],
      },
      {
        heading: "The Mistakes That Delay Credentialing Approval",
        body: "",
        list: [
          "Submitting before CAQH is fully attested: Every commercial payer checks CAQH before progressing your application. Incomplete or expired CAQH pauses your application immediately.",
          "Malpractice coverage lapse: If your policy expires during the credentialing window, most payers suspend the application until proof of renewal is submitted.",
          "License information mismatch: Discrepancies between your license number on CAQH and what the Delaware Board database shows trigger manual reviews and add weeks to the timeline.",
          "Missed follow-up requests: Payers send documentation requests by mail or portal message. Missing a 30-day response window adds 4–8 weeks.",
          "Applying to a closed panel: Some payers close their behavioral health panels when they have sufficient coverage in an area. Verify panel status before submitting.",
        ],
      },
      {
        heading: "What to Do While Waiting for Approval",
        body: "Credentialing approval does not prevent you from seeing patients — it prevents you from billing that payer for them until your effective date. During the window, see patients as self-pay and issue superbills for those with out-of-network benefits. Ask each payer about backdating: some will retroactively apply your effective date to the application submission date upon request. Knowing this before you apply lets you decide whether to see insurance patients during the approval window and hold claims for later submission.",
      },
      {
        body: "Credentialing is time-intensive work at the front of every insurance billing relationship. Logicware manages the full credentialing process for solo therapists and small practices in Delaware — from CAQH setup through payer enrollment through ongoing follow-up. Contact us to get your credentialing applications moving.",
      },
    ],
  },
  {
    slug: "superbill-vs-direct-insurance-billing-therapists",
    title: "Superbill vs. Direct Insurance Billing: What Solo Therapists Need to Know",
    excerpt:
      "The choice between superbills and direct billing shapes both your revenue and your accessible patient base. Here is how each model works and a clear framework for deciding which fits your practice.",
    category: "Billing Basics",
    date: "2026-05-28",
    readTime: "8 min read",
    author: "Logicware Editorial Team",
    content: [
      {
        body: "Solo therapists face a decision that shapes both their income and their patient base: should you credential with insurance and bill directly, or stay out-of-network and provide superbills to clients who want to seek reimbursement themselves? The answer depends on your market, your patient population, and your tolerance for administrative complexity. Both models have real tradeoffs, and many practices end up on a hybrid approach that was not obvious when they started.",
      },
      {
        heading: "What Is a Superbill and How Does It Work?",
        body: "A superbill is a detailed receipt you give a patient after their session. It includes your NPI, your tax ID, the date of service, the CPT code, the ICD-10 diagnosis code, and the fee charged. The patient submits it to their insurance company and — if they have out-of-network benefits — receives partial reimbursement directly from their insurer. You collect your full fee at the session. The administrative burden of filing the claim sits entirely with the patient. You have no contract with the insurer, no agreed rate, and no obligation to accept their reimbursement as payment in full.",
      },
      {
        heading: "The Real-World Limitations of Superbills",
        body: "Superbills are simple to produce but operate on assumptions that are often wrong in practice.",
        list: [
          "OON benefits are not universal: HMOs, EPOs, and most ACA marketplace plans have zero out-of-network mental health benefits. A superbill from a non-participating provider is worthless to those patients.",
          "High deductibles offset reimbursement: Even with OON benefits, patients typically face a separate out-of-network deductible of $3,000–$7,000 before any reimbursement applies. Most patients never meet it.",
          "Reimbursement rates are plan-controlled: Insurers reimburse OON claims at a percentage of their usual and customary rate — often 50–70% of their in-network equivalent. The patient pays the gap.",
          "Most patients do not file: A significant portion of patients who receive superbills never submit them. The process is unfamiliar and the reimbursement often disappoints relative to the effort.",
          "Limits your accessible client pool: In markets where most employer plans are HMO or EPO, the population that can realistically afford out-of-pocket therapy at your full rate is a small fraction of all insured residents.",
        ],
      },
      {
        heading: "What Direct Insurance Billing Looks Like in Practice",
        body: "With direct billing, you credential with insurance panels, submit claims to payers, and receive payment from the insurer. Patients pay only their applicable copay, coinsurance, or deductible at the session. You are typically paid within 14–30 days for commercial payers. The tradeoffs are real: your reimbursement rate is fixed by contract; payers can deny or adjust claims; prior authorization may be required; and there is an accounts receivable burden — unpaid claims, denial appeals, patient balance billing. But the accessible patient pool is dramatically larger: anyone with in-network mental health benefits can see you.",
      },
      {
        heading: "How to Decide: A Framework for Solo Therapists",
        body: "The right model depends on your specific market, patient base, and business goals. Neither is universally correct.",
      },
      {
        heading: "Superbills Make Sense If:",
        level: 3,
        body: "",
        list: [
          "You practice in a high-income market where clients regularly pay $200+ per session out-of-pocket",
          "You specialize in areas where clients expect to self-pay — executive coaching, high-conflict couples, specialized trauma work",
          "You want full control over your fee with no network rate reductions or authorization requirements",
          "You are already at clinical capacity and do not need additional referral volume from payer directories",
        ],
      },
      {
        heading: "Direct Billing Makes Sense If:",
        level: 3,
        body: "",
        list: [
          "You want to serve a broad patient population that cannot afford $150–$250 per session privately",
          "You are building a practice and need consistent referral volume and directory visibility",
          "Your market has predominantly HMO or EPO plans with no out-of-network benefits",
          "You plan to serve Medicaid patients, foster care youth, or underserved populations",
        ],
      },
      {
        heading: "The Hybrid Model Most Successful Solo Practices Use",
        body: "Many established solo therapists end up credentialing with one or two plans that drive the most patient volume in their market, while seeing out-of-network or self-pay patients for the rest of their caseload. In Delaware, that typically means credentialing with Highmark BCBS Delaware — by far the largest commercial payer — and DMAP or Highmark Health Options if serving Medicaid patients, while staying out-of-network with smaller plans that have low reimbursement or burdensome authorization requirements.",
      },
      {
        heading: "The Hidden Cost of Avoiding Insurance Entirely",
        body: "Staying fully out-of-network feels like the simpler path, but it comes with a revenue ceiling that is hard to break through in most markets. The practices that navigate this most successfully are intentional about which panels they join — not trying to avoid insurance entirely or joining every network. Running the actual numbers for your local market — payer mix, target patient demographics, your fee against realistic OON reimbursement — is the only way to make this decision based on your specific situation.",
      },
      {
        body: "If you are weighing whether to credential with insurance or prefer to stay out-of-network, Logicware can walk you through what the billing model would look like for your practice in Delaware. We handle credentialing and direct billing for solo therapists and small practices. Contact us for a free consultation.",
      },
    ],
  },
  {
    slug: "mental-health-insurance-claim-denials-how-to-fix",
    title: "The Most Common Mental Health Insurance Claim Denials — and How to Fix Them",
    excerpt:
      "A denial rate above 10% signals a systematic problem in your billing workflow. Here are the most common mental health claim denials, what causes each one, and exactly how to address them.",
    category: "Denial Management",
    date: "2026-05-22",
    readTime: "9 min read",
    author: "Logicware Editorial Team",
    content: [
      {
        body: "A mental health claim denial is not just lost revenue from one session — it signals that something in your billing workflow is producing claims payers will not pay on first submission. The national first-pass acceptance rate for mental health claims averages approximately 85–88%. For a practice billing $200,000 per year, a 12% denial rate is $24,000 in claims requiring rework — and anything that goes unworked becomes write-off. Here are the denials that drive the most revenue leakage in outpatient mental health practices, and what to do about each one.",
      },
      {
        heading: "CO-4: Non-Covered Service",
        body: "CO-4 means the procedure code billed is not covered under this patient's specific plan. In mental health, this most commonly hits CPT 90791 on plans that limit psychiatric diagnostic evaluations, or CPT 90853 on individual plans that exclude group therapy. CO-4 is almost never appealable — the plan does not cover the service. The only fix is prevention: verify specific coverage for the codes you plan to bill before every first appointment. A three-minute call to the payer's provider line asking whether CPT 90791 is covered under this member's plan eliminates every CO-4 denial.",
      },
      {
        heading: "CO-11: Diagnosis Inconsistent with Procedure",
        body: "CO-11 means the ICD-10 diagnosis code does not align with the procedure code billed. This most commonly appears when therapists use unspecified codes — F41.9 (Anxiety Disorder, Unspecified) or F32.9 (Major Depressive Disorder, Unspecified) — that some payers flag for review. The fix is to use the most clinically accurate, most specific ICD-10 code the patient's presentation supports. F41.1 (Generalized Anxiety Disorder) is specific. F33.1 (Major Depressive Disorder, Recurrent, Moderate) is specific. More specific codes clear faster and are less likely to trigger manual review.",
      },
      {
        heading: "CO-22: Prior Authorization Required or Exceeded",
        body: "CO-22 appears when a session was provided without required prior authorization, or when sessions billed exceed what was authorized. Some payers — particularly Optum/United Healthcare and many Aetna plans — require prior authorization for outpatient mental health. Others require it after a session threshold, commonly 8–12 sessions per calendar year. Build a per-payer authorization tracker: which plans require auth, what the initial authorization covers, and when to reauthorize. Submit reauthorization requests before you exhaust approved sessions — reauthorization takes 3–10 business days.",
      },
      {
        heading: "CO-29: Timely Filing Exceeded",
        body: "CO-29 means the claim was submitted after the payer's filing deadline. Most commercial payers allow 90–180 days from date of service; Medicare allows 12 months; Delaware Medicaid (DMAP) allows 365 days. CO-29 denials are almost never appealable — once the filing window closes, the claim is lost. The only prevention is submitting claims promptly: daily is ideal, but at minimum within a weekly billing cycle. Claims sitting in a queue for 4–6 weeks are a material financial risk.",
      },
      {
        heading: "CO-50: Not Medically Necessary",
        body: "CO-50 means the payer determined the service was not medically necessary — either through automated claim review or after requesting records. In mental health, this surfaces when documentation does not clearly justify ongoing treatment. Notes that say \"patient reports doing well, continued supportive therapy\" give payers grounds to deny. Every progress note should document the patient's current symptom level, how symptoms affect daily functioning, what specific interventions were used, and the patient's clinical response. \"Patient reports decreased panic attack frequency from daily to 2–3 times per week; workplace avoidance ongoing; session focused on CBT exposure hierarchy\" supports medical necessity. \"Patient is doing better\" does not.",
      },
      {
        heading: "CO-97: Benefit Not Included in Benefit Package",
        body: "CO-97 indicates that mental health benefits are not included in the patient's plan at all — distinct from CO-4 where a specific code is not covered. This occurs with grandfathered employer plans not subject to ACA mental health parity requirements, limited benefit plans, and short-term health plans. The fix is the same as CO-4: verify benefits before the first appointment, asking specifically whether the plan covers outpatient mental health services.",
      },
      {
        heading: "PR-1: Deductible Amount Applied",
        body: "PR-1 is patient responsibility, not a denial — the claim processed correctly, and the deductible portion is applied to the patient's balance. It appears on your ERA as a zero-payment line and requires you to bill the patient. This surprises both therapists and patients, particularly in January when annual deductibles reset. Verify deductible amounts and how much has been met at the start of every calendar year, and inform patients proactively if they should expect deductible payments on upcoming sessions.",
      },
      {
        heading: "Building a Denial Prevention System",
        body: "Practices with the lowest denial rates share a consistent set of habits.",
        list: [
          "Verify benefits before every initial appointment — ask specifically about the CPT codes you plan to bill",
          "Submit claims within 24–48 hours of each session — never let claims sit in a queue",
          "Maintain a per-payer authorization tracker with session counts and renewal thresholds",
          "Review all denied claims within 10 business days — appeals and resubmissions have their own deadlines",
          "Track your denial rate monthly by code category and investigate anything running above 5%",
        ],
      },
      {
        body: "If your denial rate is above 10%, or if you are regularly writing off claims you do not have time to appeal, Logicware can help. We provide denial management and claims follow-up for mental health practices in Delaware and nationwide. Contact us to learn what a clean billing process looks like for your practice.",
      },
    ],
  },
  {
    slug: "should-you-outsource-mental-health-billing",
    title: "Should You Outsource Your Mental Health Billing? (Pros, Cons & What to Look For)",
    excerpt:
      "For most solo therapists spending more than a few hours a week on claims, the financial case for outsourcing is usually clear. Here is how to evaluate the decision honestly and what to look for in a billing company.",
    category: "Operations",
    date: "2026-05-15",
    readTime: "8 min read",
    author: "Logicware Editorial Team",
    content: [
      {
        body: "The decision to outsource billing is not just about time — it is about whether the revenue you are losing to unworked denials, delayed submissions, and stalled credentialing is more than the cost of bringing in someone who specializes in it. For some practices, in-house billing is the right answer: the volume is manageable and handled efficiently. For most solo therapists without administrative staff, billing competes directly with clinical hours for time — and the math almost always favors outsourcing once a practice exceeds 10 sessions per week.",
      },
      {
        heading: "The Five Signs Your Billing Is Costing You Money",
        body: "None of these require an audit to identify — they show up in day-to-day operations.",
        list: [
          "Average AR days above 45: Most commercial payers pay within 14–30 days. AR regularly past 45 days means something in your submission or follow-up process is not working.",
          "Denial rate above 10%: A first-pass acceptance rate below 90% means 1 in 10 claims requires rework. At 20 sessions per week, that is 2 denied claims every week needing correction and resubmission.",
          "Unknown collection rate: Your collection rate is the percentage of billed charges actually collected. If you do not know yours, you do not know whether claims are being systematically underpaid or written off.",
          "Unworked aging claims: Claims need active follow-up after 30 days if unpaid. Claims past 60–90 days without action convert to write-offs or CO-29 denials — revenue lost permanently.",
          "Unfinished credentialing applications: Every month a credentialing application sits incomplete is another month you cannot bill that payer — quantifiable lost revenue that compounds.",
        ],
      },
      {
        heading: "What Full-Service Mental Health Billing Includes",
        body: "Scope varies significantly by company. Full-service mental health billing typically covers:",
        list: [
          "Eligibility verification and benefits checks before each appointment",
          "Electronic claim submission within 24–48 hours of each session",
          "Payment posting — ERA and paper EOB processing and reconciliation",
          "Denial management — appeals, resubmissions, and payer follow-up calls",
          "Patient statement generation and balance billing",
          "Monthly reporting — collection rate, AR aging, denial rate by code and payer",
          "Credentialing support (offered by some companies — confirm in writing what is included)",
        ],
      },
      {
        heading: "The Case for Keeping Billing In-House",
        body: "In-house billing makes sense when you have staff with dedicated time to stay current on payer rules, submit daily, and work denials within 10 days. It also makes sense if your billing volume is low enough that a billing company's minimum monthly fee would not be offset by improved collections. If your denial rate is below 5%, AR days below 30, and collection rate above 95%, your current process is performing well and outsourcing would primarily be a time trade rather than a revenue improvement.",
      },
      {
        heading: "The Case for Outsourcing",
        body: "For solo therapists without administrative support, billing time is clinical time not being billed. If you value non-clinical time at $75/hour — conservative for most licensed clinicians — and billing takes 5 hours per week, that is $375/week or approximately $19,500/year in time cost. A billing company for a 20-session-per-week practice typically costs $6,000–$10,000/year. The math favors outsourcing before accounting for the improvement in collection rates. A practice billing $200,000/year that improves its collection rate from 87% to 96% nets an additional $18,000 — more than the annual billing service cost.",
      },
      {
        heading: "How to Evaluate a Mental Health Billing Company",
        body: "Not all billing companies understand mental health coding. A company specializing in primary care or orthopedics will make behavioral health coding errors on every claim.",
        list: [
          "Mental health specialty: They must be fluent in the outpatient therapy code set (90832–90837, 90791, 90839) and payer-specific behavioral health authorization rules.",
          "Willingness to sign a Business Associate Agreement: A BAA is a legal requirement for any company handling your patients' PHI. No BAA means no deal.",
          "Transparent monthly reporting: You should receive reports showing AR aging, collection rate, and denial rate. A billing company that withholds this data has something to hide.",
          "Defined denial management process: What is their SLA for working denials? Who performs appeals? What is their appeal success rate? Get specifics before signing.",
          "References from comparable practices: Ask for references from solo therapists or small group practices, not hospital systems.",
        ],
      },
      {
        heading: "What Outsourced Billing Typically Costs",
        body: "Most mental health billing companies charge a percentage of collections (4–8%) or a flat fee per claim ($0.50–$2.50). For a solo therapist seeing 20 patients per week at an average reimbursement of $140, percentage-based billing at 6% costs approximately $8,736 per year. If that practice is currently losing 10% of claims to unworked denials — $14,560 annually at that volume — the billing service more than pays for itself if it converts even half those denials into collections.",
      },
      {
        heading: "Questions to Ask Before You Sign",
        body: "",
        list: [
          "What is your current average first-pass acceptance rate for mental health billing clients?",
          "What is your process and timeline when a claim is denied — who works it and how quickly?",
          "Do you handle prior authorization, or only claim submission after authorization is obtained?",
          "Will I have a portal showing my real-time AR and claim status?",
          "What is the contract term and process for terminating if the relationship is not working?",
          "Do you charge your percentage on denied and written-off claims, or only on collected payments?",
        ],
      },
      {
        body: "Logicware specializes in billing for mental health practices in Delaware and across the US. We handle credentialing, claim submission, denial management, and monthly reporting — with transparent pricing and no long-term contracts. Contact us for a free consultation to see what our billing process would look like for your practice.",
      },
    ],
  },
  {
    slug: "delaware-medicaid-mental-health-billing-dmap",
    title: "Delaware Medicaid Mental Health Billing: What Therapists Need to Know",
    excerpt:
      "Delaware Medicaid runs on two parallel tracks — DMAP fee-for-service and Highmark Health Options managed care — and routing claims to the wrong one is the most common billing mistake Delaware therapists make.",
    category: "Compliance",
    date: "2026-05-08",
    readTime: "9 min read",
    author: "Logicware Editorial Team",
    content: [
      {
        body: "Delaware Medicaid — formally DMAP, the Delaware Medical Assistance Program — is a critical payer for mental health practices serving low-income adults, families, foster children, and individuals with serious mental illness in Delaware. But DMAP billing is not the same as commercial insurance billing. The enrollment process, claim routing, authorization rules, and reimbursement rates are all different. Getting them right requires understanding how Delaware has structured its Medicaid program — specifically the split between managed care and fee-for-service that routinely trips up practices new to the state.",
      },
      {
        heading: "How Delaware Medicaid Is Structured for Mental Health",
        body: "Delaware Medicaid operates through two tracks, and determining which applies to each patient is the most critical step in DMAP billing. The majority of Delaware Medicaid enrollees receive benefits through Highmark Health Options, the state-contracted Managed Care Organization (MCO). A smaller population — including certain aged, blind, and disabled individuals and some foster care children — receives benefits through DMAP fee-for-service (FFS), administered through DXC Technology. Submitting a claim to the wrong payer is the most common DMAP billing error. The solution is always to verify a patient's specific plan at the time of their appointment — not just confirm they have a Delaware Medicaid card.",
      },
      {
        heading: "Enrolling as a Delaware Medicaid Mental Health Provider",
        body: "To bill Delaware Medicaid, you must complete two separate enrollment processes. First: enrollment with DMAP fee-for-service through the Delaware MMIS provider portal, administered by DXC Technology. Second: separate credentialing with Highmark Health Options if you plan to see managed care Medicaid patients. These are independent processes — being enrolled in DMAP FFS does not make you a participating provider with Highmark Health Options, and vice versa. LCSWs and LPCs are eligible to enroll as independent billing providers under Delaware Medicaid. No physician supervision is required.",
      },
      {
        heading: "DMAP Enrollment Timeline",
        body: "DMAP fee-for-service enrollment takes approximately 30–60 days from complete application submission. Highmark Health Options credentialing runs 60–90 days. Both require your Type 1 NPI, Delaware license number, malpractice insurance certificate, and a W-9. Unlike commercial credentialing, DMAP FFS does not use CAQH — you submit documents directly through the DXC Technology provider enrollment portal. Highmark Health Options does use CAQH, so your CAQH profile must be fully attested before applying. Submit both applications simultaneously to minimize your start date.",
      },
      {
        heading: "CPT Codes Covered Under Delaware Medicaid",
        body: "Delaware Medicaid covers the standard outpatient mental health CPT code set for independently practicing LCSWs and LPCs.",
        list: [
          "90791 — Psychiatric Diagnostic Evaluation (initial assessment; generally once per year per provider relationship)",
          "90832 — Psychotherapy, 30 minutes (16–37 minutes of face-to-face time)",
          "90834 — Psychotherapy, 45 minutes (38–52 minutes of face-to-face time)",
          "90837 — Psychotherapy, 60 minutes (53+ minutes of face-to-face time)",
          "90853 — Group Psychotherapy (billed separately for each group participant)",
          "90847 — Family Psychotherapy with patient present",
          "90846 — Family Psychotherapy without patient present",
          "90839 — Crisis Psychotherapy, first 60 minutes (requires crisis-level clinical documentation)",
          "90840 — Crisis Psychotherapy add-on per additional 30 minutes",
        ],
      },
      {
        heading: "Prior Authorization Under Delaware Medicaid",
        body: "Delaware Medicaid requires prior authorization for mental health services beyond a specific session threshold. Under Highmark Health Options, prior authorization is generally required after 20 outpatient mental health sessions per calendar year. Under DMAP FFS, authorization thresholds are similar but administered separately. IOPs and PHPs require prior authorization from the first session. Track authorized session counts carefully — claims submitted beyond authorized limits result in automatic CO-22 denials with no appeal pathway unless authorization was in place.",
      },
      {
        heading: "Delaware Medicaid Reimbursement Rates",
        body: "DMAP reimbursement rates are set by the state and run below commercial payer rates. These are approximate 2024 fee schedule rates for the most common codes billed by LCSWs and LPCs.",
        list: [
          "90791 (Psychiatric Diagnostic Evaluation): approximately $135–148",
          "90837 (60-minute individual therapy): approximately $89–98",
          "90834 (45-minute individual therapy): approximately $68–74",
          "90832 (30-minute individual therapy): approximately $50–58",
          "90853 (Group therapy per patient): approximately $32–41",
        ],
      },
      {
        heading: "Billing Highmark Health Options vs. DMAP Fee-for-Service",
        body: "Highmark Health Options claims are submitted to Highmark's clearinghouse — Payer ID 23284 for most professional claims. DMAP FFS claims are submitted to DXC Technology — Payer ID 77003. Submitting a Highmark Health Options patient's claim to the DMAP FFS payer ID, or vice versa, produces a CO-4 or CO-97 denial requiring a corrected claim resubmission while the timely filing clock continues. Before billing any Medicaid patient's session, verify which track they are on by calling the provider services number on the back of their Medicaid card.",
      },
      {
        heading: "Telehealth Under Delaware Medicaid",
        body: "Delaware has maintained Medicaid coverage for behavioral health telehealth following the COVID-19 public health emergency. As of 2024, synchronous audio-video telehealth for outpatient mental health is covered. Audio-only (phone-only) telehealth has more limited coverage. When billing telehealth, use Place of Service code 02 (telehealth at a location other than the patient's home) or POS 10 (telehealth at the patient's home), and append modifier 95 to indicate the service was rendered via telehealth. Missing modifier 95 is a frequent cause of Delaware Medicaid telehealth claim denials.",
      },
      {
        heading: "The Most Common DMAP Billing Mistakes",
        body: "",
        list: [
          "Routing claims to the wrong payer — submitting to DMAP FFS for a Highmark Health Options patient or vice versa",
          "Billing beyond authorized session limits without renewing prior authorization",
          "Missing modifier 95 or using the wrong place-of-service code for telehealth sessions",
          "Failing to complete Highmark Health Options enrollment separately from DMAP FFS enrollment",
          "Billing 90791 more than once per year without documented clinical justification",
        ],
      },
      {
        body: "Delaware Medicaid billing requires precise payer routing, authorization tracking, and fluency with the DMAP structure that catches many providers off guard. Logicware handles Medicaid billing for mental health practices in Delaware — including DMAP enrollment, Highmark Health Options credentialing, and ongoing claim management. Contact us to discuss what billing Delaware Medicaid patients would look like for your practice.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
