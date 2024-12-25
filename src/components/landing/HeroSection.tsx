import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
          alt="Parent monitoring child's online activity"
          className="w-full h-full object-cover object-center"
        />
      </div>
      
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