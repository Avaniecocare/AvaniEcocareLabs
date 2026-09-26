import SectionHeader from "../ui/SectionHeader";
import { process } from "../../content/services.js";
import styles from "./Process.module.css";

export default function Process() {
  return (
    <section className="section section-muted" aria-labelledby="process-title">
      <div className="container">
        <SectionHeader
          id="process-title"
          eyebrow="How it works"
          title="From requirement to report in four steps"
        />
        <ol role="list" className={styles.steps}>
          {process.map((step, i) => (
            <li key={step.title} className={styles.step}>
              <span className={styles.marker} aria-hidden="true">
                {i + 1}
              </span>
              <div className={styles.body}>
                <h3 className={styles.title}>{step.title}</h3>
                <p className={styles.text}>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
