import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:443', {
    transports: ['websocket']
});

function Chat() {

    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newMessage = {
            body: message,
            from: 'Me'
        };

        setMessages([...messages, newMessage]);
        socket.emit('message', message);
    };

    useEffect(() => {
        socket.on('message', reciveMessage);

        return () => socket.off('message', reciveMessage);
    }, []);

    const reciveMessage = message => setMessages((state) => [...state, message]);

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button>Enviar</button>
            </form>

            <ul>
                {messages?.map((message, i) => (
                    <li key={i}>
                        {message.from}: {message.body}
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default Chat;
