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
    title: "HoreLink — hospitality staff and events, in one app",
    description:
      "HoreLink connects hospitality professionals with restaurants, bars, hotels, catering companies and event organisers. Free on Android and iPhone.",
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
    angajatori: "For employers",
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
    lede: "HoreLink puts hospitality professionals and the places that need them in the same room: restaurants, bars, hotels, catering companies and event organisers. For a single evening or for a whole season.",
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
    tabAngajator: "I am an employer",
    personal: [
      {
        titlu: "Build your profile",
        text: "Add your experience and the roles you can cover. Employers see exactly what you can do, with nobody in between.",
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
  },

  angajatori: {
    titlePre: "For restaurants, hotels and ",
    titleAccent: "organisers",
    lede: "A big event always breaks down into the same questions: how many people, on which roles, from what time. HoreLink keeps the answers in one place.",
    bullets: [
      "Post an event in minutes, with the roles and the headcount you need.",
      "Reach hospitality professionals directly, with no agency in between.",
      "Every application on one screen, with each candidate's experience.",
      "Hire for a single evening or for a permanent position.",
      "See the confirmed team before the event, not on the morning of it.",
    ],
    phoneAlt: "The events list in the HoreLink app, showing a published Christmas market listing",
    photoAlt: "An event manager checking a list in a hall being set up for a dinner",
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
        text: "Not only events: permanent positions too, for the floor and the kitchen.",
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
    text: "Free on Android and iPhone. You create your account in the app, choose whether you join as staff or as an employer, and everything starts from there.",
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
    rolAngajator: "Employer / organiser",
    mesajLabel: "Message",
    mesajError: "Tell us briefly what this is about.",
    submit: "Send on WhatsApp",
    status:
      "We opened WhatsApp with your message. If nothing happened, check whether your browser is blocking new windows.",
    fine: "WhatsApp opens with the message already written. You can edit it before sending.",
    waGreeting: "Hi! I am {nume}, writing as {rol}.",
    waRolPersonal: "hospitality staff",
    waRolAngajator: "employer / organiser",
    waFooter: "(Sent from the HoreLink website)",
  },

  footer: {
    about:
      "The app that connects hospitality professionals with restaurants, bars, hotels, catering companies and event organisers.",
    navTitle: "On this site",
    appTitle: "The app",
    evenimenteLabel: "Where the work happens",
    copyright: "HoreLink. All rights reserved.",
  },
};
