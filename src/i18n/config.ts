import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import pt from './locales/pt.json';
import es from './locales/es.json';
import de from './locales/de.json';
import fr from './locales/fr.json';
import sr from './locales/sr.json';
import ja from './locales/ja.json';
import zh from './locales/zh.json';
import ko from './locales/ko.json';

export const languages = {
  de: { name: 'Deutsch', flag: '🇩🇪', order: 2 },
  en: { name: 'English', flag: '🇬🇧', order: 5 },
  es: { name: 'Español', flag: '🇪🇸', order: 3 },
  fr: { name: 'Français', flag: '🇫🇷', order: 4 },
  pt: { name: 'Português', flag: '🇧🇷', order: 1 },
  sr: { name: 'Srpski', flag: '🇷🇸', order: 6 },
  ja: { name: '日本語', flag: '🇯🇵', order: 7 },
  ko: { name: '한국어', flag: '🇰🇷', order: 8 },
  zh: { name: '中文', flag: '🇨🇳', order: 9 }
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      pt: { translation: pt },
      es: { translation: es },
      de: { translation: de },
      fr: { translation: fr },
      sr: { translation: sr },
      ja: { translation: ja },
      zh: { translation: zh },
      ko: { translation: ko }
    },
    lng: 'en',
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false
    },
    supportedLngs: ['en', 'pt', 'es', 'de', 'fr', 'sr', 'ja', 'zh', 'ko'],
    nonExplicitSupportedLngs: false,
    react: {
      useSuspense: false
    }
  });

export default i18n;
