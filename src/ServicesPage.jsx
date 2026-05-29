import styled from "styled-components";
import Services from "./Services";
import { useState } from "react";
import SEO from "./components/SEO";

const faqData = [
  {
    q: "How long does testing take?",
    a: "Most standard tests are completed within 3–5 business days. Expedited testing is available within 24–48 hours for urgent requirements. Contact us for specific timelines.",
  },
  {
    q: "What sample size do you require?",
    a: "Sample size requirements vary by test type. Generally, a few grams to 100g is sufficient for most chemical and mechanical tests. We'll advise you on exact requirements when you contact us.",
  },
  {
    q: "Do you issue NABL-accredited reports?",
    a: "Yes. All applicable tests are performed in our NABL ISO/IEC 17025 accredited laboratory. Reports are globally recognized and accepted by regulatory bodies.",
  },
  {
    q: "Can you test both metals and polymers?",
    a: "Absolutely. We are specialists in both metals/alloys and polymer/plastic testing. Our team includes experts in metallurgy and plastic technology.",
  },
  {
    q: "Do you offer RoHS/REACH compliance testing?",
    a: "Yes. We provide comprehensive RoHS, REACH, and PFAS testing for electronics, components, and materials requiring regulatory compliance for global markets.",
  },
  {
    q: "How do I submit a sample?",
    a: "You can drop off samples at our lab in Greater Noida or courier them to us. Call or WhatsApp us at +91 9910852911 to arrange pickup or get our lab address.",
  },
];

const ServicesPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <SEO 
        title="Testing Services | Material & Polymer Analysis" 
        description="Comprehensive materials testing capabilities including Chemical analysis, Mechanical properties, NDT, Corrosion resistance, Polymer testing, RoHS and REACH compliance."
        keywords="polymer testing, plastic testing, chemical analysis, mechanical testing, NDT services, RoHS testing, REACH compliance, metal composition analysis, hardness testing"
      />
      {/* Hero Banner */}
      <ServicesBanner>
        <div className="banner-inner">
          <div className="section-tag">Our Capabilities</div>
          <h1>Testing Services</h1>
          <p>
            NABL &amp; ISO 17025 accredited testing across chemical, mechanical,
            metallurgical, and polymer disciplines — all under one roof.
          </p>
          <div className="banner-stats">
            {[
              { num: "8+", label: "Service Types" },
              { num: "ISO 17025", label: "Accredited" },
              { num: "1 Hr", label: "Quote Time" },
              { num: "100%", label: "Traceable Reports" },
            ].map(({ num, label }) => (
              <div className="stat" key={label}>
                <span className="stat-num">{num}</span>
                <span className="stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="banner-orb orb-1" />
        <div className="banner-orb orb-2" />
      </ServicesBanner>

      {/* Services Grid */}
      <Services />

      {/* Standards We Follow */}
      <StandardsSection>
        <div className="standards-inner">
          <div className="standards-text">
            <div className="section-tag">Compliance</div>
            <h2>Testing Standards We Follow</h2>
            <p>
              All our tests adhere to globally recognized standards, ensuring
              your materials meet international requirements.
            </p>
          </div>
          <div className="standards-grid">
            {[
              { code: "ASTM", desc: "American Society for Testing and Materials" },
              { code: "ISO", desc: "International Organization for Standardization" },
              { code: "IS", desc: "Bureau of Indian Standards" },
              { code: "BS EN", desc: "British & European Standards" },
              { code: "DIN", desc: "German Institute for Standardization" },
              { code: "JIS", desc: "Japanese Industrial Standards" },
            ].map(({ code, desc }) => (
              <div className="standard-chip" key={code}>
                <span className="chip-code">{code}</span>
                <span className="chip-desc">{desc}</span>
              </div>
            ))}
          </div>
        </div>
      </StandardsSection>

      {/* FAQ */}
      <FaqSection>
        <div className="section-header">
          <div className="section-tag">Common Questions</div>
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about our testing services</p>
        </div>
        <div className="faq-list">
          {faqData.map(({ q, a }, i) => (
            <FaqItem key={i} className={openFaq === i ? "open" : ""}>
              <button
                className="faq-question"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                aria-expanded={openFaq === i}
              >
                <span>{q}</span>
                <span className="faq-icon">{openFaq === i ? "−" : "+"}</span>
              </button>
              <div className="faq-answer">
                <p>{a}</p>
              </div>
            </FaqItem>
          ))}
        </div>
        <div className="faq-cta">
          <p>Still have questions?</p>
          <a
            href="https://wa.me/919910852911?text=Hello%2C%20I%20have%20a%20question%20about%20your%20testing%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="faq-wa-btn"
          >
            💬 Ask on WhatsApp
          </a>
          <a href="tel:+919910852911" className="faq-call-btn">
            📞 Call +91 9910852911
          </a>
        </div>
      </FaqSection>
    </>
  );
};

const ServicesBanner = styled.div`
  background: linear-gradient(135deg, #071820 0%, #0d2a30 50%, #1a3a42 100%);
  padding: 10rem 4rem 8rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  .banner-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;
  }
  .orb-1 {
    width: 400px; height: 400px;
    background: radial-gradient(circle, rgba(201, 168, 76, 0.15), transparent 70%);
    top: -120px; right: 5%;
  }
  .orb-2 {
    width: 300px; height: 300px;
    background: radial-gradient(circle, rgba(26, 107, 90, 0.2), transparent 70%);
    bottom: -60px; left: 8%;
  }

  .banner-inner {
    position: relative;
    z-index: 2;
    max-width: 800px;
    margin: 0 auto;
  }

  .section-tag {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    font-size: 1.25rem;
    font-weight: 600;
    color: #e8c87a;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    margin-bottom: 2rem;
    font-family: 'Inter', sans-serif;

    &::before, &::after {
      content: '';
      width: 24px;
      height: 2px;
      background: rgba(232, 200, 122, 0.5);
      border-radius: 2px;
    }
  }

  h1 {
    font-size: clamp(4rem, 6vw, 6.4rem);
    font-weight: 800;
    color: white;
    font-family: 'Outfit', sans-serif;
    letter-spacing: -0.03em;
    line-height: 1.1;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.85rem;
    color: rgba(255,255,255,0.65);
    max-width: 580px;
    margin: 0 auto 4rem;
    opacity: 1;
    line-height: 1.6;
  }

  .banner-stats {
    display: flex;
    justify-content: center;
    gap: 4rem;
    flex-wrap: wrap;
    padding-top: 3rem;
    border-top: 1px solid rgba(255,255,255,0.1);

    .stat {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;

      .stat-num {
        font-size: 2.8rem;
        font-weight: 800;
        font-family: 'Outfit', sans-serif;
        background: linear-gradient(135deg, #c9a84c, #e8c87a);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        line-height: 1;
      }

      .stat-label {
        font-size: 1.2rem;
        color: rgba(255,255,255,0.45);
        font-family: 'Inter', sans-serif;
        letter-spacing: 0.05em;
        text-transform: uppercase;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 8rem 2.4rem 5rem;

    .banner-stats {
      gap: 2.4rem;
    }
  }
`;

const StandardsSection = styled.section`
  padding: 8rem 4rem;
  background: #f4f8f9;

  .standards-inner {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1.4fr;
    gap: 6rem;
    align-items: center;
  }

  .section-tag {
    display: inline-flex;
    align-items: center;
    font-size: 1.25rem;
    font-weight: 600;
    color: #1a6b5a;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    margin-bottom: 1.6rem;
    font-family: 'Inter', sans-serif;

    &::before {
      content: '';
      width: 28px;
      height: 2px;
      background: linear-gradient(90deg, #c9a84c, #1a6b5a);
      margin-right: 1.2rem;
      border-radius: 2px;
    }
  }

  h2 {
    font-size: 3.4rem;
    font-weight: 800;
    color: #0d2a30;
    font-family: 'Outfit', sans-serif;
    letter-spacing: -0.02em;
    margin-bottom: 1.6rem;
    text-align: left;
    line-height: 1.2;
  }

  p {
    font-size: 1.65rem;
    color: #5a7a82;
    line-height: 1.7;
    margin: 0;
    opacity: 1;
  }

  .standards-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.4rem;
  }

  .standard-chip {
    background: white;
    border-radius: 14px;
    padding: 1.8rem 2rem;
    border: 1px solid rgba(26, 107, 90, 0.1);
    box-shadow: 0 2px 8px rgba(13, 42, 48, 0.06);
    transition: all 0.3s ease;

    &:hover {
      border-color: rgba(201, 168, 76, 0.3);
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(13, 42, 48, 0.1);
    }

    .chip-code {
      display: block;
      font-size: 2rem;
      font-weight: 800;
      color: #1a6b5a;
      font-family: 'Outfit', sans-serif;
      margin-bottom: 0.4rem;
    }

    .chip-desc {
      display: block;
      font-size: 1.25rem;
      color: #5a7a82;
      font-family: 'Inter', sans-serif;
      line-height: 1.4;
    }
  }

  @media (max-width: 998px) {
    padding: 6rem 2.4rem;

    .standards-inner {
      grid-template-columns: 1fr;
      gap: 4rem;
    }
  }
`;

const FaqSection = styled.section`
  padding: 9rem 4rem;
  background: white;

  .section-header {
    text-align: center;
    max-width: 600px;
    margin: 0 auto 5rem;

    .section-tag {
      display: inline-flex;
      align-items: center;
      gap: 1rem;
      font-size: 1.25rem;
      font-weight: 600;
      color: #1a6b5a;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 1.6rem;
      font-family: 'Inter', sans-serif;

      &::before, &::after {
        content: '';
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
      font-size: 3.8rem;
      font-weight: 800;
      color: #0d2a30;
      font-family: 'Outfit', sans-serif;
      letter-spacing: -0.02em;
      margin-bottom: 1.2rem;
    }

    p {
      font-size: 1.7rem;
      color: #5a7a82;
      opacity: 1;
      margin: 0;
      line-height: 1.6;
    }
  }

  .faq-list {
    max-width: 800px;
    margin: 0 auto 5rem;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  .faq-cta {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.4rem;

    p {
      font-size: 1.6rem;
      color: #5a7a82;
      margin: 0;
      opacity: 1;
      font-family: 'Inter', sans-serif;
      width: 100%;
      margin-bottom: 0.5rem;
    }

    a {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      padding: 1.2rem 2.4rem;
      border-radius: 50px;
      font-size: 1.5rem;
      font-weight: 600;
      font-family: 'Inter', sans-serif;
      text-decoration: none;
      transition: all 0.3s ease;
    }

    .faq-wa-btn {
      background: linear-gradient(135deg, #25d366, #128c7e);
      color: white;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 28px rgba(37, 211, 102, 0.4);
      }
    }

    .faq-call-btn {
      background: linear-gradient(135deg, #1a6b5a, #0d2a30);
      color: white;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 28px rgba(13, 42, 48, 0.35);
      }
    }
  }

  @media (max-width: 768px) {
    padding: 6rem 2.4rem;
  }
`;

const FaqItem = styled.div`
  background: #f4f8f9;
  border-radius: 16px;
  border: 1px solid rgba(26, 107, 90, 0.08);
  overflow: hidden;
  transition: border-color 0.3s ease;

  &.open {
    border-color: rgba(201, 168, 76, 0.3);
    background: white;
    box-shadow: 0 4px 16px rgba(13, 42, 48, 0.08);
  }

  .faq-question {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.2rem 2.4rem;
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
    gap: 2rem;

    span:first-child {
      font-size: 1.65rem;
      font-weight: 600;
      color: #0d2a30;
      font-family: 'Outfit', sans-serif;
      line-height: 1.4;
    }

    .faq-icon {
      font-size: 2.2rem;
      color: #1a6b5a;
      font-weight: 700;
      flex-shrink: 0;
      width: 2.8rem;
      height: 2.8rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(26, 107, 90, 0.08);
      border-radius: 50%;
      transition: all 0.3s ease;
    }
  }

  &.open .faq-icon {
    background: rgba(201, 168, 76, 0.15);
    color: #c9a84c;
  }

  .faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);

    p {
      padding: 0 2.4rem 2.2rem;
      font-size: 1.55rem;
      color: #5a7a82;
      line-height: 1.75;
      margin: 0;
      opacity: 1;
      font-family: 'Inter', sans-serif;
    }
  }

  &.open .faq-answer {
    max-height: 300px;
  }
`;

export default ServicesPage;
