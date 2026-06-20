import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Clinical Research",
  description:
    "GCP compliance, clinical trial safety reporting, regulatory submissions, and site monitoring support for clinical development teams.",
};

const services = [
  {
    title: "GCP Compliance",
    description:
      "Assessment and implementation of Good Clinical Practice standards across clinical trial operations, documentation, oversight activities, and staff training, aligned with ICH E6(R2) and EU Clinical Trials Regulation.",
  },
  {
    title: "Clinical Trial Safety Reporting",
    description:
      "Support for SUSAR identification, assessment, and expedited reporting to regulatory authorities and ethics committees, as well as Development Safety Update Report (DSUR) preparation per ICH E2F.",
  },
  {
    title: "Protocol and Document Review",
    description:
      "Scientific and regulatory review of clinical trial protocols, investigator brochures, informed consent documents, and patient-facing materials for regulatory compliance and scientific clarity.",
  },
  {
    title: "Site Monitoring Support",
    description:
      "Design of risk-based monitoring plans, review of monitoring visit reports, site performance oversight, and support for central monitoring activities across EEA and international sites.",
  },
  {
    title: "Regulatory Submissions",
    description:
      "Support for Clinical Trial Application (CTA) preparation, responses to regulatory authority queries, substantial modification notifications, and end-of-trial notifications across EEA jurisdictions.",
  },
  {
    title: "Trial Master File Management",
    description:
      "TMF structure design aligned with the TMF Reference Model, gap analysis against regulatory requirements, and inspection readiness support for electronic and paper trial master files.",
  },
];

const keyAreas = [
  { label: "GCP Compliance", detail: "ICH E6(R2) and EU CTR" },
  { label: "SUSAR Reporting", detail: "Expedited safety reporting" },
  { label: "DSUR Preparation", detail: "ICH E2F annual reports" },
  { label: "CTA Submissions", detail: "EEA jurisdictions" },
  { label: "Site Monitoring", detail: "Risk-based approaches" },
  { label: "TMF Management", detail: "eTMF and paper formats" },
];

export default function ClinicalResearchPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white px-6 pb-20 pt-24">
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-[#F7B731]/6 blur-[100px]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mb-4 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#9896B6]">
            <Link href="/life-sciences" className="hover:text-[#F7B731] transition-colors">
              Life Sciences
            </Link>
            <span>/</span>
            <span className="text-[#F7B731]">Clinical Research</span>
          </div>
          <h1
            className="text-4xl font-bold leading-tight text-[#0D0D0F] sm:text-5xl"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Clinical research support from protocol to submission.
          </h1>
          <div className="mx-auto mt-6 flex items-center justify-center gap-2">
            <div className="h-px w-10 bg-[#F7B731]" />
            <div className="h-px w-6 bg-[#7C6AF7]" />
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#6B6A8F]">
            Qualivio provides practical support across the clinical development
            lifecycle, covering regulatory compliance, safety reporting, and
            quality oversight for investigational medicinal products.
          </p>
          <div className="mt-8">
            <Link
              href="#contact"
              className="inline-flex rounded-full bg-[#F7B731] px-8 py-3 text-sm font-semibold text-[#0D0D0F] transition-all hover:bg-[#e5a820] hover:-translate-y-0.5"
            >
              Request Support
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <Section
        eyebrow="What We Deliver"
        title="Clinical research services."
        description="Practical support for clinical development teams working through GCP compliance, regulatory submissions, and safety reporting."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card key={s.title}>
              <div className="mb-4 h-0.5 w-8 bg-[#F7B731]" />
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
              <div className="h-2 w-2 shrink-0 rounded-full bg-[#F7B731]" />
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
        title="Tell us about your clinical research needs."
        description="Whether you are preparing a CTA, managing trial safety reporting, or need GCP audit support, we will respond with a clear view of how we can help."
        id="contact"
      >
        <div className="mx-auto max-w-xl">
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
