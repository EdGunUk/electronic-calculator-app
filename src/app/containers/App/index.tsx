import React, {ReactElement, useEffect} from 'react';
import LoaderGlobal from 'app/components/Loader/loaderGlobal';
import useDispatch from 'app/hooks/useDispatch';
import useSelector from 'app/hooks/useSelector';
import {selectIsAppLoaded, setIsAppLoaded} from 'app/state/slices/global';

const App = (): ReactElement => {
    const dispatch = useDispatch();
    const isAppLoaded = useSelector(selectIsAppLoaded);

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(setIsAppLoaded());
        }, 1000);

        return () => clearTimeout(timer);
    }, [dispatch]);

    return (
        <div>
            <h1>Hello World</h1>
            <h2>Page is loaded</h2>
            {!isAppLoaded && <LoaderGlobal />}
        </div>
    );
};

export default App;
