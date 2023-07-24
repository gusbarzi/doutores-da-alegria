// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationPt from './locales/pt/translation.json'
import translationEn from './locales/en/translation.json'
import translationEs from './locales/es/translation.json'

const resources = {
  pt: {
    translation: translationPt
  },
  en: {
    translation: translationEn
  },
  es: {
    translation: translationEs
  },
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "pt",
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false
    }
  }).catch((err) => console.error(err));

export const getCurrentLng = (): any => i18n.language || window.localStorage.i18nextLng || '';
export default i18n;