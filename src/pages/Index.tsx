import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import HeroSlider from "@/components/sections/HeroSlider";
import QuickActions from "@/components/sections/QuickActions";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import StatsSection from "@/components/sections/StatsSection";
import TeamSection from "@/components/sections/Team";
import PartnerLogos from "@/components/sections/PartnerLogos";
import Certificates from "@/components/sections/Certificates";
import PricingSection from "@/components/sections/PricingSection";
import SecontBanner from "@/components/sections/SecontBanner";
import ProtectPestSection from "@/components/sections/ProtectPestSection";
import PestServicesSection from "@/components/sections/PestServicesSection";
import ServicesSectionSecond from "@/components/sections/ServicesSectionSecond";
import SafetyStandardsSection from "@/components/sections/SafetyStandardsSection";
import PestControlSection from "@/components/sections/PestControlSection";
import BlogSection from "@/components/sections/BlogSection";
import SupportSticky from "@/components/sections/SupportSticky";
import Banner from "@/components/sections/Banner";
import ReadySoftware from "@/components/sections/ReadySoftware";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
     
      <main>
        {/* <HeroSlider /> */}
        <SupportSticky/>
        {/* <Banner/> */}
        <Hero />
        {/* <QuickActions />
        <SecontBanner/> */}
        {/* <ProtectPestSection/> */}
        <Services />
        <ReadySoftware/>
        <PartnerLogos/>
        {/* <PestServicesSection/> */}
        <AboutSection />
        <ServicesSection />
        <StatsSection />
        <ServicesSectionSecond/>
        <WhyChooseUs />
        {/* <ServiceAreas /> */}
        {/* <SafetyStandardsSection/>
        <PestControlSection/> */}
        
        <TeamSection/>
        <BlogSection/>
        <Testimonials />
        {/* <Certificates/> */}
        {/* <PricingSection/> */}
        <FAQ />
        <CTA />
      </main>
     
    </div>
  );
};

export default Index;
