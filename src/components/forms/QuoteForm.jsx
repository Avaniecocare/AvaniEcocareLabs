import { useRef, useState } from "react";
import PropTypes from "prop-types";
import { FaWhatsapp } from "react-icons/fa";
import Field from "./Field";
import Button from "../ui/Button";
import Alert from "../ui/Alert";
import { services } from "../../content/services.js";
import { contact } from "../../content/site.js";
import { telHref, whatsappHref } from "../../lib/contact.js";
import styles from "./QuoteForm.module.css";

const OTHER = "Other / not sure";
const categories = [...services.map((s) => s.name), "BIS-oriented testing", OTHER];

const empty = { name: "", company: "", phone: "", category: "", details: "" };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Enter your name.";
  const digits = values.phone.replace(/\D/g, "");
  if (!digits) errors.phone = "Enter a phone number so we can reply.";
  else if (digits.length < 10 || digits.length > 13) errors.phone = "Enter a valid phone number, e.g. 98765 43210.";
  if (!values.category) errors.category = "Choose the type of testing.";
  if (values.details.trim().length < 10)
    errors.details = "Tell us a little about the product and tests (at least 10 characters).";
  return errors;
}

function buildEnquiry(values) {
  const company = values.company.trim();
  return [
    "Testing enquiry — avaniecocare.com",
    "",
    `Name: ${values.name.trim()}`,
    company ? `Company: ${company}` : null,
    `Phone: ${values.phone.trim()}`,
    `Testing: ${values.category}`,
    "",
    values.details.trim(),
  ]
    .filter((line) => line !== null)
    .join("\n");
}

/**
 * Collects a structured enquiry and hands it to WhatsApp — the lab's existing
 * enquiry channel — so no backend or third-party form service is required.
 */
export default function QuoteForm({ defaultCategory = "" }) {
  const [values, setValues] = useState({ ...empty, category: defaultCategory });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [sentUrl, setSentUrl] = useState(null);
  const formRef = useRef(null);
  const statusRef = useRef(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    const next = { ...values, [name]: value };
    setValues(next);
    if (touched[name]) setErrors(validate(next));
  };

  const onBlur = (e) => {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors(validate(values));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    setTouched({ name: true, phone: true, category: true, details: true });
    const firstInvalid = Object.keys(empty).find((k) => found[k]);
    if (firstInvalid) {
      formRef.current?.elements.namedItem(firstInvalid)?.focus();
      return;
    }
    const url = whatsappHref(buildEnquiry(values));
    window.open(url, "_blank", "noopener,noreferrer");
    setSentUrl(url);
    requestAnimationFrame(() => statusRef.current?.focus());
  };

  const reset = () => {
    setValues({ ...empty, category: defaultCategory });
    setErrors({});
    setTouched({});
    setSentUrl(null);
  };

  if (sentUrl) {
    return (
      <div className={styles.done}>
        <Alert ref={statusRef} tone="success" title="Your enquiry is ready in WhatsApp">
          <p>
            Press <strong>send</strong> in WhatsApp to reach our team. If WhatsApp didn&apos;t open,{" "}
            <a href={sentUrl} target="_blank" rel="noopener noreferrer">
              open it here
            </a>{" "}
            or call <a href={telHref}>{contact.phoneDisplay}</a>.
          </p>
        </Alert>
        <Button variant="secondary" onClick={reset}>
          Start a new enquiry
        </Button>
      </div>
    );
  }

  const err = (k) => (touched[k] ? errors[k] : undefined);

  return (
    <form ref={formRef} className={styles.form} onSubmit={onSubmit} noValidate>
      <div className={styles.row}>
        <Field
          id="name"
          label="Your name"
          autoComplete="name"
          value={values.name}
          onChange={onChange}
          onBlur={onBlur}
          error={err("name")}
          required
        />
        <Field
          id="company"
          label="Company"
          optional
          autoComplete="organization"
          value={values.company}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
      <Field
        id="phone"
        label="Phone / WhatsApp number"
        type="tel"
        inputMode="tel"
        autoComplete="tel"
        value={values.phone}
        onChange={onChange}
        onBlur={onBlur}
        error={err("phone")}
        required
      />
      <Field
        id="category"
        label="Type of testing"
        as="select"
        value={values.category}
        onChange={onChange}
        onBlur={onBlur}
        error={err("category")}
        required
      >
        <option value="" disabled>
          Select…
        </option>
        {categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </Field>
      <Field
        id="details"
        label="What do you need tested?"
        hint="Product or material, tests or standard (e.g. IS number) if known, and number of samples."
        as="textarea"
        rows={5}
        value={values.details}
        onChange={onChange}
        onBlur={onBlur}
        error={err("details")}
        required
      />
      <div className={styles.submit}>
        <Button type="submit" size="lg" icon={FaWhatsapp} iconPosition="start">
          Send enquiry via WhatsApp
        </Button>
        <p className={styles.note}>
          Opens WhatsApp with your details filled in. Nothing is stored on this website.
        </p>
      </div>
    </form>
  );
}

QuoteForm.propTypes = {
  defaultCategory: PropTypes.string,
};
