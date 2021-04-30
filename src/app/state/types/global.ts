export interface NotificationAction {
    type: string;
    message: string;
}

export interface NotificationState extends NotificationAction {
    id: string;
}

export enum NotificationTypes {
    success = 'SUCCESS',
    failed = 'FAILED',
    info = 'INFO',
}

export interface GlobalState {
    isAppLoaded: boolean;
    notifications: NotificationState[];
    languageCode: string;
}
