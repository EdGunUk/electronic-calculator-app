import React, {ReactElement, useEffect} from 'react';
import LoaderGlobal from 'app/components/Loader/loaderGlobal';
import useDispatch from 'app/hooks/useDispatch';
import useSelector from 'app/hooks/useSelector';
import {
    selectIsAppLoaded,
    setIsAppLoaded,
    selectLanguageCode,
    setLanguageCode,
    setNotificationSuccess,
} from 'app/state/slices/global';
import Notifications from 'app/containers/Notifications/notifications';
import {withLocalize} from 'react-localize-redux';
import {renderToStaticMarkup} from 'react-dom/server';
import localizationSettings from 'app/assets/localizations/settings.json';
import useDidUpdate from 'app/hooks/useDidUpdate';

const App = ({initialize, addTranslationForLanguage, setActiveLanguage, translate}: any): ReactElement => {
    const dispatch = useDispatch();
    const isAppLoaded = useSelector(selectIsAppLoaded);
    const languageCode = useSelector(selectLanguageCode);

    const fetchLocalization = async (defaultLanguage: any) => {
        const data = (await import(`app/assets/localizations/${defaultLanguage}.json`)).default;

        addTranslationForLanguage(data, defaultLanguage);
        setActiveLanguage(defaultLanguage);
    };

    const changeLocalization = (defaultLanguage: any) => {
        // TODO: add language to localStorage

        fetchLocalization(defaultLanguage);
    };

    const initLocalization = async () => {
        const {languages} = localizationSettings;
        const defaultLanguage = languageCode || languages[0].code;

        initialize({
            languages,
            options: {
                defaultLanguage,
                renderInnerHtml: true,
                renderToStaticMarkup,
            },
        });

        await fetchLocalization(defaultLanguage);
        dispatch(setIsAppLoaded());
    };

    useEffect(() => {
        initLocalization();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(setNotificationSuccess('app success loaded'));
            dispatch(setLanguageCode('en-gb'));
        }, 2000);

        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useDidUpdate(() => {
        if (languageCode) {
            changeLocalization(languageCode);
        }
    }, [languageCode]);

    return (
        <div>
            <Notifications />
            <h1>Hello World</h1>
            <h2>Page is loaded</h2>
            {translate('test.title')}
            {!isAppLoaded && <LoaderGlobal />}
        </div>
    );
};

export default withLocalize(App);
