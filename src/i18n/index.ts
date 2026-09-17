import { ro, type Dict } from "./ro";
import { en } from "./en";
import { url } from "../lib/url";

export type Lang = "ro" | "en";

export const DEFAULT_LANG: Lang = "ro";

export const dictionaries: Record<Lang, Dict> = { ro, en };

export const LANGS: Lang[] = ["ro", "en"];

export function t(lang: Lang): Dict {
  return dictionaries[lang];
}

/**
 * Prefixul de URL al unei limbi, gata prefixat cu `base` din astro.config.
 * Romana sta in radacina (e limba implicita), engleza sub /en/, ca sa ramana
 * doua pagini statice indexabile separat.
 */
export function base(lang: Lang): string {
  return url(lang === DEFAULT_LANG ? "/" : `/${lang}/`);
}

/** Paginile legale au slug-uri diferite pe fiecare limba. */
export type LegalPage = "termeni" | "confidentialitate" | "cookies";

export const LEGAL_ROUTES: Record<LegalPage, Record<Lang, string>> = {
  termeni: { ro: "/termeni-si-conditii/", en: "/en/terms/" },
  confidentialitate: { ro: "/politica-de-confidentialitate/", en: "/en/privacy-policy/" },
  cookies: { ro: "/politica-de-cookies/", en: "/en/cookie-policy/" },
};

export const HOME_ROUTES: Record<Lang, string> = { ro: "/", en: "/en/" };

export function legalHref(page: LegalPage, lang: Lang): string {
  return url(LEGAL_ROUTES[page][lang]);
}

export type { Dict };
