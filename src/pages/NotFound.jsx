import { Link } from "react-router-dom";
import { LuArrowRight } from "react-icons/lu";
import Button from "../components/ui/Button";
import { LogoMark } from "../components/ui/Logo";
import { services } from "../content/services.js";
import { useSeo } from "../lib/useSeo.js";
import styles from "./NotFound.module.css";

export default function NotFound() {
  useSeo({
    title: "Page not found",
    description: "The page you're looking for doesn't exist or has moved.",
    noindex: true,
  });

  return (
    <section className={`section ${styles.wrap}`}>
      <div className={`container container-narrow ${styles.inner}`}>
        <LogoMark size={72} className={styles.mark} />
        <p className={styles.code}>Error 404</p>
        <h1>We couldn&apos;t find that page</h1>
        <p className="lead">
          The link may be out of date, or the page may have moved. Try one of these instead.
        </p>
        <div className={styles.actions}>
          <Button to="/" icon={LuArrowRight}>
            Go to the home page
          </Button>
          <Button to="/contact" variant="secondary">
            Contact us
          </Button>
        </div>
        <nav aria-labelledby="nf-services" className={styles.links}>
          <h2 id="nf-services" className={styles.linksTitle}>
            Testing services
          </h2>
          <ul role="list">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`}>{s.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
