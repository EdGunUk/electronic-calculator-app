import {createSlice} from '@reduxjs/toolkit';
import {RootState} from 'app/state/store';

export interface GlobalState {
    isAppLoaded: boolean;
}

const initialState: GlobalState = {
    isAppLoaded: false,
};

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setIsAppLoaded: (state) => {
            // eslint-disable-next-line no-param-reassign
            state.isAppLoaded = true;
        },
    },
});

export const {setIsAppLoaded} = globalSlice.actions;

export const selectIsAppLoaded = (state: RootState): boolean => state.global.isAppLoaded;

export default globalSlice.reducer;
