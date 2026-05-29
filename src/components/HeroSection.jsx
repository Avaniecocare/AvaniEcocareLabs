import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Button } from "../styles/Button";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const words = ["Polymers", "Metals", "Coatings", "Composites"];

  useEffect(() => {
    let charIndex = 0;
    let currentWord = words[wordIndex];
    let isDeleting = false;
    let timeout;

    const type = () => {
      if (!isDeleting) {
        setDisplayText(currentWord.slice(0, charIndex + 1));
        charIndex++;
        if (charIndex === currentWord.length) {
          isDeleting = true;
          timeout = setTimeout(type, 1600);
          return;
        }
      } else {
        setDisplayText(currentWord.slice(0, charIndex - 1));
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          setWordIndex((prev) => (prev + 1) % words.length);
          timeout = setTimeout(type, 400);
          return;
        }
      }
      timeout = setTimeout(type, isDeleting ? 60 : 80);
    };

    timeout = setTimeout(type, 200);
    return () => clearTimeout(timeout);
  }, [wordIndex]);

  const handleWhatsAppClick = () => {
    const phoneNumber = "+919910852911";
    const message = encodeURIComponent(
      "Hello, I would like to inquire about your services."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const handleCallClick = () => {
    window.location.href = "tel:+919910852911";
  };

  return (
    <>
      <HeroWrapper>
        <div className="overlay">
          {/* Floating orbs */}
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="orb orb-3" />

          {/* Molecular Lattice SVG */}
          <LatticeBg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 150 L250 100 L400 150 L400 300 L250 350 L100 300 Z" stroke="rgba(201, 168, 76, 0.25)" strokeWidth="1.5" strokeDasharray="6 6"/>
            <path d="M400 150 L550 100 L700 150 L700 300 L550 350 L400 300 Z" stroke="rgba(26, 107, 90, 0.3)" strokeWidth="1.5"/>
            <path d="M250 350 L400 450 L550 350" stroke="rgba(201, 168, 76, 0.2)" strokeWidth="1"/>
            <circle cx="100" cy="150" r="5.5" fill="#e8c87a" />
            <circle cx="250" cy="100" r="7.5" fill="#1a6b5a" />
            <circle cx="400" cy="150" r="6.5" fill="#e8c87a" />
            <circle cx="400" cy="300" r="8.5" fill="#1a6b5a" />
            <circle cx="250" cy="350" r="6.5" fill="#e8c87a" />
            <circle cx="100" cy="300" r="5.5" fill="#1a6b5a"/>
            <circle cx="550" cy="100" r="6.5" fill="#e8c87a"/>
            <circle cx="700" cy="150" r="5.5" fill="#1a6b5a"/>
            <circle cx="700" cy="300" r="7.5" fill="#e8c87a"/>
            <circle cx="550" cy="350" r="6.5" fill="#1a6b5a"/>
            <circle cx="400" cy="450" r="8.5" fill="#e8c87a" />
          </LatticeBg>

          <div className="content">
            <div className="badge">
              <span className="badge-dot" />
              ISO 17025 • NABL • BIS Approved
            </div>
            <h1>
              Materials Testing
              <br />
              <span className="gradient-text">for </span>
              <span className="typed-word">{displayText}</span>
            </h1>
            <p>
              Comprehensive chemical, mechanical, and metallurgical analysis
              for every material you work with — delivered with precision and speed.
            </p>
            <div className="hero-buttons">
              <Button className="call-btn" onClick={handleWhatsAppClick}>
                <span>💬 Enquire on WhatsApp</span>
              </Button>
              <OutlineButton onClick={handleCallClick}>
                📞 Call Now
              </OutlineButton>
            </div>
            <div className="stats">
              <div className="stat">
                <span className="stat-num">100+</span>
                <span className="stat-label">Tests Completed</span>
              </div>
              <div className="stat-divider" />
              <div className="stat">
                <span className="stat-num">8+</span>
                <span className="stat-label">Service Areas</span>
              </div>
              <div className="stat-divider" />
              <div className="stat">
                <span className="stat-num">100%</span>
                <span className="stat-label">Accredited Labs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <ScrollIndicator>
          <div className="mouse">
            <div className="wheel" />
          </div>
          <span>Scroll to explore</span>
        </ScrollIndicator>
      </HeroWrapper>

      <ContentSection>
        <div className="intro-grid">
          <div className="intro-text">
            <div className="section-tag">Who We Are</div>
            <h2 className="intro-heading">
              Science-Backed Testing<br />You Can Trust
            </h2>
            <p>
              Avani Ecocare performs chemical analysis, mechanical testing, and
              metallurgical examination of alloys, composites, plastics, and
              coatings to accurately define material composition and performance
              characteristics.
            </p>
            <p>
              We have extensive experience with all metallurgical tests,
              examinations, and metal failure investigations. We also perform
              field inspections and polymer testing services.
            </p>
            <p>
              All tests and inspections are performed by ISO 17025, NABL
              accredited, and BIS approved laboratories. Our metallurgical team has experience with
              all manufacturing industries and base metals.
            </p>
          </div>
          <div className="intro-features">
            {[
              { icon: "🔬", title: "Advanced Instruments", desc: "State-of-the-art spectrometry and analysis equipment" },
              { icon: "⚡", title: "Fast Turnaround", desc: "1-hour quotes with rapid result delivery" },
              { icon: "🏆", title: "Accredited Results", desc: "ISO 17025, NABL & BIS approved laboratory" },
              { icon: "🌍", title: "Global Standards", desc: "Tests aligned with international specifications" },
            ].map(({ icon, title, desc }) => (
              <FeatureCard key={title}>
                <div className="feature-icon">{icon}</div>
                <div>
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              </FeatureCard>
            ))}
          </div>
        </div>
      </ContentSection>
    </>
  );
};

const floatLattice = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
  50% { transform: translateY(-15px) rotate(1deg) scale(1.02); }
`;

const LatticeBg = styled.svg`
  position: absolute;
  right: -5%;
  top: 5%;
  width: 55%;
  height: 90%;
  pointer-events: none;
  z-index: 1;
  opacity: 0.7;
  animation: ${floatLattice} 8s ease-in-out infinite;

  @media (max-width: 998px) {
    display: none;
  }
`;

const cursorBlink = keyframes`
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
`;

const floatOrb = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -40px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
`;

const scrollBounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
`;

const HeroWrapper = styled.section`
  width: 100%;
  min-height: 92vh;
  background-image: url("./bg.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
  overflow: hidden;

  .overlay {
    width: 100%;
    min-height: 92vh;
    background: linear-gradient(
      135deg,
      rgba(7, 24, 32, 0.92) 0%,
      rgba(13, 42, 48, 0.85) 50%,
      rgba(26, 107, 90, 0.6) 100%
    );
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 8rem 8rem 6rem;
    position: relative;
  }

  .orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;
    animation: ${floatOrb} 12s ease-in-out infinite;
  }

  .orb-1 {
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(201, 168, 76, 0.15), transparent 70%);
    top: -100px;
    right: 10%;
    animation-delay: 0s;
  }

  .orb-2 {
    width: 350px;
    height: 350px;
    background: radial-gradient(circle, rgba(26, 107, 90, 0.25), transparent 70%);
    bottom: 10%;
    left: 30%;
    animation-delay: -4s;
  }

  .orb-3 {
    width: 250px;
    height: 250px;
    background: radial-gradient(circle, rgba(201, 168, 76, 0.1), transparent 70%);
    top: 30%;
    right: 25%;
    animation-delay: -8s;
  }

  .content {
    color: white;
    max-width: 820px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.4rem;
    position: relative;
    z-index: 2;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    background: rgba(201, 168, 76, 0.15);
    border: 1px solid rgba(201, 168, 76, 0.4);
    border-radius: 50px;
    padding: 0.6rem 1.6rem;
    font-size: 1.3rem;
    font-weight: 500;
    color: #e8c87a;
    letter-spacing: 0.05em;
    backdrop-filter: blur(10px);

    .badge-dot {
      width: 8px;
      height: 8px;
      background: #4ade80;
      border-radius: 50%;
      box-shadow: 0 0 0 3px rgba(74, 222, 128, 0.3);
      animation: ${cursorBlink} 2s ease-in-out infinite;
    }
  }

  h1 {
    font-size: clamp(3.6rem, 6vw, 6.4rem);
    font-weight: 800;
    color: white;
    line-height: 1.15;
    font-family: 'Outfit', sans-serif;
    letter-spacing: -0.02em;
    margin: 0;
  }

  .gradient-text {
    background: linear-gradient(135deg, #c9a84c, #e8c87a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .typed-word {
    background: linear-gradient(135deg, #4ade80, #a3e635);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    min-width: 10ch;
    display: inline-block;
  }



  p {
    font-size: 1.85rem;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.8);
    max-width: 620px;
    margin: 0;
    opacity: 1;
    font-family: 'Inter', sans-serif;
  }

  .hero-buttons {
    display: flex;
    gap: 1.6rem;
    flex-wrap: wrap;
    margin-top: 0.5rem;
  }

  .call-btn {
    font-size: 1.55rem;
    padding: 1.4rem 3rem;
    span { position: relative; z-index: 1; }
  }

  .stats {
    display: flex;
    align-items: center;
    gap: 3rem;
    margin-top: 1rem;
    padding-top: 2.4rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);

    .stat {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;

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
        color: rgba(255, 255, 255, 0.55);
        font-weight: 400;
        letter-spacing: 0.05em;
        text-transform: uppercase;
      }
    }

    .stat-divider {
      width: 1px;
      height: 40px;
      background: rgba(255, 255, 255, 0.15);
    }
  }

  @media (max-width: 768px) {
    min-height: 100vh;

    .overlay {
      min-height: 100vh;
      padding: 8rem 2.4rem 6rem;
      align-items: center;
    }

    .content {
      align-items: center;
      text-align: center;
    }

    h1 {
      font-size: clamp(3.2rem, 5vw, 4.4rem);
      line-height: 1.25;
    }

    p {
      font-size: 1.6rem;
    }

    .hero-buttons {
      justify-content: center;
      width: 100%;
    }

    .stats {
      gap: 2rem;
      flex-wrap: wrap;
      width: 100%;
      justify-content: center;

      .stat {
        align-items: center;
      }

      .stat-divider {
        display: none;
      }
    }
  }
