import PropTypes from "prop-types";
import { useId, useState } from "react";
import { LuChevronDown } from "react-icons/lu";
import styles from "./Accordion.module.css";

/** Disclosure list: each question is a button controlling its answer region. */
export default function Accordion({ items, defaultOpen = null }) {
  const [open, setOpen] = useState(defaultOpen);
  const baseId = useId();

  return (
    <div className={styles.list}>
      {items.map(({ q, a }, i) => {
        const isOpen = open === i;
        const buttonId = `${baseId}-q${i}`;
        const panelId = `${baseId}-a${i}`;
        return (
          <div key={q} className={`${styles.item} ${isOpen ? styles.open : ""}`}>
            <h3 className={styles.heading}>
              <button
                id={buttonId}
                type="button"
                className={styles.trigger}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span>{q}</span>
                <LuChevronDown aria-hidden="true" className={styles.chevron} />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={styles.panel}
              hidden={!isOpen}
            >
              <p>{a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ q: PropTypes.string.isRequired, a: PropTypes.string.isRequired })
  ).isRequired,
  defaultOpen: PropTypes.number,
};
