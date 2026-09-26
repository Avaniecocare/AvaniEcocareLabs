import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { LuArrowRight, LuPhone } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import PageHeader from "../components/ui/PageHeader";
import Button from "../components/ui/Button";
import CtaBand from "../components/sections/CtaBand";
import { serviceIcons } from "../components/sections/serviceIcons.js";
import { getService, services } from "../content/services.js";
import { contact } from "../content/site.js";
import { telHref, whatsappHref } from "../lib/contact.js";
import { useSeo } from "../lib/useSeo.js";
import NotFound from "./NotFound";
import styles from "./ServiceDetail.module.css";

function ServiceDetailContent({ service }) {
  useSeo({ path: `/services/${service.slug}` });
  const Icon = serviceIcons[service.slug];
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: "Services", to: "/services" }, { label: service.name }]}
        eyebrow={
          <span className={styles.eyebrow}>
            <Icon aria-hidden="true" /> {service.shortName}
          </span>
        }
        title={service.name}
        intro={service.summary}
      />

      <section className="section">
        <div className={`container ${styles.layout}`}>
          <div className={styles.main}>
            <h2 className={styles.h2}>Tests we carry out</h2>
            <ol role="list" className={styles.tests}>
              {service.tests.map((test, i) => (
                <li key={test}>
                  <span className={styles.testNo} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{test}</span>
                </li>
              ))}
            </ol>
            {service.note && <p className={styles.note}>{service.note}</p>}

            <h2 className={styles.h2}>Standards and methods</h2>
            <p className={styles.body}>
              Testing is carried out against the applicable IS/BIS, ASTM, ISO or customer-specified
              method, depending on the product and test requirement. Not sure which applies? We
              offer technical consultation on test selection and the relevant standards.
            </p>
          </div>

          <aside className={styles.aside} aria-labelledby="quote-card-title">
            <div className={styles.card}>
              <h2 id="quote-card-title" className={styles.cardTitle}>
                Get a quote for {service.shortName.toLowerCase()} testing
              </h2>
              <p className={styles.cardText}>
                Share the product, the tests or standard you need and the number of samples.
              </p>
              <Button to={`/contact?service=${service.slug}#quote`} block icon={LuArrowRight}>
                Request a quote
              </Button>
              <Button
                href={whatsappHref(`Hello, I would like a quote for ${service.name.toLowerCase()}.`)}
                external
                variant="secondary"
                icon={FaWhatsapp}
                iconPosition="start"
                block
              >
                WhatsApp us
              </Button>
              <a href={telHref} className={styles.phone}>
                <LuPhone aria-hidden="true" /> {contact.phoneDisplay}
              </a>
            </div>

            <nav aria-labelledby="other-services" className={styles.others}>
              <h2 id="other-services" className={styles.othersTitle}>
                Other services
              </h2>
              <ul role="list">
                {others.map((s) => (
                  <li key={s.slug}>
                    <Link to={`/services/${s.slug}`}>{s.name}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      </section>

      <CtaBand
        title={`Need ${service.shortName.toLowerCase()} tested to a specific standard?`}
        text="Send us the IS, ASTM or ISO number — or your own specification — and we'll confirm the test plan."
      />
    </>
  );
}

ServiceDetailContent.propTypes = {
  service: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    shortName: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    tests: PropTypes.arrayOf(PropTypes.string).isRequired,
    note: PropTypes.string,
  }).isRequired,
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getService(slug);
  if (!service) return <NotFound />;
  return <ServiceDetailContent key={service.slug} service={service} />;
}
