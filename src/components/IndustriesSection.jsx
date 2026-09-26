import styled, { keyframes } from "styled-components";

const IndustriesSection = () => {
  const industries = [
    {
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
          <circle cx="7" cy="17" r="2" />
          <path d="M9 17h6" />
          <circle cx="17" cy="17" r="2" />
        </svg>
      ),
      name: "Automotive",
      desc: "Testing for OEM parts, coatings, rubbers, and structural metals",
    },
    {
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.8 19.2L16 11l3.5-3.5a1 1 0 0 0 0-1.4 1 1 0 0 0-1.4 0L14.6 9.6l-8.2-1.8a1 1 0 0 0-1.2.8v0a1 1 0 0 0 .8 1.2l6.8 1.5-4.5 4.5H5.8L3 18.2V21h2.8l2.4-2.8v-2.5l4.5-4.5 1.5 6.8a1 1 0 0 0 1.2.8v0a1 1 0 0 0 .8-1.2z" />
        </svg>
      ),
      name: "Aerospace",
      desc: "High-precision alloy, composite, and fatigue analysis",
    },
    {
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M3 15h18M9 3v18M15 3v18" strokeWidth="1.5" />
        </svg>
      ),
      name: "Construction",
      desc: "Structural steel, rebar, and building material qualification",
    },
    {
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="9" width="20" height="6" rx="3" transform="rotate(45 12 12)" />
          <line x1="8.5" y1="15.5" x2="15.5" y2="8.5" />
        </svg>
      ),
      name: "Pharmaceuticals",
      desc: "Packaging polymer compliance and material safety testing",
    },
    {
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M9 9h6v6H9z" />
          <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
        </svg>
      ),
      name: "Electronics",
      desc: "RoHS, REACH & PFAS testing for components and PCBs",
    },
    {
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-11-7-11S5 10.7 5 15a7 7 0 0 0 7 7z" />
        </svg>
      ),
      name: "Oil & Gas",
      desc: "Corrosion analysis, pipeline steel, and coating testing",
    },
    {
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
      name: "Manufacturing",
      desc: "QA/QC of raw materials, finished parts, and assemblies",
    },
    {
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="4.5" cy="12" r="2.5" fill="currentColor" />
          <circle cx="12" cy="5" r="2.5" fill="currentColor" />
          <circle cx="12" cy="19" r="2.5" fill="currentColor" />
          <circle cx="19.5" cy="12" r="2.5" fill="currentColor" />
          <line x1="7" y1="10.2" x2="9.5" y2="6.8" />
          <line x1="7" y1="13.8" x2="9.5" y2="17.2" />
          <line x1="14.5" y1="6.8" x2="17" y2="10.2" />
          <line x1="14.5" y1="17.2" x2="17" y2="13.8" />
          <line x1="12" y1="7.5" x2="12" y2="16.5" />
        </svg>
      ),
      name: "Plastics & Polymers",
      desc: "Full mechanical, thermal, and chemical characterization",
    },
  ];

  const steps = [
    { num: "01", title: "Submit Your Sample", desc: "Drop off or courier your material sample to our lab in Greater Noida. We handle all types of metals, polymers, and composites." },
    { num: "02", title: "Expert Analysis", desc: "Our certified scientists run comprehensive tests using ISO 17025 accredited methods and state-of-the-art instruments." },
    { num: "03", title: "Detailed Report", desc: "Receive a comprehensive, traceable test report with findings, interpretations, and compliance status." },
    { num: "04", title: "Expert Consultation", desc: "Our metallurgists and polymer specialists are available to discuss findings and recommend solutions." },
  ];

  return (
    <>
      {/* Process Steps */}
      <ProcessSection>
        <div className="section-header">
          <div className="section-tag">How It Works</div>
          <h2>Simple 4-Step Process</h2>
          <p>From sample submission to final report — fast, accurate, and transparent</p>
        </div>
        <div className="steps-grid">
          {steps.map(({ num, title, desc }) => (
            <StepCard key={num}>
              <div className="step-num">{num}</div>
              <div className="step-connector" />
              <h3>{title}</h3>
              <p>{desc}</p>
            </StepCard>
          ))}
        </div>
      </ProcessSection>

      {/* Industries We Serve */}
      <IndustriesWrapper>
        <div className="section-header">
          <div className="section-tag">Industries Served</div>
          <h2>Trusted Across Every Sector</h2>
          <p>From automotive and aerospace to electronics and construction — we test the materials that power every industry</p>
        </div>
        <div className="industries-grid">
          {industries.map(({ icon, name, desc }) => (
            <IndustryCard key={name}>
              <div className="industry-icon">{icon}</div>
              <h3>{name}</h3>
              <p>{desc}</p>
            </IndustryCard>
          ))}
        </div>

        {/* Enquiry Banner */}
        <EnquiryBanner>
          <div className="enquiry-content">
            <div className="enquiry-text">
              <h3>Don't see your industry?</h3>
              <p>We test materials across all sectors. Contact us with your requirements.</p>
            </div>
            <div className="enquiry-actions">
              <a
                href="https://wa.me/919910852911?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20testing%20services%20for%20my%20industry."
                target="_blank"
                rel="noopener noreferrer"
                className="enquiry-btn enquiry-wa"
              >
                💬 WhatsApp Us
              </a>
              <a href="tel:+919910852911" className="enquiry-btn enquiry-call">
                📞 +91 9910852911
              </a>
            </div>
          </div>
        </EnquiryBanner>
      </IndustriesWrapper>
    </>
  );
};

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ProcessSection = styled.section`
  padding: 9rem 4rem;
  background: linear-gradient(180deg, #f4f8f9 0%, #eef4f5 100%);

  .section-header {
    text-align: center;
    max-width: 640px;
    margin: 0 auto 6rem;
  }

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
    font-size: clamp(3rem, 4vw, 4.4rem);
    font-weight: 800;
    color: #0d2a30;
    font-family: 'Outfit', sans-serif;
    letter-spacing: -0.02em;
    margin-bottom: 1.6rem;
  }

  p {
    font-size: 1.75rem;
    color: #5a7a82;
    line-height: 1.6;
    opacity: 1;
    margin: 0;
  }

  .steps-grid {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2.4rem;
    position: relative;
  }

  @media (max-width: 998px) {
    padding: 6rem 2.4rem;

    .steps-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 600px) {
    .steps-grid {
      grid-template-columns: 1fr;
    }
  }
`;

const StepCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 3rem 2.4rem;
  border: 1px solid rgba(26, 107, 90, 0.08);
  box-shadow: 0 4px 16px rgba(13, 42, 48, 0.06);
  position: relative;
  transition: all 0.3s ease;
  animation: ${fadeInUp} 0.6s ease both;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 48px rgba(13, 42, 48, 0.12);
    border-color: rgba(201, 168, 76, 0.25);
  }

  .step-num {
    font-size: 5rem;
    font-weight: 900;
    font-family: 'Outfit', sans-serif;
    background: linear-gradient(135deg, rgba(26, 107, 90, 0.15), rgba(201, 168, 76, 0.15));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1;
    margin-bottom: 2rem;
    letter-spacing: -0.03em;
  }

  h3 {
    font-size: 1.85rem;
    font-weight: 700;
    color: #0d2a30;
    font-family: 'Outfit', sans-serif;
    margin-bottom: 1.2rem;
    line-height: 1.3;
  }

  p {
    font-size: 1.45rem;
    color: #5a7a82;
    line-height: 1.7;
    margin: 0;
    opacity: 1;
  }
`;

const IndustriesWrapper = styled.section`
  padding: 9rem 4rem;
  background: white;

  .section-header {
    text-align: center;
    max-width: 680px;
    margin: 0 auto 6rem;
  }

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
    font-size: clamp(3rem, 4vw, 4.4rem);
    font-weight: 800;
    color: #0d2a30;
    font-family: 'Outfit', sans-serif;
    letter-spacing: -0.02em;
    margin-bottom: 1.6rem;
  }

  p {
    font-size: 1.75rem;
    color: #5a7a82;
    line-height: 1.6;
    opacity: 1;
    margin: 0;
  }

  .industries-grid {
    max-width: 1200px;
    margin: 0 auto 6rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }

  @media (max-width: 1100px) {
    .industries-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 768px) {
    padding: 6rem 2.4rem;

    .industries-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.4rem;
    }
  }

  @media (max-width: 480px) {
    .industries-grid {
      grid-template-columns: 1fr;
    }
  }
