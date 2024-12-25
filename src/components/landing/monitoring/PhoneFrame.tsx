import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PhoneFrameProps {
  children: ReactNode;
  initialX?: number;
  delay?: number;
  rotate?: number;
}

const PhoneFrame = ({ children, initialX = -100, delay = 0.4, rotate = 2 }: PhoneFrameProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8, x: initialX }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`relative w-[280px] h-[560px] bg-gray-900 rounded-[3rem] p-4 shadow-2xl transform hover:rotate-${rotate} transition-transform duration-300`}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-gray-900 rounded-b-3xl" />
      <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
        {children}
      </div>
    </motion.div>
  );
};

export default PhoneFrame;