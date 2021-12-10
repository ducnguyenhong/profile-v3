import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { EN } from './en';
import { VI } from './vi';

const resources = {
  en: {
    translation: EN,
  },
  vi: {
    translation: VI,
  },
};

const language = localStorage.getItem('language') || 'en';

i18n.use(initReactI18next).init({
  resources,
  lng: language,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
