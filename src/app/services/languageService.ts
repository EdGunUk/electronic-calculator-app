import localizationSettings from 'app/assets/localizations/settings.json';
import storageService from 'app/services/storage/storageService';

const getLanguages = () => {
    return localizationSettings.languages;
};

const getDefaultLanguageCode = () => {
    const languages = getLanguages();
    return languages[0].code;
};

const getInitialLanguageCode = () => {
    let currentLanguageCode = storageService.getLanguageCode();

    if (!currentLanguageCode) {
        const defaultLanguageCode = getDefaultLanguageCode();
        storageService.setLanguageCode(defaultLanguageCode);
        currentLanguageCode = defaultLanguageCode;
    }

    return currentLanguageCode;
};

export default {getDefaultLanguageCode, getInitialLanguageCode, getLanguages};
