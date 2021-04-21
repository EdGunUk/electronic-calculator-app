import {combineReducers, applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import * as reducers from 'app/state/ducks';

const configureStore = () => {
    const rootReducer = combineReducers({...reducers});
    const middleware = applyMiddleware(thunk);

    return createStore(rootReducer, middleware);
};

export default configureStore;
