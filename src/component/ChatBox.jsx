import React, { useEffect, useState } from 'react';

const ChatBox = (props) => {
    const isToggle = props.clicked;
    const [input, setInput] = useState('');
    const [userQuerry, setUserQuerry] = useState([]);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);


    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    useEffect(() => {
        const handleEnter = (e) => {
            if (e.key === 'Enter' && isToggle && input.trim() !== '') {
                sendQuerry();
            }
        };
        document.addEventListener("keypress", handleEnter);
        return () => {
            document.removeEventListener("keypress", handleEnter);
        };
    }, [input]);

    const sendQuerry = () => {
        if (input.trim() === '') return;
        setUserQuerry((prev) => [...prev, { text: input, isUser: true }]);
        setInput('');
        setTimeout(() => {
            setUserQuerry((prev) => [...prev, { text: input, isUser: false }]);
        }, 2000);
    };

    // Dynamic styles based on screen size
    const dynamicCardStyle = {
        backgroundColor: '#252525',
        color: '#fff',
        height: '80vh',
        width: windowWidth <= 480 ? '95vw' : windowWidth <= 768 ? '80vw' : '30vw',
        display: 'flex',
        flexDirection: 'column',
    };

    const dynamicMessageStyle = {
        maxWidth: windowWidth <= 480 ? '80%' : '60%',
    };

    return (
        <div className='chatbox'>
            <div className="card mb-3" style={dynamicCardStyle}>
                <div className="card-header fs-4" style={headerStyle}>ChatBot</div>
                <div className="card-body" style={chatBodyStyle}>
                    {userQuerry.map((message, index) => (
                        <div
                            key={index}
                            className={`message ${message.isUser ? 'userMessage' : 'botMessage'}`}
                            style={message.isUser ? { ...userMessageStyle, ...dynamicMessageStyle } : { ...botMessageStyle, ...dynamicMessageStyle }}
                        >
                            {message.text}
                        </div>
                    ))}
                </div>
                <div className="input">
                    <div className="type">
                        <input
                            type="text"
                            placeholder='Ask Chatbot'
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <i className="fa-regular fa-paper-plane" onClick={sendQuerry} style={{ cursor: 'pointer' }}></i>
                    </div>
                    <div className="mic">
                        <i className="fa-solid fa-microphone"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Static styles
const headerStyle = {
    backgroundColor: '#252525',
    color: '#fff',
    borderBottom: 'none',
    textAlign: 'center',
    fontWeight: '700',
};

const chatBodyStyle = {
    flexGrow: 1,
    overflowY: 'auto',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
};

const userMessageStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 15px',
    borderRadius: '20px',
    alignSelf: 'flex-end', // Align user message to the right
    marginBottom: '10px',
};

const botMessageStyle = {
    backgroundColor: '#e0e0e0',
    color: '#000',
    padding: '10px 15px',
    borderRadius: '20px',
    alignSelf: 'flex-start',
    marginBottom: '10px',
};

export default ChatBox;
