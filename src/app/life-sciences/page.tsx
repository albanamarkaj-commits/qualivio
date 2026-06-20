import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Life Sciences",
  description:
    "Qualivio provides expert support across pharmacovigilance, quality assurance, and clinical research for life sciences organisations.",
};

const areas = [
  {
    href: "/life-sciences/pharmacovigilance",
    eyebrow: "Pharmacovigilance",
    title: "Medicines safety across the product lifecycle.",
    description:
      "Safety system design, ICSR management, signal detection, inspection readiness, and regulatory compliance for authorised and investigational products.",
    color: "#7C6AF7",
  },
  {
    href: "/life-sciences/quality-assurance",
    eyebrow: "Quality Assurance",
    title: "Quality systems built for regulated environments.",
    description:
      "GxP quality management, SOP frameworks, internal auditing, CAPA systems, and training programmes for life sciences organisations.",
    color: "#4ECDC4",
  },
  {
    href: "/life-sciences/clinical-research",
    eyebrow: "Clinical Research",
    title: "Clinical development support from protocol to submission.",
    description:
      "GCP compliance, clinical trial safety reporting, regulatory submissions, site monitoring support, and trial master file management.",
    color: "#F7B731",
  },
];

export default function LifeSciencesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0D0D0F] px-6 pb-20 pt-24">
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-[#7C6AF7]/8 blur-[120px]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#4ECDC4]">
            Life Sciences
          </p>
          <h1
            className="text-4xl font-bold leading-tight text-[#E8E6FF] sm:text-5xl"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Expert support across pharmacovigilance, quality assurance, and clinical research.
          </h1>
          <div className="mx-auto mt-6 flex items-center justify-center gap-2">
            <div className="h-px w-10 bg-[#7C6AF7]" />
            <div className="h-px w-6 bg-[#4ECDC4]" />
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#9896B6]">
            Qualivio provides practical support across the three main regulated
            disciplines in life sciences. Whether you are building a system from
            scratch, preparing for an inspection, or working through a specific
            regulatory challenge, we can help.
          </p>
        </div>
      </section>

      {/* Three areas */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-3">
          {areas.map((area) => (
            <Link
              key={area.href}
              href={area.href}
              className="group rounded-2xl border border-[#E5E4F0] bg-white p-8 transition-all hover:border-[#7C6AF7]/40 hover:shadow-lg hover:-translate-y-1"
            >
              <p
                className="text-xs font-semibold uppercase tracking-[0.25em]"
                style={{ color: area.color }}
              >
                {area.eyebrow}
              </p>
              <h2
                className="mt-4 text-xl font-bold text-[#0D0D0F] leading-snug"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {area.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#6B6A8F]">
                {area.description}
              </p>
              <p
                className="mt-6 text-sm font-semibold transition-colors group-hover:text-[#7C6AF7]"
                style={{ color: area.color }}
              >
                Learn more &#8594;
              </p>
            </Link>
          ))}
        </div>
      </Section>

      {/* Why Qualivio */}
      <Section
        eyebrow="Our Approach"
        title="Practical expertise, not generic advice."
        description="Every engagement is shaped around your situation. We do not apply generic templates to problems that need careful thinking."
        dark={true}
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Regulatory Grounded", body: "All work is based on current GVP, GCP, and GxP guidance. We follow regulatory developments closely so you do not have to." },
            { title: "Proportionate", body: "We size our recommendations to what your organisation actually needs, not to the maximum possible scope." },
            { title: "Transfer-Focused", body: "We work with your team throughout, not just alongside them. When the engagement ends, they can carry the work forward independently." },
            { title: "Transparent", body: "Clear scope, honest timelines, and direct communication. No hidden complexity." },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-[#2E2E36] bg-[#1A1A1E] p-6">
              <div className="mb-3 h-0.5 w-8 bg-[#7C6AF7]" />
              <h3
                className="font-bold text-[#E8E6FF]"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-[#9896B6]">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-white px-6 py-20 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#7C6AF7]">
          Get in Touch
        </p>
        <h2
          className="mt-4 text-3xl font-bold text-[#0D0D0F]"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Not sure where to start?
        </h2>
        <p className="mt-4 text-base leading-8 text-[#6B6A8F] max-w-xl mx-auto">
          Tell us about your organisation and the challenge you are facing. We
          will respond with a clear view of how we can help.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex rounded-full bg-[#7C6AF7] px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-[#6a58e0] hover:-translate-y-0.5"
        >
          Book a Consultation
        </Link>
      </section>
    </>
  );
}
