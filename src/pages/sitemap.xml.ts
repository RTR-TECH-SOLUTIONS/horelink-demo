import type { APIRoute } from "astro";
import { SITE_PAGES, LANGS } from "../lib/pages";
import { url } from "../lib/url";

// Sitemap scris de mana: 8 pagini nu justifica o integrare in plus, iar asa
// fiecare URL primeste direct alternativele hreflang (RO / EN / x-default).
export const GET: APIRoute = ({ site }) => {
  const abs = (path: string) => new URL(url(path), site).href;
  const lastmod = new Date().toISOString().slice(0, 10);

  const entries = SITE_PAGES.flatMap((page) =>
    LANGS.map((lang) => {
      const alternates = [
        ...LANGS.map(
          (l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${abs(page.paths[l])}"/>`,
        ),
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(page.paths.ro)}"/>`,
      ].join("\n");

      return `  <url>
    <loc>${abs(page.paths[lang])}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority.toFixed(1)}</priority>
${alternates}
  </url>`;
    }),
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join("\n")}
</urlset>
`;

  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
