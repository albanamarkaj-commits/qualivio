export type ArticleTable = {
  headers: string[];
  rows: string[][];
  caption?: string;
};

/** A row of headline figures, for data-led articles. */
export type ArticleStat = {
  value: string;
  label: string;
};

/** A horizontal bar chart. Each `value` is plotted against `max`. */
export type ArticleBars = {
  max: number;
  items: { label: string; value: number; display?: string }[];
  caption?: string;
};

export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  stats?: ArticleStat[];
  bars?: ArticleBars;
  quote?: { text: string; attribution: string };
  postQuoteParagraphs?: string[];
  table?: ArticleTable;
  list?: string[];
  closing?: string[];
};

export type ArticleSource = {
  label: string;
  url: string;
};

export type ArticleBody = {
  intro: string | string[];
  sections: ArticleSection[];
  sources?: ArticleSource[];
};

export const articleContent: Record<string, ArticleBody> = {
  "health-canada-gvp-inspections-2026": {
    intro: [
      "Health Canada publishes the result of every good pharmacovigilance practices inspection it carries out, along with the findings inspectors recorded. Between 1 January and 19 August 2026 it started 23 of them. Sixteen report cards have been published so far, and 12 of those carry the full detail.",
      "Because Health Canada writes these findings as standard phrases, the same wording appears at company after company. That makes it possible to count them and see what inspectors are actually looking for.",
    ],
    sources: [
      {
        label: "Health Canada. Good pharmacovigilance practices (GVP) inspections database. Retrieved 19 August 2026.",
        url: "https://www.drug-inspections.canada.ca/gvp/searchResult-en.html?estName=&ref=&site=&prov=&rate=&startDate=2026-01-01&endDate=2026-08-19",
      },
      {
        label: "Food and Drug Regulations (C.R.C., c. 870), Part C, Division 1 and Division 8.",
        url: "https://laws-lois.justice.gc.ca/eng/regulations/c.r.c.,_c._870/",
      },
    ],
    sections: [
      {
        heading: "The Year So Far",
        paragraphs: [
          "Of the 19 inspections that reached a rating, 17 were compliant and two were not. The two non-compliant results went to Teva Canada and Panacea Biotec Pharma. Four inspections were still in progress at the time of writing.",
        ],
        stats: [
          { value: "23", label: "GVP inspections started in the period" },
          { value: "17", label: "of the 19 that finished were rated compliant" },
          { value: "69", label: "findings published across 12 full report cards" },
        ],
        closing: [
          "Thirteen of the 23 inspected sites were in Canada, nine of those in Ontario and four in Quebec. The other ten were spread across Belgium, Sweden, Japan, China, South Korea, France, Switzerland, the United States and India.",
        ],
      },
      {
        heading: "A Compliant Rating Does Not Mean There Was Nothing to Fix",
        paragraphs: [
          "The compliant group is the more interesting one. The 11 compliant sites with a full report card published still averaged 5.5 written findings each, with a median of 6 and a range of 1 to 10. Passing an inspection and passing it cleanly are two different things.",
          "The number of findings also tells you very little about the outcome. Mantra Pharma collected 10 findings and was rated compliant. Teva Canada collected 8 and was rated non-compliant. What matters is what the findings are about, not how many there are.",
          "Foreign sites did no worse than Canadian ones. Among the report cards published in full, sites outside Canada averaged 5.7 findings and Canadian sites 5.8. The two non-compliant ratings also came from opposite ends of that split, one Canadian and one Indian.",
        ],
      },
      {
        heading: "The Areas That Came Up Most",
        paragraphs: [
          "We grouped every published finding by what it was about. Thirteen areas came up. One came up far more than the rest. The figures below count how many of the 12 sites with a full report card were cited in each area.",
        ],
        bars: {
          max: 12,
          items: [
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
        closing: [
          "Case processing is the one almost nobody avoided. Ten of the 12 sites were told to fix something about how adverse drug reactions are received, handled or evaluated. The specific findings ranged from follow up not being sought, to cases not being coded properly, to the reason for invalidating a case not being written down.",
          "Eight of the 12 sites were cited on a reporting deadline, and six of those had actually missed one. This is the finding spread most evenly across the group. It is not just small companies. Large multinationals with established safety databases are in there too.",
          "The deadline findings cluster around the date a company first became aware of a case, not around the submission step itself. If day zero is set inconsistently for cases arriving through affiliates, partners, medical information lines or social media, the clock starts late and the submission is late with it.",
        ],
      },
      {
        heading: "Two Thirds of the Findings Cite the Same Section",
        paragraphs: [
          "C.01.017 of the Food and Drug Regulations covers serious adverse drug reaction reporting. In practice Health Canada records most of the pharmacovigilance system against it. Procedures, agreements, change control, self-inspection and computer validation all end up here.",
        ],
        table: {
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
      },
      {
        heading: "The Same Findings Keep Coming Up",
        paragraphs: [
          "Seventeen findings appeared at more than one company. Together they account for 43 of the 69 published findings, so more than half of what inspectors wrote in 2026 repeats something already written at another company. These are the ones that recurred most.",
        ],
        table: {
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
      },
      {
        heading: "The Four Inspections Still Open",
        paragraphs: [
          "Gilead Sciences Canada, Argenx, Celltrion and Hugel Canada were still in progress at the time of writing. Their initial report cards name the problem areas but not the detailed wording. All four were flagged under C.01.017, and three of the four under both annual summary reports and foreign action notification.",
          "C.01.019, issue-related summary reports, appears in two of these four and nowhere in the 69 published findings. It is worth watching when these report cards are finished.",
        ],
      },
      {
        heading: "Six Things to Check Before Your Next Inspection",
        paragraphs: [
          "None of these require a new system. They are the places this year's findings landed most often.",
        ],
        list: [
          "Take ten closed cases and rebuild each one from first receipt through to submission. Inspectors keep finding a gap between what the procedure says and what the case file shows.",
          "Check how day zero is set for every route a case can arrive by, including affiliates, partners, medical information and social media.",
          "Read every partner, licensor and vendor agreement against what your team actually does today, and put a review date on each one.",
          "Write down why a case was invalidated, at the time you decide it. Three sites were cited for exactly this, and it costs nothing to prevent.",
          "Confirm that a foreign regulatory action would reach you inside 72 hours. Health Canada wants to see how you find out, not only what you do once you know.",
          "Look at what your own self-inspections found last year. If your audits are not picking these things up, the inspector will.",
        ],
      },
      {
        heading: "How This Was Counted",
        paragraphs: [
          "A note on what these numbers do and do not show.",
        ],
        list: [
          "Scope: all GVP inspections in Health Canada's public database with a start date between 1 January and 19 August 2026 inclusive. Data retrieved 19 August 2026.",
          "The 69 findings come from 12 inspections, not 23. Seven have no report card published yet, including one of the two non-compliant results. Four more have an initial report card only.",
          "Areas were assigned by matching the published wording. A finding covering two areas is counted in both, so the area figures do not sum to 69.",
          "Health Canada does not publish a risk rating against individual GVP findings, so every finding is counted equally. This is why the number of findings and the rating do not line up.",
          "Twelve sites is a small sample. The order of the main areas is clear, but a difference of one or two findings between categories does not mean much.",
        ],
        closing: [
          "All establishment names, ratings and findings are reproduced as published by Health Canada. The findings are predictable, which is the most useful thing about them, because it means most of them are preventable.",
        ],
      },
    ],
  },
  "human-error-root-cause-analysis": {
    intro: "Part of the problem with having 'human error' as a root cause is that there is not much you can do with your conclusion. To err is human after all, so let's move on to something else. But people make errors for a reason. And trying to understand why they made the error can lead us down a much more fruitful path toward actions we can implement to prevent recurrence.",
    sources: [
      {
        label: "Rasmussen, J. (1983). Skills, rules, and knowledge; signals, signs, and symbols, and other distinctions in human performance models. IEEE Transactions on Systems, Man, and Cybernetics, 13(3), 257–266.",
        url: "https://doi.org/10.1109/TSMC.1983.6313160",
      },
      {
        label: "Reason, J. (1990). Human Error. Cambridge University Press.",
        url: "https://scholar.google.com/scholar?q=Human+Error+James+Reason+1990+Cambridge+University+Press",
      },
      {
        label: "The W. Edwards Deming Institute — principles and quotes.",
        url: "https://deming.org",
      },
    ],
    sections: [
      {
        heading: "Skills, Rules, Knowledge (SRK) Model",
        paragraphs: [
          "Jens Rasmussen was a human factors expert who developed the Skills, Rules, Knowledge (SRK) framework. The framework helps designers determine how information should be displayed best for workers to understand and operate systems, considering things like the worker's attention, reaction time, memory, and hand-eye coordination.",
          "The framework describes three levels of cognitive activity people experience when making decisions and solving problems while working. Following are the three levels.",
          "Skill-based level: This level requires minimal mental resources. When you are very familiar with a task or situation, you do something automatically, with little conscious thought about doing it. Skills can be physical or cognitive. For example, a quality control analyst who has reviewed hundreds of batch records will navigate the document structure and signature fields automatically, without consciously thinking through each step.",
          "Rule-based level: This level requires some conscious decision-making for task performance and therefore requires some mental resources. You make decisions based on rules. The rules may be taught or communicated (for example, an SOP for deviation classification) or people may create their own rules from experience. For example, a pharmacovigilance associate may know the company process requires manager sign-off for expedited reports, but if the manager is always available on chat, she starts submitting for approval informally without following the official workflow. She has created her own rule.",
          "Knowledge-based level: If you are facing a unique and unfamiliar situation, you would make decisions at this level. Since the decision is not automatic and reflexive (skill-based), and you do not have any rules to guide you (rule-based), you spend more mental energy and time making a knowledge-based decision. You must think through the facts and possible consequences and create a plan based on your knowledge and experience. For example, a clinical trial coordinator encountering a protocol amendment mid-study that conflicts with an existing regulatory commitment must reason through the regulatory, ethical, and operational implications without a specific procedure to follow.",
          "Although Rasmussen was an electrical engineer, his work was groundbreaking in cognitive psychology. He introduced the idea that blaming a worker for a mistake was not useful because humans make errors due to cognitive processes they are unaware of and not always because of factors they can control.",
        ],
      },
      {
        heading: "Generic Error-Modelling System (GEMS)",
        paragraphs: [
          "When the demands of a job exceed a worker's cognitive capacity, the ability to process critical information, react to it, and make good decisions is compromised. This increases the chances of human error.",
          "GEMS, developed by Dr. James Reason, is based heavily on Rasmussen's framework described above. Reason was a professor of psychology in the UK. GEMS takes Rasmussen's model toward the cognitive factors leading to human error.",
          "Reason's model has been applied to understand human errors in high-risk, high-consequence situations such as pilots operating aircraft, doctors performing surgeries, and operators working in nuclear control rooms. In Life Sciences, the same principles apply directly to GMP manufacturing, pharmacovigilance processing, and clinical trial conduct.",
          "Reason's model has four basic error types: slips and lapses (skill-based), rule-based and knowledge-based. Let's examine how bad decisions can result from cognitive processes in a Life Sciences context.",
          "Skill-based slips and lapses: Slips are when someone does something that is not what they intended to do; lapses are memory failures. For example, a pharmacovigilance specialist who processes large volumes of individual case safety reports (ICSRs) daily may automatically select 'non-serious' on a case that clearly meets seriousness criteria, simply because the action is so habitual that it bypasses conscious review. This is also called an 'action error.' The specialist relied on muscle memory built from repetition, rather than consciously evaluating that specific case.",
          "Rule-based mistakes: These mistakes involve judgment and decision-making. For example, a clinical trial coordinator always schedules follow-up visits within a 3-day window as required by the protocol. When a bank holiday falls within the scheduled window, she books the visit as usual without adjusting for the calendar constraint. She applied the rule correctly but failed to account for a situational variable that changed what the rule required. This is not an action error but a thinking error, because some conscious decision-making was involved.",
          "Knowledge-based mistakes: This is a mistake that involves higher-level judgment and decision-making. For example, a regulatory affairs associate is preparing a submission for a new market where the team has no prior experience. There is no specific guidance document available, and the associate applies assumptions based on another region's requirements. The submission is rejected because the format and content expectations differ significantly. The associate developed a plan for an unfamiliar situation with no rules to follow, but the plan did not work out.",
          "If we think of how we can support skill- and rule-based behaviors in familiar tasks, more of a worker's cognitive resources may be devoted to knowledge-based behaviors. This is important for managing unanticipated events and mitigating mistakes.",
        ],
      },
      {
        heading: "Error Types and Corrective Actions",
        paragraphs: [
          "By getting beyond human error and considering different error types, we can start to think of what actions we can implement to try to stop the errors occurring. These are called corrective actions. Ideally, we want processes and systems to be easy and intuitive and the people to be well trained. When people are well trained but the process or system is complex, there are likely to be errors from time to time.",
        ],
        quote: {
          text: "A bad system will beat a good person every time.",
          attribution: "W. Edwards Deming",
        },
        closing: [
          "These are examples and you should be able to think of additional possible corrective actions. But then which ones would you actually implement? You want the most effective and efficient ones of course. You want your actions to be focused on the root cause, or the chain of cause and effect that leads to the problem.",
        ],
      },
      {
        heading: "Effectiveness of Corrective Actions",
        paragraphs: [
          "The most effective actions are those that eliminate the problem completely. In a clinical data context, for example, automating the calculation of derived variables such as change from baseline or dose per kilogram removes the opportunity for calculation error entirely. If it cannot go wrong, it will not go wrong. This is the principle of mistake-proofing, sometimes called poka-yoke, and it is the gold standard for corrective action design.",
          "The next most effective actions are those that help people to get it right. Structured data entry screens with controlled vocabularies, MedDRA autocomplete for adverse event coding, or pre-populated fields from validated reference data all reduce the cognitive burden on the user. Although instructions and guidance documents also belong in this category, they do have their limitations, as I will discuss in a future post.",
        ],
        quote: {
          text: "No-one goes to work to do a bad job!",
          attribution: "W. Edwards Deming",
        },
        closing: [
          "The least effective actions are ones that rely on a check catching an error right at the end of the process. That is not to say these checks should not be there, but rather they should be thought of as the last line of defence, not the primary control.",
          "Ideally, you also want some sort of check to make sure the revised process is working. This check is an early signal as to whether your actions are effective at fixing the problem.",
          "The next time a deviation report concludes with 'human error', ask one more question: why did that error occur? The answer is where the real corrective action begins.",
        ],
      },
    ],
  },

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
      "On 11 March 2026, the FDA launched AEMS, the Adverse Event Monitoring System. It is a single unified platform designed to replace a fragmented collection of six legacy adverse event databases. For pharmacovigilance professionals, the transition carries both immediate and longer-term implications worth understanding.",
    sections: [
      {
        heading: "The legacy systems AEMS replaces",
        paragraphs: [
          "Before AEMS, the FDA processed approximately 6 million adverse event reports per year across a patchwork of six separate databases. These systems were expensive, had poor user interfaces, and made data difficult to search and access. Together they cost the agency approximately $37 million per year to operate.",
          "The systems being replaced are: FAERS (drugs, biologics, cosmetics, and colour additives), VAERS (vaccines, jointly managed with the CDC), and AERS (animal drugs and animal food), which migrated to AEMS on 11 March 2026. MAUDE (medical devices), HFCS (human foods and dietary supplements), and CTPAE (tobacco products) were scheduled to follow by the end of May 2026.",
          "In Commissioner Marty Makary's words: \"The FDA's previous adverse event reporting systems were outdated and fragmented and made important data difficult to access. These clunky systems also wasted millions of taxpayer dollars and created blind spots in our postmarket surveillance of products ranging from drugs and vaccines to cosmetics.\"",
        ],
      },
      {
        heading: "What AEMS is",
        paragraphs: [
          "AEMS is a single, unified platform for collecting, monitoring, and analysing adverse event reports across all FDA-regulated product categories. It is broader in scope than FAERS, which covered only drugs and biologics. AEMS brings together adverse events related to medicines, vaccines, medical devices, food, cosmetics, tobacco, and animal products into one searchable dashboard.",
          "Beyond adverse event reporting, AEMS also serves as a centralised platform for managing consumer complaints, regulatory misconduct reports, and whistleblower submissions across all FDA centres. The public dashboard is designed to allow anyone (patients, researchers, healthcare professionals) to query safety data directly, without needing to file a FOIA request.",
          "Chief AI Officer Jeremy Walsh described the launch as \"the biggest technical transformation in agency history.\" The FDA expects to save approximately $120 million over the next five years as a result of the consolidation.",
        ],
      },
      {
        heading: "Real time data: what actually changes",
        paragraphs: [
          "The most significant practical change for pharmacovigilance professionals is the move from quarterly data releases to real time publication. Under FAERS, reports were always weeks or months behind the most current information held internally by the FDA. Reports are now published as they are submitted, subject to patient privacy requirements.",
          "By the end of May 2026, AEMS was expected to provide real time data across all FDA-regulated products. For organisations whose signal detection relied on FAERS quarterly exports, this is a good moment to review whether current processes are still fit for purpose.",
          "It is important to note that in the short term, submission workflows and regulatory obligations remain unchanged. Pharmaceutical companies can continue using existing submission methods, including the Safety Reporting Portal. The data itself has not changed. What has changed is how easily it can be accessed and searched.",
        ],
      },
      {
        heading: "The E2B(R3) deadline: an action point for October 2026",
        paragraphs: [
          "Until 30 September 2026, organisations submitting ICSRs to the FDA can continue using E2B(R2), the older data standard that most safety reporting systems have used for years. From 1 October 2026, that changes. The FDA will only accept submissions sent via ESG NextGen in E2B(R3) format. Any submission still using E2B(R2) after that date will not be accepted.",
          "In practice, this means organisations need to confirm that their pharmacovigilance systems can generate and transmit reports in E2B(R3) format before the deadline. For many, this is not a simple configuration change. It may require a system upgrade, technical validation, and end-to-end testing with the FDA gateway. Some safety database vendors have already released E2B(R3)-compatible versions; others are still in the process of doing so.",
          "For MAHs and CROs submitting reports to the FDA, the question to ask now is straightforward: can our current system produce a valid E2B(R3) file and transmit it successfully through ESG NextGen? If the answer is not a confident yes, that is where attention should be focused. The deadline is firm, and the validation process typically takes longer than expected.",
        ],
      },
      {
        heading: "The broader direction the field is heading",
        paragraphs: [
          "The AEMS transition fits into a broader pattern of regulatory modernisation. EudraVigilance has been through significant updates in recent years. ICH E2B(R3) is now being enforced as the global standard for ICSR transmission. IDMP implementation continues to progress across the EU. In each case, the direction is the same: more structured data, greater interoperability, and faster access to safety information.",
          "AI-enabled pharmacovigilance, referenced explicitly in the AEMS launch, is no longer a future aspiration. Tools that use natural language processing to identify adverse events in unstructured text, algorithms that detect safety signals earlier than traditional statistical methods, and platforms that integrate safety data across multiple sources are already in use across the industry. The infrastructure is now being built to match those ambitions.",
          "For professionals working in pharmacovigilance and regulatory affairs, the question is not whether to engage with these changes. It is how quickly organisations can adapt their processes, their systems, and their people to operate effectively in an environment that will continue to evolve.",
        ],
      },
    ],
    sources: [
      {
        label: "FDA press announcement: FDA launches new adverse event lookup tool (11 March 2026)",
        url: "https://www.fda.gov/news-events/press-announcements/fda-launches-new-adverse-event-look-tool",
      },
      {
        label: "FDA Adverse Event Monitoring System (AEMS), overview page",
        url: "https://www.fda.gov/safety/fda-adverse-event-monitoring-system-aems",
      },
      {
        label: "FDA AEMS electronic submissions and E2B(R3) standards",
        url: "https://www.fda.gov/drugs/fda-adverse-event-monitoring-system-aems/fda-adverse-event-monitoring-system-aems-electronic-submissions",
      },
      {
        label: "FDA AEMS public dashboard",
        url: "https://www.fda.gov/drugs/fda-adverse-event-monitoring-system-aems/fda-adverse-event-monitoring-system-aems-public-dashboard",
      },
      {
        label: "Early evaluation of FDA AEMS: an analysis of over 32 million pharmacovigilance reports. Cureus (2026)",
        url: "https://www.cureus.com/articles/476442-early-evaluation-of-the-food-and-drug-administration-fda-adverse-event-monitoring-system-aems-an-analysis-of-over-32-million-pharmacovigilance-reports",
      },
      {
        label: "New FDA adverse event platform: impact on safety data. SafetyDrugs (2026)",
        url: "https://safetydrugs.it/en/new-fda-adverse-event-platform/",
      },
    ],
  },
};
