import { motion } from "framer-motion";

const ScrollSection = () => {
  return (
    <div className="py-24 relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-br from-primary/10 via-success/10 to-warning/10 blur-3xl"
      />
    </div>
  );
};

export default ScrollSection;