import PageHeader from "../components/ui/PageHeader";
import SectionHeader from "../components/ui/SectionHeader";
import ContentPlaceholder from "../components/ui/ContentPlaceholder";
import Credentials from "../components/sections/Credentials";
import CtaBand from "../components/sections/CtaBand";
import { company, contact } from "../content/site.js";
import { useCases } from "../content/services.js";
import { telHref } from "../lib/contact.js";
import { useSeo } from "../lib/useSeo.js";
import hardnessPhoto from "../assets/photos/metal-hardness-test.webp";
import styles from "./About.module.css";

const approach = [
  {
    title: "Technical expertise",
    text: "Our team includes specialists with Master's degrees in Plastic Technology and Metallurgy, with hands-on industry experience.",
  },
  {
    title: "Root-cause thinking",
    text: "A research-oriented approach to failure investigation, material optimization and troubleshooting.",
  },
  {
    title: "New product development support",
    text: "Testing support for new products from concept to launch, covering performance, compliance and quality.",
  },
  {
    title: "Clear, traceable reporting",
    text: "Reports that set out the method, results and findings, so you can act on them or share them with your customer.",
  },
];

export default function About() {
  useSeo({ path: "/about" });
  const { address } = contact;

  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: "About" }]}
        eyebrow="About us"
        title="Test. Research. Innovate."
        intro={company.summary}
      />

      <section className="section" aria-labelledby="who-title">
        <div className={`container ${styles.split}`}>
          <div className={styles.prose}>
            <h2 id="who-title">Who we are</h2>
            <p>
              {company.legalName} is a testing and technical services organization providing
              chemical, physical and mechanical testing solutions for manufacturers, suppliers, OEMs
              and industries.
            </p>
            <p>
              Our testing covers a wide range of polymers and plastics, rubber, metals and alloys,
              plywood and wood-based products, tiles and building materials, utensils and other
              engineering materials.
            </p>
            <p>
              Whether you are developing a new product, troubleshooting a material problem or
              checking incoming raw material, we help you choose the right tests and deliver results
              you can rely on.
            </p>
            <ul role="list" className={styles.useCases} aria-label="What we support">
              {useCases.map((u) => (
                <li key={u}>{u}</li>
              ))}
            </ul>
          </div>
          <figure className={styles.photo}>
            {/* TODO(content): replace with a photo of the Avani Ecocare lab or team. */}
            <img
              src={hardnessPhoto}
              alt="Hardness tester indenting a metal specimen"
              width="960"
              height="710"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </section>

      <section className="section section-muted" aria-labelledby="approach-title">
        <div className="container">
          <SectionHeader id="approach-title" eyebrow="Our approach" title="How we work with you" />
          <ul role="list" className={styles.approach}>
            {approach.map((a) => (
              <li key={a.title}>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="details-title">
        <div className={`container ${styles.split}`}>
          <div className={styles.prose}>
            <h2 id="details-title">Company details</h2>
            <p>Contact us for quotations, test selection or sample submission.</p>
          </div>
          <dl className={styles.details}>
            <div>
              <dt>Registered name</dt>
              <dd>{company.legalName}</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>
                {address.locality}, {address.region} {address.postalCode}, {address.country}
              </dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>
                <a href={telHref}>{contact.phoneDisplay}</a>
              </dd>
            </div>
            <div>
              <dt>Working hours</dt>
              <dd>{contact.hours.label}</dd>
            </div>
          </dl>
        </div>
      </section>

      <Credentials />

      {import.meta.env.DEV && (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <ContentPlaceholder
              title="Lab & equipment photos"
              needs="3–6 real photos of the laboratory, instruments and team (landscape, at least 1600px wide). The current About photo is a stock image."
            />
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
