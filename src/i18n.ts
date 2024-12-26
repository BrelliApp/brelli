import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import all translation files
import enCommon from './locales/en/common.json';
import enLanding from './locales/en/landing.json';
import svCommon from './locales/sv/common.json';
import svLanding from './locales/sv/landing.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enCommon,
        landing: enLanding,
      },
      sv: {
        common: svCommon,
        landing: svLanding,
      },
    },
    fallbackLng: 'en',
    ns: ['common', 'landing'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;