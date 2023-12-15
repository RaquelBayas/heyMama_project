import { ReactNode, useEffect, useState } from "react";
import Forum from "./ForumBase";
import ForumCard from "./ForumCard";

function ForumHome(): ReactNode {

    const userRaw = localStorage.getItem('user');
    const user = JSON.parse(userRaw!);

    const [username, setUsername] = useState('');

    useEffect(() => {

        fetch(`http://localhost:5000/users/getUserById/${user.id}`)
            .then(resp => resp.json())
            .then(user => {
                console.log(user.data[0].username);

                setUsername(user.data[0].username);

            })
            .catch(error => console.error(error.message));
    }, [user]);

    return (
        <Forum>
            <h1 className="text-3xl">Bienvenida {username.toLowerCase()}</h1>
            <ForumCard img='/assets/foros.svg' alt='Una imagen de gente hablando' bg='primary' title='Foros' text='Comparte y resuelve tus dudas y pensamientos con personas como tú' page='/Forums' />
            <ForumCard img='/assets/foro-info.svg' alt='Una bombilla' bg='orange-100' title='Información' text='Encuentra información más ampliada de parte de profesionales.' page='/articles' />
        </Forum>
    );
}

export default ForumHome;