import { HOME_ROUTES, AUDIENCE_ROUTES, LEGAL_ROUTES, LANGS, type Lang } from "../i18n";

/**
 * Toate paginile publice, cu varianta lor in fiecare limba (fara base).
 * Sursa pentru sitemap; o pagina noua se adauga aici o singura data.
 */
export interface SitePage {
  paths: Record<Lang, string>;
  priority: number;
  changefreq: "weekly" | "monthly" | "yearly";
}

export const SITE_PAGES: SitePage[] = [
  { paths: HOME_ROUTES, priority: 1, changefreq: "weekly" },
  ...Object.values(AUDIENCE_ROUTES).map((paths) => ({
    paths,
    priority: 0.8,
    changefreq: "monthly" as const,
  })),
  ...Object.values(LEGAL_ROUTES).map((paths) => ({
    paths,
    priority: 0.3,
    changefreq: "yearly" as const,
  })),
];

export { LANGS };
