import { motion } from "framer-motion";
import { Shield, Sparkles, Heart } from "lucide-react";
import { useTranslation } from "react-i18next";

const FeatureShowcase = () => {
  const { t } = useTranslation('landing');

  return (
    <div className="relative py-12">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all"
          >
            <Shield className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{t('featureShowcase.smartProtection.title')}</h3>
            <p className="text-gray-600">{t('featureShowcase.smartProtection.description')}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all"
          >
            <Sparkles className="h-12 w-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{t('featureShowcase.positiveGrowth.title')}</h3>
            <p className="text-gray-600">{t('featureShowcase.positiveGrowth.description')}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all"
          >
            <Heart className="h-12 w-12 text-pink-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{t('featureShowcase.familyConnection.title')}</h3>
            <p className="text-gray-600">{t('featureShowcase.familyConnection.description')}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FeatureShowcase;