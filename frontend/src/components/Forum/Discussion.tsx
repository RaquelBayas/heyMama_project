import { useParams } from "react-router-dom";
import Menu from "../Menu";
import Search from "../Search";
import { useEffect, useState } from "react";

function Discussion() {

    const discussionId = useParams()
    console.log(discussionId.id);

    interface Discussion {
        "subforum_id": number
        "title": string
        "comments": string
        "create_time": string
        "author": string
    }

    const [discussions, setDiscussion] = useState<Discussion[]>([]);

    useEffect(() => {

        fetch(`http://localhost:5000/articles/getArticlesByID/${discussionId.id}`)
            .then(resp => resp.json())
            .then(data => {
                console.log(data);

                if (!data.error) {
                    console.log(data.data);

                    return setDiscussion(data.data);

                }
            })
            .catch(error => console.error(error.message));
    }, [discussionId]);

    return (
        <div className='w-screen h-screen bg-background grid grid-cols-[100px,1fr] overflow-x-hidden'>

            <Menu />
            <div className="grid w-screen grid-rows-[5em_1fr]">

                <div className='flex flex-col justify-center mt-3 mb-3 ml-[3.5rem]'>
                    <div className='flex justify-evenly'><Search /></div>
                    <div className='w-screen mt-2 mb-2 border-b border-[#DDBEA9]'></div>
                </div>
            </div>

            <main>

                <section className="flex flex-col gap-6 w-2/4 mx-auto mt-28">
                    {discussions?.map(discussion => (
                        <article className="flex flex-col bg-white p-3 rounded-lg border-4 border-green-300 w-full min-h-min" key={discussion.subforum_id}>
                            <h2 className='text-xl font-semibold mb-2'>{discussion.title}</h2>
                            <p className="text-gray-600 mb-4">{discussion.comments}</p>

                            <span className="text-gray-400">
                                <time>{discussion.create_time.slice(0, 10)} {discussion.create_time.slice(11, 16)}</time>
                                <small>{discussion.author}</small>
                            </span>
                        </article>
                    ))}
                </section>

            </main>

        </div>
    )
}

export default Discussion