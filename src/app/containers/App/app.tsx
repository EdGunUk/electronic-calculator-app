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
import {withLocalize} from 'react-localize-redux';

const App = ({initialize, addTranslationForLanguage, setActiveLanguage, translate}: any): ReactElement => {
    const dispatch = useDispatch();
    const isAppLoaded = useSelector(selectIsAppLoaded);
    const currentLanguageCode = useSelector(selectLanguageCode);

    const fetchLocalization = async (languageCode: any) => {
        const data = (await import(`app/assets/localizations/${languageCode}.json`)).default;

        addTranslationForLanguage(data, languageCode);
        setActiveLanguage(languageCode);
    };

    const changeLocalization = (languageCode: any) => {
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
                onMissingTranslation: ({defaultTranslation}: any) => defaultTranslation,
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
