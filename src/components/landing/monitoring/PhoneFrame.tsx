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
      className="relative"
    >
      {/* Decorative elements */}
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-[3rem] blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded-[3rem] blur-lg" />
      
      {/* Main phone frame */}
      <div className={`relative w-[320px] h-[640px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-[3rem] p-4 shadow-2xl transform hover:rotate-${rotate} transition-all duration-300 hover:scale-105`}>
        {/* Camera notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-black rounded-b-3xl overflow-hidden">
          <div className="absolute top-1 left-1/2 -translate-x-1/2 w-16 h-3 bg-gray-900 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-gray-800 rounded-full" />
          </div>
        </div>
        
        {/* Screen content */}
        <div className="relative w-full h-full bg-white rounded-[2.5rem] overflow-hidden shadow-inner">
          {/* Status bar */}
          <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-r from-gray-100 to-gray-50 flex items-center justify-between px-6 text-xs text-gray-600 z-10">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <div className="w-4 h-2 bg-gray-600 rounded-sm" />
              <div className="w-3 h-3 border-2 border-gray-600 rounded-full" />
            </div>
          </div>
          
          {children}
          
          {/* Home indicator */}
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-300 rounded-full" />
        </div>
      </div>
      
      {/* Reflections */}
      <div className="absolute -right-4 top-1/4 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl" />
      <div className="absolute -left-4 bottom-1/4 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl" />
    </motion.div>
  );
};

export default PhoneFrame;