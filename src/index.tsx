import App from 'app/containers/App/app';
import {store} from 'app/state/store';
import GlobalStyle from 'app/styled/global';
import React from 'react';
import ReactDOM from 'react-dom';
import {LocalizeProvider} from 'react-localize-redux';
import {Provider} from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <LocalizeProvider>
            <GlobalStyle />
            <App />
        </LocalizeProvider>
    </Provider>,
    document.getElementById('root')
);
