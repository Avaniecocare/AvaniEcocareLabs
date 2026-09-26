import { LuCheck } from "react-icons/lu";
import Button from "../ui/Button";
import Eyebrow from "../ui/Eyebrow";
import { bisCategories } from "../../content/services.js";
import styles from "./BisSection.module.css";

export default function BisSection() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="bis-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.text}>
          <Eyebrow tone="inverse">BIS-oriented testing</Eyebrow>
          <h2 id="bis-title">Testing support for BIS / IS requirements</h2>
          <p>
            We support testing requirements associated with BIS/IS standards across multiple product
            categories. Each test is carried out against the applicable IS/BIS, ASTM, ISO or
            customer-specified method, depending on the product and what you need to demonstrate.
          </p>
          <div>
            <Button to="/contact#quote" variant="inverse">
              Discuss your BIS requirement
            </Button>
          </div>
        </div>
        <ul role="list" className={styles.list} aria-label="Product categories">
          {bisCategories.map((c) => (
            <li key={c}>
              <LuCheck aria-hidden="true" />
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
