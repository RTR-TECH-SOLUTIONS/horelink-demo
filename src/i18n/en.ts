import type { Dict } from "./ro";

/**
 * Textele in engleza. Acolo unde s-a putut, formularile urmeaza descrierea
 * oficiala a aplicatiei din App Store, ca tonul sa ramana al brandului.
 */
export const en: Dict = {
  htmlLang: "en",
  label: "English",
  short: "EN",

  meta: {
    title: "Hospitality staff for events in Romania | HoreLink",
    description:
      "Waiters, bartenders and chefs for events, straight from the app. For a single shift or for several. HoreLink is free to download on Android and iPhone.",
    ogImageAlt: "HoreLink: Find the shift. Find the team. In one app. Waiters serving in an event hall.",
  },

  a11y: {
    skip: "Skip to content",
    brandHome: "HoreLink, home",
    mainNav: "Main navigation",
    mobileNav: "Mobile navigation",
    footerNav: "Footer navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    langSwitch: "Change language",
    playBadge: "Get HoreLink on Google Play",
    appStoreBadge: "Download HoreLink on the App Store",
    playAlt: "Get it on Google Play",
    appStoreAlt: "Download on the App Store",
  },

  nav: {
    cum: "How it works",
    personal: "For staff",
    angajatori: "For businesses",
    evenimente: "Events",
    contact: "Contact",
    cta: "Get the app",
  },

  hero: {
    line1: "Find the shift.",
    line2: "Find the team.",
    line3Pre: "In the ",
    line3Accent: "same",
    line3Post: " app.",
    lede: "HoreLink puts hospitality professionals and the places that need them in the same room: restaurants, bars, hotels, catering companies and event organisers. For a single shift or for several.",
    fine: "Free on Android and iPhone. You create your account inside the app.",
    imgAlt: "Waiters serving a long table in an event hall in the evening",
    pozitiiLabel: "Roles covered",
    pozitii: [
      "Waiter",
      "Bartender",
      "Barista",
      "Chef",
      "Kitchen assistant",
      "Host",
      "Event staff",
    ],
  },

  cum: {
    title: "How it works",
    intro:
      "The same road, seen from two sides. Pick the side you are on and follow it, step by step.",
    tablistLabel: "Choose your perspective",
    tabPersonal: "I am staff",
    tabAngajator: "I need staff",
    personal: [
      {
        titlu: "Build your profile",
        text: "Add your experience and the roles you can cover. Restaurants and organisers see exactly what you can do, with nobody in between.",
      },
      {
        titlu: "Browse the events",
        text: "See what is coming up: start and end date, the hours, the location on the map and how many work days it takes.",
      },
      {
        titlu: "Apply with one tap",
        text: "Pick the role, send the application and follow the answer. You always know whether you are accepted, under review, or free to withdraw.",
      },
    ],
    angajator: [
      {
        titlu: "Post the event",
        text: "The date, the hours, the location and how many people you need on each role. It takes minutes, not half a day of phone calls.",
      },
      {
        titlu: "Collect applications",
        text: "Every profile lands on one screen, with each person's experience and the roles they can cover.",
      },
      {
        titlu: "Confirm the team",
        text: "Accept whoever fits and have the full list before the event, not on the morning of it.",
      },
    ],
  },

  personal: {
    titlePre: "For the people who ",
    titleAccent: "work",
    titlePost: " in hospitality",
    lede: "Waiter, bartender, barista, chef or kitchen assistant. See what is being staffed near you in the coming weeks and choose where you step in.",
    bullets: [
      "Flexible shifts, chosen by you. You confirm only when you can.",
      "See the location, the hours and the number of work days before you apply.",
      "Apply to a role with a single tap, straight from the listing.",
      "Your profile shows real experience, not a CV sent into the void.",
      "Follow every application: under review, accepted or withdrawn.",
    ],
    phoneAlt:
      "An event detail in the HoreLink app: location, hours, work days, available positions and the status of your application",
    more: "Everything about event work",
  },

  angajatori: {
    titlePre: "For restaurants, hotels and ",
    titleAccent: "organisers",
    lede: "A big event always breaks down into the same questions: how many people, on which roles, from what time. HoreLink keeps the answers in one place.",
    bullets: [
      "Post an event in minutes, with the roles and the headcount you need.",
      "Reach hospitality professionals directly, with no agency in between.",
      "Every application on one screen, with each candidate's experience.",
      "See the confirmed team before the event, not on the morning of it.",
    ],
    phoneAlt: "The events list in the HoreLink app, showing a published Christmas market listing",
    photoAlt: "An event manager checking a list in a hall being set up for a dinner",
    more: "How to find waiters for events",
  },

  evenimente: {
    title: "Where the work happens",
    intro:
      "From one rooftop cocktail evening to six weeks of Christmas market. The same roles, completely different contexts.",
    items: {
      nunta: {
        nume: "Weddings and christenings",
        text: "Hundreds of guests and a single window in which everything has to land.",
        alt: "Waiters serving plates at a wedding dinner in the evening",
      },
      craciun: {
        nume: "Christmas markets",
        text: "Six weeks of daily opening hours, with shifts that change often.",
        alt: "A vendor serving mulled wine at a Christmas market stall",
      },
      conferinta: {
        nume: "Conferences and corporate galas",
        text: "Timed coffee breaks, a buffet set up and cleared between sessions.",
        alt: "A catering team setting up the buffet during a conference break",
      },
      rooftop: {
        nume: "Rooftop evenings",
        text: "Short evening shifts, heavy traffic on the bar and little room to move.",
        alt: "A waiter carrying a tray of cocktails on a rooftop at sunset",
      },
      festival: {
        nume: "Festivals",
        text: "High volume, rotating shifts, teams put together fast.",
        alt: "Staff serving drinks at a festival stall at night",
      },
      restaurant: {
        nume: "Restaurants and bars",
        text: "Not only events: shifts on the floor and in the kitchen, when the place is full.",
        alt: "A chef sending a plate at the pass in a professional kitchen",
      },
    },
  },

  anunt: {
    titlePre: "What a ",
    titleAccent: "listing",
    lede: "A shift listing is not a job description. There are four things anyone in hospitality checks before saying yes, and all four sit at the top of the listing.",
    cardAria: "Example of a listing from the app",
    cardTitle: "End-of-year corporate gala",
    cardDesc: "Table service for 180 guests, in an event hall in the city.",
    campuri: [
      { eticheta: "Location", valoare: "27 Gruia St, Cluj-Napoca" },
      { eticheta: "Start", valoare: "12.12.2026, 16:00" },
      { eticheta: "End", valoare: "12.12.2026, 23:30" },
      { eticheta: "Work days", valoare: "1" },
    ],
    pozitiiTitle: "Available positions",
    pozitii: [
      { nume: "Waiter", locuri: "6 spots" },
      { nume: "Bartender", locuri: "2 spots" },
      { nume: "Kitchen assistant", locuri: "3 spots" },
    ],
    note: [
      {
        titlu: "The hours, not just the date",
        text: "From what time to what time. That is how you know from the listing whether the shift clashes with something else.",
      },
      {
        titlu: "The full address, on a map",
        text: "It matters whether the event is downtown or forty minutes out of the city.",
      },
      {
        titlu: "How many work days",
        text: "A dinner means one day. A Christmas market can mean forty-two.",
      },
      {
        titlu: "Roles, with spots left",
        text: "See what is being looked for and how many spots are still open on your role, before you apply.",
      },
    ],
  },

  descarca: {
    title: "Get HoreLink",
    text: "Free on Android and iPhone. You create your account in the app, choose whether you join as staff or on behalf of a business, and everything starts from there.",
  },

  contact: {
    title: "Write to us",
    lede: "Have an event that needs people, or work in hospitality and something is not clear? Write to us and we will answer on WhatsApp.",
    direct: [
      { eticheta: "The app", valoare: "Android and iPhone, free" },
      { eticheta: "We answer", valoare: "Monday to Friday, 09:00 - 18:00" },
    ],
    numeLabel: "Name",
    numeError: "Tell us what to call you.",
    rolLabel: "You are writing as",
    rolPersonal: "Hospitality staff",
    rolAngajator: "Business / organiser",
    mesajLabel: "Message",
    mesajError: "Tell us briefly what this is about.",
    submit: "Send on WhatsApp",
    status:
      "We opened WhatsApp with your message. If nothing happened, check whether your browser is blocking new windows.",
    fine: "WhatsApp opens with the message already written. You can edit it before sending.",
    privacyPre: "What happens to the details in your message is explained in our ",
    privacyLink: "Privacy policy",
    waGreeting: "Hi! I am {nume}, writing as {rol}.",
    waRolPersonal: "hospitality staff",
    waRolAngajator: "business / organiser",
    waFooter: "(Sent from the HoreLink website)",
  },

  footer: {
    about:
      "The app that connects hospitality professionals with restaurants, bars, hotels, catering companies and event organisers.",
    navTitle: "On this site",
    appTitle: "The app",
    evenimenteLabel: "Where the work happens",
    legalTitle: "Legal",
    cookieSettings: "Cookie settings",
    credit: "Website by",
  },

  audience: {
    companii: {
      title: "Waiters and bartenders for events in Romania | HoreLink",
      description:
        "Find waiters, bartenders, chefs and hosts for weddings, galas, conferences or festivals. Post your event in the HoreLink app and choose your team.",
      crumb: "For businesses",
      h1Pre: "Waiters and bartenders for ",
      h1Accent: "events",
      h1Post: "",
      lede: "Post your event in HoreLink with the date, the hours and how many people you need on each role. Hospitality professionals apply and you choose the team. For a single shift or for several.",
      fine: "The app is free to download on Android and iPhone.",
      photoAlt: "An event manager checking a list in a hall being set up for a dinner",
      phoneAlt: "The events list in the HoreLink app, showing a published Christmas market listing",
      stepsTitle: "How to find hospitality staff for an event",
      stepsIntro: "Three steps, from the listing to a confirmed team.",
      rolesTitle: "Roles you can staff",
      rolesIntro: "The roles covered by the app. One listing can look for every role you need.",
      roles: [
        { nume: "Waiters", text: "Table service for weddings, christenings, dinners and galas." },
        { nume: "Bartenders", text: "Cocktail bars at private parties, festivals and rooftop evenings." },
        { nume: "Baristas", text: "Coffee at conferences, coffee breaks and corporate events." },
        { nume: "Chefs", text: "Hot kitchen at events and on busy restaurant days." },
        { nume: "Kitchen assistants", text: "Prep, platters and buffet, alongside the chefs." },
        { nume: "Hosts", text: "Welcoming guests and guiding them at the entrance." },
        { nume: "Event staff", text: "Extra hands wherever the event needs them." },
      ],
      eventsTitle: "What kind of events",
      eventsIntro:
        "From a one-night wedding to a six-week Christmas market. You post the event once, with every work day.",
      faqTitle: "Questions about finding staff",
      faq: [
        {
          q: "How do I find waiters for an event?",
          a: "Download HoreLink, post the event with the date, hours, location and how many waiters you need, then choose from the professionals who apply.",
        },
        {
          q: "Can I look for several roles for the same event?",
          a: "Yes. One listing can include every role, for example waiters, bartenders and kitchen assistants, each with its own number of spots.",
        },
        {
          q: "Can I see people's experience before accepting them?",
          a: "Yes. Every application comes with the person's profile, their experience and the roles they can cover.",
        },
        {
          q: "Can I post an event that runs for several days?",
          a: "Yes. You set the start and end date, and the app shows how many work days the event has, from one evening to a market lasting weeks.",
        },
        {
          q: "What kind of events can I find staff for?",
          a: "Weddings and christenings, conferences and corporate galas, festivals, markets, rooftop evenings and busy days in restaurants and bars.",
        },
        {
          q: "Which phones does the app work on?",
          a: "HoreLink is free to download from Google Play for Android and from the App Store for iPhone.",
        },
      ],
    },
    personal: {
      title: "Event work for waiters and bartenders in Romania | HoreLink",
      description:
        "Waiter, bartender, barista or chef shifts at events, weekends included. See the hours and location, apply in the app and choose where you work.",
      crumb: "For staff",
      h1Pre: "Event work, on shifts ",
      h1Accent: "you",
      h1Post: " choose",
      lede: "Waiter, bartender, barista, chef or host? In HoreLink you see the events coming up, with the hours, location and work days, and you only apply to the shifts that suit you, whether it is a weekend evening or an event over several days.",
      fine: "The app is free to download on Android and iPhone.",
      photoAlt: "A bartender straining a cocktail into a coupe at a bar lit in red",
      phoneAlt:
        "An event detail in the HoreLink app: location, hours, work days, available positions and the status of your application",
      stepsTitle: "How you get to work at an event",
      stepsIntro: "Three steps, from your profile to a confirmed shift.",
      rolesTitle: "Roles you can work",
      rolesIntro: "Add the roles you can cover to your profile and apply only to listings looking for them.",
      roles: [
        { nume: "Waiter", text: "Table service at weddings, christenings, dinners and galas." },
        { nume: "Bartender", text: "Bars at private parties, festivals and rooftop evenings." },
        { nume: "Barista", text: "Coffee at conferences and corporate events." },
        { nume: "Chef", text: "Hot kitchen at events and on busy restaurant days." },
        { nume: "Kitchen assistant", text: "Prep, platters and buffet, next to the kitchen team." },
        { nume: "Host", text: "Welcoming guests and guiding them at the event." },
        { nume: "Event staff", text: "Support for the team wherever the event needs extra hands." },
      ],
      eventsTitle: "Where the work happens",
      eventsIntro:
        "From a rooftop cocktail evening to six weeks of Christmas market. The same roles, completely different settings.",
      faqTitle: "Questions about event work",
      faq: [
        {
          q: "How do I find waiter shifts at events?",
          a: "Create a HoreLink profile with your experience and the roles you cover, then browse the upcoming events and apply to the ones that suit you.",
        },
        {
          q: "Can I work only at weekends?",
          a: "Yes. You choose which events to apply to, and every listing shows the date, hours and number of work days, so you can apply only to weekend shifts.",
        },
        {
          q: "What do I see before applying?",
          a: "The start and end date, the hours, the full address on a map, the number of work days and how many spots are still open on each role.",
        },
        {
          q: "How do I know if I was accepted?",
          a: "The app tracks every application and shows whether it is under review, accepted or withdrawn.",
        },
        {
          q: "Can I withdraw after applying?",
          a: "Yes. You can withdraw your application directly in the app.",
        },
        {
          q: "Which phones does the app work on?",
          a: "HoreLink is free to download from Google Play for Android and from the App Store for iPhone.",
        },
      ],
    },
  },

  legal: {
    home: "Home",
    updated: "Last updated:",
    onThisPage: "On this page",
    termeni: {
      nav: "Terms and conditions",
      title: "Terms and conditions",
      description: "The terms of use for the horelink.ro website, operated by HORELINK S.R.L.",
    },
    confidentialitate: {
      nav: "Privacy policy",
      title: "Privacy policy",
      description:
        "What personal data HORELINK S.R.L. processes when you visit horelink.ro or write to us, why, and what your rights are.",
    },
    cookies: {
      nav: "Cookie policy",
      title: "Cookie policy",
      description: "Which cookies horelink.ro uses, what they are for and how to withdraw your consent.",
    },
  },

  consent: {
    label: "Cookie preferences",
    text: "We use Google Analytics to see which pages get read and what is worth improving. Statistics cookies only start if you accept.",
    policy: "Cookie policy",
    accept: "Accept",
    reject: "Decline",
  },
};
