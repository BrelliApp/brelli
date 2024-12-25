import { motion } from "framer-motion";
import { Star, Trophy, Heart, Sparkles } from "lucide-react";
import BenefitCard from "./BenefitCard";

const ScrollSection = () => {
  const benefits = [
    {
      icon: Star,
      title: "Smart Learning",
      description: "AI-powered system that learns and adapts to your child's online behavior",
      gradient: "from-blue-500 to-cyan-500",
      delay: 0.2
    },
    {
      icon: Trophy,
      title: "Achievement System",
      description: "Celebrate positive online interactions and responsible digital citizenship",
      gradient: "from-green-500 to-emerald-500",
      delay: 0.4
    },
    {
      icon: Heart,
      title: "Family Trust",
      description: "Build stronger relationships through transparency and communication",
      gradient: "from-pink-500 to-rose-500",
      delay: 0.6
    },
    {
      icon: Sparkles,
      title: "Positive Growth",
      description: "Foster healthy online habits while maintaining independence",
      gradient: "from-purple-500 to-indigo-500",
      delay: 0.8
    }
  ];

  return (
    <div className="py-24 relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-br from-primary/10 via-success/10 to-warning/10 blur-3xl"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollSection;