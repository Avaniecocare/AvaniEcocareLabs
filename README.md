# Avani Ecocare Labs — Website

Marketing site for **Avani Ecocare Labs Pvt. Ltd.**, a chemical, physical and mechanical testing laboratory in Greater Noida. React 18 + Vite, CSS Modules with design tokens, deployed to GitHub Pages at [avaniecocare.com](https://avaniecocare.com).

## Scripts

```bash
npm install
npm run dev      # http://localhost:5173 — shows "Content needed" placeholders
npm run lint
npm run build    # dist/ — per-route HTML, sitemap.xml, 404.html
npm run preview  # serve the production build
```

Pushing to `main` deploys via `.github/workflows/deploy.yml`.

## Where things live

```
src/
  content/          Business facts — edit these, not the components
    site.js         Company, phone, address, hours, nav, credentials (accreditation toggle)
    services.js     Six service categories + test lists, BIS categories, standards, process, reasons
    faq.js          FAQ questions and answers
    pages.js        Per-route <title> / description (used at runtime AND at build time)
  lib/              useSeo (head tags), contact helpers (tel/WhatsApp links, open-now check)
  styles/           tokens.css (colours, type, spacing), base.css (reset, utilities)
  components/
    layout/         Header (+ mobile menu), Footer, Layout, FloatingWhatsApp
    ui/             Button, Logo, Eyebrow, SectionHeader, PageHeader, Breadcrumbs, Chip,
                    Alert, Accordion, PageLoader, ContentPlaceholder
    sections/       Hero, CapabilityDiagram, UseCaseStrip, ServiceCard/Grid, BisSection,
                    WhyUs, Process, FaqSection, CtaBand, Credentials, Testimonials
    forms/          QuoteForm, Field
  pages/            Home, Services, ServiceDetail, About, Faq, Contact, NotFound
```

## Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/services` | All services, BIS support, standards |
| `/services/:slug` | One page per category (generated from `services.js`) |
| `/about` | Company, approach, company details |
| `/faq` | FAQ (+ FAQPage structured data) |
| `/contact` | Quote form + direct contact. `?service=<slug>` preselects a category |
| `/service` | Old URL — redirects to `/services` |

## Common edits

- **Add or change a test / service**: edit `src/content/services.js`. Cards, detail pages, footer links, the sitemap and the per-route HTML all update from it. New slugs also need an icon in `components/sections/serviceIcons.js`.
- **Show accreditations**: in `src/content/site.js`, set `confirmed: true` (and `certificateNo`) on a credential. The section stays hidden until at least one credential is confirmed.
- **Add an email address**: set `contact.email` in `site.js`; it appears in the footer and on the contact page.
- **Testimonials**: `components/sections/Testimonials.jsx` is a development-only placeholder. Replace it with real, attributable quotes.

## Brand

- Logo: `src/assets/brand/logo-mark-{96,192}.webp` (transparent, from the Sept 2026 artwork). Favicons and app icons live in `public/`. Keep the 1590:1414 aspect ratio.
- Colours come from the logo: green `#116d44` (primary), bright green `#00a85a`, orange `#f58634` and grey `#97989a` (used only as small accents). All tokens are in `src/styles/tokens.css`.
- Type: IBM Plex Sans (text) and IBM Plex Mono (labels, test indices), self-hosted via `@fontsource`.

## Quote form

There is no backend. `QuoteForm` validates the enquiry and opens WhatsApp (`wa.me/919910852911`) with a structured message already filled in. The website stores nothing and holds no keys or secrets.

## SEO build step

`vite.config.js` includes a small plugin. After the build, it writes `dist/<route>/index.html` for every route, each with its own title, description and canonical URL. It also writes `sitemap.xml`, a redirect page for `/service` and a `404.html` SPA fallback. Deep links therefore return 200 on GitHub Pages, and link previews work without JavaScript.
