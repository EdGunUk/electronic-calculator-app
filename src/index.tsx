import React from 'react';
import ReactDOM from 'react-dom';
import App from 'app/containers/App';
import {Provider} from 'react-redux';
import {store} from 'app/state/store';
import GlobalStyle from 'app/styled/global';

ReactDOM.render(
    <Provider store={store}>
        <GlobalStyle />
        <App />
    </Provider>,
    document.getElementById('root')
);
