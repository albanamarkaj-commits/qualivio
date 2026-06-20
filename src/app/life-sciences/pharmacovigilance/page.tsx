import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Pharmacovigilance",
  description:
    "Pharmacovigilance consulting, safety system design, ICSR management, signal detection, and inspection readiness for life sciences organisations.",
};

const services = [
  {
    title: "Safety System Design and Review",
    description:
      "Assessment and optimisation of your pharmacovigilance system master file (PSMF), organisational structure, SOPs, and quality systems against current GVP requirements.",
  },
  {
    title: "ICSR Management",
    description:
      "Expert support for individual case safety report intake, triage, medical review, MedDRA coding, narrative writing, and electronic submission to EudraVigilance.",
  },
  {
    title: "Signal Detection and Management",
    description:
      "Implementation of structured signal detection workflows, disproportionality analysis support, and full documentation of signal management activities per GVP Module IX.",
  },
  {
    title: "Inspection Readiness",
    description:
      "Preparation of safety teams and documentation for EMA, national competent authority, and client-initiated pharmacovigilance inspections, including mock inspection support.",
  },
  {
    title: "Periodic Safety Update Reports",
    description:
      "Writing, review, and quality control of PSURs and PBRERs aligned with ICH E2C(R2) and GVP Module VII, including benefit-risk evaluation and signal analysis.",
  },
  {
    title: "Risk Management Plans",
    description:
      "Design, review, and lifecycle update of Risk Management Plans in line with GVP Module V, including safety specification, pharmacovigilance planning, and risk minimisation strategy.",
  },
];

const keyAreas = [
  { label: "GVP Compliance", detail: "Modules I through XVI" },
  { label: "EudraVigilance Submissions", detail: "E2B(R3) format" },
  { label: "QPPV Support", detail: "Oversight and documentation" },
  { label: "PSMF Management", detail: "Setup and maintenance" },
  { label: "Literature Monitoring", detail: "Weekly screening workflows" },
  { label: "Aggregate Reporting", detail: "PSUR, PBRER, DSUR" },
];

export default function PharmacovigilancePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white px-6 pb-20 pt-24">
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-[#7C6AF7]/6 blur-[100px]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mb-4 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#9896B6]">
            <Link href="/life-sciences" className="hover:text-[#7C6AF7] transition-colors">
              Life Sciences
            </Link>
            <span>/</span>
            <span className="text-[#7C6AF7]">Pharmacovigilance</span>
          </div>
          <h1
            className="text-4xl font-bold leading-tight text-[#0D0D0F] sm:text-5xl"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Pharmacovigilance expertise across the product lifecycle.
          </h1>
          <div className="mx-auto mt-6 flex items-center justify-center gap-2">
            <div className="h-px w-10 bg-[#7C6AF7]" />
            <div className="h-px w-6 bg-[#F7B731]" />
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#6B6A8F]">
            Qualivio supports organisations in building and maintaining
            pharmacovigilance systems that are compliant, well documented,
            and ready for regulatory inspections at every stage of the
            product lifecycle.
          </p>
          <div className="mt-8">
            <Link
              href="#contact"
              className="inline-flex rounded-full bg-[#7C6AF7] px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-[#6a58e0] hover:-translate-y-0.5"
            >
              Request Support
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <Section
        eyebrow="What We Deliver"
        title="Pharmacovigilance services."
        description="Practical support across the full scope of medicines safety obligations."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card key={s.title}>
              <div className="mb-4 h-0.5 w-8 bg-[#7C6AF7]" />
              <h3
                className="text-lg font-bold text-[#0D0D0F]"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#6B6A8F]">{s.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Key areas */}
      <Section
        eyebrow="Scope of Expertise"
        title="Areas we cover."
        dark={true}
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {keyAreas.map((area) => (
            <div
              key={area.label}
              className="flex items-center gap-4 rounded-xl border border-[#2E2E36] bg-[#1A1A1E] px-5 py-4"
            >
              <div className="h-2 w-2 shrink-0 rounded-full bg-[#7C6AF7]" />
              <div>
                <p className="text-sm font-semibold text-[#E8E6FF]">{area.label}</p>
                <p className="text-xs text-[#9896B6]">{area.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section
        eyebrow="Get in Touch"
        title="Tell us about your pharmacovigilance needs."
        description="Whether you are building a system from scratch, preparing for inspection, or need support on a specific process, we will respond with a clear view of how we can help."
        id="contact"
      >
        <div className="mx-auto max-w-xl">
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
