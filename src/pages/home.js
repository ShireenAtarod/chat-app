import { useState, useCallback, createContext, useContext } from 'react';
import './home.css';
import LightLayout from '../layouts/LightLayout'; 
// sections
import UserList from '../sections/userList';
import MessageList from '../sections/messageList';
// mock data
import { me } from '../_mock/data';

const UserContext = createContext();

function Home(){
    const [chatId, setChatId] = useState(null);
    const [user, setUser] = useState(me)

    const selectChat = useCallback((id) => {
        setChatId(id);
    }, [])

    return(
        <UserContext.Provider value={user}>
            <LightLayout>
                <UserList onClick={selectChat} />
                <MessageList chatId={chatId} />
            </LightLayout>
        </UserContext.Provider>
    )
}

export default Home;

export const useMe = () => useContext(UserContext);
