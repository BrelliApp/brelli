import { motion } from "framer-motion";
import PhoneFrame from "./monitoring/PhoneFrame";
import FloatingFeature from "./monitoring/FloatingFeature";
import DecorativeBlob from "./monitoring/DecorativeBlob";
import FeatureShowcase from "./monitoring/FeatureShowcase";
import ScrollSection from "./monitoring/ScrollSection";
import { Trophy, Heart } from "lucide-react";
import PositiveExperiencesPhone from "./monitoring/PositiveExperiencesPhone";
import ProtectionStatusPhone from "./monitoring/ProtectionStatusPhone";

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

        <div className="relative flex justify-center items-center min-h-[700px] gap-12 px-8">
          {/* Positive Experiences Phone */}
          <PhoneFrame>
            <PositiveExperiencesPhone />
          </PhoneFrame>

          {/* Proactive Protection Phone */}
          <PhoneFrame initialX={100} delay={0.6} rotate={-2}>
            <ProtectionStatusPhone />
          </PhoneFrame>

          {/* Floating Features */}
          <FloatingFeature 
            icon={Trophy}
            text="Reward System"
            position="-left-8 top-1/4"
            iconColor="text-green-600"
            initialX={-200}
            delay={1.2}
          />

          <FloatingFeature 
            icon={Heart}
            text="Positive Reinforcement"
            position="-right-8 top-1/2"
            iconColor="text-pink-600"
            initialX={200}
            delay={1.4}
          />

          {/* Decorative Blobs */}
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

        {/* Feature Showcase and Scroll Section */}
        <FeatureShowcase />
        <ScrollSection />
      </div>
    </section>
  );
};

export default MonitoringSection;