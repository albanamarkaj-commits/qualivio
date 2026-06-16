import { Card } from "./Card";
import { ResourceDownloadCTA } from "./ResourceDownloadCTA";
import type { Resource } from "@/data/resources";

export function ResourceCard({ resource }: { resource: Resource }) {
  const isFree = resource.price === "Free";
  // A resource is purchasable when it has both a file to deliver and a configured price.
  const hasFile = !!resource.file;
  const hasCheckout = !!resource.priceCents && !!resource.currency;
  const canActivateCTA = hasFile && (isFree || hasCheckout);

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
      {canActivateCTA && resource.file ? (
        <ResourceDownloadCTA
          resourceId={resource.id}
          title={resource.title}
          price={resource.price}
          file={resource.file}
        />
      ) : (
        <span className="mt-6 inline-block text-xs font-semibold text-[#9896B6]">
          Coming soon
        </span>
      )}
    </Card>
  );
}

