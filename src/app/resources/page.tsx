import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { ResourceCard } from "@/components/ResourceCard";
import { resources } from "@/data/resources";

export const metadata: Metadata = {
  title: "Courses & Resources",
  description:
    "Qualivio mini courses, downloadable guides, and practical resources for pharmacovigilance and life sciences professionals.",
};

const tiers = [
  {
    name: "Free",
    price: "£0",
    description:
      "Introductory checklists and selected resources — no payment required.",
    cta: "Access for free",
    highlight: false,
  },
  {
    name: "Professional",
    price: "£29–£79",
    description:
      "Guides, short books, and focused mini courses for individual practitioners.",
    cta: "Browse resources",
    highlight: true,
  },
  {
    name: "Team",
    price: "Custom",
    description:
      "Training bundles and organisation-specific education programmes.",
    cta: "Contact us",
    highlight: false,
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0D0D0F] px-6 pb-20 pt-24">
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-[#7C6AF7]/8 blur-[100px]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#4ECDC4]">
            Courses & Resources
          </p>
          <h1
            className="text-4xl font-bold leading-tight text-[#E8E6FF] sm:text-5xl"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Focused education for serious professionals.
          </h1>
          <div className="mx-auto mt-6 h-px w-16 bg-[#7C6AF7]" />
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#9896B6]">
            Mini courses, downloadable guides, and practical tools built for
            pharmacovigilance and life sciences professionals.
          </p>
        </div>
      </section>

      {/* Resources grid */}
      <Section eyebrow="All Resources" title="Knowledge you can use today.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <ResourceCard key={resource.title} resource={resource} />
          ))}
        </div>
      </Section>

      {/* Pricing */}
      <Section
        eyebrow="Pricing"
        title="Simple, scalable tiers."
        description="From free introductory resources to bespoke team training — clear pricing, no surprises."
        dark={true}
      >
        <div className="grid gap-6 sm:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl border p-8 transition-all ${
                tier.highlight
                  ? "border-[#7C6AF7]/60 bg-[#7C6AF7]/10 shadow-[0_0_40px_rgba(124,106,247,0.15)]"
                  : "border-[#2E2E36] bg-[#0D0D0F]"
              }`}
            >
              {tier.highlight && (
                <span className="mb-4 inline-block rounded-full bg-[#F7B731]/15 px-3 py-1 text-xs font-semibold text-[#F7B731]">
                  Most popular
                </span>
              )}
              <h3
                className="text-xl font-bold text-[#E8E6FF]"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {tier.name}
              </h3>
              <p className="mt-3 text-3xl font-bold text-[#E8E6FF]">
                {tier.price}
              </p>
              <p className="mt-4 text-sm leading-7 text-[#9896B6]">
                {tier.description}
              </p>
              <button
                className={`mt-6 w-full rounded-full py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 ${
                  tier.highlight
                    ? "bg-[#7C6AF7] text-white hover:bg-[#6a58e0]"
                    : "border border-[#2E2E36] text-[#9896B6] hover:border-[#7C6AF7] hover:text-[#E8E6FF]"
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
