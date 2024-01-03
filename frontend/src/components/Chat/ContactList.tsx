import { useEffect, useState } from "react";

interface User {
  id: string;
  username?: string;
}

interface Conversation {
  member: string;
  member2: string;
}

interface ContactListProps {
  conv: Conversation;
  user: User;
}

interface Friend {
  id: string;
  username?: string;
}

function ContactList({ conv, user }: ContactListProps) {
  console.log(
    "lista de contactos: contacto, conversacion " + JSON.stringify(conv)
  );

  const [friend, setFriend] = useState<Friend | null>(null);

  useEffect(() => {
    console.log("useeffect de contacto de lista de contactos");

    const members = [conv.member, conv.member2];
    console.log("id de usuario actual y contacto (desordenado) " + members);

    const friendId = members.find((member) => member !== user.id);
    console.log("id del contacto " + friendId);

    fetch(`https://heymamaproject.onrender.com/users/getUserById/${friendId}`)
      .then((resp) => resp.json())
      .then((user) => {
        setFriend(user.data[0]);
        console.log("fetch del contacto " + JSON.stringify(user.data[0]));
      })
      .catch((error) => console.error(error.message));
  }, [user, conv]);

  return (
    <article className="flex items-center gap-4 p-6 mb-4 bg-gray-200 hover:bg-gray-300">
      <img src="/assets/avatar-person.svg" width={50} />
      {friend?.username}
    </article>
  );
}

export default ContactList;
