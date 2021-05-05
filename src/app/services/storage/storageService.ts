import * as storageKeys from 'app/consts/storageKeys';
import localStorageService from 'app/services/storage/localStorageService';

const getLanguageCode = () => localStorageService.getItem(storageKeys.LANGUAGE_CODE);
const setLanguageCode = (languageCode: string) => localStorageService.setItem(storageKeys.LANGUAGE_CODE, languageCode);

export default {getLanguageCode, setLanguageCode};
