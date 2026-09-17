import type { APIRoute } from "astro";
import { INDEXABLE } from "../data/company";
import { url } from "../lib/url";

// Productia se lasa indexata si isi anunta sitemap-ul; demo-ul se blocheaza complet.
export const GET: APIRoute = ({ site }) => {
  const body = INDEXABLE
    ? `User-agent: *\nAllow: /\n\nSitemap: ${new URL(url("/sitemap.xml"), site)}\n`
    : "User-agent: *\nDisallow: /\n";

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
