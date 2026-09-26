import { FaWhatsapp } from "react-icons/fa";
import { whatsappHref } from "../../lib/contact.js";
import styles from "./FloatingWhatsApp.module.css";

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.fab}
      aria-label="Chat with us on WhatsApp (opens in a new tab)"
    >
      <FaWhatsapp aria-hidden="true" />
    </a>
  );
}
