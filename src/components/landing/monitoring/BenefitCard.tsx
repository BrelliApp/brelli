import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
  gradient?: string;
}

const BenefitCard = ({ icon: Icon, title, description, delay = 0, gradient = "from-purple-500 to-pink-500" }: BenefitCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02 }}
      className="relative p-6 rounded-2xl overflow-hidden group"
    >
      {/* Gradient background with blur effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10 group-hover:opacity-15 transition-opacity duration-300`} />
      
      {/* Glass effect overlay */}
      <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-2xl" />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="mb-4 inline-block p-3 rounded-xl bg-white/80 shadow-sm">
          <Icon className="h-6 w-6 text-primary-foreground" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
    </motion.div>
  );
};

export default BenefitCard;