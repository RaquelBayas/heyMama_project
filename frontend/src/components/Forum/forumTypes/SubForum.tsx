import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function SubForum() {

    const userRaw = localStorage.getItem('user');
    const user = JSON.parse(userRaw!);
    let isProf = false;

    if (user.type === 2) {
        isProf = true;
    }
    
    const subforumId = useParams();
    interface ForumCard {
        "subforum_id": number
        "subforum_title": string
        "subforum_content": string
        "create_time": string
    }

    const [forumCards, setForumCards] = useState<ForumCard[]>([]);

    useEffect(() => {

        fetch(`http://localhost:5000/forum/subforum/${subforumId.id}`)
            .then(resp => resp.json())
            .then(data => {
                console.log('subforummm',data);

                if (!data.error) {
                    data.data.map((value)=> console.log('value.',value.subforum_id))
                    return setForumCards(data.data);

                }
            })
            .catch(error => console.error(error.message));
    }, [subforumId]);

    return (
        <main className="flex flex-col items-center gap-4 font-Montserrat ml-60">
            <h1 className='self-start text-4xl font-semibold text-[#8B6956] flex items-center mt-4 mb-6 data-forumspath'>FOROS <img src="/assets/arrow-symbol.svg" className='inline w-4 mx-6' /> <span className='text-2xl'> Depresión</span></h1>

            <section className="grid grid-cols-2 mw150:flex mw150:flex-col justify-center gap-6 border-2 border-[#DDBEA9] p-8 -pr-8 -ml-[12rem] mb-4 w-5/6">

                {forumCards?.map(({ subforum_id, subforum_title: title, subforum_content: content, create_time: time }) => (
                    <Link to={`/forum/subforum/${subforumId.id}/discussion/${subforum_id}`} key={subforum_id}>
                        <article className="flex flex-col gap-2 bg-white rounded-md p-3 border-2 border-[#8D5E44] drop-shadow-md h-28">
                            <h2 className='text-xl font-semibold'>{title}</h2>
                            <p>
                                {content}
                            </p>
                            <time className='italic'>{time.slice(0, 10)}</time>
                        </article>
                    </Link>
                ))}

            </section>
            
            {isProf &&
                <Link to={'/'}>
                    <button
                        className='self-start p-3 bg-red-300 rounded-full'
                    >
                        Nuevo sub foro
                    </button>
                </Link>
            }
        </main>
    );
}

export default SubForum;