import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from "i18next-http-backend";
import {initReactI18next} from 'react-i18next';
import translationEN from './i18n/en/translation.json';
import translationES from './i18n/es/translation.json';

const detectionOptions = {
    order: ['path', 'cookie', 'navigator', 'localStorage', 'subdomain', 'queryString', 'htmlTag'],
    lookupFromPathIndex: 0,
};

const resources = {
    en: {
        translation: translationEN,
    },
    es: {
        translation: translationES,
    },
};

i18n.use(LanguageDetector)
    .use(HttpApi)
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        debug: false,
        detection: detectionOptions,
        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: false,
        },
    });

export default i18n;