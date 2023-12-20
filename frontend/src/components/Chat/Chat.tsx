import { useEffect, useRef, useState } from "react";
import ContactList from "./ContactList";
import Message from "./Message";
import io from "socket.io-client";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  // const socket = useRef();
  const scrollRef = useRef();
  const inputRef = useRef();

  const userRaw = localStorage.getItem("user");
  const user = JSON.parse(userRaw!);
  console.log("user localstorage " + JSON.stringify(user));

  const socket = io("http://localhost:443", {
    transports: ["websocket"],
  });

  useEffect(() => {
    console.log("conectando con websockets");
    socket.on("getMessage", (data) => {
      console.log("😊", data);

      setArrivalMessage({
        sender: data.sender,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    console.log(
      "Si existe una conversacion/chat actual y llega un mensaje nuevo"
    );

    console.log("👌👌👌👌👌👌", arrivalMessage, currentChat);

    if (arrivalMessage && currentChat) {
      const members = [currentChat.member, currentChat.member2];
      console.log("usuario actual y contacto (desordenados) ", members);

      const isSenderInCurrentChat = members.includes(arrivalMessage.sender);
      console.log(
        "esta el user id del contacto que envío este mensaje en la conversacion/chat actual? ",
        isSenderInCurrentChat
      );

      if (isSenderInCurrentChat) {
        setMessages((messages) => [...messages, arrivalMessage]);
        console.log("messages " + messages);
      }
    }
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.emit("addUser", user.id);
    console.log(
      "envío mi user id al server para que lo guarde en el array de usuarios " +
        user.id
    );
  }, [user, socket]);

  useEffect(() => {
    fetch(`http://localhost:5000/chat/${user.id}`)
      .then((resp) => resp.json())
      .then((res) => {
        setConversations(res.data);
        console.log("obteniendo chats/conversaciones");
        console.log(
          "chats/conversaciones obtenidos " + JSON.stringify(res.data)
        );
      })
      .catch((error) => console.error(error.message));
  }, [user.id]);

  useEffect(() => {
    const convId = currentChat?.conversation_id;

    fetch(`http://localhost:5000/chat/msg/${convId}`)
      .then((resp) => resp.json())
      .then((res) => {
        setMessages(res.data);
        scrollToBottom();
        console.log(
          "devolviendo todos los mensajes de una conversacion/chat si exista una conversion/chat actual"
        );
        console.log("id de la conversación " + convId);
        console.log(
          "mensajes devueltos de la conversacion/chat " +
            JSON.stringify(res.data)
        );
      })
      .catch((error) => console.error(error.message));
  }, [currentChat]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  function scrollToBottom() {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    console.log("form submit");

    const message = {
      sender: user.id,
      text: newMessage,
      conversationId: currentChat.conversation_id,
    };
    console.log("Mensaje ", message);

    const members = [currentChat.member, currentChat.member2];
    console.log("members " + members);

    const receiverId = members.find((member) => member !== user.id);

    console.log("id del que recibirá el mensaje " + receiverId);

    socket.emit("sendMessage", {
      sender: user.id,
      receiver: receiverId,
      text: newMessage,
    });

    console.log(
      " lo que se envia en sendmessage, sender(id del usuario actual) " +
        user.id +
        " receiver(id del usuario que lo recibirá " +
        receiverId +
        " texto del mensaje " +
        JSON.stringify(message)
    );

    fetch(`http://localhost:5000/chat/msg`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    })
      .then((resp) => resp.json())
      .then((res) => {
        setMessages([...messages, res.data]);
        inputRef.current.value = "";
        setNewMessage("");
        console.log(
          "mensaje enviado " +
            JSON.stringify(message) +
            " respuesta " +
            JSON.stringify(res.data)
        );
        console.log("mensajes " + JSON.stringify(messages));
      })
      .catch((error) => console.error(error.message));
  }

  return (
    <div className="flex place-content-center gap-16 h-screen p-[36px] pb-[100px]">
      <section className="border-2 border-marron rounded-sm w-[300px] h-full relative bg-white">
        {conversations.map((conv, index) => (
          <>
            <div key={index} onClick={() => setCurrentChat(conv)}>
              <ContactList conv={conv} user={user} />
            </div>
            {console.log(
              "contacto de lista de contactos con index " +
                index +
                " y conversacion " +
                JSON.stringify(conv)
            )}
          </>
        ))}
      </section>
      <section className="border-2 border-marron rounded-sm w-[850px] h-full relative">
        {currentChat ? (
          <>
            {console.log("existe conversacion/chat actual y carga el chat")}
            <ul
              ref={scrollRef}
              className="flex flex-col gap-16 bg-white list-none overflow-y-scroll h-full scroll-smooth pb-[48px]"
            >
              {messages.map((msg, index) => (
                <Message
                  key={index}
                  own={msg.sender !== user.id}
                  message={msg}
                />
              ))}
            </ul>
            <form
              onSubmit={(e) => handleSubmit(e)}
              className="flex flex-row justify-center p-4 my-auto align-middle "
            >
              <input
                onChange={(e) => setNewMessage(e.target.value)}
                ref={inputRef}
                className="flex-1 px-6 py-4 m-4 bg-white border-2 rounded-full border-marron focus:outline-0"
                type="text"
                name="message"
                id="input"
                placeholder="Mensaje..."
              />
              <button
                className="px-4 py-4 my-auto text-black rounded-md h-fit bg-secondary hover:bg-marron2 hover:text-white"
                type="submit"
              >
                Enviar
              </button>
            </form>
          </>
        ) : (
          <>
            {console.log(" NO existe conversacion/chat actual")}
            <span className="text-xl font-semibold">
              Abre una conversación para empezar a chatear
            </span>
          </>
        )}
      </section>
    </div>
  );
}

export default Chat;
