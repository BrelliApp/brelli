import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import MonitoringSection from "@/components/landing/MonitoringSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import WaitlistSection from "@/components/landing/WaitlistSection";

const Landing = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <MonitoringSection />
        <FeaturesSection />
        <WaitlistSection />
      </main>
    </div>
  );
};

export default Landing;