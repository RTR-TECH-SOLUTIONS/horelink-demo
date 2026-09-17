// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// Doua tinte din acelasi cod:
// - productie (implicit): https://horelink.ro, la radacina, indexabil;
// - demo (DEPLOY_TARGET=demo, setat in workflow-ul GitHub Pages): sub /horelink-demo/, cu noindex.
// Helperul din src/lib/url.ts prefixeaza base-ul, deci linkurile din pagini nu se ating.
const DEMO = process.env.DEPLOY_TARGET === "demo";

// Un singur fisier de font per familie, doar cu caracterele de care are nevoie site-ul
// (ASCII, diacritice romanesti cu virgula si cu sedila, ghilimele, cateva litere Latin-1).
// Altfel pagina romana descopera tarziu subsetul latin-ext si textul apare cu intarziere.
const GLYPHS = [
  ...Array.from({ length: 95 }, (_, i) => String.fromCharCode(32 + i)),
  ..."ăâîșțĂÂÎȘȚşţŞŢ„”“‘’«»–—…·•©®™€°×→←↑↓àáäçèéêëìíïñòóôöùúûüÀÁÄÇÈÉÊËÌÍÏÑÒÓÔÖÙÚÛÜß",
];

export default defineConfig({
  site: DEMO ? "https://rtr-tech-solutions.github.io" : "https://horelink.ro",
  base: DEMO ? "/horelink-demo" : "/",
  trailingSlash: "always",
  // CSS-ul e mic (sub 10 KB): inline elimina cererile care blocheaza randarea
  build: {
    inlineStylesheets: "always",
  },
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
      fallbacks: ["sans-serif"],
      options: { experimental: { glyphs: GLYPHS } },
    },
    {
      provider: fontProviders.google(),
      name: "Inter",
      cssVariable: "--font-inter",
      weights: [400, 500, 600],
      styles: ["normal"],
      fallbacks: ["sans-serif"],
      options: { experimental: { glyphs: GLYPHS } },
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
