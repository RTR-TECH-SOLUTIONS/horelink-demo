/**
 * Prefixează căile interne cu `base` din astro.config (necesar pe GitHub Pages,
 * unde site-ul stă la /<repo>/). În producție, pe domeniul propriu, base = "/"
 * și funcția rămâne corectă fără nicio modificare în pagini.
 *
 * Adaugă și slash final pe rutele de pagină, ca serverul static să nu mai facă
 * un redirect 301 la fiecare navigare.
 */
const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

/** are extensie de fișier (.webp, .png, ...) => nu primește slash final */
const isFile = (path: string) => /\.[a-z0-9]{2,5}$/i.test(path.split(/[?#]/)[0]);

export function url(path: string): string {
  if (!path.startsWith("/")) return path;
  const clean = path.replace(/\/+$/, "");
  // radacina ramane cu slash final, altfel serverul face un redirect 301
  if (clean === "") return `${BASE}/`;
  return `${BASE}${clean}${isFile(clean) ? "" : "/"}`;
}
