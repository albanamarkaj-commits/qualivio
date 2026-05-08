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

export type RegulatorySource = "EMA" | "FDA" | "MHRA" | "ICH";

export interface ContentSection {
  type: "paragraph" | "heading" | "list" | "callout";
  text?: string;
  items?: string[];
  label?: string;
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
        text: "From January 2025, marketing authorisation holders are required to use the IRIS platform — EMA's regulatory submission and workflow management platform — for managing post-authorisation safety studies after original submission. This applies to amendments to PASS protocols, submission of interim and progress reports, and final study report submissions.",
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
        text: "The EMA Catalogue of real-world data studies serves as the mandatory registration platform for non-interventional studies including PASS. Updated 2025 guidance clarifies registration requirements, including the obligation to register observational studies — whether or not requested by competent authorities — where results will be used to support regulatory decisions or submissions.",
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
