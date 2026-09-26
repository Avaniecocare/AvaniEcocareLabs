import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { LuMenu, LuPhone, LuX } from "react-icons/lu";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import { contact, nav } from "../../content/site.js";
import { telHref } from "../../lib/contact.js";
import styles from "./Header.module.css";

const navClass = ({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const toggleRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu whenever the route changes.
  useEffect(() => setMenuOpen(false), [pathname]);

  // While open: lock page scroll, close on Escape, and keep focus inside.
  useEffect(() => {
    if (!menuOpen) return undefined;
    const toggle = toggleRef.current;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector("a")?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        toggle?.focus();
      }
      if (e.key === "Tab" && panelRef.current) {
        const focusables = [toggle, ...panelRef.current.querySelectorAll("a, button")];
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <header className={`${styles.header} ${scrolled || menuOpen ? styles.raised : ""}`}>
      <div className={`container ${styles.bar}`}>
        <Logo />

        <nav aria-label="Main" className={styles.desktopNav}>
          <ul role="list" className={styles.links}>
            {nav.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} className={navClass}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <a href={telHref} className={styles.phone}>
            <LuPhone aria-hidden="true" />
            {contact.phoneDisplay}
          </a>
          <Button to="/contact#quote" size="sm" className={styles.cta}>
            Request a quote
          </Button>
          <button
            ref={toggleRef}
            type="button"
            className={styles.toggle}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <LuX aria-hidden="true" /> : <LuMenu aria-hidden="true" />}
            <span className="visually-hidden">{menuOpen ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        ref={panelRef}
        className={`${styles.panel} ${menuOpen ? styles.panelOpen : ""}`}
        hidden={!menuOpen}
      >
        <nav aria-label="Mobile" className="container">
          <ul role="list" className={styles.mobileLinks}>
            <li>
              <NavLink to="/" end className={navClass}>
                Home
              </NavLink>
            </li>
            {nav.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} className={navClass}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className={styles.mobileActions}>
            <Button to="/contact#quote" size="lg" block>
              Request a quote
            </Button>
            <Button href={telHref} variant="secondary" size="lg" icon={LuPhone} iconPosition="start" block>
              Call {contact.phoneDisplay}
            </Button>
            <p className={styles.hours}>{contact.hours.label}</p>
          </div>
        </nav>
      </div>
    </header>
  );
}
