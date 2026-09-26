import PropTypes from "prop-types";
import { forwardRef } from "react";
import { LuAlertCircle, LuCheckCircle2, LuInfo } from "react-icons/lu";
import styles from "./Alert.module.css";

const icons = { success: LuCheckCircle2, error: LuAlertCircle, info: LuInfo };

const Alert = forwardRef(function Alert({ tone = "info", title, children }, ref) {
  const Icon = icons[tone];
  return (
    <div
      ref={ref}
      tabIndex={-1}
      role={tone === "error" ? "alert" : "status"}
      className={`${styles.alert} ${styles[tone]}`}
    >
      <Icon aria-hidden="true" className={styles.icon} />
      <div className={styles.body}>
        {title && <p className={styles.title}>{title}</p>}
        {children && <div className={styles.text}>{children}</div>}
      </div>
    </div>
  );
});

Alert.propTypes = {
  tone: PropTypes.oneOf(["success", "error", "info"]),
  title: PropTypes.node,
  children: PropTypes.node,
};

export default Alert;
