import SectionHeader from "../ui/SectionHeader";
import { reasons } from "../../content/services.js";
import styles from "./WhyUs.module.css";

export default function WhyUs() {
  return (
    <section className="section" aria-labelledby="why-title">
      <div className="container">
        <SectionHeader
          id="why-title"
          eyebrow="Why Avani Ecocare Labs"
          title="Reliable, traceable and technically sound results"
          intro="What you can expect when you send us a sample."
        />
        <ol role="list" className={styles.grid}>
          {reasons.map((r, i) => (
            <li key={r.title} className={styles.item}>
              <span className={styles.num} aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className={styles.title}>{r.title}</h3>
              <p className={styles.text}>{r.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
