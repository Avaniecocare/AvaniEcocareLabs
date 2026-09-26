// Per-route SEO metadata. Used at runtime (useSeo) and at build time
// (vite.config.js writes a static HTML file per route with these tags).
import { services } from "./services.js";

const staticPages = [
  {
    path: "/",
    title: "Avani Ecocare Labs — Materials Testing Laboratory, Greater Noida",
    description:
      "Chemical, physical and mechanical testing of plastics, rubber, metals, plywood, tiles and utensils for manufacturers, suppliers and OEMs. IS/BIS, ASTM, ISO and customer methods.",
  },
  {
    path: "/services",
    title: "Testing Services",
    description:
      "Plastics & polymer, rubber, metal & alloy, plywood & wood, tile & ceramic and utensil testing, plus BIS-oriented testing support. See the full list of tests.",
  },
  {
    path: "/about",
    title: "About Us",
    description:
      "Avani Ecocare Labs is a testing and technical services organization in Greater Noida supporting product development, quality control and failure investigation.",
  },
  {
    path: "/faq",
    title: "Frequently Asked Questions",
    description:
      "Answers on materials we test, standards we follow, BIS-related testing, sending samples and turnaround at Avani Ecocare Labs.",
  },
  {
    path: "/contact",
    title: "Contact & Request a Quote",
    description:
      "Request a testing quote from Avani Ecocare Labs, Greater Noida. Call or WhatsApp +91 99108 52911, Monday to Saturday, 9 am – 6 pm.",
  },
];

const servicePages = services.map((s) => ({
  path: `/services/${s.slug}`,
  title: s.name,
  description: `${s.summary} Tests include ${s.tests
    .slice(0, 4)
    .map((t) => t.toLowerCase())
    .join(", ")} and more.`,
}));

export const pages = [...staticPages, ...servicePages];

export const getPageMeta = (path) => pages.find((p) => p.path === path);

export const formatTitle = (title) =>
  title.startsWith("Avani Ecocare Labs") ? title : `${title} | Avani Ecocare Labs`;

// Canonical URLs use a trailing slash because each route is emitted as
// <route>/index.html, which static hosts serve at "/route/".
export const canonicalPath = (path) => (path === "/" ? "/" : `${path}/`);
