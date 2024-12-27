import { motion } from "framer-motion";
import { AlertTriangle, MessageSquare, Instagram, Youtube, Music, TwitchIcon } from "lucide-react";
import ActivityCard from "./ActivityCard";

const ProtectionStatusPhone = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6 relative overflow-hidden">
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
        <div className="flex items-center gap-3">
          <AlertTriangle className="h-6 w-6" />
          <div>
            <h3 className="text-xl font-semibold">High Priority</h3>
            <div className="mt-1 text-sm text-white/90">Critical alerts requiring attention</div>
          </div>
        </div>
      </div>
      
      <div className="flex-1 p-4 space-y-4 bg-gray-50/80 overflow-y-auto">
        <ActivityCard
          icon={Youtube}
          username="Annie"
          platform="YouTube"
          alertType="Violence"
          timestamp="2:40pm"
          delay={0.2}
          initialX={20}
        />
        
        <ActivityCard
          icon={MessageSquare}
          username="Annie"
          platform="Messages"
          alertType="Cyberbullying"
          timestamp="2:35pm"
          delay={0.4}
          initialX={20}
        />
        
        <ActivityCard
          icon={Instagram}
          username="Annie"
          platform="Instagram"
          alertType="Sexual Content"
          timestamp="2:30pm"
          delay={0.6}
          initialX={20}
        />
        
        <ActivityCard
          icon={Music}
          username="Annie"
          platform="TikTok"
          alertType="Drug/Alcohol-Related Content"
          timestamp="2:25pm"
          delay={0.8}
          initialX={20}
        />
        
        <ActivityCard
          icon={TwitchIcon}
          username="Annie"
          platform="Twitch"
          alertType="Risky app / Site usage"
          timestamp="2:20pm"
          delay={1.0}
          initialX={20}
          isNew={false}
        />
      </div>
    </div>
  );
};

export default ProtectionStatusPhone;