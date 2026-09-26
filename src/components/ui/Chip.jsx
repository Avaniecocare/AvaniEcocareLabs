import PropTypes from "prop-types";
import styles from "./Chip.module.css";

/** Compact label for test names, standards and categories. */
export default function Chip({ children, tone = "default" }) {
  return <span className={`${styles.chip} ${styles[tone]}`}>{children}</span>;
}

Chip.propTypes = {
  children: PropTypes.node.isRequired,
  tone: PropTypes.oneOf(["default", "brand"]),
};
