import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { LuChevronRight } from "react-icons/lu";
import JsonLd from "../JsonLd";
import { SITE_URL } from "../../content/site.js";
import { canonicalPath } from "../../content/pages.js";
import styles from "./Breadcrumbs.module.css";

/** items: [{ label, to? }] — the last item is the current page. */
export default function Breadcrumbs({ items }) {
  const trail = [{ label: "Home", to: "/" }, ...items];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.to && { item: `${SITE_URL}${canonicalPath(item.to)}` }),
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className={styles.nav}>
      <ol role="list" className={styles.list}>
        {trail.map((item, i) => {
          const isLast = i === trail.length - 1;
          return (
            <li key={item.label} className={styles.item}>
              {isLast || !item.to ? (
                <span aria-current={isLast ? "page" : undefined}>{item.label}</span>
              ) : (
                <>
                  <Link to={item.to}>{item.label}</Link>
                  <LuChevronRight aria-hidden="true" className={styles.sep} />
                </>
              )}
            </li>
          );
        })}
      </ol>
      <JsonLd data={schema} />
    </nav>
  );
}

Breadcrumbs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string.isRequired, to: PropTypes.string })
  ).isRequired,
};
