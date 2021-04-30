import * as storageKeys from 'app/consts/storageKeys';
import * as localStorageService from 'app/services/storage/localStorageService';

export const getLanguageCode = () => localStorageService.getItem(storageKeys.LANGUAGE_CODE);
export const setLanguageCode = (languageCode: string) =>
    localStorageService.setItem(storageKeys.LANGUAGE_CODE, languageCode);