`;

const IndustryCard = styled.div`
  background: #f4f8f9;
  border-radius: 20px;
  padding: 2.8rem 2.2rem;
  border: 1px solid rgba(26, 107, 90, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: default;

  &:hover {
    background: white;
    border-color: rgba(201, 168, 76, 0.35);
    transform: translateY(-5px);
    box-shadow: 0 16px 40px rgba(13, 42, 48, 0.12), 0 0 15px rgba(201, 168, 76, 0.1);
  }

  .industry-icon {
    color: #1a6b5a;
    margin-bottom: 1.8rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 14px;
    width: 52px;
    height: 52px;
    padding: 0.8rem;
    border: 1px solid rgba(26, 107, 90, 0.08);
    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover .industry-icon {
    color: #c9a84c;
    background: linear-gradient(135deg, rgba(201, 168, 76, 0.05), rgba(26, 107, 90, 0.05));
    border-color: rgba(201, 168, 76, 0.35);
    box-shadow: 0 0 15px rgba(201, 168, 76, 0.2);
    transform: scale(1.08) rotate(-4deg);
  }

  h3 {
    font-size: 1.65rem;
    font-weight: 700;
    color: #0d2a30;
    font-family: 'Outfit', sans-serif;
    margin-bottom: 0.8rem;
  }

  p {
    font-size: 1.35rem;
    color: #5a7a82;
    line-height: 1.6;
    margin: 0;
    opacity: 0.9;
  }
`;

const EnquiryBanner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background: linear-gradient(135deg, #0d2a30 0%, #1a6b5a 100%);
  border-radius: 24px;
  padding: 4rem 5rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 80% 50%, rgba(201, 168, 76, 0.15) 0%, transparent 60%);
    pointer-events: none;
  }

  .enquiry-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;
    position: relative;
    z-index: 1;
  }

  .enquiry-text {
    h3 {
      font-size: 2.6rem;
      font-weight: 800;
      color: white;
      font-family: 'Outfit', sans-serif;
      margin-bottom: 0.8rem;
      letter-spacing: -0.01em;
    }

    p {
      font-size: 1.6rem;
      color: rgba(255, 255, 255, 0.7);
      margin: 0;
      opacity: 1;
      line-height: 1.5;
    }
  }

  .enquiry-actions {
    display: flex;
    gap: 1.4rem;
    flex-shrink: 0;
    flex-wrap: wrap;
  }

  .enquiry-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    padding: 1.3rem 2.6rem;
    border-radius: 50px;
    font-size: 1.5rem;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    text-decoration: none;
    transition: all 0.3s ease;
    letter-spacing: 0.02em;
  }

  .enquiry-wa {
    background: linear-gradient(135deg, #25d366, #128c7e);
    color: white;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 28px rgba(37, 211, 102, 0.45);
    }
  }

  .enquiry-call {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border: 1.5px solid rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(10px);

    &:hover {
      background: rgba(255, 255, 255, 0.18);
      border-color: rgba(201, 168, 76, 0.5);
      transform: translateY(-2px);
      color: #e8c87a;
    }
  }

  @media (max-width: 768px) {
    padding: 3rem 2.4rem;

    .enquiry-content {
      flex-direction: column;
      text-align: center;
    }

    .enquiry-actions {
      justify-content: center;
    }
  }
`;

export default IndustriesSection;
