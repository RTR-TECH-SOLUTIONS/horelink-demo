# HoreLink — preview de prezentare

Site de prezentare pentru aplicația mobilă **HoreLink** (piață cu două fețe pentru personal
HoReCa și angajatori). Construit ca preview de pitch: design și impresie, fără SEO fin și fără
pachet legal. Codul e gândit să devină direct proiectul real, fără rescriere.

**Bilingv română / engleză**, pe rute separate: `/` pentru română (limba implicită) și `/en/`
pentru engleză. Nu e un toggle care schimbă texte în browser, ci două pagini statice, fiecare cu
`<html lang>`, `canonical` și `hreflang` proprii, deci amândouă se pot indexa separat. Toate
textele stau în `src/i18n/ro.ts` și `src/i18n/en.ts`; `ro.ts` dă tipul, iar TypeScript se plânge
dacă `en.ts` uită o cheie. Badge-urile de store se schimbă și ele cu limba, fiecare în varianta
ei oficială.

## Rulare

```bash
npm install
npm run dev      # sau: npx astro dev --background
npm run build    # iese in dist/, static
npm run preview
```

## Stack

Astro (static, zero JS by default) + Tailwind v4 + CSS vanilla colocat pe secțiunile cu design
aparte. Tokenii de design sunt în `src/styles/global.css`, în blocul `@theme`.

## De unde vine designul

- **Structura** urmează numitorul comun al concurenței RO directe, în special
  [ospatar-eveniment.ro](https://ospatar-eveniment.ro/) (referința agreată): hero cu fotografie
  reală, cele două audiențe separate, „cum funcționează" în trei pași, galerie de contexte,
  secțiune de download, contact.
- **Paleta** e extrasă programatic din materialul clientului: `#E00216` e exact roșul din
  icon-ul aplicației, `#0A0A0B` e fundalul lui. Un singur accent, restul neutre.
- **Fotografiile** sunt generate cu Higgsfield (gpt_image_2_5), în registru documentar întunecat,
  ca roșul să rămână singura culoare saturată din pagină. Sursele la rezoluție mare sunt în
  `raw/` (cele verticale, pentru galeria de evenimente, în `raw/ev-v/`); variantele WebP folosite
  de site sunt în `public/img/`.
- **Regulă pentru fotografii:** raportul sursei trebuie să fie același cu al cadrului în care
  intră. Galeria de evenimente folosește cadre 4:5, deci imaginile ei sunt generate 4:5 și
  compuse pe verticală, cu subiectul jos și contextul sus, ca voalul și textul de la bază să nu
  acopere subiectul. Dacă schimbi raportul cadrului, regenerează imaginile, nu le decupa.
- **Capturile din aplicație** (`public/app/screen-*.webp`) și **marca** (`public/app/mark.png`)
  sunt materialul real al clientului, luat din listările publice din magazine, la rezoluția lor
  nativă (1080×2220) și exportate la 840px, adică peste 3x față de cât se afișează.

## Ce e real și ce e placeholder

**Real, verificat în listările din magazine:**

- Linkurile către Google Play și App Store, plus numărul de WhatsApp `+40 726 455 848`
  (`src/data/app.ts`).
- Pozițiile acoperite, tipurile de evenimente, beneficiile pentru ambele audiențe și structura
  unui anunț (locație, start, final, zile de lucru, poziții cu locuri) — toate vin din
  descrierea aplicației și din ecranele ei.
- Capturile de ecran din mockup-urile de telefon.

**Placeholder, de înlocuit:**

- Exemplul de anunț din secțiunea „Ce scrie într-un anunț" (`src/components/Anunt.astro`) e
  construit realist, nu copiat dintr-un eveniment real.
- Programul de răspuns din secțiunea de contact.
- `TODO(real)` în `src/components/Footer.astro` — acolo intră pachetul legal și creditul RTR.

**Deliberat lipsă:**

- **Nicio bandă de statistici** („32+ locații, 2.942+ personal", cum are concurența).
  Aplicația e nouă, cu puține descărcări; cifre inventate la un pitch sunt un risc, nu un
  câștig. Se pot adăuga când există.
- **Niciun testimonial.** Aplicația nu are încă recenzii. Locul lor firesc e între secțiunea
  de evenimente și cea de download.

## Funcționalități care merg

1. **Meniu mobil** — hamburger cu panou, închidere pe Escape și la click pe link, se închide
   singur la trecerea pe desktop.
2. **Comutator de audiență** în „Cum funcționează" — tablist accesibil, cu navigare pe săgeți,
   care schimbă cei trei pași între perspectiva personalului și cea a angajatorului.
3. **Formular de contact → WhatsApp** — validare client-side cu mesaje de eroare și
   `aria-invalid`, apoi compune mesajul (nume, rol, text) în limba paginii și deschide `wa.me`
   către `+40 726 455 848`.
4. **Comutator de limbă** RO / EN în header, pe desktop și pe mobil.

## De lămurit cu clientul

1. **Numele.** Magazinele și domeniul spun **HoreLink**, dar package-ul Android e
   `ro.horevia.app` și ecranul de onboarding din aplicație spune încă „Welcome to **Horevia**".
   Site-ul folosește HoreLink peste tot. Merită confirmat că rebrandingul e intenționat și că
   onboarding-ul urmează să fie actualizat.
2. **Limba aplicației.** Interfața aplicației e în engleză, deși listarea din Play e tradusă în
   română. Site-ul fiind bilingv, pe `/en/` capturile se potrivesc perfect; pe pagina română
   rămâne o mică nepotrivire. Variante: se localizează aplicația, sau recreez mockup-urile în
   română doar pentru pagina RO.

## Ce urmează la proiectul real

- Research SEO RO pe nișă (joburi HoReCa, personal evenimente, intent local pe orașe), lista de
  keyworduri confirmată, apoi on-page: title/meta/H1, JSON-LD `SoftwareApplication` +
  `Organization`, `sitemap.xml`, `robots.txt`. Pagina EN primește propriul set de keyworduri,
  nu o traducere a celor românești.
- Pachet legal: banner cookie/GDPR, Termeni și condiții, Confidențialitate, Politica de cookies.
  Plus creditul „made by RTR" în footer.
- Performanță la maxim: AVIF pe lângă WebP, `srcset` complet pe hero, fonturile self-hosted în
  loc de Google Fonts.
- Deploy: build static, merge direct pe Hostinger. Domeniul `horelink.ro` e deja cumpărat și
  hostingul e activ, dar gol.
