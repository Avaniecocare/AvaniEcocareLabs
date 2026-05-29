import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaWhatsapp, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import logoImg from "../assets/logo.png";

const Footer = () => {
  const handleDial = () => {
    window.location.href = "tel:+919910852911";
  };

  const handleWhatsApp = () => {
    const phoneNumber = "919910852911";
    const message = encodeURIComponent(
      "Hello! I would like to inquire about your testing services."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <Wrapper>
      {/* CTA Banner */}
      <div className="cta-banner">
        <div className="cta-content">
          <div className="cta-text">
            <h3>Ready to get started?</h3>
            <p>Talk to our experts today and get a quote within 1 hour</p>
          </div>
          <div className="cta-buttons">
            <button className="cta-btn cta-whatsapp" onClick={handleWhatsApp}>
              <FaWhatsapp size={20} />
              <span>WhatsApp Us</span>
            </button>
            <button className="cta-btn cta-call" onClick={handleDial}>
              <FaPhone size={16} />
              <span>Call Now</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <footer>
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand-logo">
              <div className="logo-mark">
                <img src={logoImg} alt="Avani Ecocare Logo" />
              </div>
              <div className="brand-name">
                <span className="name-main">Avani</span>
                <span className="name-sub">Ecocare Labs</span>
              </div>
            </div>
            <p className="brand-desc">
              Comprehensive polymer and metal testing services backed by
              ISO 17025, NABL accreditation, and BIS approval.
            </p>
            <div className="accreditations">
              <span className="accred-badge">ISO 17025</span>
              <span className="accred-badge">NABL</span>
              <span className="accred-badge">BIS Approved</span>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/service", label: "Our Services" },
                { to: "/contact", label: "Contact Us" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <NavLink to={to}>{label}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              {[
                "Chemical Analysis",
                "Mechanical Testing",
                "Corrosion Testing",
                "NDT Testing",
                "Polymer Testing",
                "RoHS / REACH",
              ].map((service) => (
                <li key={service}>
                  <NavLink to="/service">{service}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Info</h4>
            <div className="contact-items">
              <div className="contact-item">
                <FaMapMarkerAlt className="c-icon" />
                <span>Greater Noida, Uttar Pradesh, India</span>
              </div>
              <div className="contact-item">
                <FaPhone className="c-icon" />
                <a href="tel:+919910852911">+91 9910852911</a>
              </div>
              <div className="contact-item">
                <FaWhatsapp className="c-icon" />
                <button onClick={handleWhatsApp} className="wa-btn">
                  WhatsApp Chat
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider" />
          <div className="footer-bottom-row">
            <p>
              © {new Date().getFullYear()} AvaniEcocare Labs Pvt. Ltd. All Rights
              Reserved.
            </p>
            <p className="tagline">Precision Testing · Trusted Results</p>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: #071820;

  /* ============ CTA Banner ============ */
  .cta-banner {
    background: linear-gradient(135deg, #1a6b5a 0%, #0d4a3a 60%, #0d2a30 100%);
    padding: 5rem 4rem;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(
        ellipse at 80% 50%,
        rgba(201, 168, 76, 0.15) 0%,
        transparent 60%
      );
      pointer-events: none;
    }
  }

  .cta-content {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;
    position: relative;
    z-index: 1;
  }

  .cta-text {
    h3 {
      font-size: 3rem;
      font-weight: 800;
      color: white;
      font-family: 'Outfit', sans-serif;
      margin-bottom: 0.8rem;
      letter-spacing: -0.01em;
    }
    p {
      font-size: 1.65rem;
      color: rgba(255, 255, 255, 0.7);
      margin: 0;
      opacity: 1;
    }
  }

  .cta-buttons {
    display: flex;
    gap: 1.4rem;
    flex-wrap: wrap;
    flex-shrink: 0;
  }

  .cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    padding: 1.3rem 2.6rem;
    border-radius: 50px;
    font-size: 1.5rem;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    cursor: pointer;
    border: none;
    transition: all 0.3s ease;
    letter-spacing: 0.02em;
  }

  .cta-whatsapp {
    background: linear-gradient(135deg, #25d366, #128c7e);
    color: white;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 28px rgba(37, 211, 102, 0.4);
    }
  }

  .cta-call {
    background: rgba(255, 255, 255, 0.08);
    color: white;
    border: 1.5px solid rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(10px);

    &:hover {
      background: rgba(255, 255, 255, 0.15);
      border-color: rgba(201, 168, 76, 0.5);
      transform: translateY(-2px);
    }
  }

  /* ============ Main Footer ============ */
  footer {
    padding: 7rem 4rem 0;

    .footer-grid {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1.4fr 1fr 1.2fr 1.2fr;
      gap: 4rem;
    }

    h4 {
      font-size: 1.35rem;
      font-weight: 700;
      color: white;
      font-family: 'Outfit', sans-serif;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 2.4rem;
      padding-bottom: 1.2rem;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 28px;
        height: 2px;
        background: linear-gradient(90deg, #c9a84c, transparent);
        border-radius: 2px;
      }
    }

    /* Brand */
    .footer-brand {
      .brand-logo {
        display: flex;
        align-items: center;
        gap: 1.2rem;
        margin-bottom: 2rem;
      }

      .logo-mark {
        width: 44px;
        height: 44px;
        background: #ffffff;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 3px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        flex-shrink: 0;
        transition: transform 0.3s ease;

        &:hover {
          transform: scale(1.05);
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }

      .brand-name {
        display: flex;
        flex-direction: column;
        line-height: 1.1;

        .name-main {
          font-size: 1.9rem;
          font-weight: 800;
          color: white;
          font-family: 'Outfit', sans-serif;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .name-sub {
          font-size: 1.1rem;
          color: rgba(201, 168, 76, 0.7);
          font-family: 'Inter', sans-serif;
          letter-spacing: 0.1em;
        }
      }

      .brand-desc {
        font-size: 1.45rem;
        color: rgba(255, 255, 255, 0.45);
        line-height: 1.7;
        margin-bottom: 2rem;
        opacity: 1;
      }

      .accreditations {
        display: flex;
        gap: 1rem;
      }

      .accred-badge {
        background: rgba(201, 168, 76, 0.1);
        border: 1px solid rgba(201, 168, 76, 0.25);
        color: #e8c87a;
        padding: 0.4rem 1.2rem;
        border-radius: 50px;
        font-size: 1.15rem;
        font-weight: 600;
        font-family: 'Inter', sans-serif;
        letter-spacing: 0.04em;
      }
    }

    /* Link columns */
    .footer-col ul {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;

      li a {
        font-size: 1.5rem;
        color: rgba(255, 255, 255, 0.45);
        font-family: 'Inter', sans-serif;
        transition: color 0.2s;
        text-decoration: none;

        &:hover {
          color: #e8c87a;
        }
      }
    }

    /* Contact column */
    .contact-items {
      display: flex;
      flex-direction: column;
      gap: 1.8rem;
    }

    .contact-item {
      display: flex;
      align-items: flex-start;
      gap: 1.2rem;

      .c-icon {
        color: #c9a84c;
        flex-shrink: 0;
        margin-top: 0.3rem;
        font-size: 1.6rem;
      }

      span,
      a,
      .wa-btn {
        font-size: 1.45rem;
        color: rgba(255, 255, 255, 0.5);
        font-family: 'Inter', sans-serif;
        line-height: 1.5;
        transition: color 0.2s;
        text-decoration: none;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
        text-align: left;
      }

      a:hover,
      .wa-btn:hover {
        color: #e8c87a;
      }
    }

    /* Bottom */
    .footer-bottom {
      margin-top: 6rem;
      padding-bottom: 4rem;

      .footer-divider {
        height: 1px;
        background: linear-gradient(
          90deg,
          transparent,
          rgba(255, 255, 255, 0.08) 30%,
          rgba(255, 255, 255, 0.08) 70%,
          transparent
        );
        margin-bottom: 3rem;
      }

      .footer-bottom-row {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 2rem;

        p {
          font-size: 1.35rem;
          color: rgba(255, 255, 255, 0.28);
          margin: 0;
          opacity: 1;
          font-family: 'Inter', sans-serif;
        }

        .tagline {
          color: rgba(201, 168, 76, 0.35);
          font-style: italic;
          letter-spacing: 0.05em;
        }
      }
    }
  }

  /* Responsive */
  @media (max-width: 768px) {
    .cta-banner {
      padding: 4rem 2.4rem;
    }
    .cta-content {
      flex-direction: column;
      text-align: center;
    }
    .cta-buttons {
      justify-content: center;
    }
  }

  @media (max-width: 1100px) {
    footer .footer-grid {
      grid-template-columns: 1fr 1fr;
      gap: 4rem 3rem;
    }
  }

  @media (max-width: 600px) {
    footer {
      padding: 5rem 2.4rem 0;

      .footer-grid {
        grid-template-columns: 1fr;
        gap: 3.5rem;
      }

      .footer-bottom .footer-bottom-row {
        flex-direction: column;
        text-align: center;
      }
    }
  }
`;

export default Footer;
