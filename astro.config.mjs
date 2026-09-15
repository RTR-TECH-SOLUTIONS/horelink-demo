// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// Preview pentru client, publicat pe GitHub Pages sub /horelink-demo/.
// La proiectul real (horelink.ro) se scot `site` și `base`, iar helperul din
// src/lib/url.ts devine identitate — nu trebuie atins niciun link din pagini.
export default defineConfig({
  site: "https://rtr-tech-solutions.github.io",
  base: "/horelink-demo",
  trailingSlash: "always",
  i18n: {
    locales: ["ro", "en"],
    defaultLocale: "ro",
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
