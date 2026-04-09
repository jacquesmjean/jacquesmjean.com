import type { MetadataRoute } from "next";
import { perspectives } from "@/data/perspectives";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jacquesmjean.com";

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/advisory`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/governance`, lastModified: new Date(), priority: 0.8 },
    {
      url: `${baseUrl}/perspectives`,
      lastModified: new Date(),
      priority: 0.7,
    },
    { url: `${baseUrl}/contact`, lastModified: new Date(), priority: 0.6 },
  ];

  const perspectivePages = perspectives.map((p) => ({
    url: `${baseUrl}/perspectives/${p.slug}`,
    lastModified: new Date(p.date),
    priority: 0.6,
  }));

  return [...staticPages, ...perspectivePages];
}
