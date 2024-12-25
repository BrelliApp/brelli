import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import DecorativeBlob from "./monitoring/DecorativeBlob";

const HeroSection = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-gray-50/50 to-white">
      {/* Decorative animated blobs */}
      <DecorativeBlob 
        color="bg-primary/30"
        position="-top-32 -left-32"
      />
      <DecorativeBlob 
        color="bg-success/30"
        position="top-0 right-0"
        delay={1}
      />
      <DecorativeBlob 
        color="bg-warning/30"
        position="bottom-0 left-1/4"
        delay={2}
      />
      
      <div className="container mx-auto px-4 max-w-5xl relative z-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Protect Your Children Online
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Monitor and protect your children's social media activity with our comprehensive parental control solution.
          </p>
          <Link to="/auth">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
              Start Protecting Today
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;