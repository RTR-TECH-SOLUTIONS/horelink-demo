// @ts-check
import { defineConfig, fontProviders } from "astro/config";

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
  // fonturile se descarca la build si se servesc de pe site, nu de la Google:
  // vizitatorul nu mai trimite IP-ul catre fonts.googleapis.com (GDPR)
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Archivo",
      cssVariable: "--font-archivo",
      weights: [500, 600, 700],
      styles: ["normal"],
      subsets: ["latin", "latin-ext"],
      fallbacks: ["sans-serif"],
    },
    {
      provider: fontProviders.google(),
      name: "Inter",
      cssVariable: "--font-inter",
      weights: [400, 500, 600],
      styles: ["normal"],
      subsets: ["latin", "latin-ext"],
      fallbacks: ["sans-serif"],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
