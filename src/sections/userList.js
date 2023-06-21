import { useState } from 'react';
import './userList.css';
import { useMe } from '../pages/home';
// components
import ChatItem from '../components/chatItem';
import MyProfile from '../components/myProfile';
// mock data
import {chatList} from '../_mock/data';

function UserList(props) {
    const myUser = useMe();
    const [showProfile, setShowProfile] = useState(false);

    function clickOnMyProfile() {
        setShowProfile(!showProfile);
    }

    return (
        <div className='chat-list'>
            <ChatItem chat={myUser} onClick={clickOnMyProfile} itIsMe showProfile={showProfile}/>
            {!showProfile && chatList.map((chat) => ( 
                <ChatItem chat={chat} onClick={props.onClick}  />
            ))}

            {showProfile && 
                <MyProfile />
            }
        </div>
    )
}

export default UserList;