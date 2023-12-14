import React, { useState } from "react";
import { addArticle } from "../../services/articlesService";
import { getUserById } from "../../services/userService";
import { Article } from "../../models/Article";
import Menu from "../Menu";
import Swal from 'sweetalert2';
import TextEditor from "./TextEditor";

function ArticleForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (title === '' || content === ''){
      Swal.fire({
        title: 'Oops...',
        icon: 'error',
        text: 'Rellena todos los campos'
      });
      return;
    }

    const userData = await getUserById();

    console.log("userData..", userData);
    //const name = `${userData.data[0].name} ${userData.data[0].surname}`;

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
          Swal.fire({
            title: 'Oops...',
            icon: 'error',
            text: 'Ha ocurrido un error al guardar el artículo'
          });
        } else {
          setTitle("");
          setContent("");
          Swal.fire({
            title: '¡Artículo añadido!',
            icon: 'success',
            confirmButtonText: 'Cerrar'
          });
        }

        return response;
      });
    }
  };

  return (
    <div className='flex flex-row w-screen h-screen overflow-hidden bg-background'>
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
            <label className="mt-2 mb-2 text-lg">Contenido:</label>
            <textarea
              className="p-4 rounded-md w-96 h-96"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <button
              className="w-40 p-2 m-4 mx-auto text-lg rounded-md bg-secondary"
              type="submit"
            >
              Guardar
            </button>
        </form>       `
      </div>
      <div>
        <TextEditor/>
      </div>
              
    </div>
  );
}

export default ArticleForm;
