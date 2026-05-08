import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { RegulatoryFilters } from "@/components/RegulatoryFilters";
import { regulatoryUpdates } from "@/data/regulatory-updates";

export const metadata: Metadata = {
  title: "Regulatory Intelligence",
  description:
    "Latest EMA, FDA, MHRA and ICH pharmacovigilance regulatory updates, GVP guideline revisions, and procedural guidance for life sciences professionals.",
};

export default function RegulatoryUpdatesPage() {
  // Sort by publishedDate descending (newest first)
  const sorted = [...regulatoryUpdates].sort(
    (a, b) =>
      new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white px-6 pb-20 pt-24">
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-[#7C6AF7]/6 blur-[100px]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#4ECDC4]">
            Regulatory Intelligence
          </p>
          <h1
            className="text-4xl font-bold leading-tight text-[#0D0D0F] sm:text-5xl"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Pharmacovigilance Regulatory Updates
          </h1>
          <div className="mx-auto mt-6 flex items-center justify-center gap-2">
            <div className="h-px w-10 bg-[#7C6AF7]" />
            <div className="h-px w-6 bg-[#F7B731]" />
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#6B6A8F]">
            Timely summaries of EMA GVP guideline revisions, procedural updates,
            and regulatory intelligence relevant to pharmacovigilance and life
            sciences professionals.
          </p>
        </div>

        {/* Stats bar */}
        <div className="relative mx-auto mt-12 max-w-3xl">
          <div className="flex flex-wrap items-center justify-center gap-6 rounded-2xl border border-[#E5E4F0] bg-[#F9F8FF] px-8 py-5">
            {[
              { label: "Updates Published", value: regulatoryUpdates.length.toString() },
              { label: "Regulatory Sources", value: "EMA" },
              { label: "Coverage", value: "GVP · PASS · PSUR · Signal" },
              { label: "Last Updated", value: "May 2026" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p
                  className="text-lg font-bold text-[#0D0D0F]"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {stat.value}
                </p>
                <p className="mt-0.5 text-xs text-[#9896B6]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer banner */}
      <div className="border-y border-[#F7B731]/30 bg-[#FFFBF0] px-6 py-4">
        <p className="mx-auto max-w-7xl text-center text-xs leading-6 text-[#6B6A8F]">
          <span className="font-semibold text-[#B8860B]">Information notice: </span>
          The regulatory updates on this page are prepared by Qualivio for
          informational purposes. Always verify the current status of guidelines
          with the originating regulatory authority before making compliance
          decisions.{" "}
          <a
            href="https://www.ema.europa.eu"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#0D0D0F]"
          >
            Visit EMA →
          </a>
        </p>
      </div>

      {/* Updates grid with filters */}
      <Section>
        <RegulatoryFilters updates={sorted} />
      </Section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#0D0D0F] px-6 py-20">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-full bg-gradient-to-br from-[#7C6AF7]/10 via-transparent to-[#4ECDC4]/5" />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#4ECDC4]">
            Stay informed
          </p>
          <h2
            className="text-3xl font-bold text-[#E8E6FF] sm:text-4xl"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Need expert guidance on these updates?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-[#9896B6]">
            Qualivio can help you interpret regulatory changes, assess their
            impact on your pharmacovigilance system, and implement compliant
            solutions.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#7C6AF7] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#6a58e0] shadow-[0_0_24px_rgba(124,106,247,0.25)]"
            >
              Book a Consultation →
            </a>
            <a
              href="/insights"
              className="text-sm text-[#9896B6] hover:text-[#E8E6FF] transition-colors"
            >
              Read our articles
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
