import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";

import { useState } from "react";

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
      ["link", "image"],
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
    "image",
    "background",
    "align",
  ];

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Text Editor In React JS</h1>
      <form className="flex flex-col w-fit">
        <label className="mt-2 mb-2 text-lg">Título:</label>
        <input
          className="p-2 rounded-md"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <ReactQuill
          theme="snow"
          modules={modules}
          formats={formats}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{
            height: "28rem",
            border: "solid 2px black",
            boxShadow: "none",
          }}
        />
        <button
        className="w-40 p-2 m-4 mx-auto text-lg rounded-md bg-secondary"
        type="submit"
      >
        Guardar
      </button>
      </form>
      
    </>
  );
}

export default TextEditor;
