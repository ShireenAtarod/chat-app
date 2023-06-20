import './userList.css';
// components
import ChatItem from '../components/chatItem';
// mock data
import {chatList} from '../_mock/data';

function UserList(props) {
    return (
        <div className='chat-list'>
            {chatList.map((chat) => ( 
                <ChatItem chat={chat} onClick={props.onClick}  />
            ))}
        </div>
    )
}

export default UserList;