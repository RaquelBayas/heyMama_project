import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import "./styleArticles.css";
import { useState } from "react";
import Swal from "sweetalert2";
import { addArticle } from "../../services/articlesService";
import { getUserById } from "../../services/userService";
import { getUserData } from "../../services/authService";

function TextEditor() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const myColors = [
    "#000000",
    "#e60000",
    "#ff9900",
    "#ffff00",
    "#008a00",
    "#0066cc",
    "#9933ff",
    "#ffffff",
    "#facccc",
    "#ffebcc",
    "#ffffcc",
    "#cce8cc",
    "#cce0f5",
    "#ebd6ff",
    "#bbbbbb",
    "#f06666",
    "#ffc266",
    "#ffff66",
    "#66b966",
    "#66a3e0",
    "#c285ff",
    "#888888",
    "#a10000",
    "#b26b00",
    "#b2b200",
    "#006100",
    "#0047b2",
    "#6b24b2",
    "#444444",
    "#5c0000",
    "#663d00",
    "#666600",
    "#003700",
    "#002966",
    "#3d1466",
    "#ffcc00",
    "#ccff00",
    "#00cc66",
    "#0066ff",
    "#ff00cc",
    "#ff6633",
    "#663300",
    "#996633",
    "#cccccc",
    "#ff3366",
    "#33ccff",
    "#993366",
    "#99ff66",
    "#cc99ff",
    "#ffff99",
    "#00ffcc",
  ];
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ align: ["right", "center", "justify"] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
      [{ color: myColors }],
      [{ background: myColors }],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "color",
    "background",
    "align",
  ];

  const handleContentChange = (value) => {
    setContent(value);
  };

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

    const userDataStorage = getUserData();
    const user = JSON.parse(userDataStorage!);
    const userData = await getUserById(user.id);

    console.log("userData..", userData);
    //const name = `${userData.data[0].name} ${userData.data[0].surname}`;

    if (userData.data && userData.data.length > 0) {
      const article = {
        title: title,
        author: userData.data[0].user_id,
        content: content,
      };

      
      await addArticle(article).then((response) => {
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
    <>
      <form onSubmit={handleSubmit} className="flex flex-col justify-center w-fit h-fit">
        <input
          className="p-2 my-4 border-2 rounded-md border-secondary"
          type="text"
          placeholder="Escribe un título..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <ReactQuill
          theme="snow"
          modules={modules}
          formats={formats}
          value={content}
          onChange={handleContentChange}
          style={{
            border: "2px solid 	rgb(221, 190, 169)",
            backgroundColor: "white",
            borderRadius: "6px"
          }}
          className="customStyles"
        />
        <button
        className="w-40 p-2 mx-auto mt-4 text-lg rounded-md bg-secondary"
        type="submit"
      >
        Guardar
      </button>
      </form>
      
    </>
  );
}

export default TextEditor;
