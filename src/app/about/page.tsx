import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Qualivio's mission, vision, values, and pharmacovigilance expertise.",
};

const values = [
  { label: "Integrity", body: "We are accurate, transparent, and honest, even when the answer is complex." },
  { label: "Clarity", body: "We simplify without dumbing down. Clarity is a professional obligation, not a style choice." },
  { label: "Scientific discipline", body: "Everything we produce is grounded in evidence, regulation, and professional expertise." },
  { label: "Practical excellence", body: "We focus on what works in real-world regulated environments, not just theory." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero â€” white */}
      <section className="relative overflow-hidden bg-white px-6 pb-20 pt-24">
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-[#7C6AF7]/6 blur-[100px]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#F7B731]">About</p>
          <h1
            className="text-4xl font-bold leading-tight text-[#0D0D0F] sm:text-5xl"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            A modern authority for life sciences education.
          </h1>
          <div className="mx-auto mt-6 flex items-center justify-center gap-2">
            <div className="h-px w-10 bg-[#7C6AF7]" />
            <div className="h-px w-6 bg-[#F7B731]" />
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#6B6A8F]">
            Qualivio exists to make regulatory and pharmacovigilance knowledge
            clearer, more practical, and more accessible for professionals
            working in regulated life sciences environments.
          </p>
        </div>
      </section>

      {/* Mission & Vision â€” white */}
      <Section eyebrow="Foundation" title="Why Qualivio exists.">
        <div className="grid gap-6 md:grid-cols-2">
          <Card accent="primary">
            <div className="mb-4 h-0.5 w-8 bg-[#7C6AF7]" />
            <h3
              className="text-2xl font-bold text-[#0D0D0F]"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Mission
            </h3>
            <p className="mt-4 leading-8 text-[#6B6A8F]">
              To advance excellence in pharmacovigilance through trusted
              education, consulting, and practical resources, making complex
              regulations accessible to every professional who needs them.
            </p>
          </Card>
          <Card accent="teal">
            <div className="mb-4 h-0.5 w-8 bg-[#4ECDC4]" />
            <h3
              className="text-2xl font-bold text-[#0D0D0F]"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Vision
            </h3>
            <p className="mt-4 leading-8 text-[#6B6A8F]">
              A life sciences ecosystem where compliance is clear, human-centred,
              and continuously improving, powered by professionals who are
              confident in their regulatory knowledge.
            </p>
          </Card>
        </div>
      </Section>

      {/* Values â€” dark */}
      <Section eyebrow="Values" title="How Qualivio works." dark={true}>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <div key={value.label} className="rounded-2xl border border-[#2E2E36] bg-[#1A1A1E] p-6">
              <div className={`mb-4 h-0.5 w-6 ${i % 2 === 0 ? "bg-[#4ECDC4]" : "bg-[#F7B731]"}`} />
              <h3
                className="font-bold text-[#E8E6FF]"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {value.label}
              </h3>
              <p className="mt-2 text-sm leading-7 text-[#9896B6]">{value.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Brand voice â€” white */}
      <Section eyebrow="Brand Voice" title="The way we communicate.">
        <div className="mx-auto max-w-3xl rounded-2xl border border-[#E5E4F0] bg-white p-8 shadow-[0_4px_24px_rgba(124,106,247,0.08)]">
          {[
            { label: "We write in", value: "plain, confident English, with no unnecessary complexity." },
            { label: "We are", value: "authoritative but never arrogant." },
            { label: "We educate", value: "without condescending to our audience." },
            { label: "We avoid", value: "buzzwords, vague claims, and over-promising." },
          ].map((item) => (
            <div key={item.label} className="flex gap-4 border-b border-[#E5E4F0] py-4 last:border-0 last:pb-0 first:pt-0">
              <span className="w-28 shrink-0 text-sm font-semibold text-[#7C6AF7]">{item.label}</span>
              <span className="text-sm leading-7 text-[#6B6A8F]">{item.value}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA â€” dark */}
      <section className="border-t border-[#2E2E36] bg-[#0D0D0F] px-6 py-20 text-center">
        <div className="mx-auto mb-4 flex items-center justify-center gap-2">
          <div className="h-px w-8 bg-[#F7B731]" />
          <div className="h-px w-8 bg-[#4ECDC4]" />
        </div>
        <h2
          className="text-3xl font-bold text-[#E8E6FF]"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Work with Qualivio.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-[#9896B6]">
          Whether you need consulting support, educational resources, or a
          focused conversation, we are here.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href="/resources">Explore Education â†’</Button>
          <Button href="/contact" variant="ghost">Get in Touch</Button>
        </div>
      </section>
    </>
  );
}