`;

const OutlineButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background: transparent;
  color: rgba(255, 255, 255, 0.9);
  padding: 1.4rem 2.8rem;
  border: 1.5px solid rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  cursor: pointer;
  font-size: 1.55rem;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  letter-spacing: 0.03em;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(201, 168, 76, 0.6);
    color: #e8c87a;
    transform: translateY(-2px);
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 7.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  z-index: 10;

  .mouse {
    width: 28px;
    height: 44px;
    border: 2px solid rgba(255, 255, 255, 0.4);
    border-radius: 14px;
    display: flex;
    justify-content: center;
    padding-top: 8px;

    .wheel {
      width: 4px;
      height: 8px;
      background: rgba(201, 168, 76, 0.8);
      border-radius: 2px;
      animation: ${scrollBounce} 1.5s ease-in-out infinite;
    }
  }

  span {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.4);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-family: 'Inter', sans-serif;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const ContentSection = styled.section`
  background: linear-gradient(180deg, #f4f8f9 0%, #ffffff 100%);
  padding: 8rem 4rem;

  .intro-grid {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
    align-items: start;
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

  .intro-heading {
    font-size: 3.8rem;
    font-weight: 800;
    color: #0d2a30;
    line-height: 1.2;
    margin-bottom: 2.4rem;
    text-align: left;
    font-family: 'Outfit', sans-serif;
    letter-spacing: -0.02em;
  }

  .intro-text p {
    font-size: 1.65rem;
    color: #3a5a60;
    line-height: 1.8;
    margin-bottom: 1.6rem;
    opacity: 0.85;
  }

  .intro-features {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  @media (max-width: 998px) {
    padding: 6rem 2.4rem;

    .intro-grid {
      grid-template-columns: 1fr;
      gap: 4rem;
    }
  }
`;

const FeatureCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.6rem;
  padding: 2rem 2.4rem;
  background: white;
  border-radius: 16px;
  border: 1px solid rgba(26, 107, 90, 0.1);
  box-shadow: 0 4px 16px rgba(13, 42, 48, 0.06);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(13, 42, 48, 0.12);
    border-color: rgba(201, 168, 76, 0.3);
  }

  .feature-icon {
    font-size: 2.8rem;
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, rgba(26, 107, 90, 0.08), rgba(201, 168, 76, 0.08));
    border-radius: 14px;
    flex-shrink: 0;
  }

  h4 {
    font-size: 1.6rem;
    font-weight: 700;
    color: #0d2a30;
    font-family: 'Outfit', sans-serif;
    margin-bottom: 0.4rem;
  }

  p {
    font-size: 1.4rem;
    color: #5a7a82;
    margin: 0;
    opacity: 1;
    line-height: 1.5;
  }
`;

export default HeroSection;
