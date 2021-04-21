import {GlobalAction, GlobalActionTypes, GlobalState} from 'app/state/ducks/global/types';

const initialState = {
    isAppLoading: true,
};

const reducer = (state: GlobalState = initialState, action: GlobalAction): GlobalState => {
    switch (action.type) {
        case GlobalActionTypes.SET_IS_APP_LOADING:
            return {...state, isAppLoading: action.payload};
        default:
            return state;
    }
};

export default reducer;
