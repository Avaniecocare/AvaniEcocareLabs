import styled, { keyframes } from "styled-components";

const AboutHeroSection = () => {
  const reasons = [
    {
      icon: "🎓",
      title: "Technical Expertise",
      desc: "Our team is led by professionals with advanced degrees in Plastic Technology and hands-on industry experience.",
      color: "#1a6b5a",
    },
    {
      icon: "🔭",
      title: "Research-Driven Mindset",
      desc: "We focus on root-cause analysis, innovation, and material optimization.",
      color: "#c9a84c",
    },
    {
      icon: "🤝",
      title: "Client-Centric Service",
      desc: "We prioritize transparency, fast turnaround times, and custom solutions tailored to your product goals.",
      color: "#13505b",
    },
    {
      icon: "🏗️",
      title: "Advanced Infrastructure",
      desc: "Equipped with state-of-the-art instruments and software to ensure precise, reliable results.",
      color: "#1a6b5a",
    },
    {
      icon: "🚗",
      title: "NPD Testing Consultancy",
      desc: "End-to-end testing support for new automotive products—from concept to launch, ensuring performance, compliance, and quality.",
      color: "#c9a84c",
    },
    {
      icon: "📄",
      title: "Comprehensive Reporting",
      desc: "Detailed, traceable NABL-compliant test reports delivered digitally with full findings, interpretations, and compliance status for regulatory submissions.",
      color: "#1a6b5a",
    },
  ];

  return (
    <>
      <HeroBanner>
        <div className="banner-content">
          <div className="section-tag">Who We Are</div>
          <h1>About AvaniEcocare Labs</h1>
          <p>
            Your trusted partner in precision material testing and scientific analysis
          </p>
        </div>
        <div className="banner-orb orb-1" />
        <div className="banner-orb orb-2" />
      </HeroBanner>

      <AboutSection>
        <div className="about-grid">
          <div className="about-content">
            <div className="section-tag">Our Story</div>
            <h2>Science-Backed Testing<br />You Can Trust</h2>
            <p>
              Welcome to AvaniEcocare Labs, a dedicated testing laboratory
              specializing in polymer and metal analysis. We provide comprehensive,
              science-backed testing solutions to support product development,
              quality assurance, failure analysis, and compliance across a wide
              range of industries.
            </p>
            <p>
              Our lab is powered by a team of highly qualified experts, including
              specialists with Master&apos;s degrees in Plastic Technology and
              Metallurgy, bringing deep domain knowledge and a research-oriented
              approach to every project.
            </p>
            <p>
              Whether you&apos;re developing a new product, troubleshooting material
              issues, or validating the quality of raw materials, AvaniEcocare Labs
              is your trusted partner in polymer and metal testing.
            </p>
            <div className="about-highlights">
              {["ISO 17025 Accredited", "NABL Certified", "BIS Approved", "Expert Team", "Fast Results"].map((tag) => (
                <span key={tag} className="highlight-tag">{tag}</span>
              ))}
            </div>
          </div>
          <div className="about-visual">
            <div className="visual-card main-card">
              <div className="visual-icon">🔬</div>
              <h3>Precision Analysis</h3>
              <p>State-of-the-art spectrometry and microscopy for accurate results</p>
            </div>
            <div className="visual-card accent-card">
              <div className="visual-icon">⚡</div>
              <h3>Rapid Turnaround</h3>
              <p>1-hour quotes with express result delivery</p>
            </div>
            <div className="floating-badge">
              <span className="badge-num">100+</span>
              <span className="badge-label">Projects Completed</span>
            </div>
          </div>
        </div>
      </AboutSection>

      <WhyChooseSection>
        <div className="section-header">
          <div className="section-tag">Our Edge</div>
          <h2>Why Choose Us</h2>
          <p>Discover what sets AvaniEcocare Labs apart from the rest</p>
        </div>
        <div className="reasons-grid">
          {reasons.map(({ icon, title, desc, color }, index) => (
            <ReasonCard key={title} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="reason-icon" style={{ background: `${color}15`, color }}>
                {icon}
              </div>
              <div className="reason-content">
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
              <div className="reason-accent" style={{ background: color }} />
            </ReasonCard>
          ))}
        </div>
      </WhyChooseSection>
    </>
  );
};

