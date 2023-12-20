import { useEffect, useState } from "react";

function ContactList({ conv, user }) {

    console.log('lista de contactos: contacto, conversacion ' + JSON.stringify(conv));


    const [friend, setFriend] = useState(null);

    useEffect(() => {
        console.log('useeffect de contacto de lista de contactos');

        const members = [conv.member, conv.member2];
        console.log('id de usuario actual y contacto (desordenado) ' + members);

        const friendId = members.find(member => member !== user.id);
        console.log('id del contacto ' + friendId);


        fetch(`http://localhost:5000/users/getUserById/${friendId}`)
            .then(resp => resp.json())
            .then(user => {
                setFriend(user.data[0]);
                console.log('fetch del contacto ' + JSON.stringify(user.data[0]));

            })
            .catch(error => console.error(error.message));

    }, [user, conv]);


    return (
        <article className="flex items-center gap-4 p-6 mb-4 bg-gray-200 hover:bg-gray-300">
            <img src="/assets/avatar-person.svg" width={50} />
            {friend?.username}
        </article>
    );
}

export default ContactList;