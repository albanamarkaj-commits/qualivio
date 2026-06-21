import Link from "next/link";
import type { RegulatoryUpdate } from "@/data/regulatory-updates";
import { RegulatoryIllustration } from "./CardIllustration";

const sourceColors: Record<string, string> = {
  EMA: "bg-[#7C6AF7]/15 text-[#7C6AF7]",
  FDA: "bg-[#4ECDC4]/15 text-[#2AA7A5]",
  MHRA: "bg-[#F7B731]/15 text-[#B8860B]",
  ICH: "bg-[#9896B6]/15 text-[#6B6A8F]",
  "Health Canada": "bg-[#D52B1E]/12 text-[#C0392B]",
};

const tagColors: Record<string, string> = {
  GVP: "bg-[#7C6AF7]/10 text-[#7C6AF7]",
  "Signal Management": "bg-[#4ECDC4]/10 text-[#2AA7A5]",
  "Risk Management": "bg-[#F7B731]/10 text-[#B8860B]",
  "Risk Minimisation": "bg-[#F7B731]/10 text-[#B8860B]",
  PASS: "bg-[#E8E6FF] text-[#5a47e0]",
  PSUR: "bg-[#E8E6FF] text-[#5a47e0]",
  ICSR: "bg-[#9896B6]/10 text-[#6B6A8F]",
  EudraVigilance: "bg-[#4ECDC4]/10 text-[#2AA7A5]",
  "Pregnancy & Breastfeeding": "bg-pink-50 text-pink-600",
  Paediatrics: "bg-blue-50 text-blue-600",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function RegulatoryUpdateCard({ update }: { update: RegulatoryUpdate }) {
  return (
    <Link
      href={`/regulatory-updates/${update.slug}`}
      className="group flex flex-col rounded-2xl border border-[#E5E4F0] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#7C6AF7]/50 hover:shadow-[0_8px_40px_rgba(124,106,247,0.12)]"
    >
      {/* Illustration */}
      <div className="-mx-6 -mt-6 mb-5 overflow-hidden rounded-t-2xl">
        <RegulatoryIllustration />
      </div>
      {/* Source + date row */}
      <div className="mb-4 flex items-center justify-between gap-3">
        <span
          className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${sourceColors[update.source] ?? "bg-[#9896B6]/10 text-[#6B6A8F]"}`}
        >
          {update.source}
        </span>
        <span className="text-xs text-[#9896B6]">
          {update.effectiveDate
            ? `Effective ${formatDate(update.effectiveDate)}`
            : formatDate(update.publishedDate)}
        </span>
      </div>

      {/* Title */}
      <h3
        className="text-base font-bold leading-snug text-[#0D0D0F] group-hover:text-[#7C6AF7] transition-colors"
        style={{ fontFamily: "var(--font-dm-sans)" }}
      >
        {update.title}
      </h3>

      {/* Summary */}
      <p className="mt-3 flex-1 text-sm leading-7 text-[#6B6A8F]">
        {update.summary}
      </p>

      {/* Tags */}
      <div className="mt-5 flex flex-wrap gap-1.5">
        {update.tags.map((tag) => (
          <span
            key={tag}
            className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${tagColors[tag] ?? "bg-[#9896B6]/10 text-[#6B6A8F]"}`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-5 flex items-center justify-between border-t border-[#F0EFF8] pt-4">
        <span className="text-xs font-medium uppercase tracking-widest text-[#9896B6]">
          {update.readTime}
        </span>
        <span className="text-xs font-semibold text-[#7C6AF7] group-hover:text-[#4ECDC4] transition-colors">
          Read update →
        </span>
      </div>
    </Link>
  );
}
