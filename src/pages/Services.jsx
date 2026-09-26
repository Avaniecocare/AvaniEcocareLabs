import PageHeader from "../components/ui/PageHeader";
import SectionHeader from "../components/ui/SectionHeader";
import ServiceGrid from "../components/sections/ServiceGrid";
import BisSection from "../components/sections/BisSection";
import Process from "../components/sections/Process";
import CtaBand from "../components/sections/CtaBand";
import { standards } from "../content/services.js";
import { useSeo } from "../lib/useSeo.js";
import styles from "./Services.module.css";

export default function Services() {
  useSeo({ path: "/services" });

  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: "Services" }]}
        eyebrow="Testing services"
        title="Chemical, physical and mechanical testing"
        intro="Testing and characterization for product development, quality control, material characterization, failure investigation and compliance requirements."
      />

      <section className="section" aria-label="Service categories">
        <div className="container">
          <ServiceGrid />
        </div>
      </section>

      <BisSection />

      <section className="section" aria-labelledby="standards-title">
        <div className="container">
          <SectionHeader
            id="standards-title"
            eyebrow="Standards"
            title="Tested to the method your product requires"
            intro="Depending on the product and test requirement, we follow the applicable standard or your own specification."
          />
          <ul role="list" className={styles.standards}>
            {standards.map((s) => (
              <li key={s.code} className={styles.standard}>
                <span className={styles.code}>{s.code}</span>
                <span className={styles.name}>{s.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Process />
      <CtaBand />
    </>
  );
}
