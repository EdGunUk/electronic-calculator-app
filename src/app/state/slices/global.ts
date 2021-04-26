import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from 'app/state/store';
import helpers from 'app/utils/helpers';

interface SetNotificationAction {
    type: string;
    message: string;
}

interface RemoveNotificationAction {
    id: string;
}

interface NotificationState {
    type: string;
    message: string;
    id: string;
}

interface GlobalState {
    isAppLoaded: boolean;
    notifications: NotificationState[];
}

const initialState: GlobalState = {
    isAppLoaded: false,
    notifications: [],
};

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setIsAppLoaded: (state) => {
            // eslint-disable-next-line no-param-reassign
            state.isAppLoaded = true;
        },
        setNotification: (state, action: PayloadAction<SetNotificationAction>) => {
            const {type, message} = action.payload;
            const {notifications} = state;

            if (notifications.some((notification) => notification.message === message)) return;

            const notification = {
                id: helpers.getId(),
                type,
                message,
            };

            notifications.push(notification);
        },
        removeNotification: (state, action: PayloadAction<RemoveNotificationAction>) => {
            const {id} = action.payload;

            // eslint-disable-next-line no-param-reassign
            state.notifications = state.notifications.filter((notification) => notification.id !== id);
        },
    },
});

export const {setIsAppLoaded} = globalSlice.actions;

export const selectIsAppLoaded = (state: RootState): boolean => state.global.isAppLoaded;

export default globalSlice.reducer;
