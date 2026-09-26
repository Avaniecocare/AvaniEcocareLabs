import { FaWhatsapp } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import PageHeader from "../components/ui/PageHeader";
import Accordion from "../components/ui/Accordion";
import Button from "../components/ui/Button";
import JsonLd from "../components/JsonLd";
import { faqs } from "../content/faq.js";
import { contact } from "../content/site.js";
import { telHref, whatsappHref } from "../lib/contact.js";
import { useSeo } from "../lib/useSeo.js";
import styles from "./Faq.module.css";

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function Faq() {
  useSeo({ path: "/faq" });

  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: "FAQ" }]}
        eyebrow="FAQ"
        title="Frequently asked questions"
        intro="Materials, standards, samples and turnaround — the questions we're asked most often."
      />
      <section className="section">
        <div className={`container ${styles.layout}`}>
          <Accordion items={faqs} defaultOpen={0} />
          <aside className={styles.help} aria-labelledby="faq-help">
            <h2 id="faq-help" className={styles.helpTitle}>
              Still have a question?
            </h2>
            <p>Talk to our team, Monday to Saturday, 9 am – 6 pm.</p>
            <Button href={telHref} icon={LuPhone} iconPosition="start" block>
              Call {contact.phoneDisplay}
            </Button>
            <Button
              href={whatsappHref("Hello, I have a question about your testing services.")}
              external
              variant="secondary"
              icon={FaWhatsapp}
              iconPosition="start"
              block
            >
              Ask on WhatsApp
            </Button>
          </aside>
        </div>
      </section>
      <JsonLd data={schema} />
    </>
  );
}
