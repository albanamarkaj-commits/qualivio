import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { articles } from "@/data/articles";
import { regulatoryUpdates } from "@/data/regulatory-updates";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/about",
    "/consulting",
    "/contact",
    "/resources",
    "/insights",
    "/regulatory-updates",
    "/life-sciences",
    "/life-sciences/pharmacovigilance",
    "/life-sciences/quality-assurance",
    "/life-sciences/clinical-research",
  ];

  return [
    ...pages.map((path) => ({ url: `${site.url}${path}` })),
    ...articles.map((a) => ({ url: `${site.url}/insights/${a.slug}` })),
    ...regulatoryUpdates.map((u) => ({
      url: `${site.url}/regulatory-updates/${u.slug}`,
    })),
  ];
}
