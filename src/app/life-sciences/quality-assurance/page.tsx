import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Quality Assurance",
  description:
    "GxP quality systems, internal auditing, SOP development, and CAPA management for life sciences organisations.",
};

const services = [
  {
    title: "Quality Management System Design",
    description:
      "Development and optimisation of GxP quality frameworks, including document management systems, training structures, deviation handling, and quality metrics aligned with regulatory expectations.",
  },
  {
    title: "SOP Development and Review",
    description:
      "Authoring and critical review of standard operating procedures that accurately reflect current regulatory requirements and actual operational practice across your organisation.",
  },
  {
    title: "Internal Auditing",
    description:
      "Structured internal audit programmes covering pharmacovigilance, GCP, GMP, and cross-functional quality systems, including audit planning, conduct, reporting, and follow-up.",
  },
  {
    title: "CAPA Management",
    description:
      "Root cause analysis support, corrective and preventive action planning, implementation tracking, and effectiveness verification for quality deviations and inspection findings.",
  },
  {
    title: "Training Programme Design",
    description:
      "Role-specific GxP training frameworks, competency assessment tools, and training record management systems that satisfy regulatory expectations and build genuine capability.",
  },
  {
    title: "Supplier and Vendor Qualification",
    description:
      "Qualification and ongoing oversight frameworks for CROs, CMOs, pharmacovigilance service providers, and other regulated third parties, including audit support and written agreements review.",
  },
];

const keyAreas = [
  { label: "GxP Compliance", detail: "GVP, GCP, GMP frameworks" },
  { label: "Quality Systems", detail: "Design and implementation" },
  { label: "Internal Audits", detail: "Planning, conduct, reporting" },
  { label: "CAPA Programmes", detail: "Root cause to effectiveness" },
  { label: "Document Management", detail: "SOPs and controlled documents" },
  { label: "Vendor Oversight", detail: "Qualification and monitoring" },
];

export default function QualityAssurancePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white px-6 pb-20 pt-24">
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-[#4ECDC4]/6 blur-[100px]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mb-4 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#9896B6]">
            <Link href="/life-sciences" className="hover:text-[#4ECDC4] transition-colors">
              Life Sciences
            </Link>
            <span>/</span>
            <span className="text-[#4ECDC4]">Quality Assurance</span>
          </div>
          <h1
            className="text-4xl font-bold leading-tight text-[#0D0D0F] sm:text-5xl"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Quality systems built for regulated environments.
          </h1>
          <div className="mx-auto mt-6 flex items-center justify-center gap-2">
            <div className="h-px w-10 bg-[#4ECDC4]" />
            <div className="h-px w-6 bg-[#7C6AF7]" />
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#6B6A8F]">
            Qualivio supports life sciences organisations in establishing and
            maintaining quality management systems that meet GxP expectations,
            hold up under regulatory scrutiny, and support sustainable
            compliance across the business.
          </p>
          <div className="mt-8">
            <Link
              href="#contact"
              className="inline-flex rounded-full bg-[#4ECDC4] px-8 py-3 text-sm font-semibold text-[#0D0D0F] transition-all hover:bg-[#3dbdb5] hover:-translate-y-0.5"
            >
              Request Support
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <Section
        eyebrow="What We Deliver"
        title="Quality assurance services."
        description="Practical, regulation-grounded quality support designed around your organisation's actual structure and risk profile."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card key={s.title}>
              <div className="mb-4 h-0.5 w-8 bg-[#4ECDC4]" />
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
        title="Quality coverage across GxP disciplines."
        dark={true}
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {keyAreas.map((area) => (
            <div
              key={area.label}
              className="flex items-center gap-4 rounded-xl border border-[#2E2E36] bg-[#1A1A1E] px-5 py-4"
            >
              <div className="h-2 w-2 shrink-0 rounded-full bg-[#4ECDC4]" />
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
        title="Tell us about your quality assurance needs."
        description="Whether you are setting up a quality system, responding to inspection findings, or need a structured audit programme, we will respond with a clear view of how we can help."
        id="contact"
      >
        <div className="mx-auto max-w-xl">
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
