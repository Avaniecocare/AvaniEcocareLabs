import { LuArrowRight } from "react-icons/lu";
import Hero from "../components/sections/Hero";
import UseCaseStrip from "../components/sections/UseCaseStrip";
import ServiceGrid from "../components/sections/ServiceGrid";
import BisSection from "../components/sections/BisSection";
import WhyUs from "../components/sections/WhyUs";
import Process from "../components/sections/Process";
import Testimonials from "../components/sections/Testimonials";
import FaqSection from "../components/sections/FaqSection";
import CtaBand from "../components/sections/CtaBand";
import SectionHeader from "../components/ui/SectionHeader";
import Button from "../components/ui/Button";
import { useSeo } from "../lib/useSeo.js";

export default function Home() {
  useSeo({ path: "/" });

  return (
    <>
      <Hero />
      <UseCaseStrip />

      <section className="section" aria-labelledby="services-title">
        <div className="container">
          <SectionHeader
            id="services-title"
            eyebrow="Testing services"
            title="Six material categories, one laboratory"
            intro="Choose a category to see the full list of tests we carry out."
            action={
              <Button to="/services" variant="secondary" icon={LuArrowRight}>
                All services
              </Button>
            }
          />
          <ServiceGrid />
        </div>
      </section>

      <BisSection />
      <WhyUs />
      <Process />
      <Testimonials />
      <FaqSection />
      <CtaBand />
    </>
  );
}
