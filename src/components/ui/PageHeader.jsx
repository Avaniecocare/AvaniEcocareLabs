import PropTypes from "prop-types";
import Breadcrumbs from "./Breadcrumbs";
import Eyebrow from "./Eyebrow";
import styles from "./PageHeader.module.css";

/** Top-of-page intro used by every inner page. */
export default function PageHeader({ breadcrumbs, eyebrow, title, intro, children }) {
  return (
    <header className={styles.header}>
      <div className="container">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
        <div className={styles.body}>
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1>{title}</h1>
          {intro && <p className={`lead ${styles.intro}`}>{intro}</p>}
          {children}
        </div>
      </div>
    </header>
  );
}

PageHeader.propTypes = {
  breadcrumbs: PropTypes.array,
  eyebrow: PropTypes.node,
  title: PropTypes.node.isRequired,
  intro: PropTypes.node,
  children: PropTypes.node,
};
