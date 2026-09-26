import PropTypes from "prop-types";
import { LuArrowRight, LuPhone } from "react-icons/lu";
import Button from "../ui/Button";
import { contact } from "../../content/site.js";
import { telHref } from "../../lib/contact.js";
import styles from "./CtaBand.module.css";

export default function CtaBand({
  title = "Have a product or material that needs testing?",
  text = "Tell us what it is and the standard you are working to. We'll recommend the tests and send you a quotation.",
}) {
  return (
    <section className={styles.wrap} aria-labelledby="cta-title">
      <div className="container">
        <div className={styles.band}>
          <div className={styles.text}>
            <h2 id="cta-title">{title}</h2>
            <p>{text}</p>
          </div>
          <div className={styles.actions}>
            <Button to="/contact#quote" variant="inverse" size="lg" icon={LuArrowRight}>
              Request a quote
            </Button>
            <a href={telHref} className={styles.phone}>
              <LuPhone aria-hidden="true" /> {contact.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

CtaBand.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};
