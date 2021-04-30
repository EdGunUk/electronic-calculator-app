import {PayloadAction} from '@reduxjs/toolkit';
import globalSlice from 'app/state/slices/global';
import {NotificationAction, NotificationTypes} from 'app/state/types/global';

export const {setIsAppLoaded, setLanguageCode, setNotification, removeNotification} = globalSlice.actions;

export const setNotificationSuccess = (message: string): PayloadAction<NotificationAction> =>
    setNotification({message, type: NotificationTypes.success});

export const setNotificationFailed = (message: string): PayloadAction<NotificationAction> =>
    setNotification({message, type: NotificationTypes.failed});

export const setNotificationInfo = (message: string): PayloadAction<NotificationAction> =>
    setNotification({message, type: NotificationTypes.info});
