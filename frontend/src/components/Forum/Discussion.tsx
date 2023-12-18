import { useParams } from "react-router-dom";
import Menu from "../Menu";
import Search from "../Search";
import { useEffect, useState } from "react";

function Discussion() {
  const discussionId = useParams();

  interface Discussion {
    article_id: number;
    title: string;
    comments: string;
    create_time: string;
    author: string;
  }

  const [discussions, setDiscussion] = useState<Discussion[]>([]);

  useEffect(() => {
    fetch(`http://localhost:5000/articles/getArticles`)
      .then((resp) => resp.json())
      .then((articles) => {
        console.log(articles);

        if (!articles.error) {
          console.log(articles.articles);

          return setDiscussion(articles.articles);
        }
      })
      .catch((error) => console.error(error.message));
  }, [discussionId]);

  return (
    <div className="w-screen h-screen bg-background grid grid-cols-[100px,1fr] overflow-x-hidden">
      <Menu />
      <div className="grid w-screen grid-rows-[5em_1fr]">
        <div className="flex flex-col justify-center mt-3 mb-3 ml-[3.5rem]">
          <div className="flex justify-evenly">
            <Search />
          </div>
          <div className="w-screen mt-2 mb-2 border-b border-[#DDBEA9]"></div>
        </div>
      </div>

      <main>
        <section className="flex flex-col w-2/4 gap-6 mx-auto mt-28">
          {discussions?.map(
            ({ article_id, title, comments, create_time, author }) => (
              <article
                className="flex flex-col w-full p-3 bg-white border-4 border-green-300 rounded-lg min-h-min"
                key={article_id}
              >
                <h2 className="mb-2 text-xl font-semibold">
                  Esto es un test de prueba
                </h2>
                <p className="mb-4 text-gray-600">{comments}</p>

                <span className="text-gray-400">
                  <time>
                    {create_time.slice(0, 10)} {create_time.slice(11, 16)}
                  </time>
                  <small className="block">Tester</small>
                </span>
              </article>
            )
          )}
        </section>
      </main>
    </div>
  );
}

export default Discussion;
