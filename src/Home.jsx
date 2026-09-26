import { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "./context";
import Services from "./Services";
import Contact from "./Contact";
import TeamCertification from "./components/TeamCertification";
import IndustriesSection from "./components/IndustriesSection";
import AboutHeroSection from "./components/AboutHeroSection";
import SEO from "./components/SEO";

const Home = () => {
  const { updateHomePage } = useGlobalContext();

  useEffect(() => updateHomePage(), []);

  return (
    <>
      <SEO 
        description="Avani EcoCare Labs is a premier ISO 17025, NABL & BIS accredited laboratory in Greater Noida offering precision chemical, mechanical, metallurgical, and polymer testing."
        keywords="materials testing, polymer testing, metal testing, chemical analysis, mechanical testing, NABL lab Greater Noida, ISO 17025 lab, BIS certified, ISI mark testing"
      />
      <HeroSection />
      <AboutHeroSection />
      <Services />
      <IndustriesSection />
      <TeamCertification />
      <Contact />
    </>
  );
};

export default Home;
