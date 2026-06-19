export type Resource = {
  /** Stable, URL-safe id used by the checkout flow to look up the product. */
  id: string;
  title: string;
  type: string;
  description: string;
  /** Display string shown on the card, e.g. "Free" or "€39". */
  price: string;
  /** Amount in the smallest currency unit (e.g. cents). Required for paid items. */
  priceCents?: number;
  /** ISO-4217 lowercase currency code, e.g. "eur". Required for paid items. */
  currency?: string;
  /** Path within /private/resources/ that the download endpoint will serve. */
  file?: string;
  /** Internal link for web-based free resources (no download required). */
  href?: string;
};

export const resources: Resource[] = [
  // Free, web-based and downloadable resources surface first.
  {
    id: "pv-made-simple",
    title: "Pharmacovigilance Made Simple",
    type: "Plain-Language Guide",
    description:
      "Follow Martin's journey through the drug safety system: from an unexpected side effect to a global label update.",
    price: "Free",
    file: "/resources/Qualivio_PV_Made_Simple.pdf",
  },
  // Free, downloadable resources surface first so visitors meet a no-friction
  // CTA at the top of the grid.
  {
    id: "pv-essentials-checklist",
    title: "PV Essentials Checklist",
    type: "Guide",
    description:
      "A downloadable checklist covering core pharmacovigilance obligations, ICSR timelines, and compliance checkpoints.",
    price: "Free",
    file: "/resources/Qualivio_PV_Essentials_Checklist.pdf",
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
  // Paid resources (Coming soon for now while we finalise the payment provider).
  {
    id: "signal-management-playbook",
    title: "Understanding Signal Management",
    type: "Mini Course",
    description:
      "A focused course on structured signal detection, evaluation, and documentation for PV professionals.",
    price: "€49",
    priceCents: 4900,
    currency: "eur",
  },
  {
    id: "inspection-readiness-workbook",
    title: "Inspection Readiness Workbook",
    type: "Guide",
    description:
      "Step-by-step workbook for preparing your safety team for EMA and MHRA pharmacovigilance inspections.",
    price: "€29",
    priceCents: 2900,
    currency: "eur",
  },
  {
    id: "icsr-masterclass",
    title: "ICSR Masterclass",
    type: "Mini Course",
    description:
      "Complete training on Individual Case Safety Reports: triage, coding, narrative writing, and submission.",
    price: "€79",
    priceCents: 7900,
    currency: "eur",
  },
  {
    id: "aggregate-report-templates",
    title: "Aggregate Report Templates",
    type: "Template Pack",
    description:
      "Ready-to-use PSUR, DSUR, and ASR templates aligned with current regulatory expectations.",
    price: "€39",
    priceCents: 3900,
    currency: "eur",
  },
];
