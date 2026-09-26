import PropTypes from "prop-types";
import styles from "./ContentPlaceholder.module.css";

/**
 * Marks a slot that is waiting for real business content (testimonials,
 * certificates, lab photos). Rendered only in development so nothing
 * unverified or empty ever reaches the live site.
 */
export default function ContentPlaceholder({ title, needs }) {
  if (!import.meta.env.DEV) return null;
  return (
    <div className={styles.box}>
      <p className={styles.label}>Content needed</p>
      <p className={styles.title}>{title}</p>
      <p className={styles.needs}>{needs}</p>
    </div>
  );
}

ContentPlaceholder.propTypes = {
  title: PropTypes.string.isRequired,
  needs: PropTypes.string.isRequired,
};
