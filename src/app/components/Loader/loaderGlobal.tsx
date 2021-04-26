import React, {ReactElement} from 'react';
import Loader from 'app/components/Loader/loader';
import {LoaderWrapper} from 'app/components/Loader/styled';

const LoaderGlobal = (): ReactElement => {
    return (
        <LoaderWrapper>
            <Loader />
        </LoaderWrapper>
    );
};

export default LoaderGlobal;
