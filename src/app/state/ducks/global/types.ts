export enum GlobalActionTypes {
    SET_IS_APP_LOADING = 'app/global/SET_IS_APP_LOADING',
}

export interface GlobalState {
    isAppLoading: boolean;
}

export interface GlobalAction {
    type: GlobalActionTypes.SET_IS_APP_LOADING;
    payload: boolean;
}