const float = keyframes`
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-12px) scale(1.03); }
`;

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;

const HeroBanner = styled.div`
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
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(201, 168, 76, 0.15), transparent 70%);
    top: -100px;
    right: 5%;
  }

  .orb-2 {
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(26, 107, 90, 0.2), transparent 70%);
    bottom: -50px;
    left: 10%;
  }

  .banner-content {
    position: relative;
    z-index: 2;
    max-width: 700px;
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
    font-size: clamp(3.6rem, 5vw, 5.6rem);
    font-weight: 800;
    color: white;
    font-family: 'Outfit', sans-serif;
    letter-spacing: -0.02em;
    line-height: 1.15;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.85rem;
    color: rgba(255, 255, 255, 0.65);
    max-width: 500px;
    margin: 0 auto;
    opacity: 1;
    line-height: 1.6;
  }
`;

const AboutSection = styled.section`
  padding: 9rem 4rem;
  background: white;

  .about-grid {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 7rem;
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
      width: 32px;
      height: 2px;
      background: linear-gradient(90deg, #c9a84c, #1a6b5a);
      margin-right: 1.2rem;
      border-radius: 2px;
    }
  }

  h2 {
    font-size: 3.8rem;
    font-weight: 800;
    color: #0d2a30;
    line-height: 1.2;
    margin-bottom: 2.4rem;
    text-align: left;
    font-family: 'Outfit', sans-serif;
    letter-spacing: -0.02em;
  }

  p {
    font-size: 1.65rem;
    color: #3a5a60;
    line-height: 1.8;
    margin-bottom: 1.6rem;
    opacity: 0.85;
  }

  .about-highlights {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 2.4rem;
  }

  .highlight-tag {
    background: linear-gradient(135deg, rgba(26, 107, 90, 0.08), rgba(201, 168, 76, 0.08));
    border: 1px solid rgba(26, 107, 90, 0.2);
    color: #1a6b5a;
    padding: 0.6rem 1.6rem;
    border-radius: 50px;
    font-size: 1.3rem;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    letter-spacing: 0.02em;
    transition: all 0.3s ease;

    &:hover {
      border-color: rgba(201, 168, 76, 0.45);
      color: #c9a84c;
      box-shadow: 0 0 10px rgba(201, 168, 76, 0.15);
      background: linear-gradient(135deg, rgba(201, 168, 76, 0.08), rgba(26, 107, 90, 0.08));
    }
  }

  .about-visual {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  .visual-card {
    padding: 2.8rem;
    border-radius: 20px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      transform: translateY(-5px);
    }

    .visual-icon {
      font-size: 3.2rem;
      margin-bottom: 1.2rem;
    }

    h3 {
      font-size: 2rem;
      font-weight: 700;
      font-family: 'Outfit', sans-serif;
      margin-bottom: 0.8rem;
    }

    p {
      font-size: 1.5rem;
      margin: 0;
      line-height: 1.6;
    }
  }

  .main-card {
    background: linear-gradient(135deg, #0d2a30 0%, #1a6b5a 100%);
    box-shadow: 0 16px 48px rgba(13, 42, 48, 0.35), 0 0 25px rgba(26, 107, 90, 0.2);

    h3 { color: white; }
    p { color: rgba(255,255,255,0.75); opacity: 1; }
  }

  .accent-card {
    background: linear-gradient(135deg, rgba(201, 168, 76, 0.1) 0%, rgba(232, 200, 122, 0.05) 100%);
    border: 1px solid rgba(201, 168, 76, 0.25);
    box-shadow: 0 8px 32px rgba(13, 42, 48, 0.06);

    &:hover {
      border-color: rgba(201, 168, 76, 0.5);
      box-shadow: 0 16px 40px rgba(13, 42, 48, 0.12), 0 0 15px rgba(201, 168, 76, 0.15);
    }

    h3 { color: #0d2a30; }
    p { color: #5a7a82; opacity: 1; }
  }

  .floating-badge {
    position: absolute;
    top: -2rem;
    right: -1.5rem;
    background: linear-gradient(135deg, #c9a84c, #e8c87a);
    border-radius: 16px;
    padding: 1.6rem 2rem;
    text-align: center;
    box-shadow: 0 12px 32px rgba(201, 168, 76, 0.35), 0 0 20px rgba(232, 200, 122, 0.25);
    animation: ${float} 4s ease-in-out infinite;

    .badge-num {
      display: block;
      font-size: 3rem;
      font-weight: 900;
      color: #071820;
      font-family: 'Outfit', sans-serif;
      line-height: 1;
    }

    .badge-label {
      display: block;
      font-size: 1.1rem;
      color: #071820;
      font-weight: 600;
      opacity: 0.75;
      font-family: 'Inter', sans-serif;
      letter-spacing: 0.05em;
      margin-top: 0.3rem;
    }
  }

  @media (max-width: 998px) {
    padding: 6rem 2.4rem;

    .about-grid {
      grid-template-columns: 1fr;
      gap: 4rem;
    }

    .about-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    h2 {
      font-size: 3rem;
      text-align: center;
    }

    .about-highlights {
      justify-content: center;
    }

    .floating-badge {
      top: auto;
      right: 1rem;
      bottom: -1.5rem;
    }
  }
`;

