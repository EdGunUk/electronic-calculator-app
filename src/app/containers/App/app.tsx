/* eslint-disable react-hooks/exhaustive-deps */
import React, {ReactElement, useEffect, useMemo} from 'react';
import LoaderGlobal from 'app/components/Loader/loaderGlobal';
import useDispatch from 'app/hooks/useDispatch';
import useSelector from 'app/hooks/useSelector';
import {selectIsAppLoaded, setIsAppLoaded, setNotificationSuccess} from 'app/state/slices/global';
import Notifications from 'app/containers/Notifications/notifications';
import {withLocalize} from 'react-localize-redux';
import {initLocalization} from 'app/services/localization';

const App = ({translate}: any): ReactElement => {
    const dispatch = useDispatch();
    const isAppLoaded = useSelector(selectIsAppLoaded);

    useEffect(() => {
        initLocalization();
        dispatch(setIsAppLoaded());
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(setIsAppLoaded());
            dispatch(setNotificationSuccess('app success loaded'));
        }, 1000);

        return () => clearTimeout(timer);
    }, [dispatch]);

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(setIsAppLoaded());
            dispatch(setNotificationSuccess('app success loaded'));
        }, 1000);

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
