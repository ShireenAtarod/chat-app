import { useMe } from '../pages/home';
import './message.css';

function Message(props) {
    const user = useMe();
    return (
        <div className='message-wrapper'>
            <div className={`message-container ${props.message.sender===user.username ? 'right' : 'left'}`}>
                <span className='message-body' >
                    {props.message.message}
                </span>
                <span className='message-datetime'>
                    {props.message.createdAt}
                </span>
            </div>
        </div>
    )
}

export default Message;