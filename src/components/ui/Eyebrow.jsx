import PropTypes from "prop-types";
import styles from "./Eyebrow.module.css";

/** Small uppercase label preceded by the logo's three-node motif. */
export default function Eyebrow({ children, tone = "default", as: Tag = "p" }) {
  return (
    <Tag className={`${styles.eyebrow} ${tone === "inverse" ? styles.inverse : ""}`}>
      <span className={styles.nodes} aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
      {children}
    </Tag>
  );
}

Eyebrow.propTypes = {
  children: PropTypes.node.isRequired,
  tone: PropTypes.oneOf(["default", "inverse"]),
  as: PropTypes.elementType,
};
