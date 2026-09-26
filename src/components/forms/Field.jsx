import PropTypes from "prop-types";
import styles from "./Field.module.css";

/** Label + control + hint/error, wired up with aria-describedby / aria-invalid. */
export default function Field({ id, label, optional, hint, error, as = "input", children, ...controlProps }) {
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;
  const Control = as;

  return (
    <div className={`${styles.field} ${error ? styles.invalid : ""}`}>
      <label htmlFor={id} className={styles.label}>
        {label}
        {optional && <span className={styles.optional}> (optional)</span>}
      </label>
      {hint && (
        <p id={hintId} className={styles.hint}>
          {hint}
        </p>
      )}
      <Control
        id={id}
        name={id}
        className={styles.control}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        {...controlProps}
      >
        {children}
      </Control>
      {error && (
        <p id={errorId} className={styles.error}>
          {error}
        </p>
      )}
    </div>
  );
}

Field.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  optional: PropTypes.bool,
  hint: PropTypes.string,
  error: PropTypes.string,
  as: PropTypes.oneOf(["input", "textarea", "select"]),
  children: PropTypes.node,
};
