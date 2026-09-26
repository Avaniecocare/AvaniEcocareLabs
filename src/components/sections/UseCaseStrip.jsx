import { standards, useCases } from "../../content/services.js";
import styles from "./UseCaseStrip.module.css";

/** Credibility band under the hero: what testing is used for, and the standards applied. */
export default function UseCaseStrip() {
  return (
    <section className={styles.strip} aria-label="What we support">
      <div className={`container ${styles.inner}`}>
        <div className={styles.group}>
          <p className={styles.label}>Testing for</p>
          <ul role="list" className={styles.list}>
            {useCases.map((u) => (
              <li key={u}>{u}</li>
            ))}
          </ul>
        </div>
        <div className={styles.group}>
          <p className={styles.label}>Standards</p>
          <ul role="list" className={styles.list}>
            {standards.map((s) => (
              <li key={s.code}>
                <abbr title={s.name} className={styles.code}>
                  {s.code}
                </abbr>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
