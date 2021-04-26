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

export interface NotificationState {
    type: string;
    message: string;
    id: string;
}

enum NotificationTypes {
    success = 'SUCCESS',
    failed = 'FAILED',
    info = 'INFO',
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
        setAppNotification: (state, action: PayloadAction<SetNotificationAction>) => {
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
        removeAppNotification: (state, action: PayloadAction<RemoveNotificationAction>) => {
            const {id} = action.payload;

            // eslint-disable-next-line no-param-reassign
            state.notifications = state.notifications.filter((notification) => notification.id !== id);
        },
    },
});

export const {setIsAppLoaded, setAppNotification, removeAppNotification} = globalSlice.actions;

export const setNotificationSuccess = (message: string) =>
    setAppNotification({message, type: NotificationTypes.success});

export const setNotificationFailed = (message: string) => setAppNotification({message, type: NotificationTypes.failed});

export const setNotificationInfo = (message: string) => setAppNotification({message, type: NotificationTypes.info});

export const removeNotification = (id: string) => removeAppNotification({id});

export const selectIsAppLoaded = (state: RootState): boolean => state.global.isAppLoaded;

export const selectNotifications = (state: RootState): NotificationState[] => state.global.notifications;

export default globalSlice.reducer;
