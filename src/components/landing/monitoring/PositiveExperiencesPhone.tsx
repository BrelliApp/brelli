import { motion } from "framer-motion";
import { Bell, MessageSquare, AlertTriangle, Shield, Clock, Users, Hash } from "lucide-react";
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
          <h3 className="text-lg font-semibold">Recent Activities</h3>
        </div>
        <div className="mt-2 text-sm text-white/80">Real-time monitoring</div>
      </div>
      
      <div className="flex-1 p-4 space-y-3 bg-gray-50 overflow-y-auto">
        <ActivityCard
          icon={MessageSquare}
          text="New message detected on Instagram"
          endIcon={Clock}
          bgColor="bg-white"
          textColor="text-blue-600"
          delay={0.2}
          initialX={-20}
        />
        
        <ActivityCard
          icon={AlertTriangle}
          text="Potential cyberbullying detected"
          endIcon={Shield}
          bgColor="bg-red-50"
          textColor="text-red-600"
          delay={0.4}
          initialX={-20}
        />
        
        <ActivityCard
          icon={Users}
          text="New follower request on TikTok"
          endIcon={Clock}
          bgColor="bg-white"
          textColor="text-purple-600"
          delay={0.6}
          initialX={-20}
        />
        
        <ActivityCard
          icon={Hash}
          text="Trending hashtag interaction"
          endIcon={Clock}
          bgColor="bg-white"
          textColor="text-green-600"
          delay={0.8}
          initialX={-20}
        />
        
        <ActivityCard
          icon={Shield}
          text="Content filtered: inappropriate link"
          endIcon={Clock}
          bgColor="bg-yellow-50"
          textColor="text-yellow-700"
          delay={1.0}
          initialX={-20}
        />
      </div>
    </div>
  );
};

export default PositiveExperiencesPhone;