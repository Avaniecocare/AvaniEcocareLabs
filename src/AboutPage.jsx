import AboutHeroSection from "./components/AboutHeroSection";
import TeamCertification from "./components/TeamCertification";
import Contact from "./Contact";
import SEO from "./components/SEO";

const AboutPage = () => {
  return (
    <>
      <SEO 
        title="About Us | Credentials & Expertise" 
        description="Learn about Avani EcoCare Labs, our expert polymer & metal testing specialists, state-of-the-art facilities, and NABL, ISO 17025, and BIS certified credentials."
        keywords="about material lab, polymer testing experts, metal testing team, lab credentials, NABL certified labs, ISO 17025 accreditation, BIS standard compliance"
      />
      <AboutHeroSection />
      <TeamCertification />
      <Contact />
    </>
  );
};

export default AboutPage;
