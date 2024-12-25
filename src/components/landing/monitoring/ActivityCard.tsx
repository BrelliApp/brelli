import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ActivityCardProps {
  icon: LucideIcon;
  text: string;
  endIcon: LucideIcon;
  bgColor: string;
  textColor: string;
  delay: number;
  initialX: number;
}

const ActivityCard = ({ icon: Icon, text, endIcon: EndIcon, bgColor, textColor, delay, initialX }: ActivityCardProps) => {
  return (
    <motion.div 
      initial={{ x: initialX, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className={`flex items-center space-x-3 p-3 ${bgColor} rounded-lg`}
    >
      <Icon className={`h-5 w-5 ${textColor}`} />
      <span className={`text-sm ${textColor}`}>{text}</span>
      <EndIcon className={`h-4 w-4 ${textColor} ml-auto animate-pulse`} />
    </motion.div>
  );
};

export default ActivityCard;