import { motion } from "framer-motion";
import PhoneFrame from "./monitoring/PhoneFrame";
import ActivityCard from "./monitoring/ActivityCard";
import FloatingFeature from "./monitoring/FloatingFeature";
import DecorativeBlob from "./monitoring/DecorativeBlob";
import FeatureShowcase from "./monitoring/FeatureShowcase";
import ScrollSection from "./monitoring/ScrollSection";
import { Shield, Bell, Eye, Sparkles, Heart, MessageCircle, Users, Clock, Lock, BrainCircuit, Trophy, Star, Smile, Gift, PartyPopper } from "lucide-react";

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
            Proactive Protection with Brelli
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Stay ahead of potential risks while celebrating your child's positive online experiences
          </motion.p>
        </div>

        <div className="relative flex justify-center items-center min-h-[600px] gap-8">
          {/* Positive Experiences Phone */}
          <PhoneFrame>
            <div className="h-full flex flex-col">
              <div className="bg-gradient-to-r from-green-400 to-green-500 text-white p-4">
                <div className="flex items-center gap-2">
                  <Trophy className="h-5 w-5" />
                  <h3 className="text-lg font-semibold">Positive Moments</h3>
                </div>
              </div>
              
              <div className="flex-1 p-4 space-y-4">
                <ActivityCard 
                  icon={Star}
                  text="Educational content viewed"
                  endIcon={Trophy}
                  bgColor="bg-green-100"
                  textColor="text-green-700"
                  delay={0.6}
                  initialX={-50}
                />
                
                <ActivityCard 
                  icon={Heart}
                  text="Shared kind messages"
                  endIcon={Smile}
                  bgColor="bg-pink-100"
                  textColor="text-pink-700"
                  delay={0.8}
                  initialX={-50}
                />
                
                <ActivityCard 
                  icon={Gift}
                  text="Digital citizenship reward"
                  endIcon={PartyPopper}
                  bgColor="bg-purple-100"
                  textColor="text-purple-700"
                  delay={1}
                  initialX={-50}
                />
              </div>
            </div>
          </PhoneFrame>

          {/* Proactive Protection Phone */}
          <PhoneFrame initialX={100} delay={0.6} rotate={-2}>
            <div className="h-full flex flex-col">
              <div className="bg-gradient-to-r from-blue-400 to-blue-500 text-white p-4">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  <h3 className="text-lg font-semibold">Proactive Protection</h3>
                </div>
              </div>
              
              <div className="flex-1 p-4 space-y-4">
                <ActivityCard 
                  icon={BrainCircuit}
                  text="AI learning patterns detected"
                  endIcon={Sparkles}
                  bgColor="bg-cyan-100"
                  textColor="text-cyan-700"
                  delay={0.8}
                  initialX={50}
                />

                <ActivityCard 
                  icon={Lock}
                  text="Preventive measures active"
                  endIcon={Shield}
                  bgColor="bg-teal-100"
                  textColor="text-teal-700"
                  delay={1}
                  initialX={50}
                />

                <ActivityCard 
                  icon={Eye}
                  text="Smart content filtering"
                  endIcon={BrainCircuit}
                  bgColor="bg-emerald-100"
                  textColor="text-emerald-700"
                  delay={1.2}
                  initialX={50}
                />
              </div>
            </div>
          </PhoneFrame>

          {/* Floating Features */}
          <FloatingFeature 
            icon={Trophy}
            text="Reward System"
            position="-left-4 top-1/4"
            iconColor="text-green-600"
            initialX={-200}
            delay={1.2}
          />

          <FloatingFeature 
            icon={Heart}
            text="Positive Reinforcement"
            position="-right-4 top-1/2"
            iconColor="text-pink-600"
            initialX={200}
            delay={1.4}
          />

          {/* Decorative Elements */}
          <DecorativeBlob 
            color="bg-green-400/20"
            position="top-1/4 -left-32"
          />
          <DecorativeBlob 
            color="bg-blue-400/20"
            position="bottom-1/4 -right-32"
            delay={2}
          />
        </div>

        {/* Feature Showcase */}
        <FeatureShowcase />

        {/* Scrolling Benefits Section */}
        <ScrollSection />
      </div>
    </section>
  );
};

export default MonitoringSection;