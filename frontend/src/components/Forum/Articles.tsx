import { useEffect, useState } from "react";
import Menu from "../Menu";
import Search from "../Search";
import { Link } from "react-router-dom";

function Articles() {
  const userRaw = localStorage.getItem("user");
  const user = JSON.parse(userRaw!);
  let isProf = false;

  if (user.type === 2) {
    isProf = true;
  }

  interface Articles {
    article_id: number;
    title: string;
    create_time: string;
  }

  const [articles, setArticles] = useState<Articles[]>([]);
  const [dateArticle, setDateArticle] = useState([]);

  useEffect(() => {
    fetch("https://heymamaproject.onrender.com/articles/getArticles")
      .then((resp) => resp.json())
      .then((data) => {
        if (!data.error) {
          return setArticles(data.articles);
        }
      })
      .catch((error) => console.error(error.message));
  }, []);

  function changeFormat(date: string) {
    const newDate = new Date(date);
    return newDate.toISOString().substring(0, 10);
  }
  return (
    <div className="w-screen h-screen bg-background sm:grid sm:grid-cols-[100px,1fr] overflow-x-hidden gap-4">
      <div>
        <Menu />
      </div>
      <div className="sm:grid w-full h-full sm:grid-rows-[5em_1fr]">
        <div className="flex flex-col justify-center mt-3 mb-3 ml-[3.5rem]">
          <div className="flex justify-evenly">
            <Search />
          </div>
          <div className="w-screen mt-2 mb-2 border-b border-secondary"></div>
        </div>

        <main className="flex flex-col gap-4 font-Montserrat">
          <div className="flex flex-col justify-center align-middle sm:gap-8 sm:flex-row">
            <h1 className="slef-start mx-auto my-6 sm:ml-36 text-4xl text-center font-semibold text-[#8B6956] mt-4 sm:mb-6">
              ARTICULOS
            </h1>
            {isProf && (
              <button className="flex flex-row items-center self-start p-3 mx-auto my-auto rounded-md sm:ml-8 h-fit bg-secondary">
                <Link to={"/articles/newArticle"}>
                  <span>Añadir nuevo artículo </span>
                </Link>
              </button>
            )}
          </div>
          <section className="flex flex-col self-center justify-center gap-6 mx-auto mt-4 mb-8 sm:mt-0 sm:flex-wrap sm:gap-12 sm:grid sm:grid-cols-4">
            {articles?.map(({ article_id, title, create_time }) => (
              <Link to={`/articles/content/${article_id}`} key={article_id}>
                <article className="flex flex-col justify-between bg-white rounded-md p-3 border-2 border-[#8D5E44] drop-shadow-md w-[250px] h-[150px]">
                  <h2 className="text-xl font-semibold">{title}</h2>
                  <time className="italic">{changeFormat(create_time)}</time>
                </article>
              </Link>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}

export default Articles;
