import styled from "styled-components";
import isoLogo from "../assets/isologo.png";
import isoLogo2 from "../assets/isologo1.png";
import nablLogo from "../assets/nabllogo.png";
import bisLogo from "../assets/IMAGES/image.png";

const badges = [
  { icon: "✅", label: "ISO 17025" },
  { icon: "🏅", label: "NABL Accredited" },
  { icon: "🇮🇳", label: "BIS Approved" },
  { icon: "🌍", label: "Global Standards" },
];

const logos = [
  { src: isoLogo,  alt: "ISO 17025 Logo" },
  { src: isoLogo2, alt: "ISO Logo" },
  { src: nablLogo, alt: "NABL Accreditation Logo" },
  { src: bisLogo,  alt: "Bureau of Indian Standards Logo" },
];

const TeamCertification = () => {
  return (
    <Section>
      <div className="cert-inner">

        {/* Left: text + badge pills */}
        <div className="cert-text">
          <div className="section-tag">Credentials</div>
          <h2>Our Labs are Certified!</h2>
          <p>
            We support our clients in their New Product Development activities
            by providing engineering, testing, and homologation services that
            fit their needs. All testing is performed to internationally
            recognised standards.
          </p>
          <div className="cert-badges">
            {badges.map(({ icon, label }) => (
              <div className="cert-badge" key={label}>
                <span className="cert-badge-icon">{icon}</span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: 2×2 logo grid */}
        <div className="cert-logos">
          <div className="logos-title">Certified &amp; Approved By</div>
          <div className="logo-grid">
            {logos.map(({ src, alt }) => (
              <LogoCard key={alt}>
                <img src={src} alt={alt} loading="lazy" />
              </LogoCard>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
};

/* ─── Styled Components ────────────────────────────────────────────── */

const Section = styled.section`
  padding: 8rem 4rem;
  background: linear-gradient(135deg, #071820 0%, #0d2a30 60%, #1a3a42 100%);
  position: relative;
  overflow: hidden;

  /* Subtle ambient glows */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse at 20% 50%, rgba(201, 168, 76, 0.08) 0%, transparent 60%),
      radial-gradient(ellipse at 80% 20%, rgba(26, 107, 90, 0.10) 0%, transparent 60%);
    pointer-events: none;
  }

  /* ── Layout ── */
  .cert-inner {
    position: relative;
    z-index: 1;
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
    align-items: center;
  }

  /* ── Text column ── */
  .cert-text {
    .section-tag {
      display: inline-flex;
      align-items: center;
      font-size: 1.25rem;
      font-weight: 600;
      color: #e8c87a;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 1.6rem;
      font-family: "Inter", sans-serif;

      &::before {
        content: "";
        width: 28px;
        height: 2px;
        background: linear-gradient(90deg, #c9a84c, transparent);
        margin-right: 1.2rem;
        border-radius: 2px;
      }
    }

    h2 {
      font-size: clamp(2.8rem, 4vw, 4.2rem);
      font-weight: 800;
      color: #ffffff;
      font-family: "Outfit", sans-serif;
      letter-spacing: -0.02em;
      text-align: left;
      margin-bottom: 2rem;
      line-height: 1.2;
    }

    p {
      font-size: 1.6rem;
      color: rgba(255, 255, 255, 0.65);
      line-height: 1.8;
      margin-bottom: 3rem;
      opacity: 1;
    }

    .cert-badges {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .cert-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.8rem;
      padding: 0.7rem 1.6rem;
      border-radius: 50px;
      font-size: 1.3rem;
      font-weight: 500;
      font-family: "Inter", sans-serif;
      color: rgba(255, 255, 255, 0.85);
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(201, 168, 76, 0.25);
      -webkit-backdrop-filter: blur(8px);
      backdrop-filter: blur(8px);
      transition: background 0.25s ease, border-color 0.25s ease, color 0.25s ease;

      &:hover {
        background: rgba(201, 168, 76, 0.1);
        border-color: rgba(201, 168, 76, 0.5);
        color: #e8c87a;
      }

      .cert-badge-icon {
        font-size: 1.4rem;
        line-height: 1;
      }
    }
  }

  /* ── Logo column ── */
  .cert-logos {
    .logos-title {
      font-size: 1.2rem;
      font-weight: 600;
      color: rgba(255, 255, 255, 0.4);
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 2.4rem;
      font-family: "Inter", sans-serif;
      text-align: center;
    }

    .logo-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.6rem;
      max-width: 360px;
      margin: 0 auto;
    }
  }

  /* ── Tablet & Mobile ── */
  @media (max-width: 998px) {
    padding: 8rem 2.4rem 6rem;

    .cert-inner {
      grid-template-columns: 1fr;
      gap: 4rem;
      text-align: center;
    }

    .cert-text {
      .section-tag {
        justify-content: center;
        &::before { display: none; }
      }

      h2 { text-align: center; }

      .cert-badges { justify-content: center; }
    }

    .cert-logos .logo-grid {
      max-width: 340px;
      gap: 1.6rem;
    }
  }

  @media (max-width: 480px) {
    .cert-logos .logo-grid {
      max-width: 300px;
      gap: 1.4rem;
    }
  }
`;

const LogoCard = styled.div`
  aspect-ratio: 1;
  background: #ffffff;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.6rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;

  @media (max-width: 480px) {
    padding: 1.2rem;
    border-radius: 14px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-6px) scale(1.04);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
    border-color: rgba(201, 168, 76, 0.5);

    img { transform: scale(1.06); }
  }
`;

export default TeamCertification;
