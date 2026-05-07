import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { ArticleCard } from "@/components/ArticleCard";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Articles & Insights",
  description:
    "Pharmacovigilance, drug safety, regulatory affairs, clinical quality, and life sciences insights from Qualivio.",
};

const categories = [
  "All",
  "Pharmacovigilance",
  "Drug Safety",
  "Regulatory Affairs",
  "Clinical Quality",
  "Compliance",
];

export default function InsightsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0D0D0F] px-6 pb-20 pt-24">
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-[#7C6AF7]/8 blur-[100px]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#4ECDC4]">
            Insights
          </p>
          <h1
            className="text-4xl font-bold leading-tight text-[#E8E6FF] sm:text-5xl"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Clear thinking for complex life sciences topics.
          </h1>
          <div className="mx-auto mt-6 h-px w-16 bg-[#7C6AF7]" />
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#9896B6]">
            Practical articles designed for pharmacovigilance, regulatory,
            quality, and clinical professionals.
          </p>
        </div>
      </section>

      <Section>
        {/* Category filters */}
        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                cat === "All"
                  ? "border-[#7C6AF7] bg-[#7C6AF7]/15 text-[#7C6AF7]"
                  : "border-[#2E2E36] text-[#9896B6] hover:border-[#7C6AF7] hover:text-[#E8E6FF]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured article */}
        <div className="mb-10 rounded-2xl border border-[#7C6AF7]/30 bg-[#1A1A1E] p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#4ECDC4]">
            Featured
          </p>
          <h2
            className="mt-3 text-2xl font-bold text-[#E8E6FF] sm:text-3xl"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            {articles[0].title}
          </h2>
          <p className="mt-4 max-w-3xl text-[#9896B6]">{articles[0].excerpt}</p>
          <div className="mt-6 flex items-center gap-4">
            <span className="text-xs font-medium uppercase tracking-widest text-[#9896B6]">
              {articles[0].readTime}
            </span>
            <span className="text-[#2E2E36]">·</span>
            <a
              href={`/insights/${articles[0].slug}`}
              className="text-sm font-semibold text-[#7C6AF7] hover:text-[#4ECDC4] transition-colors"
            >
              Read article →
            </a>
          </div>
        </div>

        {/* Articles grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </Section>
    </>
  );
}
