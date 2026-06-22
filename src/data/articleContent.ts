export type ArticleSection = {
  heading: string;
  paragraphs: string[];
};

export type ArticleBody = {
  intro: string;
  sections: ArticleSection[];
};

export const articleContent: Record<string, ArticleBody> = {
  "signal-detection-modern-pharmacovigilance": {
    intro:
      "Signal detection is the organized way of finding new or changing safety information about a medicine from available data sources. GVP Module IX highlights signal management as one of the most important activities in pharmacovigilance. It requires structured processes, qualified staff, and documented results at every stage.",
    sections: [
      {
        heading: "What is a signal?",
        paragraphs: [
          "GVP Module IX defines a signal as information that comes from one or more sources, such as observations or experiments, which suggests a new possible link or a new detail of an existing link between a treatment and an event or a group of related events. The link must appear likely enough to warrant further investigation.",
          "Signals are not confirmed safety findings. They are hypotheses that need more examination. A signal can come from a single well-documented serious case or from patterns seen across many spontaneous reports. The credibility and clinical relevance of the possible link matter more than the number of reports.",
        ],
      },
      {
        heading: "Sources of signal data",
        paragraphs: [
          "Signals can arise from spontaneous reports of adverse reactions submitted to regulatory authorities or marketing authorization holders (MAHs), published scientific studies, non-interventional studies, disease registries, clinical trial safety data, and information from digital health tools. The EMA's EudraVigilance database acts as a central repository for Individual Case Safety Reports (ICSRs) across the European Economic Area and is a primary source for signal detection at the network level.",
          "Monitoring literature is a necessary part of pharmacovigilance systems under GVP Module VI. MAHs must review scientific and medical literature weekly for reports of suspected adverse reactions. Not detecting and processing literature cases is one of the most common issues cited during pharmacovigilance inspections.",
        ],
      },
      {
        heading: "The five steps of signal management",
        paragraphs: [
          "GVP Module IX outlines five sequential steps that together make up the signal management process: signal detection, signal validation, signal prioritization, signal assessment, and recommendations for action, followed by information exchange. Each step needs documented procedures, set timelines, and qualified staff.",
          "MAHs are expected to continually detect signals and review results at least monthly for serious listed adverse reactions and quarterly for others. The EMA and national authorities carry out signal detection centrally using EudraVigilance, with results reviewed by the Pharmacovigilance Risk Assessment Committee (PRAC) in its monthly meetings.",
        ],
      },
      {
        heading: "Signal Validation",
        paragraphs: [
          "Validation is the process of determining if the data supporting a detected signal provide enough evidence of a new or changed link to justify further analysis. During validation, the MAH or regulatory authority assesses the strength of the data, the biological likelihood of the association, and whether the reaction is already described in the current product information.",
          "A validated signal does not mean a causal relationship has been confirmed. It indicates that the evidence is credible enough to move on to prioritization and, if necessary, formal assessment. Signals that are not validated are closed with documented reasoning.",
        ],
      },
      {
        heading: "Disproportionality analysis",
        paragraphs: [
          "Quantitative signal detection methods, including disproportionality analysis techniques like the Reporting Odds Ratio (ROR) and the Information Component (IC), are commonly used on large spontaneous reporting databases. These statistical tools identify drug-event pairs that are reported more often than expected, considering the overall reporting trends in the database.",
          "Disproportionality signals are just a starting point, not a final conclusion. They must be looked at alongside clinical context, biological plausibility, time relationship, and any available epidemiological evidence. A statistically significant signal for a drug-event pair does not prove causality and may reflect reporting biases, confounding factors, or random variation.",
        ],
      },
      {
        heading: "Outcomes and regulatory action",
        paragraphs: [
          "Examined signals can lead to various regulatory actions. These include updates to the summary of product characteristics (SmPC) or package leaflet, starting a post-authorization safety study (PASS), introducing or strengthening risk minimization measures, communicating with healthcare professionals, or formal referral procedures at the EU level. The PRAC provides recommendations after signal assessment, which are then carried out through binding decisions or voluntary actions by MAHs.",
          "Timely communication of signal outcomes to all relevant parties, including national authorities, prescribers, and patients when appropriate, is a regulatory requirement. MAHs must keep records of all signal management activities in their pharmacovigilance system master file and report relevant outcomes in periodic safety update reports.",
        ],
      },
    ],
  },

  "inspection-ready-safety-systems": {
    intro:
      "Pharmacovigilance inspections serve as a regulatory tool to ensure that marketing authorization holders (MAHs) and clinical trial sponsors have pharmacovigilance systems that meet their legal responsibilities. GVP Module III outlines the EU framework for these inspections and defines the expectations organizations must meet for compliance.",
    sections: [
      {
        heading: "The purpose of pharmacovigilance inspections",
        paragraphs: [
          "Inspections confirm that MAHs and sponsors have built, maintained, and operated effective pharmacovigilance systems. Inspectors check not only for documented procedures but also whether these procedures are understood, followed, and effective in practice. The findings from inspections directly affect regulatory decisions. Serious deficiencies may lead to the suspension or revocation of marketing authorizations.",
          "Inspections may be routine, initiated by specific concerns, or part of a PSUR assessment or referral process. They can be conducted by the EMA, national authorities, or jointly. The inspections can cover the entire pharmacovigilance system or focus on specific products, processes, or locations.",
        ],
      },
      {
        heading: "The pharmacovigilance system master file",
        paragraphs: [
          "The PSMF is essential to a pharmacovigilance system. GVP Module II outlines its required contents, such as a detailed description of the QPPV and their contact information, the organizational structure, computerized systems used in pharmacovigilance, arrangements with third parties, product portfolio, and quality system documentation including SOPs and training records.",
          "The PSMF must always be accurate and up to date. It must be accessible to competent authorities within seven days of a request and within 24 hours in urgent cases. Inspectors often request the PSMF first and use it to guide their review of the pharmacovigilance system.",
        ],
      },
      {
        heading: "The role of the QPPV",
        paragraphs: [
          "The Qualified Person for Pharmacovigilance is responsible for establishing, maintaining, and managing the pharmacovigilance system. The QPPV must reside in the European Economic Area, have continuous access to all safety information related to the MAH's products, and be available at all times. These requirements come from Article 48 of Directive 2001/83/EC and are detailed in GVP Module I.",
          "Inspectors regularly evaluate whether the QPPV has genuine oversight and decision-making authority. A QPPV who cannot describe the safety profile of key products, lacks access to the safety database, or is not involved in important pharmacovigilance decisions is a significant concern. The role demands active involvement, not just a title on a document.",
        ],
      },
      {
        heading: "Quality systems and SOPs",
        paragraphs: [
          "GVP Module I requires that MAHs keep a documented quality system for pharmacovigilance. This includes standard operating procedures (SOPs), working instructions, training programs, audit plans, deviation management processes, and corrective and preventive action (CAPA) systems. Quality indicators and performance metrics must be established and monitored.",
          "Inspectors check if SOPs accurately reflect current practices, are reviewed and updated to align with the latest GVP requirements, and are consistently followed across all sites and functions involved in pharmacovigilance. An SOP that describes an obsolete process or a process being followed without a relevant SOP is problematic.",
        ],
      },
      {
        heading: "Common inspection findings",
        paragraphs: [
          "Inspection reports from the EMA and national authorities frequently highlight recurring issues. Common deficiencies include failing to detect adverse reaction cases from systematic literature monitoring, late or missing Individual Case Safety Report (ICSR) submissions to EudraVigilance, lack of documented QPPV oversight in safety decisions, insufficient validation of computerized pharmacovigilance systems, gaps in training records for PV staff, and failure to process cases from all sources, including digital and patient-reported data.",
          "Contract research organizations (CROs) and third-party pharmacovigilance service providers often contribute to compliance problems. MAHs are responsible for all pharmacovigilance duties despite outsourcing agreements. Written contracts must clearly outline responsibilities and include provisions for oversight and auditing.",
        ],
      },
      {
        heading: "Building an inspection-ready culture",
        paragraphs: [
          "Being ready for inspections goes beyond preparing documents. Every staff member involved in pharmacovigilance must understand their role, can explain the processes they follow, and knows how to escalate safety concerns. Regular internal audits, mock inspections, and training activities are the most effective preparation.",
          "Organizations should view inspections as an opportunity to showcase the quality and effectiveness of their pharmacovigilance system, rather than as a threat to manage. Those that approach inspections with transparency and a genuine focus on patient safety tend to achieve better results than those primarily concerned with presentation.",
        ],
      },
    ],
  },

  "clinical-quality-trends": {
    intro:
      "Pharmacovigilance practice does not exist in isolation. It is shaped by broader trends in life sciences regulation, quality management, digital innovation, and organisational culture. Understanding these trends helps pharmacovigilance professionals anticipate regulatory expectations and build systems that are both compliant and genuinely effective.",
    sections: [
      {
        heading: "Quality culture as a foundation",
        paragraphs: [
          "A genuine quality culture, rather than mere compliance with written procedures, is increasingly recognised as the foundation of effective pharmacovigilance. GVP Module I emphasises that quality systems must be embedded in the organisation and supported by leadership at all levels. When safety reporting is treated as a regulatory obligation rather than a patient safety priority, gaps in vigilance tend to emerge and persist.",
          "Regulators are paying closer attention to whether organisations can demonstrate a culture of continuous improvement. Inspection findings related to repeated deviations, slow CAPA resolution, or inadequate root cause analysis are interpreted as indicators of systemic quality culture deficiencies, not merely isolated process failures.",
        ],
      },
      {
        heading: "Training and competency development",
        paragraphs: [
          "GVP Module I requires that all personnel involved in pharmacovigilance activities are appropriately qualified and trained for their tasks. Training must be documented, role-specific, and regularly refreshed to reflect changes in regulatory requirements and internal processes. Initial induction alone is insufficient; ongoing competency maintenance is an explicit expectation.",
          "Beyond regulatory compliance, investment in training has measurable quality benefits. Staff who understand the clinical and regulatory significance of their work, rather than following process steps mechanically, make better judgements when handling complex or ambiguous cases. Scenario-based training, case reviews, and participation in external pharmacovigilance forums all contribute to competency development.",
        ],
      },
      {
        heading: "Data integrity in safety systems",
        paragraphs: [
          "Data integrity principles, well established in Good Manufacturing Practice, are now widely applied across regulated disciplines including pharmacovigilance. Safety databases must ensure that data are attributable, legible, contemporaneous, original, and accurate. Audit trails must be enabled, protected from unauthorised modification, and regularly reviewed.",
          "GVP Module I requires that computerised systems used in pharmacovigilance are validated and that data are protected against accidental or unauthorised access, modification, or deletion. Retrospective amendment of safety records without documented justification represents a significant regulatory risk and may constitute a critical inspection finding.",
        ],
      },
      {
        heading: "Digital transformation and AI-assisted tools",
        paragraphs: [
          "Artificial intelligence and natural language processing tools are increasingly deployed in pharmacovigilance to support literature monitoring, case intake triage, duplicate detection, signal detection, and narrative generation. These technologies can significantly increase processing efficiency, particularly in organisations managing large case volumes.",
          "Regulatory expectations have not relaxed in response to automation. GVP Module I requirements for computerised system validation apply fully to AI-assisted tools. Organisations must demonstrate that automated processes produce accurate outputs, that errors are detected and corrected, and that human oversight is maintained at critical decision points. Validation must be prospective and risk-based, not retrospective justification of existing systems.",
        ],
      },
      {
        heading: "Risk-based approaches to pharmacovigilance",
        paragraphs: [
          "Risk-based thinking is a principle that runs throughout modern GVP guidance. Not all products carry the same level of safety concern, and pharmacovigilance intensity should be proportionate to the risk profile of each product across its lifecycle. This applies to signal detection frequency, PASS design, risk minimisation scope, and audit prioritisation.",
          "A risk-based approach requires that the initial risk assessment is robust, that it is revisited regularly as new safety information emerges, and that resources are allocated accordingly. Products under additional monitoring, those with significant safety concerns in the RMP, and newly authorised biologicals typically warrant enhanced surveillance compared to well-established products with mature safety profiles.",
        ],
      },
      {
        heading: "Cross-functional integration",
        paragraphs: [
          "Pharmacovigilance does not operate in isolation within life sciences organisations. Integration with medical affairs, regulatory affairs, clinical operations, quality assurance, and commercial functions is essential to ensure that safety information flows appropriately and that obligations are recognised across the product lifecycle. A safety signal identified by a field medical adviser, a complaint reported to customer services, or a literature finding identified by a medical writer must all reach the pharmacovigilance function promptly.",
          "Clear contractual arrangements, defined escalation pathways, and regular cross-functional communication are prerequisites for a compliant and effective pharmacovigilance system. Awareness training for non-PV staff on adverse event recognition and reporting obligations is a GVP requirement that is frequently underestimated in scope.",
        ],
      },
    ],
  },

  "icsr-lifecycle": {
    intro:
      "The Individual Case Safety Report (ICSR) is the fundamental unit of pharmacovigilance data. Managing ICSRs from initial receipt through to regulatory submission requires structured processes, trained staff, validated systems, and close attention to timelines. GVP Module VI provides the authoritative framework for ICSR management in the European Union.",
    sections: [
      {
        heading: "Minimum criteria and case validity",
        paragraphs: [
          "For a report to qualify as a valid ICSR, four minimum criteria must be present: an identifiable reporter, an identifiable patient, a suspect medicinal product, and a suspected adverse reaction. If any of these four elements is missing, the report cannot be processed as an ICSR. However, when minimum criteria are met, processing obligations begin regardless of how limited the available information may be.",
          "Identifiability does not require full names or contact details. A reporter described only as 'a nurse' and a patient described only by age and sex satisfy the identifiability criterion. The standard is whether the reporter and patient can be distinguished from other individuals, not whether they can be fully identified.",
        ],
      },
      {
        heading: "Sources of cases",
        paragraphs: [
          "ICSRs can originate from a wide range of sources. Spontaneous reports submitted voluntarily by healthcare professionals or patients form the largest category. Clinical trial safety reports, post-authorisation study data, literature cases identified through systematic monitoring, disease registry data, and cases from patient support programmes and digital sources including social media are all potential ICSR sources.",
          "GVP Module VI requires MAHs to have processes in place to identify and capture cases from all these sources. Cases identified from the published literature must be processed and submitted even when they have already been reported by an author or registry to a regulatory authority. The obligation to submit does not depend on whether the case is already known to regulators.",
        ],
      },
      {
        heading: "Seriousness classification",
        paragraphs: [
          "The seriousness of an adverse reaction determines the applicable submission timeline and is one of the most important assessments in case processing. A reaction is considered serious if it results in death, is life-threatening, requires inpatient hospitalisation or prolongation of existing hospitalisation, results in persistent or significant disability or incapacity, constitutes a congenital anomaly or birth defect, or is considered a medically important event based on medical and scientific judgement.",
          "The 'medically important event' criterion requires professional judgement. Reactions that do not meet the other seriousness criteria but that may jeopardise the patient or require intervention to prevent one of the other serious outcomes qualify under this category. Examples include anaphylaxis that was managed without hospitalisation, convulsions, or drug dependency.",
        ],
      },
      {
        heading: "Expectedness assessment",
        paragraphs: [
          "Expectedness is assessed against the reference safety information for the product. In the post-authorisation setting, this is typically the current SmPC. In the clinical trial setting, it is the Investigator's Brochure. A reaction is unexpected when its nature, severity, specificity, or outcome is not consistent with the reference safety information.",
          "Expedited reporting obligations apply to serious unexpected suspected adverse reactions (SUSARs in the clinical trial setting, and serious unexpected reactions in the post-marketing setting). The combination of seriousness and unexpectedness triggers the 15-calendar-day reporting timeline. Serious expected reactions are reported as part of the periodic line listing, normally within 90 days.",
        ],
      },
      {
        heading: "Processing, coding, and medical review",
        paragraphs: [
          "Case processing encompasses data entry into the safety database, adverse event coding using MedDRA terminology, causality assessment by the reporter and by the MAH, narrative writing, and duplicate detection. MedDRA coding should capture the most clinically meaningful description of the event at the Preferred Term level, with the Lowest Level Term selected to reflect the verbatim report as closely as possible.",
          "Medical review by a qualified physician or appropriately trained healthcare professional is an essential step. It ensures that the clinical significance of the case is properly evaluated, that coding accurately reflects the clinical picture, that the case narrative is accurate and complete, and that any signals or concerns are identified and escalated appropriately. Medical review must be documented in the case record.",
        ],
      },
      {
        heading: "Electronic submission and follow-up",
        paragraphs: [
          "ICSRs are submitted electronically in E2B(R3) format, the international standard defined by ICH. EudraVigilance is the EU pharmacovigilance database to which MAHs transmit ICSRs for post-authorisation cases. Successful transmission requires validated technical infrastructure, ongoing monitoring of acknowledgement and error messages, and procedures for handling rejected cases within the applicable timelines.",
          "Incomplete cases require active follow-up to obtain clinically relevant missing information. The number of follow-up attempts and the method used must be documented. When significant new information is received following initial submission, the case must be resubmitted as a follow-up report within the timelines applicable to the updated classification. Cases that were initially non-serious and become serious following follow-up information require expedited resubmission.",
        ],
      },
    ],
  },

  "aggregate-reports-regulatory-expectations": {
    intro:
      "Aggregate safety reports are the primary mechanism through which regulatory authorities assess the cumulative benefit-risk profile of authorised medicinal products. They synthesise safety data from all sources over a defined period and require a critical, evidence-based benefit-risk evaluation. GVP Module VII and ICH E2C(R2) provide the framework for periodic benefit-risk reporting in the EU.",
    sections: [
      {
        heading: "The role of aggregate reporting",
        paragraphs: [
          "While ICSRs capture individual patient experiences, aggregate reports provide a population-level perspective on safety. They allow MAHs and regulators to identify trends that may not be apparent from individual case review, to assess changes in the benefit-risk balance over time, and to determine whether product information remains accurate and complete as real-world evidence accumulates.",
          "Aggregate reporting is not a passive administrative exercise. Regulatory authorities expect MAHs to use the PSUR process to actively interrogate their safety database, identify potential signals, acknowledge data limitations, and arrive at a well-reasoned and evidence-based benefit-risk conclusion. Reports that are descriptive rather than analytical are a recurring source of regulatory concern.",
        ],
      },
      {
        heading: "The PSUR and PBRER format",
        paragraphs: [
          "The Periodic Safety Update Report (PSUR), aligned with the ICH E2C(R2) format designated as the Periodic Benefit-Risk Evaluation Report (PBRER), is the primary aggregate safety document for authorised medicinal products. GVP Module VII specifies its content requirements, which include an executive summary, worldwide marketing authorisation status, actions taken for safety reasons, changes to reference safety information, patient exposure estimates, cumulative case line listings, signal and risk evaluations, assessment of study findings, benefit characterisation, and an integrated benefit-risk evaluation.",
          "The benefit section of the PSUR is as important as the safety section. A rigorous benefit-risk evaluation requires explicit characterisation of the therapeutic benefits, identification of the population in which benefits are realised, and a balanced assessment of how risks and benefits compare in clinical practice. Superficial benefit sections that simply restate the indication without analysis are inadequate.",
        ],
      },
      {
        heading: "Submission timelines and the EURD list",
        paragraphs: [
          "In the European Union, the European Union Reference Dates (EURD) list specifies the data lock points and submission frequencies for PSURs. Submission frequencies are generally six-monthly for the first two years following initial authorisation, annual for the subsequent two years, and three-yearly thereafter, unless the competent authority specifies otherwise. The EURD list is published and maintained by EMA and is binding for medicinal products that appear on it.",
          "PSURs are assessed in the EU through the PSUR single assessment procedure, which is coordinated by a PRAC rapporteur and results in a single EU-wide scientific conclusion. This conclusion is adopted by CHMP or CMDh depending on the procedure type and may result in regulatory action including label changes, imposition of new conditions, or safety referrals.",
        ],
      },
      {
        heading: "Development safety update reports",
        paragraphs: [
          "The Development Safety Update Report (DSUR), described in ICH E2F, is the aggregate safety report for investigational medicinal products in clinical development. It covers a twelve-month period beginning on the Development International Birth Date and is submitted annually to all regulatory authorities with whom a clinical trial is ongoing.",
          "The DSUR includes cumulative exposure data from all ongoing and completed trials, a summary of safety findings including deaths, serious adverse events, and events leading to discontinuation, signal analysis, and an overall benefit-risk assessment for the development programme. The DSUR is a critical tool for identifying emerging safety trends across a trial programme before the product reaches the market.",
        ],
      },
      {
        heading: "Writing an effective benefit-risk evaluation",
        paragraphs: [
          "The integrated benefit-risk evaluation is the most analytically demanding section of the PSUR. It requires the author to weigh the totality of available safety evidence against the established therapeutic benefits, taking into account the clinical context, the target patient population, available therapeutic alternatives, and the effectiveness of existing risk minimisation measures.",
          "Effective benefit-risk writing is explicit and structured. Authors should state clearly what the risks are, what the evidence for each risk is, how certain or uncertain that evidence is, what benefits are established, and how the balance between risks and benefits has changed, if at all, since the previous reporting period. Conclusions must be justified by the analysis presented, not asserted without supporting reasoning.",
        ],
      },
      {
        heading: "Special reporting situations",
        paragraphs: [
          "Certain categories of medicinal products are subject to additional or modified aggregate reporting requirements. Products under additional monitoring in the EU, indicated by the inverted black triangle, are subject to enhanced post-authorisation surveillance and more frequent safety assessment. Biologicals and advanced therapy medicinal products may be subject to specific aggregate reporting conditions as part of their marketing authorisation.",
          "Products authorised under conditional marketing authorisation or exceptional circumstances are reassessed annually as a condition of maintaining their authorisation. These assessments require submission of updated safety and efficacy data demonstrating that the benefit-risk balance remains favourable and that outstanding post-authorisation commitments are being fulfilled on schedule.",
        ],
      },
    ],
  },

  "risk-management-plans-guide": {
    intro:
      "A Risk Management Plan (RMP) is a living document that describes what is known and unknown about the safety of a medicinal product, and what measures are in place to characterise, prevent, or minimise its risks. GVP Module V provides the EU framework for RMPs and sets out the expectations that MAHs must meet when preparing, submitting, and updating these documents.",
    sections: [
      {
        heading: "Regulatory basis and scope",
        paragraphs: [
          "An RMP is required for all new marketing authorisation applications submitted in the EU under centralised or national procedures. It may also be required for existing authorisations when new safety concerns arise, when a product is authorised for a new patient population, or when the competent authority considers that enhanced risk management is warranted. The legal basis is Regulation (EC) 726/2004 and Directive 2001/83/EC, as interpreted through GVP Module V.",
          "The RMP is submitted as part of the marketing authorisation application and is reviewed by PRAC as part of the benefit-risk assessment. Once authorised, the RMP becomes a binding document and must be kept current. Failure to implement the pharmacovigilance activities or risk minimisation measures described in the approved RMP constitutes a regulatory non-compliance.",
        ],
      },
      {
        heading: "The safety specification",
        paragraphs: [
          "The safety specification is the analytical core of the RMP. It characterises the product's safety profile through systematic review of non-clinical data, clinical pharmacology findings, clinical trial safety experience, and post-marketing data where available. It identifies important identified risks, important potential risks, and missing information, each of which drives the pharmacovigilance and risk minimisation planning that follows.",
          "An identified risk is one for which there is adequate evidence of a causal association with the medicinal product. A potential risk is one for which there is reason for concern but insufficient evidence to confirm causation. Missing information refers to gaps in safety knowledge about the product, such as use in paediatric populations, pregnancy, severe renal impairment, or long-term use, where data are absent rather than reassuring.",
        ],
      },
      {
        heading: "The pharmacovigilance plan",
        paragraphs: [
          "The pharmacovigilance plan describes the activities that will be conducted to further characterise the risks identified in the safety specification and to address identified gaps in safety knowledge. Routine pharmacovigilance activities, including adverse event monitoring, ICSR processing, signal detection, and PSUR submission, apply to all products. Additional pharmacovigilance activities are proposed when routine surveillance is insufficient.",
          "Additional activities may include enhanced spontaneous reporting with targeted follow-up questionnaires, drug utilisation studies to characterise real-world prescribing patterns, pregnancy registries, disease registries, observational cohort studies, and formal post-authorisation safety studies (PASS). Each activity must have a clearly stated objective, a rationale linked to a specific safety concern or knowledge gap, defined milestones, and success criteria.",
        ],
      },
      {
        heading: "Routine and additional risk minimisation",
        paragraphs: [
          "Risk minimisation measures aim to prevent adverse reactions from occurring or to reduce their severity when they do. Routine measures include the SmPC, the package leaflet, labelling, pack size and pack type, and legal status restrictions. These apply to all medicinal products and are the primary means of communicating safety information to prescribers and patients.",
          "Additional risk minimisation measures are used when routine measures alone are insufficient to manage a significant risk. Examples include direct healthcare professional communications (DHPCs), educational materials for prescribers or patients, controlled distribution systems, patient cards, and pregnancy prevention programmes. GVP Module XVI provides detailed guidance on the design and implementation of additional measures and requires that their effectiveness be assessed against predefined objectives.",
        ],
      },
      {
        heading: "Proportionality in risk management",
        paragraphs: [
          "GVP Module V emphasises that risk management should be proportionate to the identified risks and to the evidence base supporting proposed measures. Not all products with safety concerns require complex additional risk minimisation, and regulatory authorities scrutinise proposals to ensure that the burden placed on prescribers and patients is justified by the benefit in risk reduction.",
          "Overly complex or numerous risk minimisation measures can paradoxically reduce their effectiveness by creating compliance fatigue among healthcare professionals. The most effective measures are those that are simple, clearly targeted at a specific and significant risk, grounded in an understanding of how the product is used in clinical practice, and capable of being evaluated for effectiveness.",
        ],
      },
      {
        heading: "RMP updates across the product lifecycle",
        paragraphs: [
          "The RMP is a living document that must be updated whenever new safety information emerges that affects the safety specification or the planned risk management activities. Key triggers for RMP updates include identification of a new important risk, completion of a PASS with results that change the safety profile, changes to risk minimisation measures, submission of a variation affecting the benefit-risk balance, and requests from the competent authority.",
          "PASS results must be communicated to regulators and fed back into the RMP and SmPC as appropriate. Where a required PASS has not been initiated or completed on schedule, the MAH must notify the competent authority and provide a justified explanation. Persistent failure to fulfil PASS obligations is a significant non-compliance and may result in referral or variation of the marketing authorisation conditions.",
        ],
      },
    ],
  },

  "fda-faers-aems-transition-2026": {
    intro:
      "On 11 March 2026, the FDA officially retired FAERS, the FDA Adverse Event Reporting System, and replaced it with AEMS, the Adverse Event Monitoring System. Within pharmacovigilance, regulatory affairs, and drug safety, it represents one of the most significant shifts in post-market surveillance infrastructure in over a decade.",
    sections: [
      {
        heading: "What was FAERS?",
        paragraphs: [
          "FAERS was the FDA's primary database for collecting and analysing adverse event reports associated with drugs and therapeutic biological products. Launched in 2012 as a replacement for its predecessor AERS, it became the backbone of post-market safety surveillance in the United States. At the time of its retirement, FAERS held over 32.8 million adverse event reports, submitted by healthcare professionals, patients, and pharmaceutical companies from across the world.",
          "The database was publicly accessible through a dashboard and quarterly data releases, making it one of the most widely used pharmacovigilance data sources globally. Regulators, pharmaceutical companies, academic researchers, and independent safety scientists all relied on it for signal detection, post-marketing surveillance, and benefit-risk assessments. Its data underpinned regulatory decisions, informed labelling updates, and supported research into the real-world safety of authorised medicines.",
        ],
      },
      {
        heading: "Why did the FDA retire it?",
        paragraphs: [
          "FAERS served the industry well for over a decade, but it was built on infrastructure that reflected the technology landscape of the early 2010s. As reporting volumes grew and expectations around data timeliness, accessibility, and analytical capability increased, the limitations of the system became harder to work around. Quarterly data releases, for example, meant that the public database was always weeks or months behind the most current information held internally by the FDA.",
          "The broader shift toward real-time surveillance, AI-assisted pharmacovigilance, and integrated safety monitoring created an expectation that regulatory databases should be able to keep pace with modern data environments. FAERS was not designed with those capabilities in mind. The transition to AEMS reflects a deliberate decision by the FDA to invest in infrastructure that can support the next generation of drug safety science, rather than continuing to patch a system with structural constraints.",
        ],
      },
      {
        heading: "What AEMS introduces",
        paragraphs: [
          "The Adverse Event Monitoring System is designed around several significant improvements over its predecessor. The most notable is near real-time data updates, which address one of the longest-standing criticisms of FAERS: the gap between when reports were received and when they became visible to the public and to researchers. AEMS is intended to close that gap substantially.",
          "The new system also introduces centralised whistleblower reporting, a feature that recognises the importance of safety concerns raised by individuals within organisations and creates a more structured channel for capturing that information. Alongside this, AEMS includes modernised safety monitoring infrastructure and enhanced capabilities designed specifically for AI-enabled pharmacovigilance, reflecting the direction the field is moving.",
        ],
      },
      {
        heading: "What this means for PV professionals",
        paragraphs: [
          "For pharmacovigilance professionals working in MAHs and CROs, the transition raises several practical questions. Processes that relied on FAERS data exports, particularly those built around the quarterly public release cadence, will need to be reviewed. Any automated workflows that pulled FAERS data for signal detection or competitive intelligence purposes may require reconfiguration to align with AEMS data formats and update schedules.",
          "More broadly, the move to near real-time data has implications for how signal detection is approached. When safety data updates continuously rather than quarterly, the expectation around monitoring frequency and responsiveness may shift. Organisations should start reviewing whether their current signal detection processes are designed to take advantage of more timely data, or whether they were built around the slower cadence of the old system.",
        ],
      },
      {
        heading: "The broader direction the field is heading",
        paragraphs: [
          "The FAERS to AEMS transition is part of a pattern. Across the major regulatory jurisdictions, there is a clear push toward more modern, data-driven pharmacovigilance infrastructure. EudraVigilance has been through significant updates in recent years. ICH E2B(R3) standardised the electronic transmission of ICSRs. IDMP implementation continues to progress. The common thread is a shift toward structured data, interoperability, and the ability to do more with safety information faster.",
          "AI-enabled pharmacovigilance, referenced explicitly in the AEMS announcement, is no longer a theoretical future state. Tools that use natural language processing to identify adverse events in unstructured text, algorithms that flag safety signals earlier than traditional statistical methods, and platforms that can integrate safety data across multiple sources are already in use in parts of the industry. The regulatory infrastructure is now being built to support and keep pace with those capabilities.",
          "For professionals in pharmacovigilance, regulatory affairs, and drug safety, the question is not whether to engage with these changes. It is how quickly and how well organisations can adapt their processes, their people, and their systems to operate effectively in an environment that will continue to evolve.",
        ],
      },
    ],
  },
};
