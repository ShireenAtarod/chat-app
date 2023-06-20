import { useState, useEffect } from 'react';
import { useMe } from '../pages/home';
import './messageList.css';
// components
import Message from '../components/message';
// mock data
import { allMessages } from '../_mock/data';

function MessageList(props) {
    const user = useMe();
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [reload, setReload] = useState(false);

    function getMessages() {
        if(props.chatId){
            let messageList = allMessages.find((message) => message.chatId===props.chatId)?.messages;
            setMessages(messageList || []);
        }
    }

    function send(event) {
        event.preventDefault();
        let now = new Date().getHours()+':'+new Date().getMinutes();
        messages.push({sender: user.username, createdAt: now, message: newMessage});
        setMessages(messages);
        setReload(!reload);
        setNewMessage('')
    }

    useEffect(() => {
        getMessages();
    }, [props.chatId])

    return (
        <>
            <div className='message-list'>
                {(reload || !reload) && messages.map((message) => (
                    <Message message={message} />
                ))}
                {messages.length === 0 &&
                    <span className='no-message'>Start Messaging</span>
                }
                <form className='new-message-wrapper' onSubmit={send}>
                    <div className='new-message-container'>
                        <input 
                          className='new-message-body' 
                          name='newMessage' 
                          value={newMessage}
                          placeholder='message...'
                          onChange={(e) => setNewMessage(e.target.value)}
                        />
                        <input type='submit' className='send-button'>
                            
                        </input>
                    </div>
                </form>
            </div>
        </>
    )
}

export default MessageList;