import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { LuArrowRight } from "react-icons/lu";
import Chip from "../ui/Chip";
import { serviceIcons } from "./serviceIcons.js";
import styles from "./ServiceCard.module.css";

export default function ServiceCard({ service, index }) {
  const Icon = serviceIcons[service.slug];
  return (
    <article className={styles.card}>
      <div className={styles.top}>
        <span className={styles.icon} aria-hidden="true">
          <Icon />
        </span>
        <span className={styles.index} aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className={styles.title}>
        <Link to={`/services/${service.slug}`} className={styles.link}>
          {service.name}
        </Link>
      </h3>
      <p className={styles.summary}>{service.summary}</p>
      <ul role="list" className={styles.chips} aria-label="Example tests">
        {service.tests.slice(0, 3).map((t) => (
          <li key={t}>
            <Chip>{t}</Chip>
          </li>
        ))}
      </ul>
      <p className={styles.more} aria-hidden="true">
        View all {service.tests.length} tests <LuArrowRight />
      </p>
    </article>
  );
}

ServiceCard.propTypes = {
  service: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    tests: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
