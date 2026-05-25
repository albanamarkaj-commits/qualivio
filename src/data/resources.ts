export type Resource = {
  /** Stable, URL-safe id used by the checkout flow to look up the product. */
  id: string;
  title: string;
  type: string;
  description: string;
  /** Display string shown on the card, e.g. "Free" or "$39". */
  price: string;
  /** Amount in the smallest currency unit (e.g. cents). Required for paid items. */
  priceCents?: number;
  /** ISO-4217 lowercase currency code, e.g. "usd". Required for paid items. */
  currency?: string;
  /** Path within /private/resources/ that the download endpoint will serve. */
  file?: string;
};

export const resources: Resource[] = [
  {
    id: "pv-essentials-checklist",
    title: "PV Essentials Checklist",
    type: "Guide",
    description:
      "A downloadable checklist covering core pharmacovigilance obligations, ICSR timelines, and compliance checkpoints.",
    price: "Free",
  },
  {
    id: "signal-management-playbook",
    title: "Signal Management Playbook",
    type: "Mini Course",
    description:
      "A focused course on structured signal detection, evaluation, and documentation for PV professionals.",
    price: "$49",
    priceCents: 4900,
    currency: "usd",
  },
  {
    id: "inspection-readiness-workbook",
    title: "Inspection Readiness Workbook",
    type: "Guide",
    description:
      "Step-by-step workbook for preparing your safety team for EMA and MHRA pharmacovigilance inspections.",
    price: "$29",
    priceCents: 2900,
    currency: "usd",
  },
  {
    id: "icsr-masterclass",
    title: "ICSR Masterclass",
    type: "Mini Course",
    description:
      "Complete training on Individual Case Safety Reports: triage, coding, narrative writing, and submission.",
    price: "$79",
    priceCents: 7900,
    currency: "usd",
  },
  {
    id: "aggregate-report-templates",
    title: "Aggregate Report Templates",
    type: "Template Pack",
    description:
      "Ready-to-use PSUR, DSUR, and ASR templates aligned with current regulatory expectations.",
    price: "$39",
    priceCents: 3900,
    currency: "usd",
  },
  {
    id: "pharmacovigilance-auditing",
    title: "Pharmacovigilance Auditing",
    type: "Guide",
    description:
      "Practical guidance for conducting internal pharmacovigilance system audits and corrective action planning.",
    price: "Free",
    file: "/resources/Qualivio_Pharmacovigilance_Auditing.pdf",
  },
];
