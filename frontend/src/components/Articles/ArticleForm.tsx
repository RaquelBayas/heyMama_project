import React, { useState } from "react";
import { addArticle } from "../../services/articlesService";
import { getUserById } from "../../services/userService";
import { Article } from "../../models/Article";
import Menu from "../Menu";

function ArticleForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const userData = await getUserById();

    console.log("userData..", userData);
    const name = `${userData.data[0].name} ${userData.data[0].surname}`;

    if (userData.data && userData.data.length > 0) {
      const article = {
        title: title,
        author: userData.data[0].user_id,
        content: content,
      };
      console.log("name.", article);

      await addArticle(article).then((response) => {
        console.log("addartic.", response);
        if (response.error) {
          console.log(response.error);
        } else {
          setTitle("");
          setContent("");
        }

        return response;
      });
    }
  };

  return (
    <div className='w-screen h-screen bg-background flex flex-row overflow-hidden'>
      <Menu/>
      <div className="w-full ml-[100px] mx-auto flex justify-center align-middle">
      <form onSubmit={handleSubmit} className="flex flex-col w-fit">
          <label className="mt-2 mb-2 text-lg">Título:</label>
          <input
            className="p-2 rounded-md"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label className="text-lg mt-2 mb-2">Contenido:</label>
          <textarea
            className="w-96 h-96 rounded-md p-4"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button
            className="w-40 bg-secondary p-2 m-4 rounded-md mx-auto text-lg"
            type="submit"
          >
            Guardar
          </button>
        </form>  
      </div>
              
    </div>
  );
}

export default ArticleForm;
