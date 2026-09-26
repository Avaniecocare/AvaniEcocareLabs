import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import mark96 from "../../assets/brand/logo-mark-96.webp";
import mark192 from "../../assets/brand/logo-mark-192.webp";
import styles from "./Logo.module.css";

// Source artwork is 1590 × 1414; width/height keep the aspect ratio reserved.
const RATIO = 1414 / 1590;

export function LogoMark({ size = 40, className = "" }) {
  return (
    <img
      src={mark96}
      srcSet={`${mark96} 96w, ${mark192} 192w`}
      sizes={`${size}px`}
      width={size}
      height={Math.round(size * RATIO)}
      alt=""
      className={className}
      decoding="async"
    />
  );
}

LogoMark.propTypes = {
  size: PropTypes.number,
  className: PropTypes.string,
};

/** Mark + wordmark, linked to the home page. */
export default function Logo({ tone = "default", onClick }) {
  return (
    <Link
      to="/"
      className={`${styles.logo} ${tone === "inverse" ? styles.inverse : ""}`}
      aria-label="Avani Ecocare Labs — home"
      onClick={onClick}
    >
      <LogoMark size={40} className={styles.mark} />
      <span className={styles.wordmark} aria-hidden="true">
        <span className={styles.name}>Avani Ecocare</span>
        <span className={styles.labs}>Labs</span>
      </span>
    </Link>
  );
}

Logo.propTypes = {
  tone: PropTypes.oneOf(["default", "inverse"]),
  onClick: PropTypes.func,
};
