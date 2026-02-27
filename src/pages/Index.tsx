import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import SpecialtiesSection from "@/components/landing/SpecialtiesSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import CTASection from "@/components/landing/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">

      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <SpecialtiesSection />
        <TestimonialsSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
