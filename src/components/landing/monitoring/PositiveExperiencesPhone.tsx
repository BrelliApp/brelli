import { motion } from "framer-motion";
import { Bell, Music, Youtube, MessageSquare, Instagram, AlertTriangle } from "lucide-react";

import ActivityCard from "./ActivityCard";

const PositiveExperiencesPhone = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-white/10"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
            opacity: [0, 0.3, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <div className="flex items-center gap-2">
          <Bell className="h-5 w-5" />
          <h3 className="text-lg font-semibold">Activity Feed</h3>
        </div>
        <div className="mt-2 text-sm text-white/80">Real-time monitoring</div>
      </div>
      
      <div className="flex-1 p-4 space-y-3 bg-gray-50 overflow-y-auto">
        <ActivityCard
          icon={Music}
          username="annabanana1203"
          platform="annabanana1203@mail.com"
          alertType="Drug/Alcohol-Related Content"
          timestamp="2:40pm • Apr. 29"
          delay={0.2}
          initialX={-20}
        />
        
        <ActivityCard
          icon={Youtube}
          username="Annie"
          platform="annderoo22"
          alertType="Violence"
          timestamp="2:40pm • Apr. 29"
          delay={0.4}
          initialX={-20}
        />
        
        <ActivityCard
          icon={MessageSquare}
          username="Annie"
          platform="annderoo22"
          alertType="Risky app / Site usage"
          timestamp="2:40pm • Apr. 29"
          delay={0.6}
          initialX={-20}
        />
        
        <ActivityCard
          icon={AlertTriangle}
          username="Annie"
          platform="annie_smith_1824"
          alertType="Cyberbullying"
          timestamp="2:40pm • Apr. 29"
          delay={0.8}
          initialX={-20}
        />
        
        <ActivityCard
          icon={Instagram}
          username="Annie"
          platform="annie_was_here"
          alertType="Sexual Content"
          timestamp="2:40pm • Apr. 29"
          delay={1.0}
          initialX={-20}
        />
      </div>
    </div>
  );
};

export default PositiveExperiencesPhone;