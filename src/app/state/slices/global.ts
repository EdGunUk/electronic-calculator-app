import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import languageService from 'app/services/languageService';
import {GlobalState, NotificationAction} from 'app/state/types/global';
import helpers from 'app/utils/helpers';

const initialState: GlobalState = {
    isAppLoaded: false,
    notifications: [],
    languageCode: languageService.getInitialLanguageCode(),
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

export default globalSlice;
