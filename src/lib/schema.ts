/**
 * Date structurate (JSON-LD). Fara rating-uri sau recenzii: aplicatia nu are
 * inca, iar Google penalizeaza datele inventate.
 */
import { COMPANY } from "../data/company";
import { PLAY_URL, APPSTORE_URL } from "../data/app";
import { t, HOME_ROUTES, type Lang } from "../i18n";
import { url } from "./url";

type Json = Record<string, unknown>;

export function schemaHelpers(site: URL) {
  const abs = (path: string) => new URL(url(path), site).href;
  const home = abs("/");
  const ids = {
    org: `${home}#organization`,
    website: `${home}#website`,
    app: `${home}#app`,
  };

  const organization: Json = {
    "@type": "Organization",
    "@id": ids.org,
    name: "HoreLink",
    legalName: COMPANY.name,
    url: home,
    logo: { "@type": "ImageObject", url: abs("/app/mark.png"), width: 256, height: 256 },
    email: COMPANY.email,
    telephone: COMPANY.phoneHref.replace("tel:", ""),
    taxID: COMPANY.cui,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Str. Grigore Ionescu nr. 63, Camera 1, Bl. T73, Sc. 2, Et. 4, Ap. 42",
      addressLocality: "București",
      addressRegion: "Sectorul 2",
      addressCountry: "RO",
    },
    sameAs: [PLAY_URL, APPSTORE_URL],
  };

  function homeGraph(lang: Lang): Json[] {
    const d = t(lang);
    return [
      organization,
      {
        "@type": "WebSite",
        "@id": ids.website,
        url: home,
        name: "HoreLink",
        inLanguage: ["ro-RO", "en"],
        publisher: { "@id": ids.org },
      },
      {
        "@type": "MobileApplication",
        "@id": ids.app,
        name: "HoreLink",
        description: d.meta.description,
        operatingSystem: "Android, iOS",
        applicationCategory: "BusinessApplication",
        inLanguage: lang === "ro" ? "ro-RO" : "en",
        url: abs(HOME_ROUTES[lang]),
        downloadUrl: [PLAY_URL, APPSTORE_URL],
        offers: { "@type": "Offer", price: "0", priceCurrency: "RON" },
        publisher: { "@id": ids.org },
      },
    ];
  }

  function faqPage(items: { q: string; a: string }[]): Json {
    return {
      "@type": "FAQPage",
      mainEntity: items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    };
  }

  function breadcrumb(lang: Lang, name: string, path: string): Json[] {
    const d = t(lang);
    return [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: d.legal.home, item: abs(HOME_ROUTES[lang]) },
          { "@type": "ListItem", position: 2, name, item: abs(path) },
        ],
      },
    ];
  }

  return { homeGraph, breadcrumb, faqPage, organization, ids };
}

/** JSON sigur de pus intr-un <script>: fara "</script>" accidental in text. */
export function jsonLd(graph: Json[]): string {
  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c");
}
