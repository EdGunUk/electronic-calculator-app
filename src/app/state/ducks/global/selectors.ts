import {createSelector} from 'reselect';

const selectGlobal = (state: any) => state.global;

const makeIsAppLoading = () => createSelector(selectGlobal, (globalState) => globalState.isAppLoading);

export default makeIsAppLoading;
