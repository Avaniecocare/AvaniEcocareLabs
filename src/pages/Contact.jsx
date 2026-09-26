import { useSearchParams } from "react-router-dom";
import { LuArrowUpRight, LuClock, LuMapPin, LuPhone } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import PageHeader from "../components/ui/PageHeader";
import QuoteForm from "../components/forms/QuoteForm";
import { getService } from "../content/services.js";
import { contact } from "../content/site.js";
import { isLabOpen, telHref, whatsappHref } from "../lib/contact.js";
import { useSeo } from "../lib/useSeo.js";
import styles from "./Contact.module.css";

export default function Contact() {
  useSeo({ path: "/contact" });
  const [params] = useSearchParams();
  const preselected = getService(params.get("service") ?? "")?.name ?? "";
  const open = isLabOpen();
  const { address } = contact;

  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: "Contact" }]}
        eyebrow="Contact"
        title="Request a quote"
        intro="Tell us what you need tested. We'll recommend the tests and standards that apply and come back to you with a quotation."
      />

      <section className="section">
        <div className={`container ${styles.layout}`}>
          <div id="quote" className={styles.formCard}>
            <h2 className={styles.h2}>Your enquiry</h2>
            <QuoteForm defaultCategory={preselected} />
          </div>

          <aside className={styles.info} aria-labelledby="direct-title">
            <h2 id="direct-title" className={styles.h2}>
              Talk to us directly
            </h2>
            <ul role="list" className={styles.channels}>
              <li>
                <LuPhone aria-hidden="true" className={styles.icon} />
                <div>
                  <p className={styles.label}>Phone</p>
                  <a href={telHref} className={styles.value}>
                    {contact.phoneDisplay}
                  </a>
                </div>
              </li>
              <li>
                <FaWhatsapp aria-hidden="true" className={styles.icon} />
                <div>
                  <p className={styles.label}>WhatsApp</p>
                  <a
                    href={whatsappHref()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.value}
                  >
                    Start a chat
                  </a>
                </div>
              </li>
              {contact.email && (
                <li>
                  <span aria-hidden="true" className={styles.icon}>
                    @
                  </span>
                  <div>
                    <p className={styles.label}>Email</p>
                    <a href={`mailto:${contact.email}`} className={styles.value}>
                      {contact.email}
                    </a>
                  </div>
                </li>
              )}
              <li>
                <LuMapPin aria-hidden="true" className={styles.icon} />
                <div>
                  <p className={styles.label}>Laboratory</p>
                  <p className={styles.value}>
                    {address.locality}, {address.region} {address.postalCode}
                  </p>
                  <a
                    href={contact.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    Get directions <LuArrowUpRight aria-hidden="true" />
                  </a>
                </div>
              </li>
              <li>
                <LuClock aria-hidden="true" className={styles.icon} />
                <div>
                  <p className={styles.label}>Working hours</p>
                  <p className={styles.value}>{contact.hours.label}</p>
                  <p className={`${styles.status} ${open ? styles.open : ""}`}>
                    <span aria-hidden="true" />
                    {open ? "Open now" : "Closed now — send an enquiry and we'll reply when we open"}
                  </p>
                </div>
              </li>
            </ul>

            <div className={styles.sample}>
              <h3>Sending a sample?</h3>
              <p>
                Call or WhatsApp us before you send it, so we can confirm the quantity needed and share
                the delivery address. Samples can be dropped off at the lab or sent by courier.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
