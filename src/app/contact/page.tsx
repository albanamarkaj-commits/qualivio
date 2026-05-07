import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Qualivio for pharmacovigilance consulting, life sciences education, and drug safety support.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero — white */}
      <section className="relative overflow-hidden bg-white px-6 pb-20 pt-24">
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-[#7C6AF7]/6 blur-[100px]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#4ECDC4]">Contact</p>
          <h1 className="text-4xl font-bold leading-tight text-[#0D0D0F] sm:text-5xl" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            Request a consultation or ask a focused question.
          </h1>
          <div className="mx-auto mt-6 h-px w-16 bg-[#7C6AF7]" />
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#6B6A8F]">
            Tell us what you are building, improving, or preparing for. Qualivio will respond with clarity and care.
          </p>
        </div>
      </section>

      {/* Form — white */}
      <Section>
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          {/* Contact details */}
          <div className="rounded-2xl border border-[#E5E4F0] bg-[#F5F4FF] p-8">
            <div className="mb-4 h-0.5 w-8 bg-[#4ECDC4]" />
            <h2 className="text-2xl font-bold text-[#0D0D0F]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              Contact details
            </h2>
            <div className="mt-6 flex flex-col gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#9896B6]">Email</p>
                <a href={`mailto:${site.email}`} className="mt-1 block text-sm text-[#7C6AF7] hover:text-[#4ECDC4] transition-colors">
                  {site.email}
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#9896B6]">LinkedIn</p>
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="mt-1 block text-sm text-[#7C6AF7] hover:text-[#4ECDC4] transition-colors">
                  linkedin.com/company/qualiviopharma
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#9896B6]">Website</p>
                <a href={site.url} className="mt-1 block text-sm text-[#7C6AF7] hover:text-[#4ECDC4] transition-colors">
                  www.qualiviopharma.com
                </a>
              </div>
            </div>
            <div className="mt-8 rounded-xl border border-[#E5E4F0] bg-white p-4">
              <p className="text-xs leading-6 text-[#6B6A8F]">
                For consulting, training, content partnerships, or life sciences education enquiries — we respond within 1–2 business days.
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </Section>
    </>
  );
}
