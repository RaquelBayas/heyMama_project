import { useEffect, useState } from "react";
import Menu from "../Menu";
import Search from "../Search";
import { Link, useParams } from "react-router-dom";
import { getFromDataUser } from "../../services/profileService";

function ArticleContent() {
  const { articleId } = useParams();
  console.log(articleId);

  interface Articles {
    article_id: number;
    title: string;
    content: string;
  }

  const [articles, setArticles] = useState<Articles[]>([]);
  const [author, setAuthor] = useState("");
  const [avatar, setAvatar] = useState("");
  const [professional_id, setProfessional_id] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/articles/getArticlesByID/${articleId}`)
      .then((resp) => resp.json())
      .then(async (data) => {
        console.log(data);

        if (!data.error) {
          setArticles(data.data);
          console.log("authoooor", data.data[0].author);
          fetch(
            `http://localhost:5000/users/getUserById/${data.data[0].author}`
          )
            .then((resp) => resp.json())
            .then((data) => {
              setProfessional_id(data.data[0].user_id);
              setAuthor(`${data.data[0].name} ${data.data[0].surname}`);
              console.log(data.data[0]);
            });

          const resultado = await getFromDataUser(data.data[0].author);
          setAvatar(resultado.data[0].avatar);
        }
      })
      .catch((error) => console.error(error.message));
  }, [articleId]);

  function handleSendConsult() {}
  return (
    <div className="w-screen h-screen bg-background grid grid-cols-[100px,1fr] gap-4 overflow-x-hidden">
      <div>
        <Menu />
      </div>
      <div className="grid w-full h-full grid-rows-[5em,1fr] gap-2">
        <div className="flex flex-col justify-center mt-3 mb-3 ">
          <div className="flex justify-evenly">
            <Search />
          </div>
          <div className="w-screen mt-2 mb-2 border-b border-secondary"></div>
        </div>
        <main className="flex w-fit mx-4 h-full gap-4 font-Montserrat justify-around ml-[3.5em]">
          <div className="grid grid-cols-[2fr,1fr] gap-4">
            <div className="w-full gap-2 ">
              {articles?.map(({ article_id, title, content }) => (
                <div className="flex flex-col gap-6 w-fit" key={article_id}>
                  <h1 className="text-start text-4xl font-semibold text-[#8B6956] mt-6 mb-4">
                    {title}
                  </h1>
                  <article className="bg-white rounded-md p-8 outline-4 outline-[#8D5E44] outline-offset-8 w-full min-h-min h-3/4">
                    <div
                      className="w-fit"
                      dangerouslySetInnerHTML={{ __html: content }}
                    ></div>
                  </article>
                </div>
              ))}
            </div>
            <div className="px-4 bg-white rounded-md w-fit mw150:hidden h-min">
              <article className="flex flex-col items-center justify-center my-auto w-fit h-[400px] outline-2 outline-[#8D5E44] justify-center gap-12">
                <img
                  src={"/assets/avatar-person.svg" || avatar}
                  alt="avatar"
                  className="mt-6 max-w-[8rem]"
                />
                <p ><Link to={`/profile/${professional_id}`}>{author}</Link></p>
                
                <button className="rounded-md mb-6 py-4 px-8 bg-[#DDBEA9] text-[#8D5E44]">
                  <Link to={"/consult"} state={{ professional_id: professional_id }}>
                    Enviar consulta
                  </Link>
                </button>
              </article>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ArticleContent;
