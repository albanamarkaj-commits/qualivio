import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { ResourceCard } from "@/components/ResourceCard";
import { resources } from "@/data/resources";

export const metadata: Metadata = {
  title: "Education & Resources",
  description:
    "Qualivio mini courses, downloadable guides, and practical resources for pharmacovigilance and life sciences professionals.",
};


export default function ResourcesPage() {
  return (
    <>
      {/* Hero — white */}
      <section className="relative overflow-hidden bg-white px-6 pb-20 pt-24">
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-[#F7B731]/8 blur-[100px]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#F7B731]">
            Education & Resources
          </p>
          <h1
            className="text-4xl font-bold leading-tight text-[#0D0D0F] sm:text-5xl"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Focused education for serious professionals.
          </h1>
          <div className="mx-auto mt-6 flex items-center justify-center gap-2">
            <div className="h-px w-6 bg-[#F7B731]" />
            <div className="h-px w-10 bg-[#7C6AF7]" />
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#6B6A8F]">
            Mini courses, downloadable guides, and practical tools built around
            regulatory frameworks and compliance requirements.
          </p>
        </div>
      </section>

      {/* Resources — white */}
      <Section eyebrow="All Resources" title="Knowledge you can use today.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <ResourceCard key={resource.title} resource={resource} />
          ))}
        </div>
      </Section>

    </>
  );
}
