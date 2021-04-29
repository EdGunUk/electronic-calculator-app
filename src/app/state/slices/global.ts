import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from 'app/state/store';
import helpers from 'app/utils/helpers';

interface NotificationAction {
    type: string;
    message: string;
}

export interface NotificationState extends NotificationAction {
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
    languageCode: string;
}

const initialState: GlobalState = {
    isAppLoaded: false,
    notifications: [],
    languageCode: 'ru-ru',
};

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setIsAppLoaded: (state) => {
            // eslint-disable-next-line no-param-reassign
            state.isAppLoaded = true;
        },
        setLanguageCode: (state, action: PayloadAction<string>) => {
            // eslint-disable-next-line no-param-reassign
            state.languageCode = action.payload;
        },
        setNotification: (state, action: PayloadAction<NotificationAction>) => {
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
        removeNotification: (state, action: PayloadAction<string>) => {
            const id = action.payload;

            // eslint-disable-next-line no-param-reassign
            state.notifications = state.notifications.filter((notification) => notification.id !== id);
        },
    },
});

export const {setIsAppLoaded, setLanguageCode, setNotification, removeNotification} = globalSlice.actions;

export const setNotificationSuccess = (message: string) => setNotification({message, type: NotificationTypes.success});

export const setNotificationFailed = (message: string) => setNotification({message, type: NotificationTypes.failed});

export const setNotificationInfo = (message: string) => setNotification({message, type: NotificationTypes.info});

export const selectIsAppLoaded = (state: RootState): boolean => state.global.isAppLoaded;

export const selectLanguageCode = (state: RootState): string => state.global.languageCode;

export const selectNotifications = (state: RootState): NotificationState[] => state.global.notifications;

export default globalSlice.reducer;
