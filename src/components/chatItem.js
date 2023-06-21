import './chatItem.css';

function ChatItem(props){
    return (
        <div 
          className='chat-item-container' 
          onClick={() => props.onClick(props.chat.id)}
        >
            <img src={props.chat.avatar} className='chat-avatar' />
            <span className='chat-name'>
                {props.chat.username}
                {props.itIsMe && 
                    <span className='my-profile'>
                        {props.showProfile ? 'back' : 'view profile'}
                    </span>
                }
            </span>
        </div>
    )
}

export default ChatItem;