import { useEffect, useState } from "react"

interface forumCardTypes {
    title: string,
    content: string,
    created_at: string
}

function Getforumcards() {

    const [forumcards, setForumcards] = useState<forumCardTypes>([])

    useEffect(() => {
        fetch('http://localhost:5000/forum/depresion')
            .then(resp => resp.json())
            .then(data => {
                if (!data.error) {
                    return setForumcards(data.forumcards)
                }
            })
            .catch(error => console.error(error.message))
    }, [])

    forumcards.map(forumcard => {
        <article className="flex flex-col gap-2 bg-white rounded-md p-3 border-2 border-[#8D5E44] drop-shadow-md h-28 data-forumscard">
            <h2 className='font-semibold text-xl'>{forumcard.title}</h2>
            <p>
                {forumcard.content}
            </p>
            <time className='italic'>{forumcard.created_at}</time>
        </article>
    })

    return (
        <div>Getforumcards</div>
    )
}

export default Getforumcards