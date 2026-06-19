import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "This is Martin | Qualivio Education",
  description:
    "Follow Martin's real-life journey through the pharmacovigilance system — from a side effect to a global safety update — told in plain language.",
};

const chapters = [
  {
    number: "01",
    color: "#F7B731",
    bg: "#FFF9EC",
    label: "Meet Martin",
    heading: "Martin is 61 years old",
    body: "He has osteoarthritis in both knees. Over the years, the pain has crept up on him — first a dull ache, then something that stops him from climbing stairs without wincing. Exercise helps a little. Over-the-counter pain relief helps a little. But neither is enough anymore.",
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="20" r="10" stroke="#F7B731" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M16 56c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="#F7B731" strokeWidth="3.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "02",
    color: "#7C6AF7",
    bg: "#F4F2FF",
    label: "A New Medicine",
    heading: "His doctor prescribes Relvian",
    body: "Relvian is a new anti-inflammatory medicine that has just come on the market. Martin's doctor believes it will give him better pain relief. Martin collects it from his local pharmacy. The pharmacist tells him about the known potential side effects: indigestion, dizziness, a mild headache. Nothing that sounds alarming.",
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <rect x="20" y="10" width="24" height="44" rx="8" stroke="#7C6AF7" strokeWidth="3.5" />
        <line x1="32" y1="22" x2="32" y2="38" stroke="#7C6AF7" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="24" y1="30" x2="40" y2="30" stroke="#7C6AF7" strokeWidth="3.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "03",
    color: "#4ECDC4",
    bg: "#F0FAFA",
    label: "Something Doesn't Feel Right",
    heading: "One week later, Martin is worried",
    body: "He notices that climbing stairs leaves him unusually short of breath. A dry cough has appeared that won't go away. He feels more tired than usual. He wonders if the new medicine might be responsible. He calls his doctor and books an appointment.",
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <path d="M32 12 C20 12 12 24 12 32 C12 44 20 52 32 52 C44 52 52 44 52 32 C52 20 44 12 32 12Z" stroke="#4ECDC4" strokeWidth="3.5" />
        <line x1="32" y1="24" x2="32" y2="36" stroke="#4ECDC4" strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="32" cy="42" r="2" fill="#4ECDC4" />
      </svg>
    ),
  },
  {
    number: "04",
    color: "#7C6AF7",
    bg: "#F4F2FF",
    label: "The Doctor Investigates",
    heading: "Tests, imaging, and a diagnosis",
    body: "Martin's doctor orders chest imaging and blood work. The results show signs of drug-induced lung inflammation — a condition called pneumonitis. His doctor rules out other causes: other medications, infections, underlying lung disease. The evidence points clearly to Relvian. Martin is advised to stop taking it immediately. Over the next two weeks, his breathing improves, his cough disappears, and his oxygen levels return to normal.",
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <circle cx="28" cy="28" r="14" stroke="#7C6AF7" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="38" y1="38" x2="52" y2="52" stroke="#7C6AF7" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="22" y1="28" x2="34" y2="28" stroke="#7C6AF7" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="28" y1="22" x2="28" y2="34" stroke="#7C6AF7" strokeWidth="3.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "05",
    color: "#F7B731",
    bg: "#FFF9EC",
    label: "The Safety Report",
    heading: "Martin's doctor files a report",
    body: "Drug-induced pneumonitis was not listed as a known side effect of Relvian. Because his doctor suspects a link, he fills out an Individual Case Safety Report — an ICSR — and sends it to the national regulatory authority. This is a formal, structured account of what happened: the patient, the medicine, the timeline, the reaction, the outcome.",
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <rect x="14" y="10" width="36" height="44" rx="4" stroke="#F7B731" strokeWidth="3.5" />
        <line x1="22" y1="24" x2="42" y2="24" stroke="#F7B731" strokeWidth="3" strokeLinecap="round" />
        <line x1="22" y1="32" x2="42" y2="32" stroke="#F7B731" strokeWidth="3" strokeLinecap="round" />
        <line x1="22" y1="40" x2="34" y2="40" stroke="#F7B731" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "06",
    color: "#4ECDC4",
    bg: "#F0FAFA",
    label: "Into the Global Network",
    heading: "One report becomes part of a global picture",
    body: "Martin's case is entered into the national adverse event database. Because the regulatory authority is a member of the WHO Programme for International Drug Monitoring, the report is shared with VigiBase — the world's largest database of medicine safety reports. A case assessor at the regulatory authority reviews the report and finds a small number of similar cases involving Relvian and lung inflammation. Further analysis suggests the link is probable.",
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="18" stroke="#4ECDC4" strokeWidth="3.5" />
        <ellipse cx="32" cy="32" rx="8" ry="18" stroke="#4ECDC4" strokeWidth="3" />
        <line x1="14" y1="32" x2="50" y2="32" stroke="#4ECDC4" strokeWidth="3" strokeLinecap="round" />
        <line x1="18" y1="22" x2="46" y2="22" stroke="#4ECDC4" strokeWidth="2" strokeLinecap="round" />
        <line x1="18" y1="42" x2="46" y2="42" stroke="#4ECDC4" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "07",
    color: "#7C6AF7",
    bg: "#F4F2FF",
    label: "A Label Is Changed",
    heading: "The regulatory authority acts",
    body: "The regulatory authority requires Relvian's manufacturer to update the product information. The words 'inflammation of the lungs' are added to the list of adverse effects. A warning about serious respiratory reactions is added. An advisory letter is sent to healthcare professionals. The information is published on the regulatory authority's website. Martin's doctor receives the update and reviews prescribing guidance for his other patients.",
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <path d="M12 44L24 20L36 34L46 14L54 26" stroke="#7C6AF7" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="42,44 54,44 54,56" stroke="#7C6AF7" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="12" y1="52" x2="52" y2="52" stroke="#7C6AF7" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "08",
    color: "#F7B731",
    bg: "#FFF9EC",
    label: "Martin's Legacy",
    heading: "One patient. A safer medicine for everyone.",
    body: "Martin switches to a different treatment — an alternative analgesic combined with physical therapy — and remains stable with no further problems. His case has contributed to a better understanding of Relvian's safety profile. Reports like his help identify rare risks that clinical trials cannot always detect. The pharmacovigilance system worked exactly as it was designed to.",
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <path d="M32 14 L38 26 L52 28 L42 38 L44 52 L32 46 L20 52 L22 38 L12 28 L26 26 Z" stroke="#F7B731" strokeWidth="3.5" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function MartinPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0D0D0F] px-6 pb-24 pt-24">
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-[#7C6AF7]/15 blur-[120px]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="mb-5 inline-block rounded-full border border-[#F7B731]/30 bg-[#F7B731]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-[#F7B731]">
            Education &nbsp;·&nbsp; Plain Language
          </p>
          <h1
            className="text-5xl font-black leading-[1.06] text-[#E8E6FF] sm:text-6xl"
            style={{ fontFamily: "var(--font-dm-sans)", letterSpacing: "-0.02em" }}
          >
            This is Martin.
          </h1>
          <p
            className="mt-4 text-2xl font-medium text-[#7C6AF7]"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            And this is how pharmacovigilance works.
          </p>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[#9896B6]">
            Pharmacovigilance is the system that keeps medicines safe after they reach patients.
            It can sound technical — but it isn't. Follow Martin's story and you'll understand
            it better than most people in the industry.
          </p>
          <div className="mt-10 flex items-center justify-center gap-6 text-sm text-[#6B6A8F]">
            <span className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4ECDC4]" />
              8 chapters
            </span>
            <span className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#7C6AF7]" />
              6 min read
            </span>
            <span className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#F7B731]" />
              No prior knowledge needed
            </span>
          </div>
        </div>
      </section>

      {/* What is pharmacovigilance? — brief explainer */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#7C6AF7]">Before we begin</p>
          <h2
            className="text-2xl font-black text-[#0D0D0F]"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            What is pharmacovigilance?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#6B6A8F]">
            When a medicine is approved and reaches patients, the clinical trials are over — but
            the learning has only just begun. Real patients are older, sicker, and taking other
            medicines. Rare side effects may take thousands of exposures to appear.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#6B6A8F]">
            Pharmacovigilance (PV) is the international system of monitoring, detecting, and
            responding to medicine safety issues in the real world. It relies on doctors,
            pharmacists, patients, regulators, and manufacturers all playing their part.
            Martin's story shows every one of those parts in action.
          </p>
        </div>
      </section>

      {/* Chapters */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-2xl space-y-10">
          {chapters.map((ch) => (
            <div
              key={ch.number}
              className="overflow-hidden rounded-2xl border border-[#E8E6FF]"
              style={{ background: ch.bg }}
            >
              <div className="flex items-start gap-6 p-8">
                {/* Chapter icon */}
                <div className="hidden shrink-0 sm:block">
                  {ch.icon}
                </div>
                <div className="flex-1">
                  {/* Chapter number + label */}
                  <div className="mb-3 flex items-center gap-3">
                    <span
                      className="text-xs font-black tracking-[0.2em]"
                      style={{ color: ch.color }}
                    >
                      CHAPTER {ch.number}
                    </span>
                    <span className="h-px flex-1 opacity-20" style={{ background: ch.color }} />
                    <span
                      className="text-xs font-bold uppercase tracking-widest"
                      style={{ color: ch.color, opacity: 0.7 }}
                    >
                      {ch.label}
                    </span>
                  </div>
                  <h3
                    className="text-xl font-black text-[#0D0D0F]"
                    style={{ fontFamily: "var(--font-dm-sans)", letterSpacing: "-0.01em" }}
                  >
                    {ch.heading}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-[#3D3C5A]">
                    {ch.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key concepts recap */}
      <section className="bg-[#0D0D0F] px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#4ECDC4]">
            What you just learned
          </p>
          <h2
            className="text-3xl font-black text-[#E8E6FF]"
            style={{ fontFamily: "var(--font-dm-sans)", letterSpacing: "-0.02em" }}
          >
            The pharmacovigilance system, in plain terms.
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              {
                term: "Adverse event",
                def: "Any unwanted medical event that happens while a patient is taking a medicine — whether or not the medicine caused it.",
                color: "#F7B731",
              },
              {
                term: "ICSR",
                def: "Individual Case Safety Report. The formal document a healthcare professional submits when they suspect a medicine caused a side effect.",
                color: "#7C6AF7",
              },
              {
                term: "Signal detection",
                def: "Analysing collections of reports to spot patterns — a potential link between a medicine and an effect that wasn't previously known.",
                color: "#4ECDC4",
              },
              {
                term: "VigiBase",
                def: "The WHO's global database of medicine safety reports, containing over 30 million reports from 130+ countries.",
                color: "#F7B731",
              },
              {
                term: "Label update",
                def: "A change to a medicine's official product information — the document that tells doctors, pharmacists, and patients about risks and how to use it safely.",
                color: "#7C6AF7",
              },
              {
                term: "Risk minimisation",
                def: "The measures taken to reduce a known risk — a warning, a restriction, an advisory letter, or updated guidance for prescribers.",
                color: "#4ECDC4",
              },
            ].map((item) => (
              <div
                key={item.term}
                className="rounded-xl border border-white/10 bg-white/5 p-6"
              >
                <p
                  className="mb-2 text-sm font-black uppercase tracking-wide"
                  style={{ color: item.color }}
                >
                  {item.term}
                </p>
                <p className="text-sm leading-relaxed text-[#9896B6]">{item.def}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing reflection */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#7C6AF7]">
            Why it matters
          </p>
          <h2
            className="text-3xl font-black text-[#0D0D0F]"
            style={{ fontFamily: "var(--font-dm-sans)", letterSpacing: "-0.02em" }}
          >
            Every report is a patient behind it.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#6B6A8F]">
            Martin's case led to a label update that will protect future patients from a
            reaction they didn't know to look for. He didn't do anything extraordinary —
            he went to his doctor. His doctor didn't do anything extraordinary — they filed a report.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#6B6A8F]">
            The pharmacovigilance system depends on ordinary people doing exactly that.
            Professionals who understand the system make it work better. That's why education matters.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/insights"
              className="rounded-full bg-[#7C6AF7] px-8 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
            >
              Read our PV articles
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-[#7C6AF7] px-8 py-3 text-sm font-bold text-[#7C6AF7] transition-colors hover:bg-[#7C6AF7]/5"
            >
              Talk to a PV expert
            </Link>
          </div>
        </div>
      </section>

      {/* Back to Education */}
      <div className="border-t border-[#E8E6FF] bg-white px-6 py-8">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#6B6A8F] transition-colors hover:text-[#7C6AF7]"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to Education
          </Link>
        </div>
      </div>
    </>
  );
}
