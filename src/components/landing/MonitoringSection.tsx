import { Phone, Shield, Bell, Eye, Sparkles, Heart, MessageCircle, Users, Clock, Lock, BrainCircuit, IceCreamCone, Rocket, Star } from "lucide-react";
import { motion } from "framer-motion";
import PhoneFrame from "./monitoring/PhoneFrame";
import ActivityCard from "./monitoring/ActivityCard";
import FloatingFeature from "./monitoring/FloatingFeature";
import DecorativeBlob from "./monitoring/DecorativeBlob";

const MonitoringSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-primary to-blue-50 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            How Brelli Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Real-time monitoring and protection for your children's digital life
          </motion.p>
        </div>

        <div className="relative flex justify-center items-center min-h-[600px] gap-8">
          {/* Activity Monitor Phone */}
          <PhoneFrame>
            <div className="h-full flex flex-col">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  <h3 className="text-lg font-semibold">Activity Monitor</h3>
                </div>
              </div>
              
              <div className="flex-1 p-4 space-y-4">
                <ActivityCard 
                  icon={Shield}
                  text="Safe browsing detected"
                  endIcon={Sparkles}
                  bgColor="bg-success"
                  textColor="text-success-foreground"
                  delay={0.6}
                  initialX={-50}
                />
                
                <ActivityCard 
                  icon={MessageCircle}
                  text="Monitoring messages"
                  endIcon={Heart}
                  bgColor="bg-primary"
                  textColor="text-primary-foreground"
                  delay={0.8}
                  initialX={-50}
                />
                
                <ActivityCard 
                  icon={Bell}
                  text="Screen time alert"
                  endIcon={Eye}
                  bgColor="bg-warning"
                  textColor="text-warning-foreground"
                  delay={1}
                  initialX={-50}
                />

                <ActivityCard 
                  icon={Users}
                  text="New friend request detected"
                  endIcon={Shield}
                  bgColor="bg-blue-100"
                  textColor="text-blue-700"
                  delay={1.2}
                  initialX={-50}
                />

                <ActivityCard 
                  icon={IceCreamCone}
                  text="Reward earned: Good behavior!"
                  endIcon={Star}
                  bgColor="bg-pink-100"
                  textColor="text-pink-700"
                  delay={1.4}
                  initialX={-50}
                />
              </div>
            </div>
          </PhoneFrame>

          {/* Smart Protection Phone */}
          <PhoneFrame initialX={100} delay={0.6} rotate={-2}>
            <div className="h-full flex flex-col">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-4">
                <div className="flex items-center gap-2">
                  <BrainCircuit className="h-5 w-5" />
                  <h3 className="text-lg font-semibold">Smart Protection</h3>
                </div>
              </div>
              
              <div className="flex-1 p-4 space-y-4">
                <ActivityCard 
                  icon={Lock}
                  text="AI-powered content filtering"
                  endIcon={BrainCircuit}
                  bgColor="bg-purple-100"
                  textColor="text-purple-700"
                  delay={0.8}
                  initialX={50}
                />

                <ActivityCard 
                  icon={Clock}
                  text="Screen time management"
                  endIcon={Eye}
                  bgColor="bg-pink-100"
                  textColor="text-pink-700"
                  delay={1}
                  initialX={50}
                />

                <ActivityCard 
                  icon={MessageCircle}
                  text="Cyberbullying detection"
                  endIcon={Shield}
                  bgColor="bg-green-100"
                  textColor="text-green-700"
                  delay={1.2}
                  initialX={50}
                />

                <ActivityCard 
                  icon={Users}
                  text="Contact monitoring"
                  endIcon={Heart}
                  bgColor="bg-orange-100"
                  textColor="text-orange-700"
                  delay={1.4}
                  initialX={50}
                />

                <ActivityCard 
                  icon={Rocket}
                  text="Learning progress tracked"
                  endIcon={Star}
                  bgColor="bg-blue-100"
                  textColor="text-blue-700"
                  delay={1.6}
                  initialX={50}
                />
              </div>
            </div>
          </PhoneFrame>

          {/* Floating Features */}
          <FloatingFeature 
            icon={Shield}
            text="Real-time Protection"
            position="-left-4 top-1/4"
            iconColor="text-success-foreground"
            initialX={-200}
            delay={1.2}
          />

          <FloatingFeature 
            icon={BrainCircuit}
            text="AI-Powered Safety"
            position="-right-4 top-1/2"
            iconColor="text-purple-600"
            initialX={200}
            delay={1.4}
          />

          {/* Decorative Elements */}
          <DecorativeBlob 
            color="bg-success/20"
            position="top-1/4 -left-32"
          />
          <DecorativeBlob 
            color="bg-purple-400/20"
            position="bottom-1/4 -right-32"
            delay={2}
          />
        </div>
      </div>
    </section>
  );
};

export default MonitoringSection;