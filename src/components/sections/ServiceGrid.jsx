import { services } from "../../content/services.js";
import ServiceCard from "./ServiceCard";
import styles from "./ServiceGrid.module.css";

export default function ServiceGrid() {
  return (
    <ul role="list" className={styles.grid}>
      {services.map((service, i) => (
        <li key={service.slug}>
          <ServiceCard service={service} index={i} />
        </li>
      ))}
    </ul>
  );
}
