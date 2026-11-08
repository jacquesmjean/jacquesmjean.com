import { articles } from "@/data/articles";

export const dynamic = "force-static";

const SITE = "https://jacquesmjean.com";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function GET() {
  const items = articles
    .map((a) => {
      const url = `${SITE}/perspectives/${a.slug}/`;
      return `    <item>
      <title>${esc(a.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(`${a.datePublished}T12:00:00Z`).toUTCString()}</pubDate>
      <category>${esc(a.tag)}</category>
      <description>${esc(a.metaDescription)}</description>
      <enclosure url="${SITE}${a.ogImage}" type="image/${a.ogImage.endsWith(".png") ? "png" : "jpeg"}" length="0" />
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Jacques M. Jean · Perspectives</title>
    <link>${SITE}/perspectives/</link>
    <atom:link href="${SITE}/rss.xml" rel="self" type="application/rss+xml" />
    <description>Writing from a founder and technologist: AI, Africa, Haiti, and what 25 years across 15 countries teaches you.</description>
    <language>en-us</language>
${items}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
