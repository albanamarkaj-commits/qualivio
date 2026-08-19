export type RegulatoryTag =
  | "GVP"
  | "Signal Management"
  | "Risk Management"
  | "Risk Minimisation"
  | "PASS"
  | "PSUR"
  | "ICSR"
  | "EudraVigilance"
  | "Pregnancy & Breastfeeding"
  | "Paediatrics";

export type RegulatorySource = "EMA" | "FDA" | "MHRA" | "ICH" | "Health Canada";

export interface ContentSection {
  type:
    | "paragraph"
    | "heading"
    | "list"
    | "callout"
    | "stats"
    | "bars"
    | "table";
  text?: string;
  items?: string[];
  label?: string;
  /** "stats": a row of headline figures. */
  stats?: { value: string; label: string }[];
  /** "bars": a horizontal bar chart. `value` is plotted against `max`. */
  bars?: { label: string; value: number; display?: string }[];
  max?: number;
  /** "table": column headers and rows, in order. */
  headers?: string[];
  rows?: string[][];
  /** Small print shown under a stats, bars, or table block. */
  caption?: string;
}

export interface RegulatoryUpdate {
  slug: string;
  title: string;
  source: RegulatorySource;
  tags: RegulatoryTag[];
  publishedDate: string;
  effectiveDate?: string;
  summary: string;
  impact: string;
  sourceUrl: string;
  readTime: string;
  content: ContentSection[];
}

