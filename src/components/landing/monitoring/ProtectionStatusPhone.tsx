import { motion } from "framer-motion";
import { Bell, AlertTriangle, Shield, MessageSquare, Users, Eye, Clock } from "lucide-react";
import ActivityCard from "./ActivityCard";

const ProtectionStatusPhone = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-4 relative overflow-hidden">
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
          <AlertTriangle className="h-5 w-5" />
          <h3 className="text-lg font-semibold">Safety Alerts</h3>
        </div>
        <div className="mt-2 text-sm text-white/80">High priority notifications</div>
      </div>
      
      <div className="flex-1 p-4 space-y-3 bg-gray-50 overflow-y-auto">
        <ActivityCard
          icon={AlertTriangle}
          text="Suspicious adult interaction detected"
          endIcon={Shield}
          bgColor="bg-red-50"
          textColor="text-red-600"
          delay={0.2}
          initialX={20}
        />
        
        <ActivityCard
          icon={MessageSquare}
          text="Personal information sharing attempt"
          endIcon={Eye}
          bgColor="bg-orange-50"
          textColor="text-orange-600"
          delay={0.4}
          initialX={20}
        />
        
        <ActivityCard
          icon={Users}
          text="Multiple unknown friend requests"
          endIcon={Shield}
          bgColor="bg-yellow-50"
          textColor="text-yellow-700"
          delay={0.6}
          initialX={20}
        />
        
        <ActivityCard
          icon={Shield}
          text="Cyberbullying keywords detected"
          endIcon={Clock}
          bgColor="bg-purple-50"
          textColor="text-purple-600"
          delay={0.8}
          initialX={20}
        />
        
        <ActivityCard
          icon={Eye}
          text="Unusual late-night activity pattern"
          endIcon={Clock}
          bgColor="bg-blue-50"
          textColor="text-blue-600"
          delay={1.0}
          initialX={20}
        />
      </div>
    </div>
  );
};

export default ProtectionStatusPhone;