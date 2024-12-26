import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import DecorativeBlob from "./monitoring/DecorativeBlob";

const HeroSection = () => {
  const { t } = useTranslation('landing');

  const scrollToWaitlist = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('waitlist')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-gray-50/50 to-white">
      <DecorativeBlob 
        color="bg-blue-400/30"
        position="-top-64 -left-32"
      />
      <DecorativeBlob 
        color="bg-green-400/30"
        position="-top-32 right-0"
        delay={2}
      />
      <DecorativeBlob 
        color="bg-yellow-400/30"
        position="bottom-0 left-1/3"
        delay={4}
      />
      
      <div className="container mx-auto px-4 max-w-5xl relative z-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
            onClick={scrollToWaitlist}
          >
            {t('hero.joinWaitlist')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;