import { LuArrowRight } from "react-icons/lu";
import Accordion from "../ui/Accordion";
import Button from "../ui/Button";
import Eyebrow from "../ui/Eyebrow";
import { faqs } from "../../content/faq.js";
import { contact } from "../../content/site.js";
import { telHref } from "../../lib/contact.js";
import styles from "./FaqSection.module.css";

/** Home-page FAQ preview; the full list lives on /faq. */
export default function FaqSection() {
  return (
    <section className="section" aria-labelledby="faq-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.aside}>
          <Eyebrow>FAQ</Eyebrow>
          <h2 id="faq-title" className={styles.title}>
            Common questions
          </h2>
          <p className={styles.help}>
            Can&apos;t find your answer? Call us on <a href={telHref}>{contact.phoneDisplay}</a>.
          </p>
          <div>
            <Button to="/faq" variant="ghost" icon={LuArrowRight}>
              See all questions
            </Button>
          </div>
        </div>
        <Accordion items={faqs.slice(0, 4)} />
      </div>
    </section>
  );
}
