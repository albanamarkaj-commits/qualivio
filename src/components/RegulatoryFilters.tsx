"use client";

import { useState, useMemo } from "react";
import type { RegulatoryUpdate, RegulatoryTag, RegulatorySource } from "@/data/regulatory-updates";
import { RegulatoryUpdateCard } from "@/components/RegulatoryUpdateCard";

const ALL_SOURCES: RegulatorySource[] = ["EMA", "FDA", "MHRA", "ICH", "Health Canada"];

const ALL_TAGS: RegulatoryTag[] = [
  "GVP",
  "Signal Management",
  "Risk Management",
  "Risk Minimisation",
  "PASS",
  "PSUR",
  "ICSR",
  "EudraVigilance",
  "Pregnancy & Breastfeeding",
  "Paediatrics",
];

export function RegulatoryFilters({ updates }: { updates: RegulatoryUpdate[] }) {
  const [search, setSearch] = useState("");
  const [activeSource, setActiveSource] = useState<RegulatorySource | "All">("All");
  const [activeTag, setActiveTag] = useState<RegulatoryTag | "All">("All");

  const filtered = useMemo(() => {
    return updates.filter((u) => {
      const matchesSource = activeSource === "All" || u.source === activeSource;
      const matchesTag = activeTag === "All" || u.tags.includes(activeTag);
      const q = search.toLowerCase();
      const matchesSearch =
        !q ||
        u.title.toLowerCase().includes(q) ||
        u.summary.toLowerCase().includes(q) ||
        u.tags.some((t) => t.toLowerCase().includes(q));
      return matchesSource && matchesTag && matchesSearch;
    });
  }, [updates, search, activeSource, activeTag]);

  // Only show sources/tags present in the dataset
  const availableSources = ALL_SOURCES.filter((s) =>
    updates.some((u) => u.source === s)
  );
  const availableTags = ALL_TAGS.filter((t) =>
    updates.some((u) => u.tags.includes(t))
  );

  return (
    <div>
      {/* Search */}
      <div className="relative mb-8">
        <svg
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#9896B6]"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          placeholder="Search updates, topics, or keywords…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-full border border-[#E5E4F0] bg-white py-3 pl-11 pr-5 text-sm text-[#0D0D0F] placeholder-[#9896B6] outline-none transition-all focus:border-[#7C6AF7] focus:ring-2 focus:ring-[#7C6AF7]/20"
        />
      </div>

      {/* Source filter */}
      <div className="mb-4 flex flex-wrap gap-2">
        <button
          onClick={() => setActiveSource("All")}
          className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
            activeSource === "All"
              ? "border-[#7C6AF7] bg-[#7C6AF7] text-white"
              : "border-[#E5E4F0] text-[#6B6A8F] hover:border-[#7C6AF7] hover:text-[#0D0D0F]"
          }`}
        >
          All Sources
        </button>
        {availableSources.map((s) => (
          <button
            key={s}
            onClick={() => setActiveSource(s)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              activeSource === s
                ? "border-[#7C6AF7] bg-[#7C6AF7] text-white"
                : "border-[#E5E4F0] text-[#6B6A8F] hover:border-[#7C6AF7] hover:text-[#0D0D0F]"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Tag filter */}
      <div className="mb-10 flex flex-wrap gap-2">
        <button
          onClick={() => setActiveTag("All")}
          className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
            activeTag === "All"
              ? "border-[#4ECDC4] bg-[#4ECDC4]/20 text-[#2AA7A5]"
              : "border-[#E5E4F0] text-[#9896B6] hover:border-[#4ECDC4] hover:text-[#0D0D0F]"
          }`}
        >
          All Topics
        </button>
        {availableTags.map((t) => (
          <button
            key={t}
            onClick={() => setActiveTag(t)}
            className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
              activeTag === t
                ? "border-[#4ECDC4] bg-[#4ECDC4]/20 text-[#2AA7A5]"
                : "border-[#E5E4F0] text-[#9896B6] hover:border-[#4ECDC4] hover:text-[#0D0D0F]"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="py-16 text-center text-[#9896B6]">
          <p className="text-lg font-medium">No updates found</p>
          <p className="mt-1 text-sm">Try adjusting your search or filters</p>
        </div>
      ) : (
        <>
          <p className="mb-6 text-sm text-[#9896B6]">
            {filtered.length} update{filtered.length !== 1 ? "s" : ""} found
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((update) => (
              <RegulatoryUpdateCard key={update.slug} update={update} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
