import {renderToStaticMarkup} from 'react-dom/server';
import {addTranslationForLanguage, initialize, setActiveLanguage} from 'react-localize-redux';

const fetchLocalization = async (languageCode: any) => {
    const data = (await import(/* webpackChunkName: "lazy-chunk.1" */ `app/assets/localizations/${languageCode}.json`))
        .default;

    addTranslationForLanguage(data, languageCode);
    setActiveLanguage(languageCode);
};

const initLocalization = async () => {
    const languages = [
        {name: 'eng', code: 'en-gb'},
        {name: 'рус', code: 'ru-ru'},
    ];

    const defaultLanguageCode = languages[0].code;

    initialize({
        languages,
        options: {
            defaultLanguage: defaultLanguageCode,
            renderInnerHtml: true,
            renderToStaticMarkup,
            onMissingTranslation: ({defaultTranslation}) => defaultTranslation,
        },
    });

    return await fetchLocalization(defaultLanguageCode);
};

const changeLanguage = (languageCode: any) => {
    return fetchLocalization(languageCode);
};

export {changeLanguage, initLocalization};
