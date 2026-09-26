import PropTypes from "prop-types";
import Eyebrow from "./Eyebrow";
import styles from "./SectionHeader.module.css";

export default function SectionHeader({ eyebrow, title, intro, align = "start", action, id }) {
  return (
    <div className={`${styles.header} ${align === "center" ? styles.center : ""}`}>
      <div className={styles.text}>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h2 id={id}>{title}</h2>
        {intro && <p className="lead">{intro}</p>}
      </div>
      {action && <div className={styles.action}>{action}</div>}
    </div>
  );
}

SectionHeader.propTypes = {
  eyebrow: PropTypes.node,
  title: PropTypes.node.isRequired,
  intro: PropTypes.node,
  align: PropTypes.oneOf(["start", "center"]),
  action: PropTypes.node,
  id: PropTypes.string,
};
