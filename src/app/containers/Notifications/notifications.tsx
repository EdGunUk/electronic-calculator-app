import React, {ReactElement} from 'react';

import useSelector from 'app/hooks/useSelector';
import {selectNotifications} from 'app/state/slices/global';
import Notification from 'app/containers/Notifications/Notification/notification';

const Notifications = (): ReactElement => {
    const notifications = useSelector(selectNotifications);

    return (
        <div>
            {notifications.map((notification) => (
                <Notification key={notification.id} notification={notification} />
            ))}
        </div>
    );
};

export default Notifications;