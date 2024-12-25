import { motion } from "framer-motion";

interface DecorativeBlobProps {
  color: string;
  position: string;
  delay?: number;
}

const DecorativeBlob = ({ color, position, delay = 0 }: DecorativeBlobProps) => {
  return (
    <motion.div 
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ 
        scale: [0.8, 1.2, 0.9],
        opacity: [0.4, 0.7, 0.4],
        rotate: [0, 15, -15, 0]
      }}
      transition={{ 
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse",
        delay,
        ease: "easeInOut"
      }}
      className={`absolute ${color} rounded-full filter blur-3xl ${position} w-[500px] h-[500px]`}
    />
  );
};

export default DecorativeBlob;