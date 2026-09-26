import { LuArrowRight } from "react-icons/lu";
import Button from "../ui/Button";
import Eyebrow from "../ui/Eyebrow";
import CapabilityDiagram from "./CapabilityDiagram";
import { contact } from "../../content/site.js";
import { telHref, whatsappHref } from "../../lib/contact.js";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.text}>
          <Eyebrow>Materials testing laboratory · Greater Noida</Eyebrow>
          <h1 id="hero-title" className={styles.title}>
            Chemical, physical and mechanical testing for the materials you make
          </h1>
          <p className={`lead ${styles.lead}`}>
            We test plastics, rubber, metals, plywood, tiles and utensils for manufacturers,
            suppliers and OEMs — against IS/BIS, ASTM, ISO or your own specification.
          </p>
          <div className={styles.ctas}>
            <Button to="/contact#quote" size="lg" icon={LuArrowRight}>
              Request a quote
            </Button>
            <Button to="/services" size="lg" variant="secondary">
              Explore services
            </Button>
          </div>
          <p className={styles.contactLine}>
            Prefer to talk? Call <a href={telHref}>{contact.phoneDisplay}</a> or{" "}
            <a href={whatsappHref()} target="_blank" rel="noopener noreferrer">
              message us on WhatsApp
            </a>
            .
          </p>
        </div>
        <div className={styles.visual}>
          <CapabilityDiagram />
        </div>
      </div>
    </section>
  );
}
