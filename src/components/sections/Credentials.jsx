import SectionHeader from "../ui/SectionHeader";
import ContentPlaceholder from "../ui/ContentPlaceholder";
import { credentials } from "../../content/site.js";
import nabl from "../../assets/credentials/nabl.webp";
import iso17025 from "../../assets/credentials/iso-17025.webp";
import bis from "../../assets/credentials/bis.webp";
import styles from "./Credentials.module.css";

const logos = { nabl, "iso-17025": iso17025, bis };

/**
 * Shows only credentials marked `confirmed` in content/site.js. With none
 * confirmed, the section is omitted in production and flagged in development.
 */
export default function Credentials() {
  const confirmed = credentials.filter((c) => c.confirmed);

  if (confirmed.length === 0) {
    if (!import.meta.env.DEV) return null;
    return (
      <section className="section">
        <div className="container">
          <ContentPlaceholder
            title="Accreditations & certificates"
            needs="Confirm which accreditations are current (NABL / ISO/IEC 17025 / BIS were claimed on the old site), with certificate numbers and scope, then set confirmed: true in src/content/site.js."
          />
        </div>
      </section>
    );
  }

  return (
    <section className="section section-muted" aria-labelledby="credentials-title">
      <div className="container">
        <SectionHeader id="credentials-title" eyebrow="Credentials" title="Accreditations" />
        <ul role="list" className={styles.grid}>
          {confirmed.map((c) => (
            <li key={c.id} className={styles.card}>
              <img src={logos[c.id]} alt={`${c.name} logo`} height="80" loading="lazy" />
              <div>
                <p className={styles.name}>{c.name}</p>
                <p className={styles.detail}>{c.detail}</p>
                {c.certificateNo && (
                  <p className={`mono ${styles.cert}`}>Certificate {c.certificateNo}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
