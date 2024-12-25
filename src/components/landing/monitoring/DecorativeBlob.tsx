import { motion } from "framer-motion";

interface DecorativeBlobProps {
  color: string;
  position: string;
  delay?: number;
}

const DecorativeBlob = ({ color, position, delay = 0 }: DecorativeBlobProps) => {
  return (
    <motion.div 
      animate={{ 
        scale: [1, 1.2, 1],
        rotate: [0, 10, -10, 0]
      }}
      transition={{ 
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        delay
      }}
      className={`absolute -z-10 w-64 h-64 ${color} rounded-full blur-3xl ${position}`}
    />
  );
};

export default DecorativeBlob;