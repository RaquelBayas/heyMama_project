import { useEffect, useState } from 'react'
import Menu from '../Menu'
import Search from '../Search'
import { Link } from 'react-router-dom'

function Articles() {

    interface Articles {
        "article_id": number
        "title": string
        "create_time": string
    }

    const [articles, setArticles] = useState<Articles[]>([]);

    useEffect(() => {

        fetch('http://localhost:5000/articles/getArticles')
            .then(resp => resp.json())
            .then(data => {
                console.log(data);

                if (!data.error) {
                    return setArticles(data.data);

                }
            })
            .catch(error => console.error(error.message));
    }, []);

    return (
        <div className='w-screen h-screen bg-background grid grid-cols-[100px,1fr] overflow-x-hidden'>

            <Menu />
            <div className="grid w-screen grid-rows-[5em_1fr]">

                <div className='flex flex-col justify-center mt-3 mb-3 ml-[3.5rem]'>
                    <div className='flex justify-evenly'><Search /></div>
                    <div className='w-screen mt-2 mb-2 border-b border-secondary'></div>
                </div>

                <main className="flex flex-col gap-4 font-Montserrat ml-[3.5rem]">

                    <h1 className='slef-start ml-36 text-4xl font-semibold text-[#8B6956] mt-4 mb-6'>ARTICULOS</h1>

                    <section className="self-center grid grid-cols-4 gap-12 mb-8 mx-auto">

                        {articles?.map(article => (
                            <Link to={`/articles/content/${article.article_id}`} key={article.article_id}>
                                <article className="flex flex-col justify-between bg-white rounded-md p-3 border-2 border-[#8D5E44] drop-shadow-md w-[250px] h-[150px]">

                                    <h2 className='font-semibold text-xl'>{article.title}</h2>
                                    <time className='italic'>{article.create_time}</time>
                                </article>
                            </Link>
                        )
                        )
                        }

                    </section>

                </main>
            </div>
        </div>
    )
}

export default Articles