export const regulatoryUpdates: RegulatoryUpdate[] = [
  {
    slug: "health-canada-gvp-inspections-2026",
    title:
      "Health Canada GVP Inspections 2026: What Inspectors Asked Companies to Fix",
    source: "Health Canada",
    tags: ["GVP", "ICSR"],
    publishedDate: "2026-08-19",
    summary:
      "Health Canada started 23 good pharmacovigilance practices inspections between 1 January and 19 August 2026. Seventeen of the 19 that finished were rated compliant, and those companies still averaged 5.5 written findings each. This is an analysis of the 69 findings published across the 12 full report cards.",
    impact:
      "Marketing Authorisation Holders should rebuild a sample of closed cases end to end, check how day zero is set for every route a case can arrive by, reconcile pharmacovigilance agreements against current practice, and confirm that foreign regulatory actions would reach them inside 72 hours.",
    sourceUrl:
      "https://www.drug-inspections.canada.ca/gvp/searchResult-en.html?estName=&ref=&site=&prov=&rate=&startDate=2026-01-01&endDate=2026-08-19",
    readTime: "8 min read",
    content: [
      {
        type: "paragraph",
        text: "Health Canada publishes the result of every good pharmacovigilance practices inspection it carries out, along with the findings inspectors recorded. Between 1 January and 19 August 2026 it started 23 of them. Sixteen report cards have been published so far, and 12 of those carry the full detail.",
      },
      {
        type: "paragraph",
        text: "Because Health Canada writes these findings as standard phrases, the same wording appears at company after company. That makes it possible to count them and see what inspectors are actually looking for.",
      },
      {
        type: "stats",
        stats: [
          { value: "23", label: "GVP inspections started in the period" },
          { value: "17", label: "of the 19 that finished were rated compliant" },
          { value: "69", label: "findings published across 12 full report cards" },
        ],
      },
      {
        type: "heading",
        text: "A Compliant Rating Does Not Mean There Was Nothing to Fix",
      },
      {
        type: "paragraph",
        text: "Of the 19 inspections that reached a rating, 17 were compliant and two were not. The two non-compliant results went to Teva Canada and Panacea Biotec Pharma. Four inspections were still in progress at the time of writing.",
      },
      {
        type: "paragraph",
        text: "The compliant group is the more interesting one. The 11 compliant sites with a full report card published still averaged 5.5 written findings each, with a median of 6 and a range of 1 to 10. Passing an inspection and passing it cleanly are two different things.",
      },
      {
        type: "paragraph",
        text: "The number of findings also tells you very little about the outcome. Mantra Pharma collected 10 findings and was rated compliant. Teva Canada collected 8 and was rated non-compliant. What matters is what the findings are about, not how many there are.",
      },
      {
        type: "heading",
        text: "The Areas That Came Up Most",
      },
      {
        type: "paragraph",
        text: "We grouped every published finding by what it was about. Thirteen areas came up. One came up far more than the rest. The figures below count how many of the 12 sites with a full report card were cited in each area.",
      },
      {
        type: "bars",
        max: 12,
        bars: [
          { label: "Case processing and evaluation", value: 10, display: "10 / 12" },
          { label: "Reporting deadlines", value: 8, display: "8 / 12" },
          { label: "Agreements with partners", value: 7, display: "7 / 12" },
          { label: "Annual summary reports and signal detection", value: 7, display: "7 / 12" },
          { label: "Records: quality, availability, retention", value: 6, display: "6 / 12" },
          { label: "Quality system controls", value: 5, display: "5 / 12" },
          { label: "Foreign action awareness and notification", value: 5, display: "5 / 12" },
          { label: "Written procedures", value: 4, display: "4 / 12" },
          { label: "Complaint handling", value: 3, display: "3 / 12" },
          { label: "Literature surveillance", value: 2, display: "2 / 12" },
          { label: "Product safety labelling updates", value: 2, display: "2 / 12" },
          { label: "Unusual failure in efficacy", value: 2, display: "2 / 12" },
          { label: "Roles and job descriptions", value: 1, display: "1 / 12" },
        ],
        caption:
          "Number of sites cited in each area, out of the 12 with a full report card published. A finding that covers two areas is counted in both.",
      },
      {
        type: "paragraph",
        text: "Case processing is the one almost nobody avoided. Ten of the 12 sites were told to fix something about how adverse drug reactions are received, handled or evaluated. The specific findings ranged from follow up not being sought, to cases not being coded properly, to the reason for invalidating a case not being written down.",
      },
      {
        type: "callout",
        label: "Worth noting",
        text: "Eight of the 12 sites were cited on a reporting deadline, and six of those had actually missed one. This is the finding spread most evenly across the group. It is not just small companies. Large multinationals with established safety databases are in there too.",
      },
      {
        type: "paragraph",
        text: "The deadline findings cluster around the date a company first became aware of a case, not around the submission step itself. If day zero is set inconsistently for cases arriving through affiliates, partners, medical information lines or social media, the clock starts late and the submission is late with it.",
      },
      {
        type: "heading",
        text: "Two Thirds of the Findings Cite the Same Section",
      },
      {
        type: "paragraph",
        text: "C.01.017 of the Food and Drug Regulations covers serious adverse drug reaction reporting. In practice Health Canada records most of the pharmacovigilance system against it. Procedures, agreements, change control, self-inspection and computer validation all end up here.",
      },
      {
        type: "table",
        headers: ["Regulation", "What it covers", "Findings"],
        rows: [
          ["C.01.017", "Serious ADR reporting and the PV system", "44"],
          ["C.01.018", "Annual summary reports and case reports", "10"],
          ["C.01.020", "Maintenance of records", "7"],
          ["C.01.050", "Notification of a serious risk of injury to human health", "5"],
          ["C.08.008", "Unusual failure in efficacy of new drugs", "2"],
          ["C.08.003", "Label update with new safety information", "1"],
        ],
        caption:
          "Because C.01.017 covers so much ground, the split by regulation does not tell you much on its own. Read it alongside the areas above.",
      },
      {
        type: "heading",
        text: "The Same Findings Keep Coming Up",
      },
      {
        type: "paragraph",
        text: "Seventeen findings appeared at more than one company. Together they account for 43 of the 69 published findings, so more than half of what inspectors wrote in 2026 repeats something already written at another company. These are the ones that recurred most.",
      },
      {
        type: "table",
        headers: ["Finding as published", "Sites"],
        rows: [
          ["The systems and processes for handling and evaluating adverse drug reactions were inadequate.", "5"],
          ["Some of the contractual agreements that defined the responsibilities of all parties involved in pharmacovigilance activities did not reflect the company's current practices.", "4"],
          ["Some of the contractual agreements that defined the responsibilities of all parties involved in pharmacovigilance activities were inadequate.", "3"],
          ["The rationale to invalidate adverse drug reaction reports was not properly documented.", "3"],
          ["The systems and processes for receiving adverse drug reactions were inadequate.", "3"],
          ["The company did not record, handle, and store all information about adverse drug reactions to allow for complete and accurate reporting, interpretation, and verification.", "3"],
        ],
        caption:
          "The six findings that appeared at three or more sites. Eleven more appeared at two sites each.",
      },
      {
        type: "heading",
        text: "The Four Inspections Still Open",
      },
      {
        type: "paragraph",
        text: "Gilead Sciences Canada, Argenx, Celltrion and Hugel Canada were still in progress at the time of writing. Their initial report cards name the problem areas but not the detailed wording. All four were flagged under C.01.017, and three of the four under both annual summary reports and foreign action notification.",
      },
      {
        type: "paragraph",
        text: "C.01.019, issue-related summary reports, appears in two of these four and nowhere in the 69 published findings. It is worth watching when these report cards are finished.",
      },
      {
        type: "heading",
        text: "Six Things to Check Before Your Next Inspection",
      },
      {
        type: "list",
        items: [
          "Take ten closed cases and rebuild each one from first receipt through to submission. Inspectors keep finding a gap between what the procedure says and what the case file shows.",
          "Check how day zero is set for every route a case can arrive by, including affiliates, partners, medical information and social media.",
          "Read every partner, licensor and vendor agreement against what your team actually does today, and put a review date on each one.",
          "Write down why a case was invalidated, at the time you decide it. Three sites were cited for exactly this, and it costs nothing to prevent.",
          "Confirm that a foreign regulatory action would reach you inside 72 hours. Health Canada wants to see how you find out, not only what you do once you know.",
          "Look at what your own self-inspections found last year. If your audits are not picking these things up, the inspector will.",
        ],
      },
      {
        type: "heading",
        text: "How This Was Counted",
      },
      {
        type: "list",
        items: [
          "Scope: all GVP inspections in Health Canada's public database with a start date between 1 January and 19 August 2026 inclusive. Data retrieved 19 August 2026.",
          "The 69 findings come from 12 inspections, not 23. Seven have no report card published yet, including one of the two non-compliant results. Four more have an initial report card only.",
          "Areas were assigned by matching the published wording. A finding covering two areas is counted in both, so the area figures do not sum to 69.",
          "Health Canada does not publish a risk rating against individual GVP findings, so every finding is counted equally. This is why the number of findings and the rating do not line up.",
          "Twelve sites is a small sample. The order of the main areas is clear, but a difference of one or two findings between categories does not mean much.",
        ],
      },
      {
        type: "paragraph",
        text: "All establishment names, ratings and findings are reproduced as published by Health Canada in its good pharmacovigilance practices inspections database.",
      },
    ],
  },
  {
    slug: "health-canada-gvp-guidelines-gui-0102-2026",
    title:
      "Health Canada GVP Guidelines (GUI-0102): Building a Robust Pharmacovigilance System",
    source: "Health Canada",
    tags: ["GVP", "Risk Management"],
    publishedDate: "2026-05-22",
    summary:
      "Health Canada's updated Good Pharmacovigilance Practices (GVP) guidance clarifies how market authorisation holders should build and maintain a robust pharmacovigilance system, covering written procedures, deviations, audits, computerised system validation, qualified personnel, and contractual agreements with third parties.",
    impact:
      "Market authorisation holders should review their quality system against the updated GVP expectations, including written procedures, deviation handling, audit programmes, validation of computerised systems, designated personnel and the qualified healthcare professional role, and contractual agreements for any delegated activities.",
    sourceUrl:
      "https://www.canada.ca/en/health-canada/services/drugs-health-products/compliance-enforcement/good-manufacturing-practices/guidance-documents/pharmacovigilance-guidelines-0102.html",
    readTime: "10 min read",
    content: [
      {
        type: "paragraph",
        text: "Health Canada updated its Good Pharmacovigilance Practices (GVP) guidance on 22 May 2026. The guidance clarifies the requirements set out in the Food and Drugs Act and its regulations, and describes how market authorisation holders (MAHs) are expected to operate a robust pharmacovigilance system. Meeting these requirements depends on the commitment of partners and personnel at all levels.",
      },
      {
        type: "heading",
        text: "Guiding Principles: A Robust Pharmacovigilance System",
      },
      {
        type: "paragraph",
        text: "A robust pharmacovigilance system is an integral part of GVP. With one in place, you can monitor the safety and effectiveness of your drugs, notify Health Canada within the required timelines, and take reliable, timely action based on the available evidence.",
      },
      {
        type: "list",
        items: [
          "Set out a decision-making process with deliverables so that all activities are carried out consistently",
          "Assign personnel who perform or oversee the deliverables, and make sure responsibilities are understood by internal and external parties",
          "Ensure an adequate number of qualified, trained personnel are available",
          "Identify and evaluate performance indicators, and address any deficiencies in a timely manner",
          "Carry out and monitor corrective and risk mitigation measures as necessary",
          "Document all activities to demonstrate that the deliverables were met",
        ],
      },
      {
        type: "heading",
        text: "Written Procedures",
      },
      {
        type: "paragraph",
        text: "You should prepare and document written procedures that set out your pharmacovigilance processes with step-by-step instructions for relevant personnel and departments. Each procedure should have a unique identifier. Periodic reviews keep procedures aligned with current regulations, expectations, and actual practice, and the revision history, reasons for revision, revision number, and effective dates should be documented. Designated personnel should date, approve, and sign any revisions, and affected staff should be trained before a revised procedure takes effect. When activities are contracted to a third party, roles, responsibilities, and step-by-step instructions must be clearly documented in the written procedures or contractual agreements.",
      },
      {
        type: "heading",
        text: "Deviations and Change Control",
      },
      {
        type: "paragraph",
        text: "A deviation is a change or departure from an approved written procedure, and it can be planned or unplanned. Planned deviations should be documented, evaluated, and approved before the change is implemented. Unplanned deviations are unexpected and may point to a systematic deficiency, which is a fundamental, widespread inadequacy in the processes or mechanisms of a pharmacovigilance system rather than an isolated event.",
      },
      {
        type: "list",
        items: [
          "Document the deviation in a timely manner and carry out an investigation",
          "Evaluate whether there is a systematic deficiency",
          "Perform a root cause analysis, as necessary, to assess the cause and impact",
          "Identify and carry out an effective corrective and preventative action plan (CAPA), if appropriate",
          "Evaluate whether the actions taken addressed the root cause of the deviation",
        ],
      },
      {
        type: "callout",
        label: "Maintaining a State of Control",
        text: "Establish a change control system so that the department responsible for a change documents it, evaluates its impact, approves it, and sets an effective date. Any significant change affecting compliance may require re-validation or verification of systems or processes. Good quality control practices, such as data quality checks and trend analysis, help detect deviations and inform continual process improvement.",
      },
      {
        type: "heading",
        text: "Business Continuity and Database Migration",
      },
      {
        type: "paragraph",
        text: "You should establish a risk-based business continuity plan so that critical operations continue during scenarios such as absences, an IT breach, a network or system failure, a natural disaster, a public health emergency, a sudden influx of litigation, geopolitical conflict, or transition periods such as merging or migrating pharmacovigilance databases. When merging or migrating databases, consider record retention, data integrity, and an audit trail of the migration, validate computerised systems, conduct an impact assessment, and develop a risk mitigation strategy so that original data is not lost or altered.",
      },
      {
        type: "heading",
        text: "Audits",
      },
      {
        type: "paragraph",
        text: "Audits, previously known as self-inspection, help you monitor your organisation's compliance, including the compliance of third-party vendors. Your contractual agreements should set out your right and responsibility to conduct periodic, risk-based audits. The scope should cover all departments and third parties that take part in your pharmacovigilance activities, from receiving and processing adverse drug reactions (ADRs) and unusual failure in efficacy (UFIE) data, to environmental scanning, signal management, report preparation, monitoring foreign actions, and records retention.",
      },
      {
        type: "list",
        items: [
          "Maintain a comprehensive written procedure that addresses all areas of the applicable regulations",
          "Use responsible personnel who understand the applicable Canadian requirements and are qualified and trained to conduct the audit",
          "Conduct internal audits of the MAH using personnel independent from the pharmacovigilance department; third-party vendor audits may be conducted by the pharmacovigilance department",
          "Set audit frequency using a documented, risk-based strategy that prioritises key processes affecting compliance",
          "Document and investigate the root cause and impact of any deviation",
          "Have senior management review findings, set implementation timelines for each CAPA, and follow up to confirm completion",
        ],
      },
      {
        type: "heading",
        text: "Validation of Computerised Systems",
      },
      {
        type: "paragraph",
        text: "Assess whether adequate validation has been completed on any electronic system used to capture, process, manage, or archive pharmacovigilance activities, based on the criticality of the system and its intended use. Validation confirms that the system is reliable, credible, and performs as expected, and validation reports should document the results. Software upgrades, data migration, and other modifications can affect performance and data integrity, so all changes to hardware or software should be assessed and approved through your change control system to determine whether re-validation is needed.",
      },
      {
        type: "callout",
        label: "Risk-Assessment Questions",
        text: "When assessing validation, including after a change, consider the intended use of the system and whether the change affects a critical component with direct or indirect impact on regulatory obligations. Examples include automation rules that affect ADR assessments or submissions, workflow status that affects electronic reporting timelines, and data quality that may affect the benefit-risk assessment of the drug.",
      },
      {
        type: "heading",
        text: "Personnel and Training",
      },
      {
        type: "paragraph",
        text: "Employees involved in pharmacovigilance, whether in-house or contracted, should be qualified and trained on the Canadian requirements relevant to their specific responsibilities. This includes staff who may receive ADR or UFIE information, such as sales and customer service representatives, receptionists, medical science liaisons, and medical information officers, as well as regulatory affairs staff who handle label updates. Identify qualified alternates to cover duties during absences, and maintain records such as organisational charts, proof of qualifications, written work descriptions, and training records.",
      },
      {
        type: "list",
        items: [
          "Designate a person to lead and oversee all pharmacovigilance activities, plus a qualified alternate to act in their absence",
          "Identify a qualified healthcare professional (QHCP), such as a physician, dentist, pharmacist, nurse, or coroner, with appropriate education and therapeutic expertise",
          "Involve the QHCP in or have them oversee key activities: assessing the clinical significance of follow-up information, verifying coding of complex ADRs, judging seriousness, expectedness, and causality, and writing or approving annual summary reports (ASRs) and issue-related summary reports (IRSRs)",
          "Have the QHCP provide clinical judgement on signal management and risk mitigation, and determine whether a foreign action relates to a serious risk of injury relevant to Canada",
          "Justify and document any delegation of these key activities under a risk-based strategy",
        ],
      },
      {
        type: "heading",
        text: "Contractual Agreements",
      },
      {
        type: "paragraph",
        text: "You may delegate a pharmacovigilance activity to a third party, but you remain ultimately responsible for meeting all regulatory requirements and GVP principles. A signed, dated written agreement should exist between your organisation and the third party. At minimum, agreements should exist with global entities under the same ownership (unless covered by corporate procedures), service providers conducting activities on your behalf, external parties who receive ADRs or safety data for you, companies named on the product label such as the Canadian importer or private labellers, and MAHs of cross-licensed products.",
      },
      {
        type: "list",
        items: [
          "Define the roles and responsibilities of each party for each delegated activity, the effective date, and the products in scope",
          "Define relevant pharmacovigilance terms and the timeline and scope of safety information to be exchanged",
          "Require your written authorisation before a third party subcontracts work to another party",
          "Set out your right to audit, the third party's duty to assist in audits and regulatory inspections, and to provide records and answer questions in a timely manner",
          "Require record retention in line with regulatory requirements, dated signatures from both parties, and current contact information",
          "Where relevant, address reconciliation of pharmacovigilance data, a change control system, and communication of any potential impacts on pharmacovigilance activities",
        ],
      },
      {
        type: "paragraph",
        text: "For cross-licensed products, each party is responsible for pharmacovigilance on its own DIN(s), and the agreement should ensure proactive communication between licensor and licensee about safety signals, label updates, and actions taken for safety reasons. During a merger, acquisition, or database migration, compliance must continue, a contractual agreement should set out roles and responsibilities, and any impact on ongoing pharmacovigilance activities should be minimised. Refer to the business continuity, computerised system validation, and records retention expectations during these transition periods.",
      },
    ],
  },
  {
    slug: "gvp-p-iii-pregnant-breastfeeding-women-2026",
    title:
      "GVP Population-Specific Considerations III: Pregnant and Breastfeeding Women",
    source: "EMA",
    tags: ["GVP", "Pregnancy & Breastfeeding", "Risk Management"],
    publishedDate: "2026-02-06",
    effectiveDate: "2026-02-09",
    summary:
      "New EMA GVP guideline formalising pharmacovigilance obligations for medicines used during pregnancy and breastfeeding, and for children exposed in utero or via breastmilk.",
    impact:
      "MAHs must review and update their pharmacovigilance systems, risk management plans, and PSUR/PBRER processes to incorporate pregnancy- and breastfeeding-specific safety monitoring requirements.",
    sourceUrl:
      "https://www.ema.europa.eu/en/human-regulatory-overview/post-authorisation/pharmacovigilance-post-authorisation/good-pharmacovigilance-practices-gvp",
    readTime: "8 min read",
    content: [
      {
        type: "paragraph",
        text: "The European Medicines Agency (EMA) published the finalised GVP Product- or Population-Specific Considerations III guideline, effective 9 February 2026. This guideline specifically addresses pharmacovigilance obligations for medicinal products used in pregnant women, breastfeeding women, and children exposed to medicines in utero or via breastmilk.",
      },
      {
        type: "heading",
        text: "Scope and Background",
      },
      {
        type: "paragraph",
        text: "Pregnant and breastfeeding women represent a historically under-studied population in clinical trials, yet account for a significant proportion of medicine users in real-world practice. This GVP consideration addresses the gap by setting out dedicated requirements for safety monitoring, data collection, and risk communication in these populations. The guideline complements the existing GVP framework (Modules I–XVI and Annexes) and previously published Product- or Population-Specific Considerations for vaccines (P I) and biological medicinal products (P II).",
      },
      {
        type: "heading",
        text: "Key Provisions",
      },
      {
        type: "list",
        items: [
          "Defined requirements for collecting and reporting individual case safety reports (ICSRs) from pregnant and breastfeeding patients, including follow-up expectations for pregnancy outcomes",
          "Guidance on signal detection activities specifically targeting reproductive and developmental toxicity signals",
          "Requirements for risk management plan (RMP) updates addressing pregnancy prevention programmes and breastfeeding risk communication",
          "Expectations for benefit-risk assessments in PSURs/PBRERs with dedicated sections for the pregnant and breastfeeding population",
          "Direction on the use of pregnancy registries, post-authorisation safety studies (PASS), and real-world data sources to support ongoing safety monitoring",
          "Labelling and patient information requirements for pregnancy and lactation-related safety information",
        ],
      },
      {
        type: "heading",
        text: "Business and Operational Impact",
      },
      {
        type: "callout",
        label: "Action Required",
        text: "Marketing authorisation holders (MAHs) should conduct a gap analysis of their current pharmacovigilance systems against the requirements of GVP P III. Priority areas include ICSR follow-up processes for pregnancy reports, RMP updates, and PSUR/PBRER content.",
      },
      {
        type: "list",
        items: [
          "Review and update SOPs for pregnancy report collection, follow-up, and outcome documentation",
          "Assess whether existing risk management plans adequately address pregnancy and breastfeeding risk minimisation",
          "Update PSUR/PBRER templates to incorporate population-specific benefit-risk assessments",
          "Evaluate whether a pregnancy registry or dedicated PASS is required or appropriate for your product",
          "Train pharmacovigilance and regulatory affairs teams on updated regulatory expectations",
          "Review product information (SmPC and PIL) for compliance with updated labelling expectations",
        ],
      },
      {
        type: "heading",
        text: "Related GVP Documents",
      },
      {
        type: "list",
        items: [
          "GVP Module VI – Management and Reporting of Adverse Reactions (ICSR handling)",
          "GVP Module V – Risk Management Systems (RMP requirements)",
          "GVP Module VII – Periodic Safety Update Reports",
          "GVP Module VIII – Post-Authorisation Safety Studies",
          "GVP Module XVI Rev. 3 – Risk Minimisation Measures (including Addendum I on embryo-fetal risk, effective August 2025)",
        ],
      },
    ],
  },
  {
    slug: "gvp-module-xvi-rev3-risk-minimisation-2024",
    title:
      "GVP Module XVI Rev. 3 – Risk Minimisation Measures: Updated Regulatory Expectations",
    source: "EMA",
    tags: ["GVP", "Risk Management", "Risk Minimisation"],
    publishedDate: "2024-08-05",
    effectiveDate: "2024-08-06",
    summary:
      "Revised GVP Module XVI introduces updated requirements for designing, implementing, and evaluating additional risk minimisation measures (aRMMs), with clearer effectiveness assessment frameworks and a new Addendum on embryo-fetal risk.",
    impact:
      "MAHs with products subject to additional risk minimisation measures must review their aRMM programmes against the revised module and update effectiveness assessment plans and pregnancy prevention programme requirements.",
    sourceUrl:
      "https://www.ema.europa.eu/en/human-regulatory-overview/post-authorisation/pharmacovigilance-post-authorisation/good-pharmacovigilance-practices-gvp",
    readTime: "7 min read",
    content: [
      {
        type: "paragraph",
        text: "The European Medicines Agency published Revision 3 of GVP Module XVI – Risk Minimisation Measures, effective 6 August 2024. This revision reflects regulatory experience accumulated since Revision 2 and introduces important updates to the design, implementation, and evaluation of additional risk minimisation measures (aRMMs).",
      },
      {
        type: "heading",
        text: "Background",
      },
      {
        type: "paragraph",
        text: "Risk minimisation measures are an integral component of the EU risk management system. Routine risk minimisation measures include SmPC and PIL updates and prescription-only status, while additional risk minimisation measures (aRMMs) may include educational materials, controlled access programmes, and pregnancy prevention programmes. GVP Module XVI Rev. 3 supersedes Revision 2 and reflects evolving regulatory expectations, particularly around the proportionality of aRMMs, effectiveness assessment frameworks, and oversight mechanisms.",
      },
      {
        type: "heading",
        text: "Key Changes in Revision 3",
      },
      {
        type: "list",
        items: [
          "Strengthened proportionality principle: aRMMs must be targeted, proportionate to the identified risk, and feasible in practice for healthcare professionals and patients",
          "Updated framework for aRMM effectiveness assessment: clearer requirements for key performance indicators (KPIs), measurable objectives, and reporting timelines",
          "Revised expectations for controlled access programmes including patient registries used for risk minimisation purposes",
          "Updated guidance on educational materials: content requirements, target audiences, distribution plans, and acknowledgement of receipt mechanisms",
          "New guidance on pregnancy prevention programmes (PPPs) aligned with the EMA PPP checklist and GVP P III (effective February 2026)",
          "Clarified roles of MAH, QPPV, and national competent authorities in aRMM oversight and monitoring",
          "GVP Annex I (Definitions) Rev. 5 updated simultaneously to align terminology across the GVP framework",
        ],
      },
      {
        type: "heading",
        text: "Module XVI Addendum I – Embryo-Fetal Risk (August 2025)",
      },
      {
        type: "callout",
        label: "Note",
        text: "Following Rev. 3, EMA published Module XVI Addendum I on 28 August 2025 (effective 29 August 2025), providing supplementary guidance specifically on risk minimisation measures for medicines with known or potential embryo-fetal toxicity risks. This addendum further strengthens the regulatory link between Module XVI and GVP P III (Pregnant and Breastfeeding Women).",
      },
      {
        type: "heading",
        text: "Operational Impact for MAHs",
      },
      {
        type: "list",
        items: [
          "Review all existing aRMMs for proportionality and alignment with Rev. 3 expectations",
          "Update effectiveness assessment plans to include clearly defined, measurable KPIs with agreed reporting timelines",
          "Reassess educational material content, format, and distribution processes against updated guidance",
          "Review pregnancy prevention programmes against updated PPP requirements and Module XVI Addendum I",
          "Update the RMP (Risk Management Plan) Section C (Risk Minimisation) to reflect Rev. 3 language and requirements",
          "Plan for effectiveness assessment reporting within agreed PRAC timelines",
        ],
      },
    ],
  },
  {
    slug: "signal-management-eudravigilance-updates-2026",
    title:
      "Signal Management and EudraVigilance: Key Guidance Updates for 2026",
    source: "EMA",
    tags: ["Signal Management", "EudraVigilance", "GVP", "ICSR"],
    publishedDate: "2026-01-20",
    effectiveDate: "2026-01-20",
    summary:
      "EMA has issued updated Q&A guidance (Rev. 5) on signal management processes and EudraVigilance, with a revised worksharing list and clarifications on MAH obligations for signal detection, validation, and PSUR reporting.",
    impact:
      "Pharmacovigilance teams and QPPVs should review updated signal management Q&As and the revised worksharing list to align their signal detection, validation, and reporting workflows with current EMA expectations.",
    sourceUrl:
      "https://www.ema.europa.eu/en/human-regulatory-overview/post-authorisation/pharmacovigilance-post-authorisation/pharmacovigilance-regulatory-procedural-guidance",
    readTime: "6 min read",
    content: [
      {
        type: "paragraph",
        text: "The European Medicines Agency has issued updated guidance on signal management processes and EudraVigilance operational procedures. The latest Q&A revision (Rev. 5, Ref. EMA/261758/2013) was published on 20 January 2026. These updates reflect accumulated operational experience in signal management and address frequently raised questions from marketing authorisation holders and national competent authorities.",
      },
      {
        type: "heading",
        text: "Signal Management Q&A Rev. 5 – Key Clarifications",
      },
      {
        type: "list",
        items: [
          "Clarified MAH obligations to monitor the EudraVigilance database for new signals and to conduct their own signal detection activities in line with GVP Module IX",
          "Updated guidance on signal validation timelines and the information required to support or refute a signal detected in EudraVigilance",
          "Refined expectations for signal prioritisation and documentation within the MAH's pharmacovigilance system master file (PSMF)",
          "Clarification on the interaction between MAH signal detection activities and the PRAC signal management process",
          "Updated expectations for signal management sections in PSURs/PBRERs",
          "Guidance on emerging safety issues (ESIs) and when expedited communication to EMA is required",
        ],
      },
      {
        type: "heading",
        text: "Worksharing List for Signal Management – Rev. 14 (December 2025)",
      },
      {
        type: "paragraph",
        text: "EMA also updated the list of substances and products subject to worksharing for signal management (EMA/563056/2014 Rev. 14) in December 2025. The worksharing scheme allows EMA and national competent authorities to divide the workload of signal evaluation across the EU network, ensuring efficient use of regulatory resources.",
      },
      {
        type: "callout",
        label: "Important",
        text: "MAHs with products on the worksharing list should verify which authority holds the lead role for signal evaluation of their product and ensure all signal management communications are directed to the appropriate lead authority.",
      },
      {
        type: "heading",
        text: "EudraVigilance Data Quality and ICSR Reporting",
      },
      {
        type: "list",
        items: [
          "Reminder of data quality requirements for ICSR submissions to EudraVigilance, including completeness expectations for serious and non-serious reports",
          "The EU ICSR implementation guide (EMA/51938/2013 Rev. 2) remains the authoritative technical standard for electronic ICSR transmission",
          "EMA continues to monitor approximately 80 medical journals for adverse reaction reports on centrally authorised products; MAH obligations apply to products not monitored by EMA",
          "GVP Module VI Addendum II on data masking in ICSRs submitted to EudraVigilance was published in July 2025 (effective 25 July 2025), with implications for personal data handling in ICSR submissions",
        ],
      },
      {
        type: "heading",
        text: "Future Outlook: ICH E2D(R1) and ICH M14",
      },
      {
        type: "paragraph",
        text: "EMA has indicated that future revisions to GVP Modules covering ICSR management and aggregate reporting will incorporate updates aligned with ICH E2D(R1) (Post-Approval Safety Data Management) and ICH M14 (General Principles on Plan, Design and Analysis of Pharmacoepidemiology Studies). MAHs should begin familiarising their teams with these upcoming ICH developments to prepare for future regulatory alignment.",
      },
    ],
  },
  {
    slug: "pass-psur-regulatory-updates-2025",
    title:
      "PASS and PSUR Procedures: Key Regulatory Developments for 2025–2026",
    source: "EMA",
    tags: ["PASS", "PSUR", "GVP"],
    publishedDate: "2025-11-01",
    effectiveDate: "2025-11-01",
    summary:
      "A series of procedural updates affecting post-authorisation safety studies (PASS) and periodic safety update reports (PSUR/PBRER) have been implemented throughout 2025, including mandatory IRIS platform use and revised submission and assessment timelines.",
    impact:
      "MAHs must transition to the IRIS platform for post-submission PASS management, update internal submission procedures to reflect revised timelines, and ensure PSUR templates incorporate new population-specific content requirements.",
    sourceUrl:
      "https://www.ema.europa.eu/en/human-regulatory-overview/post-authorisation/pharmacovigilance-post-authorisation/post-authorisation-safety-studies-pass",
    readTime: "9 min read",
    content: [
      {
        type: "paragraph",
        text: "A series of important regulatory changes to post-authorisation safety study (PASS) and periodic safety update report (PSUR/PBRER) procedures have been implemented throughout 2025. These changes reflect the continued evolution of the EU pharmacovigilance framework and introduce new platform requirements, revised submission timelines, and enhanced transparency obligations for marketing authorisation holders.",
      },
      {
        type: "heading",
        text: "PASS: Mandatory IRIS Platform Use (January 2025)",
      },
      {
        type: "paragraph",
        text: "From January 2025, marketing authorisation holders are required to use the IRIS platform (EMA's regulatory submission and workflow management platform) for managing post-authorisation safety studies after original submission. This applies to amendments to PASS protocols, submission of interim and progress reports, and final study report submissions.",
      },
      {
        type: "callout",
        label: "Action Required",
        text: "If your organisation has not yet configured IRIS access for PASS submissions, this must be remediated as a priority. IRIS access requires authorisation through EMA's human medicines division. Contact your regulatory affairs team to confirm current submission capability and ensure all relevant personnel have been granted appropriate access levels.",
      },
      {
        type: "heading",
        text: "Key PASS Procedural Updates (2025)",
      },
      {
        type: "list",
        items: [
          "November 2025 – Updated procedural guidance for Article 107n-q procedures: revised timelines and format requirements for submission of non-interventional imposed PASS protocols and protocol amendments",
          "March 2025 – Revised procedures for submission and assessment timelines of imposed non-interventional PASS final study reports, with updated PRAC assessment milestones",
          "March 2025 – Enhanced guidance on publication requirements for PASS outcomes in the EMA Catalogue of real-world data studies (formerly EU PAS Register), including registration timelines",
          "March 2025 – Updated fee structure for PASS-related procedures under Regulation (EU) 2024/568",
          "Ongoing – Scientific advice on PASS protocols: EMA encourages MAHs to seek PRAC-SAWP scientific advice for complex or novel non-imposed PASS designs to optimise study quality and regulatory alignment",
        ],
      },
      {
        type: "heading",
        text: "PSUR/PBRER: Content Updates for 2026",
      },
      {
        type: "paragraph",
        text: "While no comprehensive revision to GVP Module VII (Periodic Safety Update Reports) was finalised in 2025, the following developments directly affect PSUR/PBRER preparation and content from 2026:",
      },
      {
        type: "list",
        items: [
          "PSUR/PBRER templates must now reflect population-specific benefit-risk assessment requirements introduced under GVP P III (pregnant and breastfeeding women, effective February 2026)",
          "Signal management sections in PSURs must align with the updated signal management Q&A Rev. 5 (published January 2026)",
          "PSUR assessment timelines within the EU single assessment procedure remain subject to the rolling programme published annually by EMA",
          "Upcoming ICH M14 guidance on pharmacoepidemiology studies is expected to influence future PSUR/PBRER content requirements for real-world evidence sections",
        ],
      },
      {
        type: "heading",
        text: "EMA Catalogue of Real-World Data Studies",
      },
      {
        type: "paragraph",
        text: "The EMA Catalogue of real-world data studies serves as the mandatory registration platform for non-interventional studies including PASS. Updated 2025 guidance clarifies registration requirements, including the obligation to register observational studies, whether or not requested by competent authorities, where results will be used to support regulatory decisions or submissions.",
      },
      {
        type: "heading",
        text: "Operational Checklist for MAHs",
      },
      {
        type: "list",
        items: [
          "Confirm IRIS platform access and internal capability for all post-submission PASS management activities",
          "Review all ongoing PASS protocols against updated Article 107n-q procedural expectations",
          "Update PSUR/PBRER templates to include GVP P III population-specific content from the February 2026 implementation date",
          "Verify that all PASS registrations in the EMA Catalogue of real-world data studies are current and complete",
          "Review fee implications of Regulation (EU) 2024/568 for PASS-related procedures with your regulatory budget holders",
          "Consider seeking PRAC-SAWP scientific advice for complex or novel PASS designs before initiating studies",
        ],
      },
    ],
  },
];