const WhyChooseSection = styled.section`
  padding: 9rem 4rem;
  background: linear-gradient(180deg, #f4f8f9 0%, #eef4f5 100%);

  .section-header {
    text-align: center;
    max-width: 600px;
    margin: 0 auto 6rem;

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
      font-size: 4rem;
      font-weight: 800;
      color: #0d2a30;
      font-family: 'Outfit', sans-serif;
      letter-spacing: -0.02em;
      margin-bottom: 1.6rem;
    }

    p {
      font-size: 1.75rem;
      color: #5a7a82;
      opacity: 1;
      line-height: 1.6;
    }
  }

  .reasons-grid {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.4rem;
  }

  @media (max-width: 998px) {
    padding: 6rem 2.4rem;

    .reasons-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 600px) {
    .reasons-grid {
      grid-template-columns: 1fr;
    }
  }
`;

const ReasonCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2.8rem;
  border: 1px solid rgba(26, 107, 90, 0.08);
  box-shadow: 0 4px 16px rgba(13, 42, 48, 0.06);
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${fadeInUp} 0.6s ease both;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 48px rgba(13, 42, 48, 0.14);
  }

  &:hover .reason-accent {
    height: 100%;
    opacity: 0.04;
  }

  .reason-icon {
    width: 60px;
    height: 60px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.8rem;
    margin-bottom: 1.8rem;
    transition: transform 0.3s ease;
  }

  &:hover .reason-icon {
    transform: scale(1.1) rotate(-3deg);
  }

  .reason-content {
    h3 {
      font-size: 1.85rem;
      font-weight: 700;
      color: #0d2a30;
      font-family: 'Outfit', sans-serif;
      margin-bottom: 0.8rem;
      line-height: 1.3;
    }

    p {
      font-size: 1.45rem;
      color: #5a7a82;
      line-height: 1.7;
      margin: 0;
      opacity: 1;
    }
  }

  .reason-accent {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    border-radius: 0 0 20px 20px;
    opacity: 1;
    transition: height 0.4s ease, opacity 0.4s ease;
  }
`;

export default AboutHeroSection;
