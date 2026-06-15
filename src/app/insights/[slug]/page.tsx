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
            style={{ fontFamily: "var(--font-space-grotesk)" }}
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
            <span className="text-xs font-medium uppercase tracking-widest text-[#9896B6]">
              Qualivio
            </span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="bg-white px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl">
          {/* Intro */}
          <p className="text-lg leading-9 text-[#3D3C5A] mb-12 border-l-4 border-[#7C6AF7] pl-6">
            {content.intro}
          </p>

          {/* Sections */}
          <div className="space-y-12">
            {content.sections.map((section, i) => (
              <div key={i}>
                <h2
                  className="text-2xl font-bold text-[#0D0D0F] mb-5"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {section.heading}
                </h2>
                <div className="space-y-4">
                  {section.paragraphs.map((p, j) => (
                    <p key={j} className="text-base leading-8 text-[#4A4868]">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="mt-16 rounded-2xl bg-[#F5F4FF] border border-[#E5E4F0] p-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#7C6AF7] mb-3">
              Need expert guidance?
            </p>
            <h3
              className="text-2xl font-bold text-[#0D0D0F] mb-4"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Work with Qualivio
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
