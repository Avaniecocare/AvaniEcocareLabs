import { Component } from "react";
import PropTypes from "prop-types";
import Button from "./ui/Button";
import { contact } from "../content/site.js";
import { telHref } from "../lib/contact.js";

/**
 * Catches render errors and failed route-chunk loads (e.g. a visitor on an old
 * tab after a new deploy) and offers a reload instead of a blank screen.
 */
export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    if (import.meta.env.DEV) console.error(error, info);
  }

  render() {
    if (!this.state.hasError) return this.props.children;
    return (
      <section className="section">
        <div className="container container-narrow" style={{ display: "grid", gap: "var(--space-4)" }}>
          <h1>Something went wrong</h1>
          <p className="lead">
            This page didn&apos;t load properly. Reloading usually fixes it. If it keeps happening,
            call us on <a href={telHref}>{contact.phoneDisplay}</a>.
          </p>
          <div>
            <Button onClick={() => window.location.reload()}>Reload page</Button>
          </div>
        </div>
      </section>
    );
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node,
};
