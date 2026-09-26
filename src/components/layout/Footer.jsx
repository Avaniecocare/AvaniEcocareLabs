import { Link } from "react-router-dom";
import { LuClock, LuMapPin, LuPhone } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import Logo from "../ui/Logo";
import { company, contact, nav } from "../../content/site.js";
import { services } from "../../content/services.js";
import { telHref, whatsappHref } from "../../lib/contact.js";
import styles from "./Footer.module.css";

export default function Footer() {
  const { address } = contact;
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <Logo tone="inverse" />
          <p className={styles.tagline} aria-label={company.tagline.join(", ")}>
            {company.tagline.map((word, i) => (
              <span key={word} className={styles.taglineWord} data-node={i}>
                {word}
              </span>
            ))}
          </p>
          <p className={styles.summary}>{company.summary}</p>
        </div>

        <nav aria-labelledby="footer-services" className={styles.col}>
          <h2 id="footer-services" className={styles.heading}>
            Services
          </h2>
          <ul role="list">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`}>{s.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-labelledby="footer-company" className={styles.col}>
          <h2 id="footer-company" className={styles.heading}>
            Company
          </h2>
          <ul role="list">
            <li>
              <Link to="/">Home</Link>
            </li>
            {nav.map(({ to, label }) => (
              <li key={to}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.col}>
          <h2 className={styles.heading}>Contact</h2>
          <address className={styles.contact}>
            <p>
              <LuMapPin aria-hidden="true" />
              <span>
                {address.locality}, {address.region} {address.postalCode}, {address.country}
              </span>
            </p>
            <p>
              <LuPhone aria-hidden="true" />
              <a href={telHref}>{contact.phoneDisplay}</a>
            </p>
            <p>
              <FaWhatsapp aria-hidden="true" />
              <a href={whatsappHref()} target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </a>
            </p>
            {contact.email && (
              <p>
                <span aria-hidden="true">@</span>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </p>
            )}
            <p>
              <LuClock aria-hidden="true" />
              <span>{contact.hours.label}</span>
            </p>
          </address>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>
          © {new Date().getFullYear()} {company.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
