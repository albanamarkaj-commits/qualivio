import Link from "next/link";
import { Card } from "./Card";
import { ResourceDownloadCTA } from "./ResourceDownloadCTA";
import type { Resource } from "@/data/resources";

export function ResourceCard({ resource }: { resource: Resource }) {
  const isFree = resource.price === "Free";
  const hasFile = !!resource.file;

  return (
    <Card>
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="inline-block rounded-full bg-[#7C6AF7]/10 px-3 py-1 text-xs font-semibold text-[#7C6AF7]">
            {resource.type}
          </span>
          <h3
            className="mt-4 text-lg font-bold text-[#0D0D0F]"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            {resource.title}
          </h3>
        </div>
        {isFree && (
          <span className="shrink-0 rounded-full bg-[#F7B731]/15 px-3 py-1 text-xs font-semibold text-[#B8860B]">
            Free
          </span>
        )}
      </div>
      <p className="mt-3 text-sm leading-7 text-[#6B6A8F]">{resource.description}</p>
      {isFree && hasFile && resource.file ? (
        <ResourceDownloadCTA
          resourceId={resource.id}
          title={resource.title}
          price={resource.price}
          file={resource.file}
        />
      ) : isFree && resource.href ? (
        <Link
          href={resource.href}
          className="mt-6 inline-flex rounded-full bg-[#7C6AF7] px-5 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90"
        >
          Read now
        </Link>
      ) : !isFree ? (
        <Link
          href="/contact"
          className="mt-6 inline-flex rounded-full border border-[#7C6AF7] px-5 py-2 text-xs font-semibold text-[#7C6AF7] transition-all hover:bg-[#7C6AF7] hover:text-white"
        >
          Request a Quote
        </Link>
      ) : null}
    </Card>
  );
}

