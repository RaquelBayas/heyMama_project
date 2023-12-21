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
            <h1 className="flex p-6 text-4xl font-semibold text-[#755543]">¡Bienvenida, {username.toLowerCase()}!</h1>
            <ForumCard img='/assets/foros.svg' alt='Una imagen de gente hablando' bg='primary' title='Foros' text='Comparte y resuelve tus dudas y pensamientos con personas como tú' page='/Forums' />
            <ForumCard img='/assets/foro-info.svg' alt='Una bombilla' bg='primary' title='Información' text='Encuentra información más ampliada de parte de profesionales.' page='/articles' />
            {
                user.type == 2 &&
                (<ForumCard img='/assets/foro-info.svg' alt='Una bombilla' bg='primary' title='Consultas' text='Consultas.' page='/listConsults' />)
            }
        </Forum>
    );
}

export default ForumHome;