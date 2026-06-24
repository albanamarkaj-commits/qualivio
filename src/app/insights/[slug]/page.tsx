import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { articles } from "@/data/articles";
import { articleContent } from "@/data/articleContent";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: `${article.title} | Qualivio`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  const content = articleContent[slug];

  if (!article || !content) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0D0D0F] px-6 pb-16 pt-24">
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-[#7C6AF7]/10 blur-[120px]" />
        <div className="relative mx-auto max-w-3xl">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm text-[#9896B6] hover:text-[#E8E6FF] transition-colors mb-8"
          >
            <span>&#8592;</span> Back to Articles
          </Link>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#4ECDC4]">
            {article.category}
          </p>
          <h1
            className="text-3xl font-bold leading-tight text-[#E8E6FF] sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            {article.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#9896B6]">
            {article.excerpt}
          </p>
          <div className="mt-6 flex items-center gap-3">
            <span className="text-xs font-medium uppercase tracking-widest text-[#7C6AF7]">
              {article.readTime}
            </span>
            <span className="text-[#2E2E36]">|</span>
            <span className="text-xs font-medium uppercase tracking-widest text-[#9896B6]" style={{ fontFamily: "var(--font-wordmark)" }}>
              Qualivio
            </span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="bg-white px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl">
          {/* Intro */}
          <div className="text-lg leading-9 text-[#3D3C5A] mb-12 border-l-4 border-[#7C6AF7] pl-6 space-y-5">
            {Array.isArray(content.intro)
              ? content.intro.map((p, i) => <p key={i}>{p}</p>)
              : <p>{content.intro}</p>}
          </div>

          {/* Sections */}
          <div className="space-y-12">
            {content.sections.map((section, i) => (
              <div key={i}>
                {section.heading && (
                  <h2
                    className="text-2xl font-bold text-[#0D0D0F] mb-5"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {section.heading}
                  </h2>
                )}
                {/* Main paragraphs */}
                <div className="space-y-4">
                  {section.paragraphs.map((p, j) => (
                    <p key={j} className="text-base leading-8 text-[#4A4868]">
                      {p}
                    </p>
                  ))}
                </div>
                {/* Block quote */}
                {section.quote && (
                  <blockquote className="my-8 rounded-xl bg-[#F5F4FF] border-l-4 border-[#7C6AF7] px-6 py-5">
                    <p className="text-lg italic text-[#3D3C5A] leading-8">
                      &ldquo;{section.quote.text}&rdquo;
                    </p>
                    <footer className="mt-3 text-sm font-semibold text-[#7C6AF7]">
                      {section.quote.attribution}
                    </footer>
                  </blockquote>
                )}
                {/* Paragraphs between quote and table */}
                {section.postQuoteParagraphs && section.postQuoteParagraphs.length > 0 && (
                  <div className="space-y-4 mt-4">
                    {section.postQuoteParagraphs.map((p, j) => (
                      <p key={j} className="text-base leading-8 text-[#4A4868]">
                        {p}
                      </p>
                    ))}
                  </div>
                )}
                {/* Table */}
                {section.table && (
                  <div className="my-6 overflow-x-auto rounded-xl border border-[#E5E4F0]">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-[#0D0D0F]">
                          {section.table.headers.map((h, j) => (
                            <th
                              key={j}
                              className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-white"
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row, j) => (
                          <tr
                            key={j}
                            className={j % 2 === 0 ? "bg-white" : "bg-[#F9F8FF]"}
                          >
                            {row.map((cell, k) => (
                              <td
                                key={k}
                                className={`px-4 py-3 text-[#4A4868] border-b border-[#E5E4F0] align-top leading-6 ${k === 0 ? "font-medium text-[#0D0D0F]" : ""}`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {/* Closing paragraphs */}
                {section.closing && section.closing.length > 0 && (
                  <div className="space-y-4 mt-4">
                    {section.closing.map((p, j) => (
                      <p key={j} className={`text-base leading-8 ${j === section.closing!.length - 1 && i === (content.sections.length - 1) ? "font-medium text-[#0D0D0F]" : "text-[#4A4868]"}`}>
                        {p}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Sources */}
          {content.sources && content.sources.length > 0 && (
            <div className="mt-16 border-t border-[#E5E4F0] pt-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#9896B6] mb-5">Sources</p>
              <ul className="space-y-2">
                {content.sources.map((source, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#7C6AF7] text-sm mt-0.5">·</span>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#6B6A8F] hover:text-[#7C6AF7] transition-colors leading-6"
                    >
                      {source.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Footer CTA */}
          <div className="mt-16 rounded-2xl bg-[#F5F4FF] border border-[#E5E4F0] p-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#7C6AF7] mb-3">
              Need expert guidance?
            </p>
            <h3
              className="text-2xl font-bold text-[#0D0D0F] mb-4"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Work with{" "}
              <span style={{ fontFamily: "var(--font-wordmark)" }}>Qualivio</span>
            </h3>
            <p className="text-[#6B6A8F] mb-6 max-w-md mx-auto">
              Our pharmacovigilance consultants help organisations build
              compliant, inspection-ready systems.
            </p>
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-[#7C6AF7] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#6a58e0] hover:-translate-y-0.5"
            >
              Book a Consultation
            </Link>
          </div>

          {/* Back link */}
          <div className="mt-12 text-center">
            <Link
              href="/insights"
              className="text-sm font-medium text-[#7C6AF7] hover:text-[#4ECDC4] transition-colors"
            >
              &#8592; Back to all articles
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
