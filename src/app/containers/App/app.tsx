/* eslint-disable react-hooks/exhaustive-deps */
import React, {ReactElement, useEffect} from 'react';
import LoaderGlobal from 'app/components/Loader/loaderGlobal';
import useDispatch from 'app/hooks/useDispatch';
import useSelector from 'app/hooks/useSelector';
import {selectIsAppLoaded, setIsAppLoaded, setNotificationSuccess} from 'app/state/slices/global';
import Notifications from 'app/containers/Notifications/notifications';
import {withLocalize} from 'react-localize-redux';
import {renderToStaticMarkup} from 'react-dom/server';

const App = ({initialize, addTranslationForLanguage, setActiveLanguage, translate}: any): ReactElement => {
    const dispatch = useDispatch();
    const isAppLoaded = useSelector(selectIsAppLoaded);

    const fetchLocalization = async (languageCode: any) => {
        const data = (
            await import(/* webpackChunkName: "lazy-chunk.1" */ `app/assets/localizations/${languageCode}.json`)
        ).default;

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
            },
        });

        await fetchLocalization(defaultLanguageCode);
        dispatch(setIsAppLoaded());
    };

    useEffect(() => {
        initLocalization();
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(setNotificationSuccess('app success loaded'));
            fetchLocalization('ru-ru');
        }, 2000);

        return () => clearTimeout(timer);
    }, [dispatch]);

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
