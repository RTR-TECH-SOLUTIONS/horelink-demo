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

export type { Dict };
