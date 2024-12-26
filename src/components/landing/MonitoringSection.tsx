import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import PhoneFrame from "./monitoring/PhoneFrame";
import FloatingFeature from "./monitoring/FloatingFeature";
import DecorativeBlob from "./monitoring/DecorativeBlob";
import FeatureShowcase from "./monitoring/FeatureShowcase";
import ScrollSection from "./monitoring/ScrollSection";
import { Trophy, ShieldCheck, Star, ShieldAlert, Bell, AlertTriangle, Shield } from "lucide-react";
import PositiveExperiencesPhone from "./monitoring/PositiveExperiencesPhone";
import ProtectionStatusPhone from "./monitoring/ProtectionStatusPhone";

const MonitoringSection = () => {
  const { t } = useTranslation('landing');

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
            {t('monitoring.title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            {t('monitoring.description')}
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

          {/* Security-oriented Floating Features */}
          <FloatingFeature 
            icon={ShieldCheck}
            text="Real-time Protection"
            position="-left-8 top-1/4"
            iconColor="text-green-600"
            initialX={-200}
            delay={1.2}
            rotate={-3}
          />

          <FloatingFeature 
            icon={ShieldAlert}
            text="Threat Detection"
            position="-right-8 top-1/2"
            iconColor="text-red-600"
            initialX={200}
            delay={1.4}
            rotate={2}
          />

          <FloatingFeature 
            icon={Bell}
            text="Instant Alerts"
            position="left-1/4 -top-8"
            iconColor="text-blue-600"
            initialX={-150}
            delay={1.6}
            rotate={-2}
          />

          <FloatingFeature 
            icon={AlertTriangle}
            text="Risk Prevention"
            position="right-1/4 bottom-0"
            iconColor="text-yellow-600"
            initialX={150}
            delay={1.8}
            rotate={3}
          />

          <FloatingFeature 
            icon={Shield}
            text="Privacy Guard"
            position="-left-4 bottom-1/4"
            iconColor="text-purple-600"
            initialX={-180}
            delay={2.0}
            rotate={-4}
          />

          <FloatingFeature 
            icon={Star}
            text="Safe Browsing"
            position="right-0 top-1/4"
            iconColor="text-orange-600"
            initialX={220}
            delay={2.2}
            rotate={4}
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