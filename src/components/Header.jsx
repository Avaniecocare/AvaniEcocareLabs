import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import styled, { keyframes } from "styled-components";
import logoImg from "../assets/logo.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Main className={scrolled ? "scrolled" : ""}>
        <TopHeader>
          <TopContent>
            <span className="pulse-dot" />
            <span>⚡ FAST 1 HOUR QUOTES!</span>
            <Divider />
            <span>Call us:</span>
            <Mobile href="tel:+919910852911">+91 9910852911</Mobile>
          </TopContent>
        </TopHeader>
        <MainHeader>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <CompanyName>
              <LogoMark>
                <img src={logoImg} alt="Avani Ecocare Logo" />
              </LogoMark>
              <BrandText>
                <span className="brand-avani">Avani</span>
                <span className="brand-eco">Ecocare</span>
              </BrandText>
              <LabBadge>Labs</LabBadge>
            </CompanyName>
          </NavLink>
          <Navbar />
        </MainHeader>
      </Main>
      <Spacer />
    </>
  );
};

const pulseAnimation = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.3); }
`;

const Main = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &.scrolled {
    box-shadow: 0 10px 40px rgba(7, 24, 32, 0.45);
    
    header {
      background: rgba(7, 24, 32, 0.82) !important;
      height: 70px;
      border-bottom-color: rgba(201, 168, 76, 0.35);
      box-shadow: inset 0 -1px 0 rgba(201, 168, 76, 0.1);
    }
  }
`;

const TopHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  background: linear-gradient(90deg, #051319 0%, #0d2a30 50%, #051319 100%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
`;

const TopContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.75);
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  letter-spacing: 0.05em;

  .pulse-dot {
    width: 7px;
    height: 7px;
    background: #e8c87a;
    border-radius: 50%;
    box-shadow: 0 0 10px #e8c87a;
    animation: ${pulseAnimation} 2s ease-in-out infinite;
  }
`;

const Divider = styled.span`
  width: 1px;
  height: 12px;
  background: rgba(255, 255, 255, 0.15);
  margin: 0 0.5rem;
`;

const Mobile = styled.a`
  color: #e8c87a;
  font-weight: 700;
  text-decoration: none;
  font-size: 1.35rem;
  transition: all 0.3s ease;
  letter-spacing: 0.05em;

  &:hover {
    color: #ffffff;
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.6);
  }
`;

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 80px;
  background: rgba(7, 24, 32, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: 768px) {
    padding: 0 2rem;
    height: 74px;
  }
`;

const CompanyName = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  text-decoration: none;
`;

const LogoMark = styled.div`
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
`;

const BrandText = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.1;

  .brand-avani {
    font-size: 2rem;
    font-weight: 800;
    color: #ffffff;
    font-family: 'Outfit', sans-serif;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .brand-eco {
    font-size: 1.2rem;
    font-weight: 400;
    color: rgba(201, 168, 76, 0.9);
    font-family: 'Inter', sans-serif;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }
`;

const LabBadge = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: #071820;
  background: linear-gradient(135deg, #c9a84c, #e8c87a);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: 'Inter', sans-serif;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Spacer = styled.div`
  height: 120px;
  background: #071820;

  @media (max-width: 768px) {
    height: 114px;
  }
`;

export default Header;
