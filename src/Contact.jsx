import { useState } from "react";
import styled from "styled-components";
import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import SEO from "./components/SEO";

const PHONE = "919910852911";
const PHONE_DISPLAY = "+91 9910852911";
const WA_MESSAGE = encodeURIComponent(
  "Hello! I would like to inquire about your testing services."
);

const services = [
  "Chemical Composition Analysis",
  "Mechanical Testing",
  "Corrosion Testing",
  "Non-Destructive Testing (NDT)",
  "Metallurgical Analysis",
  "Hardness Testing",
  "Polymer Testing",
  "RoHS / REACH / PFAS Testing",
  "Other / Multiple Services",
];

const Contact = () => {
  const [status, setStatus] = useState("idle"); // "idle" | "submitting" | "success"
  const [errors, setErrors] = useState({});

  const openWhatsApp = () => {
    window.open(`https://wa.me/${PHONE}?text=${WA_MESSAGE}`, "_blank", "noopener,noreferrer");
  };

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    const nameVal = form.elements["entry.2005620554"].value.trim();
    const emailVal = form.elements["entry.1045781291"].value.trim();
    const phoneVal = form.elements["entry.1166974658"].value.trim();
    const messageVal = form.elements["entry.839337160"].value.trim();

    const newErrors = {};

    // Name validation
    if (!nameVal || nameVal.length < 2) {
      newErrors.name = "Please enter your full name (minimum 2 characters).";
    } else if (!/^[A-Za-z\s]+$/.test(nameVal)) {
      newErrors.name = "Name can only contain letters and spaces.";
    }

    // Email validation
    if (!emailVal) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Phone validation
    const cleanPhone = phoneVal.replace(/[^0-9]/g, "");
    if (!phoneVal) {
      newErrors.phone = "Phone number is required for quotes.";
    } else if (cleanPhone.length < 10) {
      newErrors.phone = "Please enter a valid phone number (minimum 10 digits).";
    }

    // Message validation
    if (!messageVal || messageVal.length < 10) {
      newErrors.message = "Please describe your testing requirements in more detail (minimum 10 characters).";
    }

    if (Object.keys(newErrors).length > 0) {
      e.preventDefault();
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStatus("submitting");
  };

  const handleIFrameLoad = () => {
    if (status === "submitting") {
      setStatus("success");
    }
  };

  return (
    <Wrapper>
      <SEO
        title="Contact Us | Request a Quote"
        description="Get in touch with Avani EcoCare Labs in Greater Noida. Contact us via phone, email, or WhatsApp for quick materials testing support and a 1-hour quotation."
        keywords="contact avani ecocare, materials testing laboratory address, lab phone number, whatsapp quote materials testing, Greater Noida lab location"
      />

      {/* Page heading */}
      <div className="contact-header">
        <div className="section-tag">Get In Touch</div>
        <h2>Contact Us</h2>
        <p className="contact-subtitle">
          Visit our laboratory, call us, or send a message — we respond within 1 hour
        </p>
      </div>

      {/* Two-column layout */}
      <div className="contact-layout">

        {/* Left — info cards */}
        <div className="info-side">
          <InfoCard>
            <div className="info-icon"><FaMapMarkerAlt /></div>
            <div className="info-body">
              <h3>Our Laboratory</h3>
              <p>Greater Noida, Uttar Pradesh<br />India — 201 310</p>
              <a
                href="https://maps.google.com/?q=Greater+Noida+Uttar+Pradesh+India"
                target="_blank"
                rel="noopener noreferrer"
                className="info-link"
              >
                Get Directions →
              </a>
            </div>
          </InfoCard>

          <InfoCard>
            <div className="info-icon"><FaPhone /></div>
            <div className="info-body">
              <h3>Call Us</h3>
              <p>Fast 1-hour quotes available</p>
              <a href={`tel:+${PHONE}`} className="info-link phone-link">
                {PHONE_DISPLAY}
              </a>
            </div>
          </InfoCard>

          <InfoCard>
            <div className="info-icon"><FaWhatsapp /></div>
            <div className="info-body">
              <h3>WhatsApp</h3>
              <p>Chat with our experts instantly</p>
              <button onClick={openWhatsApp} className="info-link">
                Open WhatsApp Chat →
              </button>
            </div>
          </InfoCard>

          <InfoCard>
            <div className="info-icon"><FaClock /></div>
            <div className="info-body">
              <h3>Working Hours</h3>
              <p>Monday – Saturday<br />9:00 AM – 6:00 PM IST</p>
              <span className="info-status">
                <span className="status-dot" />
                Currently Open (Weekdays)
              </span>
            </div>
          </InfoCard>
        </div>

        {/* Right — enquiry form */}
        <div className="form-side">
          <EnquiryForm>
            {status === "success" ? (
              <SuccessMessage>
                <div className="success-icon">✓</div>
                <h3>Enquiry Sent Successfully!</h3>
                <p>
                  Thank you for contacting Avani EcoCare Labs. Your details have been securely logged in our system. Our team will get back to you with a custom quote within 1 hour.
                </p>
                <button onClick={() => setStatus("idle")} className="reset-btn">
                  Send Another Enquiry
                </button>
              </SuccessMessage>
            ) : (
              <>
                <h3>Send an Enquiry</h3>
                <p className="form-subtitle">
                  Fill out the form and we&apos;ll get back to you within 1 hour.
                </p>

                <iframe
                  name="hidden_iframe"
                  id="hidden_iframe"
                  style={{ display: "none" }}
                  onLoad={handleIFrameLoad}
                ></iframe>

                <form
                  action="https://docs.google.com/forms/d/e/1FAIpQLScZAyZaqvDKmPM6wUH5xndFMz4Oa5Qb3xevVxuM_E_FWoILLQ/formResponse"
                  method="POST"
                  target="hidden_iframe"
                  onSubmit={handleSubmit}
                  className="form-fields"
                >
                  <div className="form-row">
                    <div className="field-group">
                      <label htmlFor="name">Your Name *</label>
                      <input
                        id="name"
                        type="text"
                        name="entry.2005620554"
                        placeholder="e.g. Rahul Sharma"
                        autoComplete="name"
                        required
                        className={errors.name ? "input-error" : ""}
                      />
                      {errors.name && <span className="error-text">{errors.name}</span>}
                    </div>
                    <div className="field-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        id="email"
                        type="email"
                        name="entry.1045781291"
                        placeholder="you@example.com"
                        autoComplete="email"
                        required
                        className={errors.email ? "input-error" : ""}
                      />
                      {errors.email && <span className="error-text">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="field-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      id="phone"
                      type="tel"
                      name="entry.1166974658"
                      placeholder="e.g. +91 98765 43210"
                      autoComplete="tel"
                      required
                      className={errors.phone ? "input-error" : ""}
                    />
                    {errors.phone && <span className="error-text">{errors.phone}</span>}
                  </div>

                  <div className="field-group">
                    <label htmlFor="message">Details / Requirements *</label>
                    <textarea
                      id="message"
                      name="entry.839337160"
                      rows={5}
                      placeholder="Describe your material, sample type, standards required, and any specific tests needed…"
                      required
                      className={errors.message ? "input-error" : ""}
                    />
                    {errors.message && <span className="error-text">{errors.message}</span>}
                  </div>

                  <button type="submit" className="submit-btn" disabled={status === "submitting"}>
                    {status === "submitting" ? "Sending..." : "Send Enquiry →"}
                  </button>
                </form>
              </>
            )}
          </EnquiryForm>
        </div>

      </div>
    </Wrapper>
  );
};

/* ─── Styled Components ────────────────────────────────────────────── */

const Wrapper = styled.section`
  padding: 9rem 4rem 7rem;
  background: linear-gradient(180deg, #f4f8f9 0%, #ffffff 100%);

  /* ── Page heading ── */
  .contact-header {
    text-align: center;
    max-width: 640px;
    margin: 0 auto 6rem;
  }

  .section-tag {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.2rem;
    font-weight: 600;
    color: #1a6b5a;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    margin-bottom: 1.6rem;
    font-family: "Inter", sans-serif;

    &::before,
    &::after {
      content: "";
      width: 24px;
      height: 2px;
      background: linear-gradient(90deg, transparent, #c9a84c);
      border-radius: 2px;
    }
    &::after {
      background: linear-gradient(90deg, #c9a84c, transparent);
    }
  }

  h2 {
    font-size: clamp(3rem, 4vw, 4.2rem);
    font-weight: 800;
    color: #0d2a30;
    font-family: "Outfit", sans-serif;
    letter-spacing: -0.02em;
    margin-bottom: 1.4rem;
  }

  .contact-subtitle {
    font-size: 1.7rem;
    color: #5a7a82;
    line-height: 1.6;
    margin: 0;
    opacity: 1;
  }

  /* ── Two-column grid ── */
  .contact-layout {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 380px 1fr;
    gap: 3.6rem;
    align-items: stretch; /* both columns same height */
  }

  /* ── Left column: stack cards evenly ── */
  .info-side {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
  }

  /* ── Right column ── */
  .form-side {
    display: flex;
    flex-direction: column;
  }

  /* ── Tablet: stack vertically ── */
  @media (max-width: 1024px) {
    padding: 7rem 2.4rem 5rem;

    .contact-layout {
      grid-template-columns: 1fr;
      align-items: start;
    }

    .info-side {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.2rem;
    }
  }

  /* ── Mobile ── */
  @media (max-width: 600px) {
    padding: 6rem 1.6rem 4rem;

    .info-side {
      grid-template-columns: 1fr;
    }
  }
`;

const InfoCard = styled.div`
  flex: 1;                /* equal height distribution in flex column */
  display: flex;
  align-items: flex-start;
  gap: 1.6rem;
  background: #ffffff;
  border-radius: 16px;
  padding: 2rem 2.2rem;
  border: 1px solid rgba(26, 107, 90, 0.08);
  box-shadow: 0 2px 12px rgba(13, 42, 48, 0.06);
  transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;

  &:hover {
    border-color: rgba(201, 168, 76, 0.3);
    box-shadow: 0 8px 28px rgba(13, 42, 48, 0.1);
    transform: translateX(4px);
  }

  .info-icon {
    width: 44px;
    height: 44px;
    flex-shrink: 0;
    border-radius: 12px;
    background: linear-gradient(135deg, rgba(26, 107, 90, 0.1), rgba(201, 168, 76, 0.08));
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1a6b5a;
    font-size: 1.7rem;
  }

  .info-body {
    flex: 1;
    min-width: 0;

    h3 {
      font-size: 1.5rem;
      font-weight: 700;
      color: #0d2a30;
      font-family: "Outfit", sans-serif;
      margin-bottom: 0.4rem;
    }

    p {
      font-size: 1.4rem;
      color: #5a7a82;
      line-height: 1.5;
      margin: 0 0 0.8rem;
      opacity: 1;
    }

    /* shared link / button style */
    .info-link {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      font-size: 1.35rem;
      font-weight: 600;
      color: #1a6b5a;
      font-family: "Inter", sans-serif;
      text-decoration: none;
      background: none;
      border: none;
      padding: 0;
      cursor: pointer;
      transition: color 0.2s ease;

      &:hover { color: #c9a84c; }
    }

    .phone-link {
      font-size: 1.6rem;
      font-weight: 700;
      letter-spacing: 0.02em;
    }

    .info-status {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      font-size: 1.3rem;
      color: #5a7a82;
      font-family: "Inter", sans-serif;

      .status-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #4ade80;
        box-shadow: 0 0 0 3px rgba(74, 222, 128, 0.2);
        flex-shrink: 0;
      }
    }
  }
`;

const EnquiryForm = styled.div`
  flex: 1;
  background: #ffffff;
  border-radius: 20px;
  padding: 3.2rem 3.6rem;
  border: 1px solid rgba(26, 107, 90, 0.08);
  box-shadow: 0 4px 20px rgba(13, 42, 48, 0.07);

  h3 {
    font-size: 2.4rem;
    font-weight: 800;
    color: #0d2a30;
    font-family: "Outfit", sans-serif;
    letter-spacing: -0.01em;
    margin-bottom: 0.5rem;
  }

  .form-subtitle {
    font-size: 1.5rem;
    color: #5a7a82;
    line-height: 1.5;
    margin-bottom: 2.6rem;
    opacity: 1;
  }

  .form-fields {
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.6rem;
  }

  .field-group {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;

    label {
      font-size: 1.35rem;
      font-weight: 600;
      color: #0d2a30;
      font-family: "Inter", sans-serif;
    }

    input,
    select,
    textarea {
      width: 100%;
      max-width: 100%;
      padding: 1.2rem 1.6rem;
      border: 1.5px solid rgba(26, 107, 90, 0.15);
      border-radius: 10px;
      font-size: 1.5rem;
      color: #0d2a30;
      font-family: "Inter", sans-serif;
      background: #f9fbfc;
      outline: none;
      text-transform: none;
      box-shadow: none;
      box-sizing: border-box;
      -webkit-appearance: none;
      appearance: none;
      transition: border-color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;

      &::placeholder {
        color: #9ab0b5;
        font-weight: 400;
      }

      &:focus {
        border-color: #c9a84c;
        background: #ffffff;
        box-shadow: 0 0 0 3px rgba(201, 168, 76, 0.12);
      }
    }

    .input-error {
      border-color: #d9534f !important;
      box-shadow: 0 0 0 3px rgba(217, 83, 79, 0.12) !important;
      background: #fffcfc !important;
    }

    .error-text {
      color: #d9534f;
      font-size: 1.25rem;
      font-weight: 500;
      margin-top: 0.2rem;
      font-family: 'Inter', sans-serif;
      display: block;
      text-align: left;
    }

    /* Custom select arrow — works in all browsers */
    select {
      cursor: pointer;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%235a7a82' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right 1.4rem center;
      padding-right: 3.6rem;
    }

    textarea {
      resize: vertical;
      min-height: 130px;
      line-height: 1.6;
    }
  }

  .submit-btn {
    align-self: flex-start;
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    background: linear-gradient(135deg, #1a6b5a, #0d2a30);
    color: #ffffff;
    border: none;
    padding: 1.4rem 3.2rem;
    border-radius: 50px;
    font-size: 1.55rem;
    font-weight: 700;
    font-family: "Inter", sans-serif;
    cursor: pointer;
    letter-spacing: 0.03em;
    transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 32px rgba(13, 42, 48, 0.28);
      background: linear-gradient(135deg, #1d7c68, #0e353c);
    }

    &:active {
      transform: translateY(0);
    }
  }

  /* ── Responsive ── */
  @media (max-width: 768px) {
    padding: 2.4rem 2rem;

    .form-row {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 480px) {
    padding: 2rem 1.6rem;

    .submit-btn {
      width: 100%;
      justify-content: center;
    }
  }
`;

const SuccessMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 2rem;
  animation: fadeIn 0.5s ease both;

  .success-icon {
    width: 64px;
    height: 64px;
    background: linear-gradient(135deg, #1a6b5a, #25d366);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 2rem;
    box-shadow: 0 8px 24px rgba(37, 211, 102, 0.3);
  }

  h3 {
    font-size: 2.2rem;
    color: #0d2a30;
    font-weight: 800;
    margin-bottom: 1.2rem;
    font-family: 'Outfit', sans-serif;
  }

  p {
    font-size: 1.5rem;
    color: #5a7a82;
    line-height: 1.6;
    margin-bottom: 3rem;
    max-width: 400px;
  }

  .reset-btn {
    background: linear-gradient(135deg, #1a6b5a 0%, #0d2a30 100%);
    color: white;
    border: none;
    padding: 1.2rem 2.8rem;
    border-radius: 50px;
    font-size: 1.4rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(26, 107, 90, 0.3);
    }
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

export default Contact;
