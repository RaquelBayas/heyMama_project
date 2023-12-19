import { useEffect, useState } from 'react';
import ContactList from "./ContactList";
import Message from "./Message";
import io from 'socket.io-client';

function Chat() {
    const [messages, setMessages] = useState([]);

    const userRaw = localStorage.getItem('user');
    const user = JSON.parse(userRaw!);

    const id = 2;

    const [receiver, setReceiver] = useState(null);

    useEffect(() => {

        fetch(`http://localhost:5000/users/getUserById/${id}`)
            .then(resp => resp.json())
            .then(user => {
                console.log(user.data[0]);

                setReceiver(user.data[0]);

            })
            .catch(error => console.error(error.message));
    }, []);

    function handleClick(receiver) {
        setReceiver(receiver)
    }

    const socket = io('ws://localhost:443', {
        transports: ['websocket'],
        serverOffset: 0
    });

    useEffect(() => {
        socket.on('chat message', (msg) => {
            setMessages(messages => [...messages, msg]);
        });
    }, []);


    function handleSubmit(e: SubmitEvent) {
        e.preventDefault();
        const myMessage = {
            sender: user.id,
            text: input.value
        };
        socket.emit('message', myMessage);
        input.value = '';
    }

    return (
        <div className="flex place-content-center gap-16 h-screen p-[36px] pb-[100px]">

            <section className="border-2 border-gray-500 rounded-sm w-[350px] h-full relative bg-gray-500">
                <ContactList receiver={receiver} />
            </section>

            <section className="border-2 border-gray-500 rounded-sm w-[850px] h-full relative">

                <ul className="flex flex-col gap-16 list-none overflow-y-scroll h-full scroll-smooth pb-[48px]">
                    {messages.map((msg, index) => <Message key={index} own={msg.sender !== user.id ? true : false} message={msg} />)}
                </ul>

                <form onSubmit={(e) => handleSubmit(e)} className="flex h-[48px] p-4 absolute">
                    <input className="bg-red-400 rounded-full border-2 border-green-300 flex-1 m-4 py-4 focus:outline-0" type="text" name="message" id="input" placeholder="Type a message" />
                    <button className="bg-blue-400 text-black m-4 rounded-sm hover:bg-red-400" type="submit">Enviar</button>
                </form>

            </section>
        </div>
    );
}

export default Chat;
