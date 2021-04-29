import Loader from 'app/components/Loader/loader';
import {LoaderWrapper} from 'app/components/Loader/styled';
import React, {ReactElement} from 'react';

const LoaderGlobal = (): ReactElement => {
    return (
        <LoaderWrapper>
            <Loader />
        </LoaderWrapper>
    );
};

export default LoaderGlobal;
