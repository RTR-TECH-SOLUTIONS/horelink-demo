/**
 * Datele firmei, din certificatul de inregistrare. Sursa unica pentru
 * paginile legale si footer, ca sa nu apara cifre diferite in locuri diferite.
 */
export const COMPANY = {
  name: "HORELINK S.R.L.",
  cui: "55452585",
  regCom: "J2026050582004",
  euid: "ROONRC.J2026050582004",
  address:
    "București, Sectorul 2, Str. Grigore Ionescu nr. 63, Camera 1, Bl. T73, Sc. 2, Et. 4, Ap. 42",
  email: "contact@horelink.ro",
  phone: "0775 365 366",
  phoneHref: "tel:+40775365366",
  domain: "horelink.ro",
} as const;

/**
 * ID-ul de masurare Google Analytics 4 (forma G-XXXXXXXXXX).
 * Cat timp e gol, bannerul de cookies functioneaza normal, dar nu se incarca
 * niciun script Google. TODO(real): completeaza ID-ul din proprietatea GA4.
 */
export const GA_ID = "";

/** Data afisata in capul paginilor legale. */
export const LEGAL_UPDATED = { ro: "17 septembrie 2026", en: "17 September 2026" } as const;

/** Adresa canonica a site-ului in productie. */
export const SITE_URL = "https://horelink.ro";

/**
 * Doar build-ul de productie se indexeaza. Demo-ul de pe GitHub Pages ramane noindex,
 * ca sa nu concureze in Google cu domeniul real.
 */
export const INDEXABLE = import.meta.env.SITE === SITE_URL;

/**
 * Codul de verificare Google Search Console, daca se alege metoda cu meta tag
 * (continutul atributului content="..."). Gol = nu se afiseaza.
 * Varianta recomandata ramane verificarea prin DNS (record TXT la cyberfolks).
 */
export const GSC_VERIFICATION = "";
