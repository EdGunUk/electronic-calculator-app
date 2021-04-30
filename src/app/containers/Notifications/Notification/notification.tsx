import useDispatch from 'app/hooks/useDispatch';
import {removeNotification} from 'app/state/actions/global';
import {NotificationState} from 'app/state/types/global';
import React, {ReactElement, useEffect} from 'react';

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
