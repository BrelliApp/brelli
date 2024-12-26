import { ShieldAlert, MessageSquareWarning, Heart } from "lucide-react";
import { useTranslation } from "react-i18next";

const FeaturesSection = () => {
  const { t } = useTranslation('landing');

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('features.title')}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-16">
          <div className="group">
            <div className="mb-6 transform transition-transform group-hover:scale-105">
              <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mx-auto">
                <ShieldAlert className="h-8 w-8 text-red-500" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{t('features.predatorDetection.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('features.predatorDetection.description')}
              </p>
            </div>
          </div>

          <div className="group">
            <div className="mb-6 transform transition-transform group-hover:scale-105">
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto">
                <MessageSquareWarning className="h-8 w-8 text-blue-500" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{t('features.antiBullying.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('features.antiBullying.description')}
              </p>
            </div>
          </div>

          <div className="group">
            <div className="mb-6 transform transition-transform group-hover:scale-105">
              <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto">
                <Heart className="h-8 w-8 text-green-500" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{t('features.support.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('features.support.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;