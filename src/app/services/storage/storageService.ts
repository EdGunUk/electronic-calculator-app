import * as storageKeys from 'app/consts/storageKeys';
import localStorageService from 'app/services/storage/localStorageService';

const getLanguageCode = (): string | null => localStorageService.getItem(storageKeys.LANGUAGE_CODE);
const setLanguageCode = (languageCode: string): void =>
    localStorageService.setItem(storageKeys.LANGUAGE_CODE, languageCode);

export default {getLanguageCode, setLanguageCode};
