
import { useEffect, useState } from 'react';
import ForumBase from './ForumBase.tsx';
import ForumCard from './ForumCard.tsx';
import { Link } from 'react-router-dom';

function Forum() {

    const userRaw = localStorage.getItem('user');
    const user = JSON.parse(userRaw!);
    let isProf = false;

    if (user.type === 2) {
        isProf = true;
    }

    interface Forum {
        "forum_id": number
        "forum_type": string
    }

    const [forums, setForums] = useState<Forum[]>([]);

    useEffect(() => {

        fetch(`http://localhost:5000/forum/`)
            .then(resp => resp.json())
            .then(forums => {
                console.log(forums);

                if (!forums.error) {
                    return setForums(forums.forums);

                }
            })
            .catch(error => console.error(error.message));
    }, []);

    return (
        <ForumBase>
            {isProf &&
                <Link to={'/'}>
                    <button
                        className='self-start bg-red-300 p-3 rounded-full'
                    >
                        Nuevo sub foro
                    </button>
                </Link>
            }

            {forums?.map(({ forum_id, forum_type: title }) => (

                <ForumCard img='/assets/foros.svg' alt='Una imagen de gente hablando' bg='primary' title={title.slice(0, 1) + title.slice(1).toLowerCase()} text='Comparte y resuelve tus dudas y pensamientos con personas como tú' page={'/forum/subforum/' + forum_id.toString()} key={forum_id} />
            ))}
        </ForumBase>
    );
}

export default Forum;