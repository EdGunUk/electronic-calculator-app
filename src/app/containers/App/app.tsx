import LoaderGlobal from 'app/components/Loader/loaderGlobal';
import Notifications from 'app/containers/Notifications/notifications';
import useDidUpdate from 'app/hooks/useDidUpdate';
import useDispatch from 'app/hooks/useDispatch';
import useSelector from 'app/hooks/useSelector';
import languageService from 'app/services/languageService';
import storageService from 'app/services/storage/storageService';
import {setIsAppLoaded, setLanguageCode, setNotificationSuccess} from 'app/state/actions/global';
import {selectIsAppLoaded, selectLanguageCode} from 'app/state/selectors/global';
import React, {ReactElement, useEffect} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {InitializePayload, SingleLanguageTranslation, TranslateFunction, withLocalize} from 'react-localize-redux';

interface Props {
    initialize: (payload: InitializePayload) => void;
    addTranslationForLanguage: (translation: SingleLanguageTranslation, language: string) => void;
    setActiveLanguage: (languageCode: string) => void;
    translate: TranslateFunction;
}

const App = ({initialize, addTranslationForLanguage, setActiveLanguage, translate}: Props): ReactElement => {
    const dispatch = useDispatch();
    const isAppLoaded = useSelector(selectIsAppLoaded);
    const currentLanguageCode = useSelector(selectLanguageCode);

    const fetchLocalization = async (languageCode: string) => {
        const data = (await import(`app/assets/localizations/${languageCode}.json`)).default;

        addTranslationForLanguage(data, languageCode);
        setActiveLanguage(languageCode);
    };

    const changeLocalization = (languageCode: string) => {
        storageService.setLanguageCode(languageCode);
        fetchLocalization(languageCode);
    };

    const initLocalization = async () => {
        const defaultLanguageCode = languageService.getDefaultLanguageCode();

        initialize({
            languages: languageService.getLanguages(),
            options: {
                defaultLanguage: defaultLanguageCode,
                renderInnerHtml: true,
                renderToStaticMarkup,
                onMissingTranslation: ({defaultTranslation}) => defaultTranslation,
            },
        });

        await fetchLocalization(defaultLanguageCode);

        if (currentLanguageCode !== defaultLanguageCode) {
            await fetchLocalization(currentLanguageCode);
        }

        dispatch(setIsAppLoaded());
    };

    useEffect(() => {
        initLocalization();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(setNotificationSuccess('app success loaded'));
            dispatch(setLanguageCode('ru-ru'));
        }, 2000);

        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useDidUpdate(() => {
        if (currentLanguageCode) {
            changeLocalization(currentLanguageCode);
        }
    }, [currentLanguageCode]);

    return (
        <div>
            <Notifications />
            <h1>Hello World</h1>
            <h2>Page is loaded</h2>
            {translate('test.title')}
            {translate('test.title1')}
            {!isAppLoaded && <LoaderGlobal />}
        </div>
    );
};

export default withLocalize(App);
