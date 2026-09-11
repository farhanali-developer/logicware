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
    slug: "common-reasons-dental-claims-get-denied",
    title: "5 Common Reasons Dental Claims Get Denied (And How to Fix Them)",
    excerpt:
      "Denials drain time and revenue from every practice. Here are the five causes we run into most often, and the process fixes that keep them from happening again.",
    category: "Denial Management",
    date: "2026-05-18",
    readTime: "6 min read",
    author: "Logicware Editorial Team",
    content: [
      {
        body:
          "Claim denials are one of the biggest hidden costs in a dental practice. Every one means delayed payment and extra work for someone on your team, and if it doesn't get corrected in time, it's revenue you never collect at all. The good news: most denials trace back to a handful of recurring, preventable issues. Fix the process and the denials mostly take care of themselves.",
      },
      {
        heading: "1. Eligibility wasn't verified before the appointment",
        body:
          "Coverage changes month to month, especially with employer group plans. If a patient's plan lapsed or their employer switched carriers, the claim comes back denied for no coverage, even though they were covered at their last visit. Checking eligibility before every new patient's first appointment, and periodically for recall patients, catches this before it turns into a billing headache.",
      },
      {
        heading: "2. No pre-treatment estimate or prior authorization on file",
        body:
          "Some plans, particularly Medicaid managed care and certain PPOs, want a pre-treatment estimate before major work like crowns, root canals, or periodontal surgery. Skip that step and the claim gets denied no matter how clean the coding is. Keep a simple list of which payers require pre-authorization and for which procedures, and this stops being a surprise.",
      },
      {
        heading: "3. The documentation doesn't back up the code",
        body:
          "Payers check whether the CDT code you billed is actually supported by what's on file: radiographs, periodontal charting, or a written narrative. Bill a crown without a pre-op X-ray showing why it was needed, and expect a denial or a request for more records. Keep your tooth numbers, surfaces, and documentation lined up with the code you're billing and this mostly goes away.",
      },
      {
        heading: "4. Timely filing limits",
        body:
          "Every payer sets a deadline for submitting claims, usually somewhere between 90 and 365 days from the date of service. Miss it and the claim is denied for good; no appeal brings it back. Submitting daily instead of batching claims at month's end is the single best protection against this.",
      },
      {
        heading: "5. Duplicate submissions",
        body:
          "When claim status isn't tracked carefully, it's easy to accidentally resend a claim that's already being processed, which triggers a duplicate-claim denial. A simple system for tracking where each claim stands (submitted, paid, denied, appealed) prevents this kind of unforced error.",
      },
      {
        body:
          "Most denials aren't coding problems. They're process problems. Submit daily, check eligibility up front, and keep documentation tight, and the majority of these disappear before they ever become a denial.",
      },
    ],
  },
  {
    slug: "cdt-codes-d0120-vs-d0150",
    title: "CDT Codes Every Dentist Should Know: D0120 vs. D0150",
    excerpt:
      "Two of the most-used codes in dental billing, explained plainly: what they mean, when to use each one, and how payers treat them differently.",
    category: "Billing Basics",
    date: "2026-05-10",
    readTime: "4 min read",
    author: "Logicware Editorial Team",
    content: [
      {
        body:
          "If you handle your own billing, two codes show up constantly: D0120 and D0150. Getting the difference right matters more than it might seem. It affects how quickly you get paid and whether a claim gets quietly downgraded by the payer before it ever reaches your bank account.",
      },
      {
        heading: "D0120: Periodic Oral Evaluation",
        body:
          "This is the routine recall exam that happens alongside a cleaning every six months for an established patient. It covers a health history update and an oral cancer screening, but it's not a full diagnostic workup. Most payers allow it twice a year. Bill it more often than that and you're almost guaranteed a denial or a downgrade.",
      },
      {
        heading: "D0150: Comprehensive Oral Evaluation",
        body:
          "This is the code for a new patient's first exam, or for a returning patient who hasn't been in for years or has had a significant health change. It covers a full evaluation of hard and soft tissues, an initial periodontal assessment, and a treatment plan. Most payers only allow it once per provider, per patient, so billing it again too soon is one of the fastest ways to trigger a claim review.",
      },
      {
        heading: "Why the distinction matters",
        body:
          "Bill D0150 for a routine six-month recall, or D0120 for a patient's very first exam at your practice, and you're inviting a downgrade or a records request. Get in the habit of using the right code every time, and make sure your chart notes actually support which exam was performed. That habit protects your practice if a payer ever comes asking for records.",
      },
    ],
  },
  {
    slug: "verify-dental-insurance-benefits-before-first-visit",
    title: "How to Verify Dental Insurance Benefits Before a Patient's First Visit",
    excerpt:
      "What insurance verification actually involves, and why doing it before the first appointment saves both you and your patient from an awkward bill later.",
    category: "Insurance Verification",
    date: "2026-04-28",
    readTime: "5 min read",
    author: "Logicware Editorial Team",
    content: [
      {
        body:
          "Nothing sours a new patient relationship faster than an unexpected bill. Verifying benefits before the first appointment takes 10 to 15 minutes per patient, but it sets clear expectations and saves you the awkward conversation later, especially once treatment goes beyond a routine cleaning.",
      },
      {
        heading: "What to actually check",
        body:
          "At a minimum, confirm active coverage, the remaining annual maximum, how much of the deductible has been met, frequency limits on cleanings and X-rays, waiting periods on basic or major services, whether the plan has a missing tooth clause, and whether the patient has a secondary plan that needs coordination of benefits.",
      },
      {
        heading: "How to actually verify it",
        body:
          "Most major dental payers, Delta Dental, MetLife, Cigna Dental, Guardian, Aetna Dental, have an online portal where you can check eligibility and remaining benefits in real time. For details that don't show up cleanly online, especially frequency limits and waiting periods buried in the plan's fine print, you'll often need to call the number on the back of the card. Write down the date, the rep's name, and the reference number every time you call.",
      },
      {
        heading: "Setting expectations with the patient",
        body:
          "Once you've verified everything, walk the patient through a written treatment plan estimate: what the plan covers, what they'll likely owe, and whether the planned procedure needs a pre-treatment estimate before you proceed. Handing over a clear estimate before treatment starts avoids the awkward conversation at checkout.",
      },
    ],
  },
  {
    slug: "in-network-vs-out-of-network-dental-billing",
    title: "In-Network vs. Out-of-Network Billing: What Solo Dentists Need to Know",
    excerpt:
      "Joining insurance panels affects your fee schedule and your billing workload in ways that aren't always obvious upfront. Here's how to think through the tradeoffs.",
    category: "Billing Basics",
    date: "2026-04-15",
    readTime: "7 min read",
    author: "Logicware Editorial Team",
    content: [
      {
        body:
          "Whether to accept insurance, and which panels to join, is one of the bigger business decisions a solo dentist makes. It shapes your patient pipeline, your fee schedule, and how much administrative work your practice takes on.",
      },
      {
        heading: "In-network billing",
        body:
          "Joining a payer's network means agreeing to their contracted, UCR-based fee schedule in exchange for being listed in their directory, which is a steady referral source for a lot of practices. The tradeoff is a lower fee per procedure and more billing overhead. You submit a claim for every visit, and anything above the contracted rate has to be written off rather than billed to the patient.",
      },
      {
        heading: "Out-of-network billing",
        body:
          "Out-of-network providers set their own fees and usually get paid directly by the patient at the time of service. The patient can then seek reimbursement if their plan has out-of-network benefits. That means less billing work for you, but it puts financial risk on the patient, which can shrink your accessible patient pool in markets where narrow-network PPO plans dominate.",
      },
      {
        heading: "A hybrid approach",
        body:
          "A lot of practices land somewhere in the middle: in-network with the one or two payers that drive the most volume in their market, out-of-network with everyone else. What's right for you depends on your local market, your case mix, and how much billing work you're willing to take on or hand off.",
      },
      {
        body:
          "Whichever way you go, the billing workload doesn't have to fall on you personally. Outsourcing claim submission, payment posting, and credentialing lets you take insurance without taking on a second job as a biller.",
      },
    ],
  },
  {
    slug: "dental-credentialing-101-how-long-does-it-take",
    title: "Credentialing 101: How Long Does It Really Take?",
    excerpt:
      "Credentialing timelines are one of the most common frustrations for new dental practices. Here's a realistic look at what to expect from each major payer.",
    category: "Credentialing",
    date: "2026-04-02",
    readTime: "5 min read",
    author: "Logicware Editorial Team",
    content: [
      {
        body:
          "If you've started applying to insurance panels, you've probably already found the most frustrating part: the wait. Timelines vary a lot by payer, and knowing what to expect up front saves a lot of stress.",
      },
      {
        heading: "Typical timelines",
        body:
          "Most major dental payers, Delta Dental, MetLife, Cigna Dental, Guardian, Aetna Dental, take 60 to 120 days from a complete application to an effective date. State Medicaid dental programs run 30 to 90 days depending on the state and the vendor administering the benefit. Some payers also cap how many applications they process in a given area, so even a flawless application can sit in a queue for weeks before anyone looks at it.",
      },
      {
        heading: "What actually slows things down",
        body:
          "Usually it's something small: an expired malpractice policy, a lapsed license, a missing W-9, or a mismatch between your NPPES record and your license. Payers rarely flag these proactively. The application just sits there until someone follows up.",
      },
      {
        heading: "How to speed it up",
        body:
          "Keep your license, malpractice coverage, and DEA registration current well before you apply. A lapse mid-application stalls everything. Submit as early as you can (credentialing can often start before your official start date at a practice), and follow up every two to three weeks instead of waiting for the payer to reach out.",
      },
      {
        body:
          "Credentialing is mostly persistent follow-up, not complicated paperwork, which is exactly why it's one of the easiest things to hand off. That frees you up to focus on patients while someone else chases the process to completion.",
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
          "It's common for solo practices to let claims pile up and submit them in one batch at month's end. It feels efficient. It also introduces real financial and operational risk that most practices don't notice until it's already cost them money.",
      },
      {
        heading: "Cash flow takes a hit",
        body:
          "Claims submitted at the end of the month don't get paid until weeks after that. Your practice ends up financing a month-long gap between providing treatment and getting paid for it, every single month, on a rolling basis.",
      },
      {
        heading: "Errors compound",
        body:
          "If there's a systemic issue, a missing radiograph, an eligibility problem, a coding mistake, batching means you don't find out until 30 days of claims are affected instead of catching it on day one and fixing it before it spreads.",
      },
      {
        heading: "Timely filing risk goes up",
        body:
          "The closer you get to a payer's filing deadline, the less room you have to correct and resubmit a denied claim. Submit daily and denials get caught with weeks of runway left. Batch monthly and a denial can show up with the deadline already gone.",
      },
      {
        body:
          "Daily submission isn't about working harder. It's a small, repeatable habit, one you can hand off entirely, that protects cash flow and catches problems while they're still easy to fix.",
      },
    ],
  },
  {
    slug: "reading-your-eob-plain-english-guide-dentists",
    title: "Reading Your EOB: A Plain-English Guide for Dentists",
    excerpt:
      "Explanation of Benefits documents are dense and full of jargon. Here's how to read one in under five minutes, and what actually matters on it.",
    category: "Payment Posting",
    date: "2026-03-08",
    readTime: "5 min read",
    author: "Logicware Editorial Team",
    content: [
      {
        body:
          "An Explanation of Benefits, or its electronic equivalent, an ERA, shows up after every processed claim. It's dense, full of codes and abbreviations, and easy to ignore. It's also the single best source of information about how a payer is actually treating your claims, if you know what to look for.",
      },
      {
        heading: "The numbers that matter",
        body:
          "Every EOB shows the billed amount (what you charged), the allowed amount (the UCR or contracted amount the payer's fee schedule permits), the paid amount (what actually landed in your account), and the patient responsibility (deductible, coinsurance, or anything above the allowed fee).",
      },
      {
        heading: "Adjustment and denial codes",
        body:
          "When the paid amount is less than you expected, the EOB includes a code explaining why: a contractual write-off (normal for in-network claims), an applied deductible, a frequency limit, an annual maximum reached, or a denial tied to the claim itself, like eligibility, missing documentation, or a missing tooth clause.",
      },
      {
        heading: "What to track over time",
        body:
          "One EOB tells you about one claim. A month of them tells you about patterns. Are denials clustering around one payer? One procedure code? One kind of documentation gap? That pattern is exactly what your monthly reporting should surface, so you fix the root cause instead of re-fighting the same denial every month.",
      },
    ],
  },
  {
    slug: "hipaa-compliance-checklist-outsourced-dental-billing",
    title: "A HIPAA Compliance Checklist for Outsourced Billing Partners",
    excerpt:
      "Thinking about outsourcing your billing? Here's what to look for to make sure your patients' data, and your practice, stay protected.",
    category: "Compliance",
    date: "2026-02-20",
    readTime: "6 min read",
    author: "Logicware Editorial Team",
    content: [
      {
        body:
          "Handing billing to an outside partner means handing over access to Protected Health Information. Before you sign with any billing company, a few HIPAA questions will tell you a lot about how seriously they actually take compliance.",
      },
      {
        heading: "1. Will they sign a Business Associate Agreement?",
        body:
          "A BAA isn't optional. Any billing partner handling PHI on your behalf needs to sign one before they touch a single record. If a vendor hesitates on this, or treats it as a nice-to-have, that's a red flag worth taking seriously.",
      },
      {
        heading: "2. How is data actually transmitted and stored?",
        body:
          "PHI should move only through encrypted, secure channels, never plain email. Ask how claims data, EOBs, radiographs, and patient information move between your systems and theirs, and where it lives once it gets there.",
      },
      {
        heading: "3. Who has access, and why?",
        body:
          "Access should be limited to the people who actually need it: the billers and credentialing staff working your account, not the whole company. Ask how access is controlled and how often it's reviewed.",
      },
      {
        heading: "4. What's the plan if something goes wrong?",
        body:
          "Ask how they handle breaches. A compliant partner should be able to walk you through how they detect, respond to, and report a security incident, and how fast they'd tell you about it.",
      },
      {
        body:
          "A billing partner who can answer these clearly, and has a signed BAA ready before onboarding starts, is treating your patients' data with the seriousness HIPAA actually requires.",
      },
    ],
  },
  {
    slug: "cdt-codes-dental-billing-guide-2025",
    title: "CDT Codes for Dental Billing: A Complete Guide for Dentists (2025)",
    excerpt:
      "A practical breakdown of the CDT codes general dentistry runs on: documentation requirements, surface and tooth-numbering rules, and the mistakes that trigger downgrades and denials.",
    category: "Billing Basics",
    date: "2026-06-10",
    readTime: "10 min read",
    author: "Logicware Editorial Team",
    content: [
      {
        body: "Your CDT codes determine how much you get paid and whether a claim clears on the first try. Most general practices work from a few dozen codes on a regular basis, but getting even a handful of them consistently wrong adds up to thousands of dollars a year in downgrades and denials. This guide covers the codes that come up most in general dentistry: what each one means, when to use it, what your documentation needs to say, and the mistakes that turn a clean claim into a problem.",
      },
      {
        heading: "The exam codes: D0120 vs. D0150",
        body: "D0120 (Periodic Oral Evaluation) is the routine recall exam that runs alongside a hygiene visit for an established patient. Most payers allow it twice a year. D0150 (Comprehensive Oral Evaluation) is the full diagnostic workup for a new patient, or for an established patient coming back after a long gap or a major health change. Most payers only allow it once per provider, per patient. Bill D0150 for a routine six-month recall and you're likely looking at a downgrade to D0120 reimbursement, or an outright denial pending records.",
      },
      {
        heading: "Preventive codes: prophylaxis and fluoride",
        body: "D1110 (Prophylaxis, Adult) and D1120 (Prophylaxis, Child) cover routine cleanings and are almost universally capped at twice a calendar year across commercial and Medicaid dental plans. D1206 (Topical Fluoride Varnish) and D1208 (Topical Fluoride, Other) are usually covered for children, and increasingly for adults with documented caries risk, but a lot of adult plans exclude fluoride entirely or cap it at once a year. Verify before applying it chairside if a patient wants to avoid a surprise charge.",
      },
      {
        heading: "Restorative codes: amalgam and composite by surface count",
        body: "Restorative fillings are billed by material and surface count, and surface count, not the tooth itself, is what determines the code. Getting the surface count wrong is one of the most common billing errors in general dentistry, and one of the easiest for a payer to catch against your submitted radiographs.",
      },
      {
        heading: "D2140/D2330: one surface (amalgam / resin composite)",
        level: 3,
        body: "D2140 covers a one-surface amalgam restoration; D2330 covers a one-surface resin composite restoration on an anterior tooth (D2391 is the posterior composite equivalent). These are the most frequently billed restorative codes in a general practice. Single-surface reimbursement typically runs $120 to $180 for amalgam and $130 to $200 for composite under commercial plans, with Medicaid fee schedules running well below that.",
      },
      {
        heading: "D2150/D2331: two surfaces",
        level: 3,
        body: "D2150 (amalgam) and D2331 (anterior composite) / D2392 (posterior composite) apply when the restoration involves two distinct surfaces of the same tooth. Make sure the chart note and radiograph clearly support two surfaces. Billing two when only one was restored is exactly the kind of documentation mismatch payers flag on review.",
      },
      {
        heading: "D2160/D2161 and D2332/D2393/D2394: three or more surfaces",
        level: 3,
        body: "D2160 (three-surface amalgam) and D2161 (four or more surfaces), along with their composite equivalents D2332, D2393, and D2394, cover more extensive restorations. Reimbursement scales with surface count, and the gap between a two-surface and three-surface claim can run $40 to $80. Surfaces need to be documented individually in the chart note, mesial, distal, occlusal, buccal, lingual, not just implied by the code you picked.",
      },
      {
        heading: "Tooth number, surface, and radiograph documentation",
        body: "Because so many codes hinge on exact tooth number and surface, your chart note needs to record the universal tooth number, the specific surfaces treated, and, for anything beyond a simple restoration, a supporting radiograph or intraoral photo. \"Filling, tooth #19\" won't hold up on audit. \"D2392, tooth #19, MO surfaces, pre-operative bitewing on file showing interproximal decay\" will. That level of detail protects you against any code-mismatch challenge, and more payers are cross-checking submitted radiographs against billed surfaces before releasing payment than they used to.",
      },
      {
        heading: "Emergency and palliative codes: D0140 and D9110",
        body: "D0140 (Limited Oral Evaluation, Problem Focused) covers a focused exam for a specific complaint, a toothache or a broken tooth, rather than a routine or comprehensive exam. D9110 (Palliative Treatment of Dental Pain) covers emergency treatment to relieve pain, like a pulp cap or a temporary restoration, when definitive treatment gets pushed to a later visit. Your documentation needs to establish the specific complaint and the palliative nature of what you did. Billing D9110 alongside a same-day definitive procedure on the same tooth is a common audit flag.",
      },
      {
        heading: "Sedation and anesthesia add-on codes: D9223 and D9243",
        body: "General dentists and oral surgeons providing sedation alongside a procedure bill D9223 (Deep Sedation/General Anesthesia, each 15-minute increment) or D9243 (IV Moderate Conscious Sedation, each 15-minute increment) in addition to the procedure code. These bundle time-based anesthesia with the treatment performed on the same date of service. Hygienists and dental assistants can't bill these independently; they require a provider credentialed to administer sedation.",
      },
      {
        heading: "Periodontal codes",
        body: "Periodontal treatment runs on its own set of CDT codes with their own frequency and documentation rules.",
        list: [
          "D4341, scaling and root planing, four or more teeth per quadrant. Needs periodontal charting that supports pocket depths consistent with active disease.",
          "D4342, scaling and root planing, one to three teeth per quadrant. Same documentation standard, lower per-quadrant fee.",
          "D4910, periodontal maintenance. The recall visit after active periodontal therapy. Most payers want D4341/D4342 or surgical periodontal treatment on file first.",
          "D4355, full mouth debridement. Used when calculus buildup blocks a proper evaluation. Typically allowed once per lifetime per payer, so billing it repeatedly is a common audit trigger.",
        ],
      },
      {
        heading: "The mistakes that trigger downgrades and denials",
        body: "Most billing issues in general practices come down to a short list of documentation mismatches. None of them require any intent to cause a compliance problem.",
        list: [
          "Surface-count mismatch: chart documents two surfaces, claim billed as three. The most common finding, and the easiest one to generate on a records request.",
          "Comprehensive exam billed too often: repeating D0150 without a documented gap in care or a major health change raises flags at most payers.",
          "Missing radiographs on major procedures: crowns, root canals, and extractions submitted without a supporting pre-op X-ray get denied pending records, routinely.",
          "Missing tooth clause overlooked: billing a bridge or implant for a tooth that was already missing before the patient's coverage started, without checking the clause first.",
          "Downgrade-eligible composite billed without a heads-up to the patient: some plans reimburse posterior composite at the amalgam rate, and patients should hear about the potential balance before treatment, not after the EOB shows up.",
        ],
      },
      {
        body: "Keeping CDT codes, documentation, and payer-specific rules straight alongside a full patient schedule is a real burden. Logicware handles claim submission, coding review, and denial management for dental practices in Delaware and across the US. Contact us for a free billing audit to see where your current process has gaps.",
      },
    ],
  },
  {
    slug: "dental-insurance-credentialing-delaware-delta-metlife-cigna",
    title: "How to Get Credentialed with Dental Insurance Panels in Delaware",
    excerpt:
      "A step-by-step guide to credentialing with the major dental plans in Delaware, Delta Dental, MetLife, Cigna Dental, Guardian, and Aetna Dental, with realistic timelines and the mistakes that slow approval down.",
    category: "Credentialing",
    date: "2026-06-05",
    readTime: "9 min read",
    author: "Logicware Editorial Team",
    content: [
      {
        body: "Credentialing with insurance panels is the prerequisite for billing insurance directly as a solo dentist. In Delaware, a small number of payers dominate the market, and each one runs on a different timeline with different documentation requirements and its own application. Get this right the first time and you're seeing insured patients months sooner. Get it wrong and you're resubmitting applications while your open schedule sits unfilled.",
      },
      {
        heading: "Step 1: get your NPI",
        body: "Every provider who bills insurance needs a Type 1 NPI (individual). If you run a solo practice, you'll also need a Type 2 NPI for the business itself. Apply through the NPPES portal at nppes.cms.hhs.gov. It's free and usually processed within 3 to 10 business days. Your NPI is permanent and follows you regardless of where you practice or which payer you're dealing with. If you already have one, double-check that your NPPES record has your current address, credentials, and taxonomy code. Outdated NPPES information delays credentialing everywhere, and it's easy to overlook.",
      },
      {
        heading: "Step 2: gather your core credentialing documents",
        body: "Unlike medical credentialing, most dental payers don't use CAQH. Each one runs its own application. Before you apply anywhere, put together a single packet you can reuse across every payer: your Delaware dental license and expiration date, DEA registration if applicable, malpractice insurance certificate, your dental school diploma and any specialty board certification, a completed W-9, and your NPI and taxonomy code. Having this ready before you start cuts weeks off the whole process.",
      },
      {
        heading: "Step 3: apply to the right panels for Delaware",
        body: "Delaware is a small state with a concentrated dental payer market. Which panels matter most for a solo general practice depends on your target patient base, but the ones below cover most of the insured lives in the state.",
      },
      {
        heading: "Delta Dental of Delaware",
        level: 3,
        body: "Delta Dental is the largest dental insurer in the state by a wide margin, and the single most important panel for a new general practice. Apply through their provider enrollment portal. Timeline: 90 to 120 days from a complete application. They'll want a copy of your Delaware license, proof of malpractice coverage (minimum $1M per occurrence / $3M aggregate for most general dentists), and verification of your dental school graduation. Effective dates are usually the first of the month after final approval, so a mid-month approval means waiting until the following month to bill at the in-network rate.",
      },
      {
        heading: "MetLife and Cigna Dental",
        level: 3,
        body: "MetLife and Cigna Dental each run their own dedicated dental provider portals. Timeline: 60 to 90 days for both. Both plans show up a lot in employer group coverage across Delaware, especially with larger employers based in Wilmington. You can submit to both at the same time; they don't conflict, and applying in parallel shortens your total credentialing timeline.",
      },
      {
        heading: "Guardian and Aetna Dental",
        level: 3,
        body: "Guardian and Aetna Dental round out the panels most solo general practices in Delaware should prioritize. Timeline: 60 to 90 days for Guardian, 90 to 120 days for Aetna Dental. Aetna's dental network application runs separately from Aetna's medical credentialing, so confirm you're applying to the dental network specifically. Sending it to the wrong division is a common cause of delay.",
      },
      {
        heading: "Realistic credentialing timelines in Delaware",
        body: "These assume a complete application with all supporting documents submitted on the first request.",
        list: [
          "Delta Dental of Delaware: 90 to 120 days (largest payer, longer due to volume)",
          "Delaware Medicaid Dental, via DentaQuest: 60 to 90 days",
          "MetLife: 60 to 90 days",
          "Cigna Dental: 60 to 90 days",
          "Guardian: 60 to 90 days",
          "Aetna Dental: 90 to 120 days",
        ],
      },
      {
        heading: "What delays approval",
        body: "",
        list: [
          "Malpractice coverage lapse: if your policy expires mid-application, most payers suspend the application until you send proof of renewal.",
          "License mismatch: discrepancies between the license number on your application and the Delaware Board of Dentistry database trigger manual review and add weeks.",
          "Missed follow-up requests: payers send documentation requests by mail or portal message. Miss a 30-day response window and you've added 4 to 8 weeks.",
          "Applying to a closed panel: some payers close their dental panels in areas where they already have enough network coverage. Check panel status before you submit.",
          "Incomplete W-9 or a mismatched tax ID: a W-9 that doesn't match your NPI registry information stalls applications constantly.",
        ],
      },
      {
        heading: "What to do while you wait",
        body: "Being mid-credentialing doesn't stop you from seeing patients. It just means you can't bill that payer at the in-network rate until your effective date. During the wait, see patients fee-for-service, or bill out-of-network and let them submit for reimbursement if their plan allows it. Ask each payer about backdating: some will apply your effective date retroactively to the submission date if you ask. Knowing that up front lets you decide whether to see insured patients during the approval window and hold claims for later submission.",
      },
      {
        body: "Credentialing is time-intensive work at the start of every insurance relationship. Logicware manages the full process for solo dentists and small practices in Delaware, from document prep through payer enrollment through the follow-up that actually gets applications approved. Contact us to get your credentialing moving.",
      },
    ],
  },
  {
    slug: "superbill-vs-direct-insurance-billing-dentists",
    title: "Superbill vs. Direct Insurance Billing: What Solo Dentists Need to Know",
    excerpt:
      "The choice between superbills and direct billing shapes both your revenue and your patient base. Here's how each model actually works, and a framework for deciding which fits your practice.",
    category: "Billing Basics",
    date: "2026-05-28",
    readTime: "8 min read",
    author: "Logicware Editorial Team",
    content: [
      {
        body: "Solo dentists face a decision that shapes both income and patient base: credential with insurance and bill directly, or stay out-of-network and hand patients a superbill to submit themselves. The right answer depends on your market, your case mix, and how much administrative complexity you're willing to take on. Both models have real tradeoffs, and plenty of practices end up on a hybrid approach that wasn't obvious when they started out.",
      },
      {
        heading: "What a superbill actually is",
        body: "A superbill is a detailed receipt you hand a patient after their appointment. It includes your NPI, tax ID, date of service, the CDT code, the tooth number and surface, and the fee charged. The patient submits it to their insurer and, if they have out-of-network benefits, gets partial reimbursement directly. You collect your full fee at the appointment, and the burden of filing the claim sits entirely with the patient. You have no contract with the insurer, no agreed rate, and no obligation to accept whatever they reimburse as payment in full.",
      },
      {
        heading: "Where superbills fall short in practice",
        body: "Superbills are simple to produce, but they lean on assumptions that don't always hold up.",
        list: [
          "OON benefits aren't universal: a lot of dental HMO plans and some low-cost PPO tiers have zero out-of-network benefit. A superbill from a non-participating provider is worthless to those patients.",
          "Annual maximums cap total reimbursement regardless of network status: most dental plans cap benefits at $1,000 to $2,000 a year, a figure that hasn't kept pace with treatment costs, so even engaged patients hit the ceiling fast on major work.",
          "Reimbursement rates are plan-controlled: insurers pay OON claims at a percentage of their usual and customary rate, often 50 to 80% of the in-network equivalent. The patient covers the gap.",
          "Most patients never file: a lot of people who get a superbill never submit it. The process feels unfamiliar and the reimbursement often disappoints relative to the effort.",
          "It shrinks your accessible patient pool: in markets where most employer dental plans are DHMO or narrow-network PPO, only a small fraction of insured residents can realistically afford out-of-pocket dentistry at your full rate.",
        ],
      },
      {
        heading: "What direct billing looks like in practice",
        body: "With direct billing, you credential with panels, submit claims yourself, and get paid by the insurer. Patients pay only their deductible, coinsurance, or whatever's above their annual maximum at the appointment. Commercial payers typically pay within 14 to 30 days. The tradeoffs are real: your fee schedule is fixed by contract, payers can deny or downgrade claims, major work may need a pre-treatment estimate, and there's an ongoing AR burden, unpaid claims, appeals, patient balance billing. But the patient pool is dramatically bigger. Anyone with in-network benefits can see you at a cost they can predict.",
      },
      {
        heading: "How to decide",
        body: "The right model depends on your specific market, patient base, and business goals. Neither one is universally correct.",
      },
      {
        heading: "Superbills make sense if:",
        level: 3,
        body: "",
        list: [
          "You practice in a high-income market where patients regularly pay full fee out-of-pocket for cosmetic or premium restorative work",
          "You specialize in something patients expect to self-pay for, cosmetic dentistry, full-mouth reconstruction, implant-heavy cases",
          "You want full control over your fee without network write-offs",
          "You're already at capacity and don't need new-patient volume from payer directories",
        ],
      },
      {
        heading: "Direct billing makes sense if:",
        level: 3,
        body: "",
        list: [
          "You want to serve patients who can't afford full-fee dentistry out-of-pocket",
          "You're building a new practice and need consistent new-patient volume and directory visibility",
          "Your market leans DHMO or narrow-network PPO with little out-of-network benefit",
          "You plan to serve Medicaid patients or underserved populations in your community",
        ],
      },
      {
        heading: "The hybrid model most successful solo practices end up with",
        body: "A lot of established solo dentists credential with the one or two plans driving the most patient volume in their market, and treat everyone else out-of-network or fee-for-service. In Delaware, that usually means credentialing with Delta Dental, by far the largest dental payer, and staying out-of-network with smaller PPOs that pay poorly or come with heavy pre-authorization requirements.",
      },
      {
        heading: "The hidden cost of avoiding insurance entirely",
        body: "Staying fully out-of-network feels simpler, but it caps your new-patient growth in a way that's hard to break through in most markets. The practices that navigate this well are intentional about which panels they join, not trying to avoid insurance altogether or sign up for every network available. Running the real numbers for your local market, payer mix, patient demographics, your fee against realistic OON reimbursement, is the only way to make this call based on your actual situation rather than a guess.",
      },
      {
        body: "If you're weighing insurance credentialing against staying out-of-network, Logicware can walk you through what either model would look like for your practice in Delaware. We handle credentialing and direct billing for solo dentists and small practices. Contact us for a free consultation.",
      },
    ],
  },
  {
    slug: "dental-insurance-claim-denials-how-to-fix",
    title: "The Most Common Dental Insurance Claim Denials, and How to Fix Them",
    excerpt:
      "A denial rate above 10% usually points to a systematic problem in your billing workflow. Here are the denials we see most, what causes each one, and how to fix it.",
    category: "Denial Management",
    date: "2026-05-22",
    readTime: "9 min read",
    author: "Logicware Editorial Team",
    content: [
      {
        body: "A dental claim denial isn't just lost revenue from one procedure. It's a signal that something in your billing workflow is producing claims payers won't pay on the first try. The national first-pass acceptance rate for dental claims runs around 85 to 90%. For a practice billing $600,000 a year, a 12% denial rate is over $70,000 in claims that need rework, and anything left unworked turns into a write-off. Here are the denials that cost general practices the most revenue, and what to do about each one.",
      },
      {
        heading: "CO-204: non-covered service",
        body: "CO-204 means the procedure code you billed isn't covered under this patient's plan. In dentistry, this hits cosmetic procedures most often, or restorative work that runs into a missing tooth clause. It's almost never appealable; the plan simply doesn't cover it. The only real fix is prevention: verify coverage for the procedures you're planning to bill before treatment, especially anything beyond a routine cleaning and exam.",
      },
      {
        heading: "CO-151: payment adjusted, frequency or amount exceeds plan limits",
        body: "CO-151 shows up when a service is billed more often than the plan allows: a third cleaning in a calendar year, or a comprehensive exam repeated too soon. This trips up practices most often when a patient switches providers mid-year and the new office doesn't know what's already been used under the old one. Ask every new patient when their last cleaning and exam were, and verify frequency history through the payer's eligibility portal before scheduling, not just at claim time.",
      },
      {
        heading: "CO-197: precertification or authorization absent",
        body: "CO-197 appears when a procedure was done without required prior authorization or a pre-treatment estimate on file. Some payers, Medicaid managed dental plans especially, require prior authorization for crowns, root canals, periodontal surgery, and orthodontic treatment. Keep a per-payer authorization tracker: which plans require it, and for which codes. Submit pre-treatment estimates before scheduling major work; turnaround is usually 5 to 15 business days.",
      },
      {
        heading: "CO-29: timely filing exceeded",
        body: "CO-29 means the claim went out after the payer's filing deadline. Most commercial dental payers allow 90 to 365 days from the date of service; state Medicaid dental programs often allow 180 to 365 days. This one is almost never appealable. Once the window closes, the claim is gone. The only real prevention is submitting promptly, daily if possible, but at minimum on a weekly cycle. Claims sitting in a queue for four to six weeks are a real financial risk.",
      },
      {
        heading: "CO-119: benefit maximum reached",
        body: "CO-119 means the patient has used up their annual maximum for the plan year, a hard ceiling most dental plans set between $1,000 and $2,000. It isn't appealable. The payer won't pay beyond the contracted maximum no matter how necessary the treatment is. The fix is proactive: track each patient's remaining maximum before scheduling more work in the same plan year, and sequence elective treatment across calendar years when a patient's benefit is nearly gone.",
      },
      {
        heading: "CO-96: non-covered charge (missing tooth clause)",
        body: "A missing tooth clause denies coverage for a bridge, partial, or implant replacing a tooth that was already gone before the patient's current coverage started. This comes up most with new patients whose extraction predates their current insurance. During treatment planning, ask directly whether the tooth being replaced was missing before the patient's current coverage started, and check the plan's specific clause language before you submit.",
      },
      {
        heading: "CO-23: coordination of benefits adjustment",
        body: "CO-23 shows up when a patient has two plans and the secondary payer is applying the primary payer's adjudication. It's not a true denial, but it confuses front-desk staff constantly, since they see a partial or zero payment and assume something went wrong. Collect full insurance information for both plans at intake, and confirm which one is primary using the birthday rule or employer coverage dates, and COB claims stop stalling in your queue.",
      },
      {
        heading: "PR-1: deductible amount applied",
        body: "PR-1 is patient responsibility, not a denial. The claim processed correctly and the deductible portion is applied to the patient's balance. It shows up on your EOB as a reduced payment and means you need to bill the patient. This catches both practices and patients off guard, especially in January when deductibles reset. Verify deductible status at the start of every calendar year, and give patients a heads-up if they should expect a deductible payment on upcoming treatment.",
      },
      {
        heading: "Building a denial prevention system",
        body: "Practices with the lowest denial rates share a consistent set of habits.",
        list: [
          "Verify benefits before every new patient and before any major procedure, checking frequency history and remaining annual maximum, not just active coverage",
          "Submit claims within 24 to 48 hours of each appointment; don't let them sit in a queue",
          "Keep a per-payer authorization tracker for crowns, root canals, periodontal surgery, and orthodontics",
          "Review every denied claim within 10 business days; appeals and resubmissions have their own deadlines",
          "Track your denial rate monthly by code category and dig into anything running above 5%",
        ],
      },
      {
        body: "If your denial rate is above 10%, or you're routinely writing off claims you don't have time to appeal, Logicware can help. We handle denial management and claims follow-up for dental practices in Delaware and nationwide. Contact us and we'll show you what a clean billing process looks like for your practice.",
      },
    ],
  },
  {
    slug: "should-you-outsource-dental-billing",
    title: "Should You Outsource Your Dental Billing?",
    excerpt:
      "For most solo dentists spending more than a few hours a week on claims, the financial case for outsourcing is pretty clear. Here's how to evaluate the decision honestly and what to look for in a billing company.",
    category: "Operations",
    date: "2026-05-15",
    readTime: "8 min read",
    author: "Logicware Editorial Team",
    content: [
      {
        body: "Outsourcing billing isn't just about time. It's about whether the revenue you're losing to unworked denials, delayed submissions, and stalled credentialing outweighs the cost of bringing in someone who specializes in it. For some practices, in-house billing is genuinely the right call, the volume is manageable and a well-trained front desk handles it fine. For most solo dentists, though, billing competes directly with chairside time and scheduling, and the math usually favors outsourcing once a practice passes a modest claim volume per week.",
      },
      {
        heading: "Five signs your billing is costing you money",
        body: "None of these need an audit to spot. They show up in day-to-day operations.",
        list: [
          "Average AR days above 45: most commercial payers pay within 14 to 30 days, so AR consistently past 45 means something in your submission or follow-up isn't working.",
          "Denial rate above 10%: a first-pass acceptance rate below 90% means one in ten claims needs rework. At a busy general practice, that's several denied claims every week.",
          "Unknown collection rate: your collection rate is the percentage of billed charges you actually collect. If you don't know yours, you don't know whether claims are getting quietly underpaid or written off.",
          "Aging claims nobody's working: claims need follow-up after 30 days if unpaid. Past 60 to 90 days without action and they usually convert to write-offs or timely-filing denials, revenue that's gone for good.",
          "Credentialing applications sitting unfinished: every month one sits incomplete is another month you can't bill that payer at the in-network rate. That's real, quantifiable, compounding revenue loss.",
        ],
      },
      {
        heading: "What full-service dental billing usually includes",
        body: "Scope varies a lot by company, but full-service dental billing typically covers:",
        list: [
          "Eligibility verification before each new patient and major procedure",
          "Electronic claim submission within 24 to 48 hours of each appointment",
          "Payment posting, ERA and paper EOB processing and reconciliation",
          "Denial management, appeals, resubmissions, and payer follow-up calls",
          "Patient statement generation and balance billing",
          "Monthly reporting on collection rate, AR aging, and denial rate by code and payer",
          "Credentialing support, offered by some companies, so confirm in writing what's actually included",
        ],
      },
      {
        heading: "The case for keeping it in-house",
        body: "In-house billing works when you have staff with real dedicated time to stay current on payer rules, submit daily, and work denials within 10 days. It also makes sense if your volume is low enough that a billing company's minimum monthly fee wouldn't be offset by better collections. If your denial rate is under 5%, AR days under 30, and your collection rate is above 95%, your current process is doing fine, and outsourcing would mostly be a time trade rather than a revenue gain.",
      },
      {
        heading: "The case for outsourcing",
        body: "If you don't have dedicated billing staff, every hour spent on claims is an hour not spent seeing patients or growing the practice. When billing pulls your office manager away from patient-facing work for five to eight hours a week, that's real opportunity cost before you even account for errors. A billing company for a busy general practice typically charges a percentage of collections or a flat monthly fee, easy to compare against the value of recovered denials and freed-up staff time. Often the math favors outsourcing before you even factor in improved collection rates. A practice that lifts its collection rate by even a few points on a $600,000 revenue base nets tens of thousands of dollars, usually more than the billing service costs for the year.",
      },
      {
        heading: "How to evaluate a dental billing company",
        body: "Not every billing company understands dentistry. One that specializes in physician or specialty medical billing will make CDT coding errors on every claim.",
        list: [
          "Dental specialty: they need to be fluent in the CDT code set, surface and tooth-numbering conventions, and payer-specific frequency and authorization rules.",
          "Willingness to sign a BAA: legally required for anyone handling your patients' PHI. No BAA, no deal.",
          "Transparent monthly reporting: you should get real numbers on AR aging, collection rate, and denial rate. A company that withholds this is hiding something.",
          "A defined denial management process: what's their SLA for working denials, who performs appeals, and what's their appeal success rate? Get specifics before you sign.",
          "References from comparable practices: ask for solo or small-group references, not large DSOs.",
        ],
      },
      {
        heading: "What outsourced billing typically costs",
        body: "Most dental billing companies charge a percentage of collections (4 to 8%) or a flat fee per claim. For a solo practice billing $600,000 a year, 6% runs about $36,000 annually. If that practice is currently losing 10% of claims to unworked denials, $60,000 a year at that volume, the billing service pays for itself if it converts even half of those denials into actual collections.",
      },
      {
        heading: "Questions worth asking before you sign",
        body: "",
        list: [
          "What's your current average first-pass acceptance rate for dental billing clients?",
          "When a claim gets denied, who works it, and how fast?",
          "Do you handle pre-treatment estimates, or only submission after authorization's already in place?",
          "Will I have a portal showing real-time AR and claim status?",
          "What's the contract term, and how do I get out if it's not working?",
          "Do you charge your percentage on denied and written-off claims, or only on what actually gets collected?",
        ],
      },
      {
        body: "Logicware specializes in billing for dental practices in Delaware and across the US. We handle credentialing, claim submission, denial management, and monthly reporting, with transparent pricing and no long-term contracts. Contact us for a free consultation and we'll show you what our process would look like for your practice.",
      },
    ],
  },
  {
    slug: "delaware-medicaid-dental-billing-dentaquest",
    title: "Delaware Medicaid Dental Billing: What Dentists Need to Know",
    excerpt:
      "Delaware Medicaid dental benefits run through a dedicated dental benefit manager, and understanding how enrollment, authorization, and claims routing work is the biggest gap for practices new to Medicaid billing.",
    category: "Compliance",
    date: "2026-05-08",
    readTime: "9 min read",
    author: "Logicware Editorial Team",
    content: [
      {
        body: "Delaware Medicaid dental coverage matters a lot for practices serving low-income adults, children, and families across the state, but Medicaid dental billing doesn't work like commercial billing. Enrollment, claim routing, authorization rules, and reimbursement rates are all different. Getting it right means understanding how Delaware structures its Medicaid dental benefit, specifically the role of the state's dedicated dental benefit manager, which trips up practices new to Medicaid on a regular basis.",
      },
      {
        heading: "How Delaware Medicaid dental is structured",
        body: "Like most states, Delaware carves dental benefits out of its broader Medicaid managed care program and runs them through a dedicated dental benefit manager rather than the medical MCOs directly. Enrollees get their dental coverage through this dental benefit administrator no matter which medical MCO they're assigned to. That distinction matters because you have to enroll separately with the dental benefit manager. Being credentialed with a patient's medical MCO doesn't make you a participating dental provider.",
      },
      {
        heading: "Enrolling as a Delaware Medicaid dental provider",
        body: "To bill Delaware Medicaid for dental services, you enroll directly with the state's dental benefit manager rather than through CAQH or a medical credentialing pathway. The enrollment packet typically wants your Type 1 NPI, Delaware dental license number and expiration date, malpractice insurance certificate, and a W-9. General dentists, along with specialists like oral surgeons, pediatric dentists, and orthodontists, are all eligible to enroll as independent billing providers.",
      },
      {
        heading: "Enrollment timeline",
        body: "Enrollment typically runs 60 to 90 days from a complete application. Delays most often come from missing malpractice documentation, an expired license on file, or a mismatch between the NPI registry and the application. Submit your application as early as you can relative to your intended start date, since the effective date generally follows approval rather than the date you actually begin seeing patients.",
      },
      {
        heading: "CDT codes covered under Delaware Medicaid",
        body: "Delaware Medicaid dental covers a defined set of diagnostic, preventive, and basic restorative CDT codes, with more limited coverage for major restorative and prosthodontic work.",
        list: [
          "D0120, periodic oral evaluation (twice a year)",
          "D0150, comprehensive oral evaluation (new patient or significant gap in care)",
          "D0210/D0272/D0330, radiographs (full series, bitewings, panoramic; frequency-limited)",
          "D1110/D1120, prophylaxis, adult/child (twice a year)",
          "D1206/D1208, topical fluoride (children's benefit; limited adult coverage)",
          "D2140–D2161, amalgam restorations (one through four-plus surfaces)",
          "D2330–D2394, resin composite restorations, anterior and posterior",
          "D7140, extraction, erupted tooth",
          "D4341/D4342, scaling and root planing (requires periodontal documentation)",
        ],
      },
      {
        heading: "Prior authorization under Delaware Medicaid",
        body: "Delaware Medicaid dental requires prior authorization for most procedures beyond diagnostic, preventive, and basic restorative care. Crowns, root canals, periodontal surgery, dentures, and orthodontic treatment generally need a pre-treatment estimate with supporting radiographs before treatment starts. Track authorization status closely. Treatment provided before authorization is approved often gets denied with no appeal pathway, even when it was clinically appropriate.",
      },
      {
        heading: "Reimbursement rates",
        body: "Medicaid reimbursement rates are set by the state and run well below commercial rates, often 40 to 60% of typical commercial fee schedules. These are approximate, illustrative rates for common codes billed by general dentists.",
        list: [
          "D0150 (comprehensive oral evaluation): approximately $45 to $60",
          "D1110 (adult prophylaxis): approximately $35 to $48",
          "D2391 (one-surface posterior composite): approximately $75 to $95",
          "D2392 (two-surface posterior composite): approximately $90 to $115",
          "D7140 (simple extraction): approximately $70 to $90",
          "D4341 (scaling/root planing, per quadrant): approximately $110 to $150",
        ],
      },
      {
        heading: "Claim submission and common routing errors",
        body: "Delaware Medicaid dental claims go through the dental benefit manager's designated clearinghouse rather than the state's general Medicaid claims system. Submit through the wrong clearinghouse routing, or use a payer ID meant for the patient's medical MCO, and you'll get an immediate rejection that forces a corrected resubmission while your timely filing clock keeps running. Before billing any Medicaid patient's treatment, verify their specific dental benefit enrollment and correct payer ID through the provider portal.",
      },
      {
        heading: "The most common Delaware Medicaid dental billing mistakes",
        body: "",
        list: [
          "Enrolling with a medical MCO and assuming it covers dental too; the two enrollments are separate",
          "Billing beyond authorized treatment without renewing prior authorization",
          "Submitting to the wrong clearinghouse or payer ID",
          "Missing supporting radiographs on prior authorization requests for major procedures",
          "Billing a comprehensive exam more than once per provider without documented justification",
        ],
      },
      {
        body: "Delaware Medicaid dental billing takes precise enrollment, authorization tracking, and familiarity with the dental benefit manager's specific requirements that catch a lot of practices off guard. Logicware handles Medicaid billing for dental practices in Delaware, including enrollment, prior authorization tracking, and ongoing claim management. Contact us to talk through what billing Delaware Medicaid patients would look like for your practice.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
