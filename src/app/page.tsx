import Link from "next/link";
import { QMark } from "@/components/QMark";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { ArticleCard } from "@/components/ArticleCard";
import { articles } from "@/data/articles";
import { services } from "@/data/services";

export default function Home() {
  return (
    <>
      {/* Hero — white background */}
      <section className="relative overflow-hidden bg-white px-6 pb-24 pt-24 sm:pb-32 sm:pt-32">
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-[#7C6AF7]/6 blur-[120px]" />

        <div className="relative mx-auto max-w-5xl text-center">
          {/* Logo mark */}
          <div className="mb-8 flex justify-center">
            <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-[#E5E4F0] bg-[#F5F4FF] text-[#7C6AF7] shadow-[0_4px_24px_rgba(124,106,247,0.15)]">
              <QMark size={36} />
            </div>
          </div>

          {/* Eyebrow */}
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#4ECDC4]">
            Pharmacovigilance · Life Sciences · Drug Safety
          </p>

          {/* Headline */}
          <h1
            className="mx-auto max-w-4xl text-5xl font-bold leading-tight tracking-tight text-[#0D0D0F] sm:text-6xl md:text-7xl"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Clear thinking for{" "}
            <span className="text-[#7C6AF7]">complex science.</span>
          </h1>

          {/* Tagline */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6B6A8F]">
            Trusted insights, education and consulting for pharmacovigilance,
            drug safety, and life sciences professionals who need both depth and
            clarity.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/consulting">Explore Consulting →</Button>
            <Button href="/insights" variant="ghost">View Insights</Button>
          </div>

          {/* Teal divider */}
          <div className="mx-auto mt-16 h-px w-24 bg-[#4ECDC4]" />
        </div>
      </section>

      {/* Brand statement bar — stays dark */}
      <div className="border-y border-[#2E2E36] bg-[#0D0D0F] px-6 py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 text-xs font-medium uppercase tracking-widest text-[#9896B6]">
          {["Pharmacovigilance", "Drug Safety", "Regulatory Affairs", "Life Sciences Education", "Consulting"].map(
            (item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-[#4ECDC4]" />
                {item}
              </span>
            )
          )}
        </div>
      </div>

      {/* Services — white */}
      <Section
        eyebrow="Services"
        title="Specialised support for regulated life sciences teams."
        description="Qualivio helps organisations clarify processes, strengthen compliance, and build inspection-ready pharmacovigilance capabilities."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service) => (
            <Card key={service.title}>
              <div className="mb-4 h-0.5 w-8 bg-[#7C6AF7]" />
              <h3
                className="text-lg font-bold text-[#0D0D0F]"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#6B6A8F]">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/consulting" variant="ghost">All Consulting Services →</Button>
        </div>
      </Section>

      {/* Why Qualivio — stays dark */}
      <Section
        eyebrow="Brand Philosophy"
        title="A brand built on trust and precision."
        dark={true}
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { label: "Trustworthy", body: "We earn confidence through accuracy and transparency — every insight is grounded in evidence." },
            { label: "Clear", body: "Complex science, explained without jargon. We make pharmacovigilance accessible and actionable." },
            { label: "Expert", body: "Deep domain knowledge from professionals who speak the language of regulators and safety teams." },
            { label: "Modern", body: "A fresh perspective on an established discipline — digital-first, globally relevant." },
            { label: "Approachable", body: "Rigour without intimidation. We educate without condescending to our audience." },
            { label: "Precise", body: "Every word and design choice earns its place. No filler, no buzzwords, no vague claims." },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-[#2E2E36] bg-[#1A1A1E] p-6">
              <div className="mb-3 h-0.5 w-6 bg-[#4ECDC4]" />
              <h3 className="font-bold text-[#E8E6FF]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                {item.label}
              </h3>
              <p className="mt-2 text-sm leading-7 text-[#9896B6]">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Insights — white */}
      <Section
        eyebrow="Insights"
        title="Clear thinking for complex life sciences topics."
        description="Practical articles for pharmacovigilance, regulatory, quality, and clinical professionals."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.slice(0, 3).map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/insights" variant="ghost">All Insights →</Button>
        </div>
      </Section>

      {/* CTA banner — stays dark */}
      <section className="relative overflow-hidden bg-[#0D0D0F] px-6 py-20">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-full bg-gradient-to-br from-[#7C6AF7]/10 via-transparent to-[#4ECDC4]/5" />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#4ECDC4]">Get in touch</p>
          <h2
            className="text-3xl font-bold text-[#E8E6FF] sm:text-4xl"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Start with a focused conversation.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-[#9896B6]">
            Tell us what you are building, improving, or preparing for. Qualivio will respond with clarity and care.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact">Book a Consultation →</Button>
            <Link href="mailto:hello@qualivio.com" className="text-sm text-[#9896B6] hover:text-[#E8E6FF] transition-colors">
              hello@qualivio.com
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
