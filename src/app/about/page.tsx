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
  {
    label: "Integrity",
    body: "We are accurate, transparent, and honest — even when the answer is complex.",
  },
  {
    label: "Clarity",
    body: "We simplify without dumbing down. Clarity is a professional obligation, not a style choice.",
  },
  {
    label: "Scientific discipline",
    body: "Everything we produce is grounded in evidence, regulation, and professional expertise.",
  },
  {
    label: "Practical excellence",
    body: "We focus on what works in real-world regulated environments, not just theory.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0D0D0F] px-6 pb-20 pt-24">
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-[#7C6AF7]/8 blur-[100px]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#4ECDC4]">About</p>
          <h1
            className="text-4xl font-bold leading-tight text-[#E8E6FF] sm:text-5xl"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            A modern authority for pharmacovigilance and life sciences education.
          </h1>
          <div className="mx-auto mt-6 h-px w-16 bg-[#7C6AF7]" />
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#9896B6]">
            Qualivio exists to make drug safety knowledge clearer, more
            practical, and more accessible for professionals working in
            regulated life sciences environments.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <Section eyebrow="Foundation" title="Why Qualivio exists.">
        <div className="grid gap-6 md:grid-cols-2">
          <Card accent="primary">
            <div className="mb-4 h-0.5 w-8 bg-[#7C6AF7]" />
            <h3
              className="text-2xl font-bold text-[#E8E6FF]"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Mission
            </h3>
            <p className="mt-4 leading-8 text-[#9896B6]">
              To advance excellence in pharmacovigilance through trusted
              education, consulting, and practical resources — making complex
              science accessible to every professional who needs it.
            </p>
          </Card>
          <Card accent="teal">
            <div className="mb-4 h-0.5 w-8 bg-[#4ECDC4]" />
            <h3
              className="text-2xl font-bold text-[#E8E6FF]"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Vision
            </h3>
            <p className="mt-4 leading-8 text-[#9896B6]">
              A life sciences ecosystem where safety systems are clear,
              compliant, human-centred, and continuously improving — powered by
              professionals who are confident in their knowledge.
            </p>
          </Card>
        </div>
      </Section>

      {/* Values */}
      <Section eyebrow="Values" title="How Qualivio works." dark={true}>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.label}
              className="rounded-2xl border border-[#2E2E36] bg-[#0D0D0F] p-6"
            >
              <div className="mb-4 h-0.5 w-6 bg-[#4ECDC4]" />
              <h3
                className="font-bold text-[#E8E6FF]"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {value.label}
              </h3>
              <p className="mt-2 text-sm leading-7 text-[#9896B6]">
                {value.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Brand voice */}
      <Section eyebrow="Brand Voice" title="The way we communicate.">
        <div className="mx-auto max-w-3xl rounded-2xl border border-[#2E2E36] bg-[#1A1A1E] p-8">
          {[
            {
              label: "We write in",
              value: "plain, confident English — no unnecessary jargon.",
            },
            {
              label: "We are",
              value: "authoritative but never arrogant.",
            },
            {
              label: "We educate",
              value: "without condescending to our audience.",
            },
            {
              label: "We avoid",
              value: "buzzwords, vague claims, and over-promising.",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="flex gap-4 border-b border-[#2E2E36] py-4 last:border-0 last:pb-0 first:pt-0"
            >
              <span className="w-28 shrink-0 text-sm font-semibold text-[#7C6AF7]">
                {item.label}
              </span>
              <span className="text-sm leading-7 text-[#9896B6]">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="border-t border-[#2E2E36] bg-[#0D0D0F] px-6 py-20 text-center">
        <h2
          className="text-3xl font-bold text-[#E8E6FF]"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Work with Qualivio.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-[#9896B6]">
          Whether you need consulting support, educational resources, or a
          focused conversation — we are here.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href="/consulting">Explore Consulting →</Button>
          <Button href="/contact" variant="ghost">Get in Touch</Button>
        </div>
      </section>
    </>
  );
}
