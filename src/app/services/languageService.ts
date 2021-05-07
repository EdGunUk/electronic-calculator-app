import localizationSettings from 'app/assets/localizations/settings.json';
import storageService from 'app/services/storage/storageService';

interface Language {
    name: string;
    code: string;
}

const getLanguages = (): Language[] => {
    return localizationSettings.languages;
};

const getDefaultLanguageCode = (): string => {
    const languages = getLanguages();
    return languages[0].code;
};

const getInitialLanguageCode = (): string => {
    let currentLanguageCode = storageService.getLanguageCode();

    if (!currentLanguageCode) {
        const defaultLanguageCode = getDefaultLanguageCode();
        storageService.setLanguageCode(defaultLanguageCode);
        currentLanguageCode = defaultLanguageCode;
    }

    return currentLanguageCode;
};

export default {getDefaultLanguageCode, getInitialLanguageCode, getLanguages};
