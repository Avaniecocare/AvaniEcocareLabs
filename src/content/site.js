// Company facts shared by the app, the SEO layer and the build-time HTML generator.
// Keep this file free of JSX and asset imports so vite.config.js can import it.

export const SITE_URL = "https://avaniecocare.com";

export const company = {
  legalName: "Avani Ecocare Labs Pvt. Ltd.",
  shortName: "Avani Ecocare Labs",
  tagline: ["Test", "Research", "Innovate"],
  summary:
    "A testing and technical services laboratory providing chemical, physical and mechanical testing for manufacturers, suppliers and OEMs.",
};

export const contact = {
  phoneE164: "919910852911",
  phoneDisplay: "+91 99108 52911",
  whatsappGreeting: "Hello, I would like to enquire about testing services.",
  address: {
    locality: "Greater Noida",
    region: "Uttar Pradesh",
    postalCode: "201310",
    country: "India",
    countryCode: "IN",
  },
  // TODO(content): replace with the lab's exact street address / Google Maps place link.
  mapsUrl: "https://maps.google.com/?q=Greater+Noida+Uttar+Pradesh+201310",
  hours: {
    label: "Monday – Saturday, 9:00 am – 6:00 pm IST",
    days: [1, 2, 3, 4, 5, 6], // 0 = Sunday
    opens: 9,
    closes: 18,
  },
  // TODO(content): add a business email address once confirmed; it will appear in the footer and contact page.
  email: null,
};

export const nav = [
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

// Accreditations are NOT shown until the business confirms them in writing.
// The previous site claimed ISO/IEC 17025, NABL and BIS approval, but the current
// company brief describes "BIS-oriented" and "standard-based" testing only.
// Set `confirmed: true` (and add certificate numbers) to display a credential.
export const credentials = [
  { id: "nabl", name: "NABL", detail: "ISO/IEC 17025 accreditation", certificateNo: null, confirmed: false },
  { id: "iso-17025", name: "ISO/IEC 17025", detail: "Testing laboratory competence", certificateNo: null, confirmed: false },
  { id: "bis", name: "BIS", detail: "Bureau of Indian Standards recognition", certificateNo: null, confirmed: false },
];
