import styles from "./PageLoader.module.css";

/** Suspense fallback while a route chunk loads. */
export default function PageLoader() {
  return (
    <div className={styles.wrap} role="status" aria-live="polite">
      <span className={styles.nodes} aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
      <span className="visually-hidden">Loading page…</span>
    </div>
  );
}
