import { Phone, Shield, Bell, Eye, Sparkles, Heart, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const MonitoringSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-primary to-blue-50 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            How Brelli Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Real-time monitoring and protection for your children's digital life
          </motion.p>
        </div>

        <div className="relative flex justify-center items-center min-h-[600px]">
          {/* Phone Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative w-[300px] h-[600px] bg-gray-900 rounded-[3rem] p-4 shadow-2xl transform hover:rotate-2 transition-transform duration-300"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-gray-900 rounded-b-3xl" />
            <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
              {/* App Interface */}
              <div className="h-full flex flex-col">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    <h3 className="text-lg font-semibold">Brelli Protection</h3>
                  </div>
                </div>
                
                {/* Activity Feed */}
                <div className="flex-1 p-4 space-y-4">
                  <motion.div 
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex items-center space-x-3 p-3 bg-success rounded-lg"
                  >
                    <Shield className="h-5 w-5 text-success-foreground" />
                    <span className="text-sm text-success-foreground">Safe browsing detected</span>
                    <Sparkles className="h-4 w-4 text-success-foreground ml-auto animate-pulse" />
                  </motion.div>
                  
                  <motion.div 
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="flex items-center space-x-3 p-3 bg-primary rounded-lg"
                  >
                    <MessageCircle className="h-5 w-5 text-primary-foreground" />
                    <span className="text-sm text-primary-foreground">Monitoring messages</span>
                    <Heart className="h-4 w-4 text-primary-foreground ml-auto animate-bounce" />
                  </motion.div>
                  
                  <motion.div 
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="flex items-center space-x-3 p-3 bg-warning rounded-lg"
                  >
                    <Bell className="h-5 w-5 text-warning-foreground" />
                    <span className="text-sm text-warning-foreground">Screen time alert</span>
                    <Eye className="h-4 w-4 text-warning-foreground ml-auto animate-pulse" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Features */}
          <motion.div 
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="absolute -left-4 top-1/4 bg-white p-4 rounded-lg shadow-lg transform -translate-x-full hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-success-foreground" />
              <span className="text-sm font-medium">Real-time Protection</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="absolute -right-4 top-1/2 bg-white p-4 rounded-lg shadow-lg transform translate-x-full hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center space-x-2">
              <Bell className="h-6 w-6 text-primary-foreground" />
              <span className="text-sm font-medium">Instant Alerts</span>
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute -z-10 w-64 h-64 bg-success/20 rounded-full blur-3xl top-1/4 -left-32"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, -10, 10, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 2
            }}
            className="absolute -z-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl bottom-1/4 -right-32"
          />
        </div>
      </div>
    </section>
  );
};

export default MonitoringSection;