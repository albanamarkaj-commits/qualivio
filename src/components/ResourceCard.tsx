import { Card } from "./Card";
import { ResourceDownloadCTA } from "./ResourceDownloadCTA";

export function ResourceCard({
  resource,
}: {
  resource: { title: string; type: string; description: string; price: string; file?: string };
}) {
  const isFree = resource.price === "Free";
  const ctaLabel = isFree ? "Download →" : "Get access →";
  const ctaClasses =
    "mt-6 inline-block text-xs font-semibold text-[#4ECDC4] hover:text-[#7C6AF7] transition-colors";
  return (
    <Card>
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="inline-block rounded-full bg-[#7C6AF7]/10 px-3 py-1 text-xs font-semibold text-[#7C6AF7]">
            {resource.type}
          </span>
          <h3
            className="mt-4 text-lg font-bold text-[#0D0D0F]"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            {resource.title}
          </h3>
        </div>
        {isFree ? (
          <span className="shrink-0 rounded-full bg-[#F7B731]/15 px-3 py-1 text-xs font-semibold text-[#B8860B]">
            Free
          </span>
        ) : (
          <span className="shrink-0 text-sm font-semibold text-[#0D0D0F]">
            {resource.price}
          </span>
        )}
      </div>
      <p className="mt-3 text-sm leading-7 text-[#6B6A8F]">{resource.description}</p>
      {isFree && resource.file ? (
        <ResourceDownloadCTA title={resource.title} file={resource.file} />
      ) : (
        <button className={ctaClasses}>{ctaLabel}</button>
      )}
    </Card>
  );
}
