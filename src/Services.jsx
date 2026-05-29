import styled, { keyframes } from "styled-components";
import Chemical from "./assets/IMAGES/ChemicalAnalysis.jpg";
import Mechanical from "./assets/IMAGES/MechanicalTesting.jpg";
import Corrosion from "./assets/IMAGES/CorrosionTesting.jpg";
import NDT from "./assets/IMAGES/non-destructive_testing.webp";
import Metallurgical_Analysis from "./assets/IMAGES/MetallurgicalAnalysis.jpg";
import HardnessTester from "./assets/IMAGES/HardnessTester.jpg";
import PolymerTesting from "./assets/IMAGES/polymerTesting.jpg";
import Rohs from "./assets/IMAGES/rohs.jpg";

const Services = () => {
  const services = [
    {
      id: "1",
      name: "Chemical Composition Analysis",
      image: Chemical,
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 2v7.586l-6.707 6.707A2 2 0 0 0 3 17.707V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2.293a2 2 0 0 0-.586-1.414L14 9.586V2z" />
          <path d="M14 2H10" />
          <path d="M8.5 15a3.5 3.5 0 0 0 7 0" />
        </svg>
      ),
      description:
        "Using advanced spectrometry and chemical analysis, we determine the exact elemental makeup of metals and alloys, ensuring they meet industry standards.",
    },
    {
      id: "2",
      name: "Mechanical Testing",
      image: Mechanical,
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 3h12M6 21h12M12 3v5M12 16v5" />
          <rect x="9" y="8" width="6" height="8" rx="1.5" />
          <line x1="7" y1="12" x2="17" y2="12" strokeDasharray="3 3" />
        </svg>
      ),
      description:
        "We evaluate the strength, hardness, and durability of metals through tensile, impact, and fatigue testing to ensure structural integrity.",
    },
    {
      id: "3",
      name: "Corrosion Testing",
      image: Corrosion,
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M12 8c0 1.5-1 2.5-2.5 2.5S7 9.5 7 8s2.5-4.5 2.5-4.5S12 6.5 12 8z" />
        </svg>
      ),
      description:
        "Our corrosion resistance tests simulate real-world conditions to assess how metals withstand environmental factors like moisture, chemicals, and temperature changes.",
    },
    {
      id: "4",
      name: "Non-Destructive Testing (NDT)",
      image: NDT,
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 0 1 10 10c0 5.5-4.5 10-10 10S2 17.5 2 12c0-2.4 1-4.6 2.6-6.2" />
          <path d="M12 6a6 6 0 0 1 6 6c0 3.3-2.7 6-6 6s-6-2.7-6-6c0-1.2.4-2.3 1-3.2" />
          <circle cx="12" cy="12" r="2.5" fill="currentColor" />
        </svg>
      ),
      description:
        "We use ultrasonic, radiographic (X-ray), magnetic particle, and dye penetrant testing to detect hidden flaws without damaging the material.",
    },
    {
      id: "5",
      name: "Metallurgical Analysis",
      image: Metallurgical_Analysis,
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2v20M2 12h20" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="12" cy="12" r="4.5" fill="none" />
        </svg>
      ),
      description:
        "Our microscopic examination of metal structures helps identify defects, grain size, and heat treatment effectiveness.",
    },
    {
      id: "6",
      name: "Hardness Testing",
      image: HardnessTester,
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 19h20M12 19l-4-8h8l-4 8z" />
          <path d="M12 4v7" />
          <circle cx="12" cy="4" r="2" fill="currentColor" />
        </svg>
      ),
      description:
        "We measure the hardness of metals using Brinell, Rockwell, and Vickers methods to determine wear resistance and material strength.",
    },
    {
      id: "7",
      name: "Polymer Testing",
      image: PolymerTesting,
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5-1.5-1.5-4 0-5.5s4-1.5 5.5 0l4 4c1.5 1.5 1.5 4 0 5.5s-4 1.5-5.5 0l-4-4z" />
          <path d="M10 8c-1.5-1.5-1.5-4 0-5.5s4-1.5 5.5 0l4 4c1.5 1.5 1.5 4 0 5.5s-4 1.5-5.5 0l-4-4z" />
        </svg>
      ),
      description:
        "Comprehensive analytical and mechanical testing for product development, including tensile strength, elongation, impact resistance, thermal analysis (TGA, DSC), melt flow index, FTIR, and chemical resistance.",
    },
    {
      id: "8",
      name: "RoHS, REACH & PFAS Testing",
      image: Rohs,
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
      description:
        "Ensure compliance, build trust, and access global markets with our comprehensive testing services for RoHS, REACH, and PFAS regulations.",
    },
  ];

  return (
    <Wrapper>
      <div className="section-header">
        <div className="section-tag">What We Do</div>
        <h2 className="heading">Services Our Labs Provide</h2>
        <p className="section-subtitle">
          World-class testing capabilities across the full materials spectrum
        </p>
      </div>
      <div className="container">
        <div className="cards-grid">
          {services.map((curElem, index) => {
            const { id, name, image, icon, description } = curElem;
            return (
              <ServiceCard key={id} style={{ animationDelay: `${index * 0.08}s` }}>
                <div className="card-image-wrap">
                  <img src={image} alt={name} />
                  <div className="card-overlay">
                    <div className="overlay-icon">{icon}</div>
                  </div>
                  <div className="card-number">0{id}</div>
                </div>
                <div className="card-data">
                  <div className="card-icon-sm">{icon}</div>
                  <h3>{name}</h3>
                  <p>{description}</p>
                </div>
              </ServiceCard>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Wrapper = styled.section`
  padding: 10rem 4rem;
  background: linear-gradient(180deg, #ffffff 0%, #f4f8f9 100%);

  .section-header {
    text-align: center;
    margin-bottom: 6rem;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
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

  .heading {
    font-size: clamp(3.2rem, 4vw, 4.8rem);
    color: #0d2a30;
    margin-bottom: 1.6rem;
    font-weight: 800;
    font-family: 'Outfit', sans-serif;
    letter-spacing: -0.02em;
    text-align: center;
  }

  .section-subtitle {
    font-size: 1.75rem;
    color: #5a7a82;
    opacity: 1;
    line-height: 1.6;
    margin: 0;
  }

  .container {
    max-width: 1280px;
    margin: 0 auto;
  }

  .cards-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2.8rem;
  }

  @media (max-width: 1200px) {
    .cards-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 998px) {
    padding: 8rem 2.4rem;
    .cards-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }
  }

  @media (max-width: 600px) {
    .cards-grid {
      grid-template-columns: 1fr;
    }
  }
`;

const ServiceCard = styled.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(26, 107, 90, 0.08);
  box-shadow: 0 4px 16px rgba(13, 42, 48, 0.06);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${fadeInUp} 0.6s ease both;
  display: flex;
  flex-direction: column;
  position: relative;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 24px 48px rgba(13, 42, 48, 0.16), 0 0 20px rgba(201, 168, 76, 0.15);
    border-color: rgba(201, 168, 76, 0.35);
  }

  &:hover .card-image-wrap img {
    transform: scale(1.08);
  }

  &:hover .card-overlay {
    opacity: 1;
  }

  &:hover .card-icon-sm {
    color: #c9a84c;
    border-color: rgba(201, 168, 76, 0.35);
    background: linear-gradient(135deg, rgba(201, 168, 76, 0.08), rgba(26, 107, 90, 0.08));
    box-shadow: 0 0 15px rgba(201, 168, 76, 0.2);
    transform: rotate(-3deg) scale(1.06);
  }

  .card-image-wrap {
    position: relative;
    height: 200px;
    overflow: hidden;
    flex-shrink: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      display: block;
    }
  }

  .card-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(7, 24, 32, 0.75) 0%,
      rgba(26, 107, 90, 0.6) 100%
    );
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.4s ease;

    .overlay-icon {
      color: #e8c87a;
      filter: drop-shadow(0 0 15px rgba(232, 200, 122, 0.6));
    }
  }

  .card-number {
    position: absolute;
    top: 1.2rem;
    right: 1.4rem;
    font-size: 1.1rem;
    font-weight: 800;
    color: rgba(255, 255, 255, 0.7);
    background: rgba(7, 24, 32, 0.5);
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-family: 'Outfit', sans-serif;
    letter-spacing: 0.05em;
    backdrop-filter: blur(8px);
  }

  .card-data {
    padding: 2.2rem 2.2rem 2.6rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    .card-icon-sm {
      color: #1a6b5a;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, rgba(26, 107, 90, 0.06), rgba(201, 168, 76, 0.06));
      border-radius: 14px;
      width: 52px;
      height: 52px;
      padding: 0.8rem;
      border: 1px solid rgba(26, 107, 90, 0.08);
      transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
      margin-bottom: 0.4rem;
    }

    h3 {
      font-size: 1.75rem;
      font-weight: 700;
      color: #0d2a30;
      font-family: 'Outfit', sans-serif;
      line-height: 1.35;
      letter-spacing: -0.01em;
    }

    p {
      font-size: 1.4rem;
      color: #5a7a82;
      line-height: 1.65;
      margin: 0;
      opacity: 0.9;
      flex: 1;
    }
  }
`;

export default Services;
