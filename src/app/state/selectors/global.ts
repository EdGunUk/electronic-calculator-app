import {RootState} from 'app/state/store';
import {NotificationState} from 'app/state/types/global';

export const selectIsAppLoaded = (state: RootState): boolean => state.global.isAppLoaded;

export const selectLanguageCode = (state: RootState): string => state.global.languageCode;

export const selectNotifications = (state: RootState): NotificationState[] => state.global.notifications;
