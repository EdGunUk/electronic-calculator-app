import React from 'react';
import ReactDOM from 'react-dom';
import App from 'app/containers/App/app';
import {Provider} from 'react-redux';
import {store} from 'app/state/store';
import GlobalStyle from 'app/styled/global';
import {LocalizeProvider} from 'react-localize-redux';

ReactDOM.render(
    <Provider store={store}>
        <LocalizeProvider>
            <GlobalStyle />
            <App />
        </LocalizeProvider>
    </Provider>,
    document.getElementById('root')
);
