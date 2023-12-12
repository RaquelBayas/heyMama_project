import { useEffect, useState } from "react"
import Menu from "../Menu"
import Search from "../Search"
import { useParams } from "react-router-dom"

function ArticleContent() {

    const articleId = useParams()
    console.log(articleId.id);

    interface Articles {
        "article_id": number
        "title": string
        "content": string
    }

    const [articles, setArticles] = useState<Articles[]>([]);

    useEffect(() => {

        fetch(`http://localhost:5000/articles/getArticlesByID/${articleId.id}`)
            .then(resp => resp.json())
            .then(data => {
                console.log(data);

                if (!data.error) {
                    console.log(data.data);

                    return setArticles(data.data);

                }
            })
            .catch(error => console.error(error.message));
    }, [articleId]);

    return (
        <div className='w-screen h-screen bg-background grid grid-cols-[100px,1fr] overflow-x-hidden'>

            <Menu />
            <div className="grid w-screen grid-rows-[5em_1fr]">

                <div className='flex flex-col justify-center mt-3 mb-3 ml-[3.5rem]'>
                    <div className='flex justify-evenly'><Search /></div>
                    <div className='w-screen mt-2 mb-2 border-b border-secondary'></div>
                </div>

                <main className="flex gap-4 font-Montserrat justify-around ml-[3.5rem]">

                    {articles?.map(article => (
                        <section className="flex flex-col gap-6" key={article.article_id}>
                            <h1 className='slef-start ml-36 text-4xl font-semibold text-[#8B6956] mt-6 mb-4'>{article.title}</h1>
                            <article className="bg-white p-3 outline-4 outline-[#8D5E44] outline-offset-8 w-full min-h-min h-3/4">
                                <p>{article.content}</p>
                            </article>
                        </section>

                    ))}

                    <section className="flex-grow-0 mt-16 mw150:hidden -ml-32 bg-white h-min">
                        <article className="flex flex-col items-center w-[300px] h-[400px] outline-2 outline-[#8D5E44] justify-center gap-12">
                            <img src="../.././src/assets/avatar-person.svg" alt="avatar" className='mt-6 max-w-[8rem]' />
                            <p>Texto de prueba</p>
                            <button className="rounded-md mb-6 py-4 px-8 bg-[#DDBEA9] text-[#8D5E44]">Enviar consulta</button>
                        </article>
                    </section>

                </main>

                {/* <h1 className='slef-start ml-36 text-4xl font-semibold text-[#8B6956] mt-4 mb-6'>TITLE</h1>

                    <section className="self-center grid grid-cols-4 gap-12 mb-8 mx-auto">
                        {articles?.map(article => (
                            <Link to={'/forum/depresion/articlescontent'} key={article.article_id}>
                                <article className="flex flex-col justify-between bg-white rounded-md p-3 border-2 border-[#8D5E44] drop-shadow-md w-[250px] h-[150px]">

                                    <h2 className='font-semibold text-xl'>{article.title}</h2>
                                    <time className='italic'>{article.create_time}</time>
                                </article>
                            </Link>
                        ))}
                    </section>*/}
            </div>
        </div>
    )
}

export default ArticleContent