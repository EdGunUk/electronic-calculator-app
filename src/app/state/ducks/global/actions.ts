import {GlobalActionTypes} from 'app/state/ducks/global/types';

const setIsAppLoaded = () => ({type: GlobalActionTypes.SET_IS_APP_LOADING, payload: false});

export default setIsAppLoaded;
