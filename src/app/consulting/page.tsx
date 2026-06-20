import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Consulting Services",
  description:
    "Pharmacovigilance compliance, quality systems, regulatory support, and life sciences consulting by Qualivio.",
};

const steps = [
  { number: "01", label: "Discover", body: "A conversation to understand your situation, what you are trying to achieve, and where the main challenges are." },
  { number: "02", label: "Assess", body: "A review of your current systems, documentation, and processes against the relevant regulatory requirements." },
  { number: "03", label: "Design", body: "Practical recommendations shaped around your specific situation, not generic frameworks." },
  { number: "04", label: "Implement", body: "Support through delivery, with knowledge transfer so your team is not dependent on us once the engagement ends." },
];

export default function ConsultingPage() {
  return (
    <>
      {/* Hero — white */}
      <section className="relative overflow-hidden bg-white px-6 pb-20 pt-24">
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-[#7C6AF7]/6 blur-[100px]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#F7B731]">Consulting</p>
          <h1
            className="text-4xl font-bold leading-tight text-[#0D0D0F] sm:text-5xl"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Consulting for life sciences organisations.
          </h1>
          <div className="mx-auto mt-6 flex items-center justify-center gap-2">
            <div className="h-px w-10 bg-[#7C6AF7]" />
            <div className="h-px w-6 bg-[#F7B731]" />
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#6B6A8F]">
            Qualivio works with organisations to review compliance processes,
            address regulatory gaps, and prepare for inspections.
          </p>
          <div className="mt-8">
            <Button href="#request">Request a Consultation →</Button>
          </div>
        </div>
      </section>

      {/* Services — white */}
      <Section
        eyebrow="Services"
        title="What Qualivio delivers."
        description="Consulting support that fits around your situation, whether you need a focused review or hands-on help through a full project."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
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
      </Section>

      {/* Process — dark */}
      <Section
        eyebrow="Process"
        title="How we work."
        description="Every engagement follows four stages, designed to give you a clear outcome without overcomplicating the process."
        dark={true}
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="rounded-2xl border border-[#2E2E36] bg-[#1A1A1E] p-6">
              <p className="text-2xl font-bold text-[#F7B731]">{step.number}</p>
              <h3
                className="mt-3 font-bold text-[#E8E6FF]"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {step.label}
              </h3>
              <p className="mt-2 text-sm leading-7 text-[#9896B6]">{step.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact form — white */}
      <Section
        eyebrow="Request Consultation"
        title="Start with a focused conversation."
        description="Tell us what you are working on or preparing for. We will get back to you within one to two business days."
        id="request"
      >
        <div className="mx-auto max-w-xl">
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
