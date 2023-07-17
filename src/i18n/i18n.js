import { createIntl, createIntlCache } from 'react-intl';

import translationEN from '../locales/en.json';
import translationES from '../locales/es.json';

const cache = createIntlCache();

const messages = {
    en: translationEN,
    es: translationES,
};

// Function to detect the preferred language
function detectPreferredLanguage() {
    const browserLanguages = navigator.languages || [navigator.language || navigator.userLanguage];
    const supportedLanguages = Object.keys(messages);
    for (const language of browserLanguages) {
        if (supportedLanguages.includes(language)) {
            return language;
        }
        const languageCode = language.split('-')[0];
        if (supportedLanguages.includes(languageCode)) {
            return languageCode;
        }
    }
    return 'en'; // Fallback to default language
}

export const preferredLanguage = detectPreferredLanguage();

export const intl = createIntl(
    {
        locale: preferredLanguage, // Set the detected language as the initial locale
        messages: messages[preferredLanguage],
    },
    cache
);
