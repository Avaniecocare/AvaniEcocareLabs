# Avani EcoCare Labs — Website

A professional multi-page marketing and service-information website for **Avani EcoCare Labs**, a materials testing laboratory based in Greater Noida, India. Built with **React 18 + Vite + Styled-Components**.

---

## Table of Contents

1. [Tech Stack](#tech-stack)
2. [Project Structure](#project-structure)
3. [Pages](#pages)
4. [Components](#components)
5. [Theme & Design System](#theme--design-system)
6. [Contact Page — Details](#contact-page--details)
7. [Configuration & Environment](#configuration--environment)
8. [Available Scripts](#available-scripts)
9. [Getting Started](#getting-started)
10. [Deployment](#deployment)

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| UI Framework | React | ^18.2.0 |
| Build Tool | Vite | ^5.1.6 |
| Styling | styled-components | ^5.3.5 |
| Routing | react-router-dom | ^6.3.0 |
| Icons | react-icons | ^4.4.0 |
| Email (legacy) | emailjs-com | ^3.2.0 |
| Linting | ESLint + plugins | ^8.57.0 |

---

## Project Structure

```
AvaniEcocareLabs/
├── public/                     # Static assets (favicon, images, etc.)
├── src/
│   ├── assets/                 # Images and media imported by components
│   ├── components/             # Reusable shared components
│   │   ├── AboutHeroSection.jsx
│   │   ├── Footer.jsx
│   │   ├── GoToTop.jsx
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   ├── IndustriesSection.jsx
│   │   ├── Navbar.jsx
│   │   ├── SEO.jsx
│   │   ├── ScrollToTop.jsx
│   │   ├── TeamCertification.jsx
│   │   └── Whatsapp.jsx
│   ├── styles/                 # Additional global or shared style files
│   ├── App.jsx                 # Root component — theme, router, global layout
│   ├── App.css                 # Base app-level CSS reset
│   ├── GlobalStyle.jsx         # styled-components GlobalStyle (fonts, resets)
│   ├── Home.jsx                # Home page
│   ├── AboutPage.jsx           # About page
│   ├── Services.jsx            # Services section (used inside ServicesPage)
│   ├── ServicesPage.jsx        # Full Services page
│   ├── Contact.jsx             # Contact page
│   ├── Error.jsx               # 404 / error page
│   ├── context.jsx             # React Context (app-level state)
│   ├── reducer.jsx             # useReducer reducer function
│   ├── index.css               # Root-level CSS entry
│   └── main.jsx                # ReactDOM entry point
├── index.html                  # HTML shell (Vite entry)
├── vite.config.js              # Vite configuration
├── .eslintrc.cjs               # ESLint configuration
└── package.json
```

---

## Pages

### `/` — Home
- **File:** `src/Home.jsx`
- Renders `HeroSection` and `IndustriesSection`.
- Entry point for first-time visitors.

### `/about` — About
- **File:** `src/AboutPage.jsx`
- Renders `AboutHeroSection` and `TeamCertification`.
- Describes the lab's mission, team, and certifications.

### `/service` — Services
- **File:** `src/ServicesPage.jsx`
- Full catalogue of testing services offered.
- Uses `src/Services.jsx` for the individual service card grid.

### `/contact` — Contact Us
- **File:** `src/Contact.jsx`
- See [Contact Page — Details](#contact-page--details) below.

### `*` — 404 Error
- **File:** `src/Error.jsx`
- Shown for any unmatched route.

---

## Components

### `Header.jsx`
Persistent top navigation bar, wraps `Navbar.jsx`.

### `Navbar.jsx`
Navigation links: **Home**, **About**, **Services**, **Contact**. Responsive with mobile hamburger menu support.

### `Footer.jsx`
Site-wide footer with quick links, contact info, social icons, and copyright.

### `HeroSection.jsx`
Full-screen hero banner for the Home page with headline, subtext, and CTA buttons.

### `AboutHeroSection.jsx`
Hero/intro section for the About page; includes lab highlights and imagery.

### `IndustriesSection.jsx`
Grid of industry segments served (Automotive, Aerospace, Construction, etc.).

### `TeamCertification.jsx`
Displays team credentials and certifications earned by Avani EcoCare Labs.

### `SEO.jsx`
Sets `<title>`, `<meta name="description">`, and `<meta name="keywords">` for each page using `document` APIs. Accepts three props:

| Prop | Type | Description |
|---|---|---|
| `title` | `string` | Page title shown in the browser tab |
| `description` | `string` | Meta description for search engines |
| `keywords` | `string` | Comma-separated keyword string |

### `Whatsapp.jsx`
Floating WhatsApp CTA button fixed to the bottom-right corner of every page. Opens a pre-filled WhatsApp chat with a single click.

### `GoToTop.jsx`
Floating "scroll to top" button that appears after the user scrolls down. Smooth-scrolls back to `y=0`.

### `ScrollToTop.jsx`
Programmatic scroll reset — resets scroll position to top on every client-side route change using `useEffect + useLocation`.

---

## Theme & Design System

The theme object is defined in `src/App.jsx` and passed via `styled-components` `ThemeProvider`.  
Access any token inside styled components with `${({ theme }) => theme.colors.xxx}`.

### Colour Palette

| Token | Value | Usage |
|---|---|---|
| `heading` | `#0d2a30` | Page headings |
| `text` | `#1a3a42` | Body text |
| `bg` | `#f4f8f9` | Page background |
| `btn` | `#1a6b5a` | Primary button background |
| `btnGold` / `gold` | `#c9a84c` | Accent, highlights |
| `goldLight` | `#e8c87a` | Gold gradient end |
| `teal` | `#13505b` | Mid teal |
| `tealDark` | `#0d2a30` | Dark teal (same as heading) |
| `tealLight` | `#1a6b5a` | Light teal (same as btn) |
| `footer_bg` | `#071820` | Footer background |
| `border` | `rgba(26,107,90,0.4)` | Card/input borders |
| `gradient` | teal multi-stop | Primary gradient |
| `gradientGold` | gold multi-stop | Gold gradient |
| `shadow` | `0 4px 20px …` | Standard card shadow |
| `shadowCard` | `0 8px 32px …` | Elevated card shadow |
| `glassBg` | `rgba(255,255,255,0.75)` | Glassmorphism fill |
| `glassBgDark` | `rgba(7,24,32,0.75)` | Dark glassmorphism fill |

### Breakpoints

| Token | Value |
|---|---|
| `mobile` | `768px` |
| `tab` | `998px` |

### Typography
- **Headings:** `Outfit` (Google Fonts), weights 700–800
- **Body / UI:** `Inter` (Google Fonts), weights 400–600

---

## Contact Page — Details

**File:** `src/Contact.jsx`  
**Route:** `/contact`

### Purpose
Provides visitors with multiple ways to reach the lab — no enquiry form is shown. The page is intentionally kept lightweight and direct.

### What It Renders
A centred page header followed by four info cards arranged in a responsive grid.

### Info Cards

| Card | Icon | Content |
|---|---|---|
| Our Laboratory | `FaMapMarkerAlt` | Greater Noida, UP — 201 310 + Google Maps link |
| Call Us | `FaPhone` | `+91 9910852911` (clickable `tel:` link) |
| WhatsApp | `FaWhatsapp` | Opens WhatsApp chat with a pre-filled message |
| Working Hours | `FaClock` | Mon–Sat, 9 AM – 6 PM IST, live "open" indicator |

### Layout Behaviour

| Viewport | Grid |
|---|---|
| Desktop (> 1024 px) | 4 cards in a single row |
| Tablet (601 – 1024 px) | 2 × 2 grid |
| Mobile (≤ 600 px) | 1 column stack |

### Constants (top of file)

```js
const PHONE = "919910852911";          // E.164 format for wa.me / tel: links
const PHONE_DISPLAY = "+91 9910852911"; // Human-readable display
const WA_MESSAGE = encodeURIComponent(
  "Hello! I would like to inquire about your testing services."
);
```
To change the contact number or default WhatsApp message, update these three constants.

### SEO Meta (injected via `<SEO />`)

```
title:       "Contact Us | Request a Quote"
description: "Get in touch with Avani EcoCare Labs in Greater Noida …"
keywords:    "contact avani ecocare, materials testing laboratory address, …"
```

### Styled Components in `Contact.jsx`

| Component | Type | Role |
|---|---|---|
| `Wrapper` | `styled.section` | Outer page padding, header styles, `cards-grid` layout |
| `InfoCard` | `styled.div` | Individual contact info card with hover lift effect |

### Hover Effect
Cards lift `4px` upward (`transform: translateY(-4px)`) with an enhanced gold border tint and deeper shadow on hover.

---

## Configuration & Environment

### `vite.config.js`
Standard Vite + React config using `@vitejs/plugin-react`. No custom aliases or proxies by default.

### `.eslintrc.cjs`
ESLint with:
- `eslint-plugin-react` — React-specific rules
- `eslint-plugin-react-hooks` — Hooks rules
- `eslint-plugin-react-refresh` — Fast Refresh safety checks

---

## Available Scripts

```bash
# Start local dev server (HMR enabled)
npm run dev

# Lint the codebase
npm run lint

# Production build → dist/
npm run build

# Preview the production build locally
npm run preview
```

---

## Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/Avaniecocare/AvaniEcocareLabs.git
cd AvaniEcocareLabs

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will be available at **http://localhost:5173** (default Vite port).

---

## Deployment

Build the production bundle and deploy the `dist/` folder to any static hosting provider (Vercel, Netlify, GitHub Pages, etc.):

```bash
npm run build
# Output: dist/
```

> **Note:** Because the app uses client-side routing (`react-router-dom`), configure your hosting provider to redirect all requests to `index.html`. On Netlify, add a `public/_redirects` file:
> ```
> /*  /index.html  200
> ```

---

*Last updated: June 2026*
