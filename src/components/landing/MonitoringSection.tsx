import { Phone, Shield, Bell, Eye, Sparkles, Heart, MessageCircle, Users, Clock, Lock, BrainCircuit, IceCreamCone, Rocket, Star, Smile, Gift, PartyPopper, Trophy } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
            Proactive Protection with Brelli
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
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

                <ActivityCard 
                  icon={Sparkles}
                  text="Creative content created"
                  endIcon={Star}
                  bgColor="bg-blue-100"
                  textColor="text-blue-700"
                  delay={1.2}
                  initialX={-50}
                />

                <ActivityCard 
                  icon={Users}
                  text="Positive peer interactions"
                  endIcon={Heart}
                  bgColor="bg-indigo-100"
                  textColor="text-indigo-700"
                  delay={1.4}
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

                <ActivityCard 
                  icon={Bell}
                  text="Early warning system"
                  endIcon={Clock}
                  bgColor="bg-amber-100"
                  textColor="text-amber-700"
                  delay={1.4}
                  initialX={50}
                />

                <ActivityCard 
                  icon={MessageCircle}
                  text="Real-time chat analysis"
                  endIcon={Shield}
                  bgColor="bg-rose-100"
                  textColor="text-rose-700"
                  delay={1.6}
                  initialX={50}
                />
              </div>
            </div>
          </PhoneFrame>

          {/* Floating Features with new benefits */}
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

          <FloatingFeature 
            icon={Sparkles}
            text="Smart Learning"
            position="-left-4 bottom-1/4"
            iconColor="text-purple-600"
            initialX={-200}
            delay={1.6}
          />

          {/* Enhanced Decorative Elements */}
          <DecorativeBlob 
            color="bg-green-400/20"
            position="top-1/4 -left-32"
          />
          <DecorativeBlob 
            color="bg-blue-400/20"
            position="bottom-1/4 -right-32"
            delay={2}
          />
          <DecorativeBlob 
            color="bg-pink-400/20"
            position="center-1/2 -top-32"
            delay={1}
          />
        </div>

        {/* Additional Benefits Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-24 grid md:grid-cols-3 gap-8 text-center"
        >
          <div className="p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mb-4"
            >
              <Trophy className="h-12 w-12 mx-auto text-green-500" />
            </motion.div>
            <h3 className="text-xl font-semibold mb-2">Reward Good Behavior</h3>
            <p className="text-gray-600">Celebrate positive online interactions and responsible digital citizenship</p>
          </div>

          <div className="p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mb-4"
            >
              <BrainCircuit className="h-12 w-12 mx-auto text-blue-500" />
            </motion.div>
            <h3 className="text-xl font-semibold mb-2">Smart Prevention</h3>
            <p className="text-gray-600">AI-powered system that learns and adapts to protect your child proactively</p>
          </div>

          <div className="p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mb-4"
            >
              <Heart className="h-12 w-12 mx-auto text-pink-500" />
            </motion.div>
            <h3 className="text-xl font-semibold mb-2">Positive Growth</h3>
            <p className="text-gray-600">Foster healthy online habits while maintaining their independence</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MonitoringSection;