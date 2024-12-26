import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FloatingFeatureProps {
  icon: LucideIcon;
  text: string;
  position: string;
  iconColor: string;
  initialX: number;
  delay: number;
  rotate?: number;
}

const FloatingFeature = ({ 
  icon: Icon, 
  text, 
  position, 
  iconColor, 
  initialX, 
  delay,
  rotate = 0 
}: FloatingFeatureProps) => {
  return (
    <motion.div 
      initial={{ x: initialX, opacity: 0, rotate }}
      whileInView={{ x: 0, opacity: 1, rotate }}
      whileHover={{ scale: 1.05, rotate: rotate + 2 }}
      transition={{ duration: 0.5, delay }}
      className={`absolute ${position} bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg transform transition-transform duration-300 cursor-pointer`}
    >
      <div className="flex items-center space-x-2">
        <Icon className={`h-6 w-6 ${iconColor}`} />
        <span className="text-sm font-medium">{text}</span>
      </div>
    </motion.div>
  );
};

export default FloatingFeature;