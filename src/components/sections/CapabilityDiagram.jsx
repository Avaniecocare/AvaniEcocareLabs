import PropTypes from "prop-types";
import { disciplines } from "../../content/services.js";
import styles from "./CapabilityDiagram.module.css";

// Node geometry echoes the logo: green at the top, orange bottom-left, grey bottom-right,
// with the green node's bond running out to the edge like the stroke into the "a".
const nodes = {
  chemical: { cx: 250, cy: 70, r: 26, fill: "var(--brand-500)" },
  mechanical: { cx: 90, cy: 210, r: 30, fill: "var(--accent-orange)" },
  physical: { cx: 310, cy: 210, r: 26, fill: "var(--accent-grey)" },
};

function DisciplineCard({ discipline, className = "" }) {
  return (
    <div className={`${styles.card} ${className}`}>
      <p className={styles.cardLabel} data-color={discipline.color}>
        {discipline.label}
      </p>
      <ul role="list" className={styles.examples}>
        {discipline.examples.map((ex) => (
          <li key={ex}>{ex}</li>
        ))}
      </ul>
    </div>
  );
}

DisciplineCard.propTypes = {
  discipline: PropTypes.shape({
    label: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    examples: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  className: PropTypes.string,
};

export default function CapabilityDiagram() {
  const [chemical, mechanical, physical] = disciplines;
  const { chemical: c, mechanical: m, physical: p } = nodes;

  return (
    <figure className={styles.figure}>
      <div className={styles.stage}>
        <svg viewBox="0 0 400 260" className={styles.svg} aria-hidden="true" focusable="false">
          <g stroke="var(--accent-grey-ink)" strokeWidth="7" strokeLinecap="round">
            <line x1={c.cx} y1={c.cy} x2="400" y2="0" />
            <line x1={c.cx} y1={c.cy} x2={m.cx} y2={m.cy} />
            <line x1={c.cx} y1={c.cy} x2={p.cx} y2={p.cy} />
            <line x1={m.cx} y1={m.cy} x2={p.cx} y2={p.cy} />
          </g>
          {Object.entries(nodes).map(([id, n]) => (
            <circle key={id} {...n} />
          ))}
        </svg>
        <DisciplineCard discipline={chemical} className={styles.cardTop} />
      </div>
      <div className={styles.bottomRow}>
        <DisciplineCard discipline={mechanical} />
        <DisciplineCard discipline={physical} />
      </div>
      <figcaption className={styles.caption}>
        Chemical, physical and mechanical testing under one roof
      </figcaption>
    </figure>
  );
}
