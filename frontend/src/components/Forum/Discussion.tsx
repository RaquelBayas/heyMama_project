import { useParams } from "react-router-dom";
import Menu from "../Menu";
import Search from "../Search";
import { SetStateAction, useEffect, useState } from "react";
import { SubForum } from "../../models/SubForum";
import { FaTrashAlt } from "react-icons/fa";
import { Comment } from "../../models/Comment";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  TextField,
  DialogActions,
} from "@mui/material";
import { addComment, deleteComment } from "../../services/forumService";
import { getUserById } from "../../services/userService";

function Discussion() {
  const { forum_id, discussion_id } = useParams();
  const userRaw = localStorage.getItem("user");
  const user = JSON.parse(userRaw!);

  const [hasChanged, setHasChanged] = useState(false);
  const [discussions, setDiscussion] = useState<Comment[]>([]);
  const [theme, setTheme] = useState<SubForum>();
  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState("");
  const [namesAuthor, setNamesAuthor] = useState();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (e: Event) => {
    e.preventDefault();
    const newComment = {
      forum_id: parseInt(forum_id!),
      subforum_id: parseInt(discussion_id!),
      comments: comment!,
      author: user.id!,
    };
    addComment(newComment);
    setHasChanged(!hasChanged);
    handleClose();   
  };
  const handleDeleteComment = async (index: number) => {
    const selectedComment = discussions.find((item: Comment) => {
      if (item.discussion_id == index) return item;
    });
    await deleteComment(selectedComment!);
    setHasChanged(!hasChanged);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/forum/subforum/${forum_id}/${discussion_id}`)
      .then((data) => data.json())
      .then((info) => {
        setTheme(info.data[0]);
      });
  }, [forum_id, discussion_id]);

  useEffect(() => {
    fetch(
      `http://localhost:5000/forum/subforum/${forum_id}/discussion/${discussion_id}`
    )
      .then((resp) => resp.json())
      .then(async (comentarios) => {
        if (!comentarios.error) {
          const names = await Promise.all(
            comentarios.data.map(async (value) => {
              const data = await getUserById(value.author);
              return data.data[0].name + " " + data.data[0].surname;
            })
          );
          setNamesAuthor(names);

          return setDiscussion(comentarios.data);
        }
      })
      .catch((error) => console.error(error.message));
  }, [forum_id, discussion_id,hasChanged]);

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
            <h1 className="font-bold">{theme?.subforum_title}</h1>
            <p>{theme?.subforum_content}</p>
          </div>
          <section className="flex flex-col w-2/4 gap-6 mx-auto mt-8">
            {discussions
              
              .map(({ discussion_id, comments, author }, index) => (
                <article
                  className="flex flex-col w-full p-3 bg-white border-4 rounded-lg border-secondary min-h-min"
                  key={index}
                >
                  {author === user.id && (
                    <div className="flex justify-end">
                      <button
                        onClick={() => handleDeleteComment(discussion_id!)}
                        className="p-2 text-sm text-white rounded-lg flex-end w-fit bg-marron"
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  )}
                  <p className="mb-4 text-gray-600">{comments}</p>

                  <span key={index} className="text-gray-400">
                    {namesAuthor![index]}
                  </span>
                </article>
              ))}
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
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
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
