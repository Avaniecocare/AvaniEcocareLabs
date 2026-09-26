import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";

/**
 * Renders a router <Link> when `to` is set, an <a> when `href` is set,
 * otherwise a <button>. External links open in a new tab safely.
 */
export default function Button({
  to,
  href,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "end",
  block = false,
  external = false,
  className = "",
  children,
  ...rest
}) {
  const classes = [styles.button, styles[variant], styles[size], block && styles.block, className]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {Icon && iconPosition === "start" && <Icon aria-hidden="true" className={styles.icon} />}
      <span>{children}</span>
      {Icon && iconPosition === "end" && <Icon aria-hidden="true" className={styles.icon} />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    const externalProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
    return (
      <a href={href} className={classes} {...externalProps} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  );
}

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary", "ghost", "inverse"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  icon: PropTypes.elementType,
  iconPosition: PropTypes.oneOf(["start", "end"]),
  block: PropTypes.bool,
  external: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
