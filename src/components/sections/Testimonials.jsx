import ContentPlaceholder from "../ui/ContentPlaceholder";

/**
 * No client testimonials have been supplied yet, and we don't publish invented
 * ones. This slot is visible in development only. When real, attributable
 * quotes are available, render them here.
 */
export default function Testimonials() {
  if (!import.meta.env.DEV) return null;
  return (
    <section className="section">
      <div className="container">
        <ContentPlaceholder
          title="Client testimonials"
          needs="2–3 real quotes with the client's name, role and company (and their permission to publish)."
        />
      </div>
    </section>
  );
}
