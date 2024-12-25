import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FloatingFeatureProps {
  icon: LucideIcon;
  text: string;
  position: string;
  iconColor: string;
  initialX: number;
  delay: number;
}

const FloatingFeature = ({ icon: Icon, text, position, iconColor, initialX, delay }: FloatingFeatureProps) => {
  return (
    <motion.div 
      initial={{ x: initialX, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className={`absolute ${position} bg-white p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300`}
    >
      <div className="flex items-center space-x-2">
        <Icon className={`h-6 w-6 ${iconColor}`} />
        <span className="text-sm font-medium">{text}</span>
      </div>
    </motion.div>
  );
};

export default FloatingFeature;