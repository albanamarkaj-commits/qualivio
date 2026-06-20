import Link from "next/link";
import { QMark } from "@/components/QMark";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { ArticleCard } from "@/components/ArticleCard";
import { RegulatoryUpdateCard } from "@/components/RegulatoryUpdateCard";
import { articles } from "@/data/articles";
import { services } from "@/data/services";
import { resources } from "@/data/resources";
import { regulatoryUpdates } from "@/data/regulatory-updates";

export default function Home() {
  return (
    <>
      {/* ── Hero ── white bg, reduced headline size */}
      <section className="relative overflow-hidden bg-white px-6 pb-24 pt-24 sm:pb-32 sm:pt-32">
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-[#7C6AF7]/6 blur-[120px]" />

        <div className="relative mx-auto max-w-5xl text-center">
          {/* Q mark */}
          <div className="mb-8 flex justify-center">
            <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-[#E5E4F0] bg-[#F5F4FF] text-[#7C6AF7] shadow-[0_4px_24px_rgba(124,106,247,0.15)]">
              <QMark size={36} animated />
            </div>
          </div>

          {/* Eyebrow — gold */}
          <p className="mb-6 flex flex-wrap justify-center gap-x-[0.85em] text-xs font-semibold uppercase tracking-[0.1em] text-[#F7B731] sm:tracking-[0.3em]">
            <span className="whitespace-nowrap">
              Pharmacovigilance<span className="mx-[0.5em]">·</span>Quality Assurance
            </span>
            <span className="whitespace-nowrap">
              <span className="mr-[0.85em] opacity-75">|</span>Life Sciences
            </span>
          </p>

          {/* Headline — reduced from 7xl to 6xl max */}
          <h1
            className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight text-[#0D0D0F] sm:text-5xl md:text-6xl"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Clear thinking for{" "}
            <span className="text-[#7C6AF7]">complex regulations.</span>
          </h1>

          {/* Tagline */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6B6A8F]">
            Practical education and consulting in pharmacovigilance and quality
            assurance, for professionals and organisations working in regulated
            life sciences.
          </p>

          {/* CTAs — Education first */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/resources">Explore Education →</Button>
            <Button href="/insights" variant="ghost">Read Articles</Button>
          </div>

          {/* Gold teal divider */}
          <div className="mx-auto mt-16 flex items-center justify-center gap-2">
            <div className="h-px w-12 bg-[#F7B731]" />
            <div className="h-px w-12 bg-[#4ECDC4]" />
          </div>
        </div>
      </section>

      {/* ── Dark bar ── */}
      <div className="border-y border-[#2E2E36] bg-[#0D0D0F] px-6 py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 text-xs font-medium uppercase tracking-widest text-[#9896B6]">
          {["Pharmacovigilance", "Quality Assurance", "Education", "Consulting"].map(
            (item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-[#F7B731]" />
                {item}
              </span>
            )
          )}
        </div>
      </div>

      {/* ── 1. Education (priority #1) ── white */}
      <Section
        eyebrow="Education"
        title="Education built around what you actually need."
        description="Guides, checklists, and mini courses covering the topics that matter most in day-to-day pharmacovigilance and quality work."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resources.slice(0, 3).map((resource) => (
            <Card key={resource.title}>
              <div className="flex items-start justify-between gap-4">
                <span className="inline-block rounded-full bg-[#F7B731]/15 px-3 py-1 text-xs font-semibold text-[#B8860B]">
                  {resource.type}
                </span>
                {resource.price === "Free" && (
                  <span className="shrink-0 rounded-full bg-[#4ECDC4]/15 px-3 py-1 text-xs font-semibold text-[#2AA7A5]">
                    Free
                  </span>
                )}
              </div>
              <h3
                className="mt-4 text-lg font-bold text-[#0D0D0F]"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {resource.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-[#6B6A8F]">{resource.description}</p>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/resources" variant="ghost">All Education & Resources →</Button>
        </div>
      </Section>

      {/* ── 2. Articles (priority #2) ── dark */}
      <Section
        eyebrow="Articles"
        title="Clear thinking for complex regulations."
        description="Articles on the topics that come up most often in pharmacovigilance practice."
        dark={true}
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.slice(0, 3).map((article) => (
            <div key={article.slug} className="rounded-2xl border border-[#2E2E36] bg-[#1A1A1E] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#7C6AF7]/60">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#F7B731]">
                {article.category}
              </p>
              <h3
                className="mt-4 text-lg font-bold leading-snug text-[#E8E6FF]"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {article.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#9896B6]">{article.excerpt}</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-widest text-[#9896B6]">
                  {article.readTime}
                </span>
                <Link
                  href={`/insights/${article.slug}`}
                  className="text-xs font-semibold text-[#4ECDC4] hover:text-[#7C6AF7] transition-colors"
                >
                  Read →
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/insights">All Articles →</Button>
        </div>
      </Section>

      {/* ── 3. Regulatory Intelligence ── white */}
      <Section
        eyebrow="Regulatory Intelligence"
        title="Latest pharmacovigilance updates."
        description="Summaries of the latest EMA GVP updates, procedural changes, and regulatory developments that affect your pharmacovigilance work."
      >
        {/* Latest update highlight */}
        {(() => {
          const latest = [...regulatoryUpdates].sort(
            (a, b) =>
              new Date(b.publishedDate).getTime() -
              new Date(a.publishedDate).getTime()
          )[0];
          return (
            <div className="mb-10 rounded-2xl border border-[#7C6AF7]/20 bg-[#F5F4FF] p-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#7C6AF7]/15 px-3 py-1 text-xs font-semibold text-[#7C6AF7]">
                  {latest.source}
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#4ECDC4]">
                  Latest Update
                </span>
                {latest.effectiveDate && (
                  <span className="text-xs text-[#9896B6]">
                    Effective{" "}
                    {new Date(latest.effectiveDate).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                )}
              </div>
              <h3
                className="mt-4 text-2xl font-bold text-[#0D0D0F] sm:text-3xl"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {latest.title}
              </h3>
              <p className="mt-3 max-w-3xl text-[#6B6A8F]">{latest.summary}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {latest.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#7C6AF7]/10 px-2.5 py-0.5 text-xs font-medium text-[#7C6AF7]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6">
                <Link
                  href={`/regulatory-updates/${latest.slug}`}
                  className="text-sm font-semibold text-[#7C6AF7] hover:text-[#4ECDC4] transition-colors"
                >
                  Read full update →
                </Link>
              </div>
            </div>
          );
        })()}

        {/* Cards grid – latest 3 */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...regulatoryUpdates]
            .sort(
              (a, b) =>
                new Date(b.publishedDate).getTime() -
                new Date(a.publishedDate).getTime()
            )
            .slice(0, 3)
            .map((update) => (
              <RegulatoryUpdateCard key={update.slug} update={update} />
            ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/regulatory-updates" variant="ghost">
            All Regulatory Updates →
          </Button>
        </div>
      </Section>

      {/* ── 4. Consulting (priority #4) ── white */}
      <Section
        eyebrow="Consulting"
        title="Consulting for life sciences organisations."
        description="Qualivio works with organisations to review compliance processes, address regulatory gaps, and prepare for inspections."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service) => (
            <Card key={service.title}>
              <div className="mb-4 h-0.5 w-8 bg-[#7C6AF7]" />
              <h3
                className="text-lg font-bold text-[#0D0D0F]"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#6B6A8F]">{service.description}</p>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/consulting" variant="ghost">All Consulting Services →</Button>
        </div>
      </Section>

      {/* ── CTA ── dark */}
      <section className="relative overflow-hidden bg-[#0D0D0F] px-6 py-20">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-full bg-gradient-to-br from-[#7C6AF7]/10 via-transparent to-[#F7B731]/5" />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#F7B731]">
            Get in touch
          </p>
          <h2
            className="text-3xl font-bold text-[#E8E6FF] sm:text-4xl"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Start with a focused conversation.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-[#9896B6]">
            Tell us what you are building, improving, or preparing for.
            Qualivio will respond with clarity and care.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact">Book a Consultation →</Button>
            <Link
              href={`mailto:hello@qualiviopharma.com`}
              className="text-sm text-[#9896B6] hover:text-[#E8E6FF] transition-colors"
            >
              hello@qualiviopharma.com
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
