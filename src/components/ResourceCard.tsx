import { Card } from "./Card";

export function ResourceCard({
  resource,
}: {
  resource: { title: string; type: string; description: string; price: string };
}) {
  return (
    <Card>
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="inline-block rounded-full bg-[#7C6AF7]/15 px-3 py-1 text-xs font-semibold text-[#7C6AF7]">
            {resource.type}
          </span>
          <h3
            className="mt-4 text-lg font-bold text-[#E8E6FF]"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            {resource.title}
          </h3>
        </div>
        {resource.price === "Free" ? (
          <span className="shrink-0 rounded-full bg-[#F7B731]/15 px-3 py-1 text-xs font-semibold text-[#F7B731]">
            Free
          </span>
        ) : (
          <span className="shrink-0 text-sm font-semibold text-[#E8E6FF]">
            {resource.price}
          </span>
        )}
      </div>
      <p className="mt-3 text-sm leading-7 text-[#9896B6]">{resource.description}</p>
      <button className="mt-6 text-xs font-semibold text-[#4ECDC4] hover:text-[#7C6AF7] transition-colors">
        {resource.price === "Free" ? "Download →" : "Get access →"}
      </button>
    </Card>
  );
}
