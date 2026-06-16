import Link from "next/link";
import { Card } from "./Card";

export function ArticleCard({
  article,
}: {
  article: {
    title: string;
    category: string;
    excerpt: string;
    readTime: string;
    slug: string;
  };
}) {
  return (
    <Card>
      <p className="text-xs font-semibold uppercase tracking-widest text-[#4ECDC4]">
        {article.category}
      </p>
      <h3
        className="mt-4 text-lg font-bold leading-snug text-[#0D0D0F]"
        style={{ fontFamily: "var(--font-dm-sans)" }}
      >
        {article.title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-[#6B6A8F]">{article.excerpt}</p>
      <div className="mt-6 flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-widest text-[#9896B6]">
          {article.readTime}
        </span>
        <Link
          href={`/insights/${article.slug}`}
          className="text-xs font-semibold text-[#7C6AF7] hover:text-[#4ECDC4] transition-colors"
        >
          Read →
        </Link>
      </div>
    </Card>
  );
}
