import { useParams } from "react-router-dom";
import Menu from "../Menu";
import Search from "../Search";
import { useEffect, useState } from "react";
import { SubForum } from "../../models/SubForum";
import ModalComments from "./ModalComments";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
  TextField,
  DialogActions,
} from "@mui/material";

function Discussion() {
  const { forum_id, discussion_id } = useParams();
  console.log("params-discu.", forum_id, discussion_id);

  interface Discussion {
    article_id: number;
    title: string;
    comments: string;
    create_time: string;
    author: string;
  }

  const [discussions, setDiscussion] = useState<Discussion[]>([]);
  const [theme, setTheme] = useState<SubForum>();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = () => {
    
  };

  useEffect(() => {
    fetch(`http://localhost:5000/forum/subforum/${forum_id}/${discussion_id}`)
      .then((data) => data.json())
      .then((info) => {
        console.log("idk,", info.data[0]);
        setTheme(info.data[0]);
      });

    fetch(
      `http://localhost:5000/forum/subforum/${forum_id}/discussion/${discussion_id}`
    )
      .then((resp) => resp.json())
      .then((articles) => {
        console.log(articles);

        if (!articles.error) {
          console.log(articles);

          return setDiscussion(articles.articles);
        }
      })
      .catch((error) => console.error(error.message));
  }, [forum_id, discussion_id]);

  return (
    <div className="w-screen h-screen bg-background grid grid-cols-[100px,1fr] overflow-x-hidden gap-2">
      <div>
        <Menu />
      </div>
      <div className="grid w-full h-full grid-rows-[5em_1fr]">
        <div className="flex flex-col justify-center mt-3 mb-3 ">
          <div className="flex justify-evenly">
            <Search />
          </div>
          <div className="w-full mt-2 mb-2 border-b border-[#DDBEA9]"></div>
        </div>
        <main className="flex flex-col">
          <div className="flex flex-col w-3/5 p-3 mx-auto overflow-y-hidden bg-white border-4 rounded-lg border-secondary min-h-min">
            <h1>{theme?.subforum_title}</h1>
            <p>{theme?.subforum_content}</p>
          </div>
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
            <button
              onClick={handleClickOpen}
              className="absolute p-2 text-4xl text-white rounded-lg bg-marron bottom-8 right-8"
            >
              +
            </button>
          </section>
          <div>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Añadir comentario</DialogTitle>
              <DialogContent>
                <TextField
                  autoFocus
                  margin="dense"
                  id="comment"
                  type="text"
                  fullWidth
                  variant="standard"
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancelar</Button>
                <Button onClick={handleSubmit}>Añadir comentario</Button>
              </DialogActions>
            </Dialog>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Discussion;
