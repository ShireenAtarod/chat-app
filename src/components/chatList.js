import './chatList.css'
// components
import ChatItem from './chatItem'
// mock data
import {chatList} from '../_mock/data';

function ChatList(props) {
    return (
        <div className='chat-list'>
            {chatList.map((chat) => ( 
                <ChatItem chat={chat} onClick={props.onClick}  />
            ))}
        </div>
    )
}

export default ChatList;