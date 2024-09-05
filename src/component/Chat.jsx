import React, { useState } from 'react';
import ChatBox from './ChatBox';


const Chat = () => {
    const [isChatBoxVisible, setChatBoxVisible] = useState(false);
    const toggleChatBox = () => {
        setChatBoxVisible(!isChatBoxVisible);
    };

    return (
        <>
            {isChatBoxVisible && <ChatBox clicked={isChatBoxVisible}/>}
            <div className='chatBtn'>
                <button
                    type="button"
                    className="btn btn-dark"
                    onClick={toggleChatBox}
                >
                    <i className="fa-brands fa-rocketchat"></i>
                </button>
            </div>
        </>
    );
}

export default Chat;
