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
              <div className="bg-gradient-to-r from-green-400 to-green-500 text-white p-4 relative overflow-hidden">
                <motion.div 
                  className="absolute inset-0 bg-white/10"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                    opacity: [0, 0.3, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <div className="flex items-center gap-2">
                  <Trophy className="h-5 w-5" />
                  <h3 className="text-lg font-semibold">Positive Moments</h3>
                </div>
                <div className="mt-2 text-sm text-white/80">Today's Highlights</div>
              </div>
              
              <div className="flex-1 p-4 space-y-4 bg-gradient-to-b from-green-50 to-white">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-xl p-4 shadow-lg"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="bg-green-100 p-2 rounded-lg">
                        <Star className="h-5 w-5 text-green-600" />
                      </div>
                      <span className="font-medium">Educational Achievement</span>
                    </div>
                    <Trophy className="h-5 w-5 text-yellow-500" />
                  </div>
                  <p className="text-sm text-gray-600">Completed an online learning course</p>
                  <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>2 hours ago</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-white rounded-xl p-4 shadow-lg"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="bg-pink-100 p-2 rounded-lg">
                        <Heart className="h-5 w-5 text-pink-600" />
                      </div>
                      <span className="font-medium">Kind Interaction</span>
                    </div>
                    <Smile className="h-5 w-5 text-yellow-500" />
                  </div>
                  <p className="text-sm text-gray-600">Sent encouraging messages to friends</p>
                  <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>1 hour ago</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-white rounded-xl p-4 shadow-lg"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="bg-purple-100 p-2 rounded-lg">
                        <Gift className="h-5 w-5 text-purple-600" />
                      </div>
                      <span className="font-medium">Digital Achievement</span>
                    </div>
                    <PartyPopper className="h-5 w-5 text-yellow-500" />
                  </div>
                  <p className="text-sm text-gray-600">Earned responsible usage badge</p>
                  <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>30 minutes ago</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </PhoneFrame>

          {/* Proactive Protection Phone */}
          <PhoneFrame initialX={100} delay={0.6} rotate={-2}>
            <div className="h-full flex flex-col">
              <div className="bg-gradient-to-r from-blue-400 to-blue-500 text-white p-4 relative overflow-hidden">
                <motion.div 
                  className="absolute inset-0 bg-white/10"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                    opacity: [0, 0.3, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  <h3 className="text-lg font-semibold">Protection Status</h3>
                </div>
                <div className="mt-2 text-sm text-white/80">All Systems Active</div>
              </div>
              
              <div className="flex-1 p-4 space-y-4 bg-gradient-to-b from-blue-50 to-white">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="relative bg-white rounded-xl p-4 shadow-lg overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-100 rounded-full -translate-y-1/2 translate-x-1/2 blur-xl" />
                  <div className="relative">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="bg-cyan-100 p-2 rounded-lg">
                          <BrainCircuit className="h-5 w-5 text-cyan-600" />
                        </div>
                        <span className="font-medium">AI Monitoring</span>
                      </div>
                      <Sparkles className="h-5 w-5 text-cyan-500" />
                    </div>
                    <div className="mt-2">
                      <div className="h-2 bg-cyan-100 rounded-full">
                        <motion.div 
                          className="h-full w-3/4 bg-cyan-500 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: "75%" }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </div>
                      <p className="mt-2 text-sm text-gray-600">Pattern analysis active</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-white rounded-xl p-4 shadow-lg"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="bg-teal-100 p-2 rounded-lg">
                        <Lock className="h-5 w-5 text-teal-600" />
                      </div>
                      <span className="font-medium">Security Status</span>
                    </div>
                    <Shield className="h-5 w-5 text-teal-500" />
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <div className="bg-teal-50 p-2 rounded-lg text-center">
                      <div className="text-sm font-medium text-teal-700">Content</div>
                      <div className="text-xs text-teal-600">Protected</div>
                    </div>
                    <div className="bg-teal-50 p-2 rounded-lg text-center">
                      <div className="text-sm font-medium text-teal-700">Privacy</div>
                      <div className="text-xs text-teal-600">Secured</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-white rounded-xl p-4 shadow-lg"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="bg-emerald-100 p-2 rounded-lg">
                        <Eye className="h-5 w-5 text-emerald-600" />
                      </div>
                      <span className="font-medium">Content Filter</span>
                    </div>
                    <BrainCircuit className="h-5 w-5 text-emerald-500" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Images</span>
                      <span className="text-emerald-600">Active</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Messages</span>
                      <span className="text-emerald-600">Active</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Links</span>
                      <span className="text-emerald-600">Active</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </PhoneFrame>

          {/* Keep existing FloatingFeature components */}
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

          {/* Keep existing DecorativeBlob components */}
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

        {/* Keep existing FeatureShowcase */}
        <FeatureShowcase />

        {/* Keep existing ScrollSection */}
        <ScrollSection />
      </div>
    </section>
  );
};

export default MonitoringSection;
