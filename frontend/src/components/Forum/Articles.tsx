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

  useEffect(() => {
    fetch("http://localhost:5000/articles/getArticles")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.articles);
        //setArticles(data.articles);
        if (!data.error) {
          return setArticles(data.articles);
        }
      })
      .catch((error) => console.error(error.message));
  }, []);

  return (
    <div className="w-screen h-screen bg-background grid grid-cols-[100px,1fr] overflow-x-hidden gap-4">
      <div>
        <Menu />
      </div>
      <div className="grid w-full h-full grid-rows-[5em_1fr]">
        <div className="flex flex-col justify-center mt-3 mb-3 ml-[3.5rem]">
          <div className="flex justify-evenly">
            <Search />
          </div>
          <div className="w-screen mt-2 mb-2 border-b border-secondary"></div>
        </div>

        <main className="flex flex-col gap-4 font-Montserrat">
          <div className="flex flex-row gap-4 align-middle">
            <h1 className="slef-start ml-36 text-4xl font-semibold text-[#8B6956] mt-4 mb-6">
              ARTICULOS
            </h1>
            {isProf && (
              <Link to={"/articles/newArticle"}>
                <button className="self-start p-3 my-auto bg-red-300 rounded-full">
                  Nuevo artículo
                </button>
              </Link>
            )}
          </div>
          <section className="grid self-center grid-cols-4 gap-12 mx-auto mb-8">
            {articles?.map(({ article_id, title, create_time }) => (
              <Link to={`/articles/content/${article_id}`} key={article_id}>
                <article className="flex flex-col justify-between bg-white rounded-md p-3 border-2 border-[#8D5E44] drop-shadow-md w-[250px] h-[150px]">
                  <h2 className="text-xl font-semibold">{title}</h2>
                  <time className="italic">{create_time}</time>
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
