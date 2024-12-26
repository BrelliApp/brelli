import Header from "@/components/landing/Header";
import Banner from "@/components/landing/Banner";
import HeroSection from "@/components/landing/HeroSection";
import MonitoringSection from "@/components/landing/MonitoringSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import WaitlistSection from "@/components/landing/WaitlistSection";

const Landing = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Banner />
      <main>
        <HeroSection />
        <MonitoringSection />
        <WaitlistSection />
        <FeaturesSection />
      </main>
    </div>
  );
};

export default Landing;