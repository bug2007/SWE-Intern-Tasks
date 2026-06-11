import { createPortal } from 'react-dom';

export default function CartNotification({message}) {
    return createPortal(
        <div className="notification">
            <p>{message}</p>
        </div>,
    document.getElementById('notif-portal'))
}