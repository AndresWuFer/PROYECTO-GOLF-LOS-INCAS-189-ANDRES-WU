import { useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProjectOverview from "./components/ProjectOverview";
import MasterPlanSection from "./components/MasterPlanSection";
import AmenitiesSection from "./components/AmenitiesSection";
import FinishesSection from "./components/FinishesSection";
import BenefitsSection from "./components/BenefitsSection";
import LocationSection from "./components/LocationSection";
import VideoShowcaseSection from "./components/VideoShowcaseSection";
import TourSection from "./components/TourSection";
import VirtualTour3DSection from "./components/VirtualTour3DSection";
import GallerySection from "./components/GallerySection";
import UnitTypesSection from "./components/UnitTypesSection";
import InvestmentSection from "./components/InvestmentSection";
import LeadFormSection from "./components/LeadFormSection";
import TestimonialsOrTrustSection from "./components/TestimonialsOrTrustSection";
import Footer from "./components/Footer";
import ContactStickyBar from "./components/ContactStickyBar";
import { projectConfig } from "./config/projectConfig";
import useScrollReveal from "./hooks/useScrollReveal";
import "./components/Navbar.css";
import "./components/HeroSection.css";
import "./components/ProjectOverview.css";
import "./components/MasterPlanSection.css";
import "./components/AmenitiesSection.css";
import "./components/FinishesSection.css";
import "./components/BenefitsSection.css";
import "./components/LocationSection.css";
import "./components/VideoShowcaseSection.css";
import "./components/TourSection.css";
import "./components/VirtualTour3DSection.css";
import "./components/GallerySection.css";
import "./components/BlueprintPlaceholder.css";
import "./components/UnitTypesSection.css";
import "./components/InvestmentSection.css";
import "./components/LeadFormSection.css";
import "./components/TestimonialsOrTrustSection.css";
import "./components/Footer.css";
import "./components/ContactStickyBar.css";
import "./components/SectionIntro.css";

function App() {
  useScrollReveal();

  useEffect(() => {
    document.title = projectConfig.seo.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", projectConfig.seo.description);
    }
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProjectOverview />
        <MasterPlanSection />
        <AmenitiesSection />
        <FinishesSection />
        <BenefitsSection />
        <LocationSection />
        <VideoShowcaseSection />
        <TourSection />
        <VirtualTour3DSection />
        <GallerySection />
        <UnitTypesSection />
        <InvestmentSection />
        <LeadFormSection />
        <TestimonialsOrTrustSection />
      </main>
      <Footer />
      <ContactStickyBar />
    </>
  );
}

export default App;
