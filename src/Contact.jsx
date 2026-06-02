import styled from "styled-components";
import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import SEO from "./components/SEO";

const PHONE = "919910852911";
const PHONE_DISPLAY = "+91 9910852911";
const WA_MESSAGE = encodeURIComponent(
  "Hello! I would like to inquire about your testing services."
);

const Contact = () => {
  const openWhatsApp = () => {
    window.open(`https://wa.me/${PHONE}?text=${WA_MESSAGE}`, "_blank", "noopener,noreferrer");
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
          Visit our laboratory, call us, or reach out on WhatsApp — we respond within 1 hour
        </p>
      </div>

      {/* Info cards grid */}
      <div className="cards-grid">
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
    margin: 0 auto 5rem;
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
  }

  /* ── Cards grid — 4 cards in a row on desktop, 2 on tablet, 1 on mobile ── */
  .cards-grid {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    align-items: stretch;
  }

  /* ── Tablet ── */
  @media (max-width: 1024px) {
    padding: 7rem 2.4rem 5rem;

    .cards-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.6rem;
    }
  }

  /* ── Mobile ── */
  @media (max-width: 600px) {
    padding: 6rem 1.6rem 4rem;

    .cards-grid {
      grid-template-columns: 1fr;
      gap: 1.2rem;
    }
  }
`;

const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.4rem;
  background: #ffffff;
  border-radius: 16px;
  padding: 2.4rem 2.2rem;
  border: 1px solid rgba(26, 107, 90, 0.08);
  box-shadow: 0 2px 12px rgba(13, 42, 48, 0.06);
  transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;

  &:hover {
    border-color: rgba(201, 168, 76, 0.3);
    box-shadow: 0 8px 28px rgba(13, 42, 48, 0.1);
    transform: translateY(-4px);
  }

  .info-icon {
    width: 48px;
    height: 48px;
    flex-shrink: 0;
    border-radius: 12px;
    background: linear-gradient(135deg, rgba(26, 107, 90, 0.1), rgba(201, 168, 76, 0.08));
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1a6b5a;
    font-size: 1.8rem;
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

export default Contact;
