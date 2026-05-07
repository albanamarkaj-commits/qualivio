import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Consulting Services",
  description:
    "Pharmacovigilance, compliance, quality systems, regulatory support, and life sciences strategy consulting.",
};

const steps = [
  {
    number: "01",
    label: "Discover",
    body: "A focused conversation to understand your context, priorities, and the specific challenge you are navigating.",
  },
  {
    number: "02",
    label: "Assess",
    body: "A structured review of your current systems, documentation, and processes against regulatory requirements.",
  },
  {
    number: "03",
    label: "Design",
    body: "Clear, practical recommendations — no jargon, no over-engineering. Solutions shaped around your real needs.",
  },
  {
    number: "04",
    label: "Implement",
    body: "Expert support through delivery, with knowledge transfer so your team is confident after engagement ends.",
  },
];

export default function ConsultingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0D0D0F] px-6 pb-20 pt-24">
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-[#7C6AF7]/8 blur-[100px]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#4ECDC4]">
            Consulting
          </p>
          <h1
            className="text-4xl font-bold leading-tight text-[#E8E6FF] sm:text-5xl"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Specialised support for regulated life sciences teams.
          </h1>
          <div className="mx-auto mt-6 h-px w-16 bg-[#7C6AF7]" />
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#9896B6]">
            Qualivio helps organisations clarify processes, strengthen
            compliance, and build inspection-ready pharmacovigilance
            capabilities.
          </p>
          <div className="mt-8">
            <Button href="#request">Request a Consultation →</Button>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <Section
        eyebrow="Services"
        title="What Qualivio delivers."
        description="Flexible consulting support shaped around your operational needs — from system reviews to full implementation."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title}>
              <div className="mb-4 h-0.5 w-8 bg-[#7C6AF7]" />
              <h3
                className="text-lg font-bold text-[#E8E6FF]"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#9896B6]">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section
        eyebrow="Process"
        title="A calm, structured consulting process."
        description="Every engagement follows a clear, four-stage workflow designed to deliver real results without unnecessary complexity."
        dark={true}
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-[#2E2E36] bg-[#0D0D0F] p-6"
            >
              <p className="text-2xl font-bold text-[#4ECDC4]">{step.number}</p>
              <h3
                className="mt-3 font-bold text-[#E8E6FF]"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {step.label}
              </h3>
              <p className="mt-2 text-sm leading-7 text-[#9896B6]">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact form */}
      <Section
        eyebrow="Request Consultation"
        title="Start with a focused conversation."
        description="Tell us what you are building, improving, or preparing for. We will respond with clarity and care."
        id="request"
      >
        <div className="mx-auto max-w-xl">
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
