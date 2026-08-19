import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { regulatoryUpdates } from "@/data/regulatory-updates";
import type { ContentSection } from "@/data/regulatory-updates";

const sourceColors: Record<string, string> = {
  EMA: "bg-[#7C6AF7]/15 text-[#7C6AF7]",
  FDA: "bg-[#4ECDC4]/15 text-[#2AA7A5]",
  MHRA: "bg-[#F7B731]/15 text-[#B8860B]",
  ICH: "bg-[#9896B6]/15 text-[#6B6A8F]",
  "Health Canada": "bg-[#D52B1E]/12 text-[#C0392B]",
};

const tagColors: Record<string, string> = {
  GVP: "bg-[#7C6AF7]/10 text-[#7C6AF7]",
  "Signal Management": "bg-[#4ECDC4]/10 text-[#2AA7A5]",
  "Risk Management": "bg-[#F7B731]/10 text-[#B8860B]",
  "Risk Minimisation": "bg-[#F7B731]/10 text-[#B8860B]",
  PASS: "bg-[#E8E6FF] text-[#5a47e0]",
  PSUR: "bg-[#E8E6FF] text-[#5a47e0]",
  ICSR: "bg-[#9896B6]/10 text-[#6B6A8F]",
  EudraVigilance: "bg-[#4ECDC4]/10 text-[#2AA7A5]",
  "Pregnancy & Breastfeeding": "bg-pink-50 text-pink-600",
  Paediatrics: "bg-blue-50 text-blue-600",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function ContentBlock({ section }: { section: ContentSection }) {
  switch (section.type) {
    case "heading":
      return (
        <h2
          className="mt-10 mb-4 text-xl font-bold text-[#0D0D0F]"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          {section.text}
        </h2>
      );
    case "paragraph":
      return (
        <p className="mb-5 text-base leading-8 text-[#3E3C5C]">
          {section.text}
        </p>
      );
    case "list":
      return (
        <ul className="mb-6 space-y-2.5">
          {section.items?.map((item, i) => (
            <li key={i} className="flex gap-3 text-sm leading-7 text-[#3E3C5C]">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7C6AF7]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <div className="my-6 rounded-xl border border-[#F7B731]/40 bg-[#FFFBF0] p-5">
          {section.label && (
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#B8860B]">
              {section.label}
            </p>
          )}
          <p className="text-sm leading-7 text-[#5C4A00]">{section.text}</p>
        </div>
      );
    case "stats":
      return (
        <div className="my-8 grid gap-px overflow-hidden rounded-xl border border-[#E4E2EF] bg-[#E4E2EF] sm:grid-cols-3">
          {section.stats?.map((s, i) => (
            <div key={i} className="flex flex-col gap-1.5 bg-white p-5">
              <span className="text-3xl font-medium tabular-nums tracking-tight text-[#7C6AF7]">
                {s.value}
              </span>
              <span className="text-sm leading-snug text-[#56546A]">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      );
    case "bars": {
      const max = section.max ?? 1;
      return (
        <div className="my-8">
          <div className="flex flex-col gap-3">
            {section.bars?.map((b, i) => (
              <div
                key={i}
                className="grid items-center gap-x-4 gap-y-1 [grid-template-columns:1fr_4rem] sm:[grid-template-columns:minmax(0,14rem)_1fr_4rem]"
              >
                <span className="text-sm leading-snug text-[#3E3C5C]">
                  {b.label}
                </span>
                <span className="col-span-2 h-4 rounded-sm bg-[#F6F5FA] sm:col-span-1 sm:order-none order-last">
                  <span
                    className="block h-full rounded-sm bg-[#7C6AF7]"
                    style={{ width: `${Math.round((b.value / max) * 100)}%` }}
                  />
                </span>
                <span className="text-right text-sm font-medium tabular-nums text-[#0D0D0F]">
                  {b.display ?? b.value}
                </span>
              </div>
            ))}
          </div>
          {section.caption && (
            <p className="mt-3 text-xs leading-6 text-[#56546A]">
              {section.caption}
            </p>
          )}
        </div>
      );
    }
    case "table":
      return (
        <div className="my-8">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[32rem] border-collapse text-sm">
              <thead>
                <tr>
                  {section.headers?.map((h, i) => (
                    <th
                      key={i}
                      className={`border-b border-[#E4E2EF] pb-2.5 pr-4 text-xs font-bold uppercase tracking-widest text-[#56546A] ${
                        i === (section.headers?.length ?? 0) - 1
                          ? "pr-0 text-right"
                          : "text-left"
                      }`}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {section.rows?.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className={`border-b border-[#E4E2EF] py-3 pr-4 leading-6 text-[#3E3C5C] ${
                          j === row.length - 1
                            ? "pr-0 text-right tabular-nums whitespace-nowrap"
                            : ""
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {section.caption && (
            <p className="mt-3 text-xs leading-6 text-[#56546A]">
              {section.caption}
            </p>
          )}
        </div>
      );
    default:
      return null;
  }
}

export async function generateStaticParams() {
  return regulatoryUpdates.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const update = regulatoryUpdates.find((u) => u.slug === slug);
  if (!update) return {};
  return {
    title: update.title,
    description: update.summary,
  };
}

export default async function RegulatoryUpdatePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const update = regulatoryUpdates.find((u) => u.slug === slug);
  if (!update) notFound();

  // Related updates (same source or shared tags, excluding self)
  const related = regulatoryUpdates
    .filter(
      (u) =>
        u.slug !== update.slug &&
        (u.source === update.source ||
          u.tags.some((t) => update.tags.includes(t)))
    )
    .slice(0, 3);

  return (
    <>
      {/* Breadcrumb + hero */}
      <section className="relative overflow-hidden bg-white px-6 pb-16 pt-10">
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[300px] w-[600px] rounded-full bg-[#7C6AF7]/5 blur-[90px]" />
        <div className="relative mx-auto max-w-3xl">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-xs text-[#9896B6]">
            <Link href="/" className="hover:text-[#0D0D0F] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/regulatory-updates"
              className="hover:text-[#0D0D0F] transition-colors"
            >
              Regulatory Updates
            </Link>
            <span>/</span>
            <span className="text-[#6B6A8F] line-clamp-1">{update.title}</span>
          </nav>

          {/* Source badge */}
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span
              className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${sourceColors[update.source] ?? "bg-[#9896B6]/10 text-[#6B6A8F]"}`}
            >
              {update.source}
            </span>
            {update.tags.map((tag) => (
              <span
                key={tag}
                className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${tagColors[tag] ?? "bg-[#9896B6]/10 text-[#6B6A8F]"}`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1
            className="text-3xl font-bold leading-tight text-[#0D0D0F] sm:text-4xl"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            {update.title}
          </h1>

          {/* Meta row */}
          <div className="mt-6 flex flex-wrap items-center gap-5 border-b border-[#E5E4F0] pb-6 text-xs text-[#9896B6]">
            <span>
              <span className="font-medium text-[#6B6A8F]">Published: </span>
              {formatDate(update.publishedDate)}
            </span>
            {update.effectiveDate && (
              <span>
                <span className="font-medium text-[#6B6A8F]">Effective: </span>
                {formatDate(update.effectiveDate)}
              </span>
            )}
            <span>{update.readTime}</span>
          </div>

          {/* Summary / lead */}
          <p className="mt-6 text-lg leading-8 text-[#6B6A8F]">
            {update.summary}
          </p>

          {/* Impact highlight */}
          <div className="mt-6 rounded-xl border border-[#7C6AF7]/30 bg-[#F5F4FF] p-5">
            <p className="mb-1.5 text-xs font-bold uppercase tracking-widest text-[#7C6AF7]">
              Operational Impact
            </p>
            <p className="text-sm leading-7 text-[#3E3C5C]">{update.impact}</p>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="bg-white px-6 pb-20">
        <div className="mx-auto max-w-3xl">
          {update.content.map((section, i) => (
            <ContentBlock key={i} section={section} />
          ))}
        </div>
      </section>

      {/* Source link */}
      <section className="border-y border-[#E5E4F0] bg-[#F9F8FF] px-6 py-8">
        <div className="mx-auto flex max-w-3xl flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#9896B6]">
              Original source
            </p>
            <p className="mt-1 text-sm text-[#6B6A8F]">
              {update.source} – Official regulatory documentation
            </p>
          </div>
          <a
            href={update.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#7C6AF7] px-5 py-2.5 text-sm font-semibold text-[#7C6AF7] transition-all hover:bg-[#7C6AF7] hover:text-white"
          >
            View on {update.source}
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Related updates */}
      {related.length > 0 && (
        <section className="bg-white px-6 py-16">
          <div className="mx-auto max-w-7xl">
            <h2
              className="mb-8 text-xl font-bold text-[#0D0D0F]"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Related Updates
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/regulatory-updates/${r.slug}`}
                  className="group rounded-2xl border border-[#E5E4F0] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#7C6AF7]/40 hover:shadow-[0_6px_32px_rgba(124,106,247,0.10)]"
                >
                  <div className="mb-3 flex items-center gap-2">
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${sourceColors[r.source] ?? ""}`}
                    >
                      {r.source}
                    </span>
                    <span className="text-xs text-[#9896B6]">
                      {r.readTime}
                    </span>
                  </div>
                  <h3
                    className="text-sm font-bold leading-snug text-[#0D0D0F] group-hover:text-[#7C6AF7] transition-colors"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {r.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-xs leading-6 text-[#6B6A8F]">
                    {r.summary}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back link */}
      <section className="bg-[#F9F8FF] px-6 py-10">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/regulatory-updates"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#7C6AF7] hover:text-[#4ECDC4] transition-colors"
          >
            ← Back to all regulatory updates
          </Link>
        </div>
      </section>
    </>
  );
}
