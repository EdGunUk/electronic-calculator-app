import React, {ReactElement, useEffect} from 'react';
import useDispatch from 'app/hooks/useDispatch';
import {NotificationState, removeNotification} from 'app/state/slices/global';

interface Props {
    notification: NotificationState;
}

const Notification = ({notification}: Props): ReactElement => {
    const dispatch = useDispatch();
    const {type, message, id} = notification;

    useEffect(() => {
        const timer = setTimeout(() => dispatch(removeNotification(id)), 5500);

        return () => clearTimeout(timer);
    }, [dispatch, id]);

    return (
        <div>
            {type} {message} {id}
        </div>
    );
};

export default Notification;
