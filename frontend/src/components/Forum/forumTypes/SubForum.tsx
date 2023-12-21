import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";
import { SetStateAction, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { addSubForum, getNamesForum } from "../../../services/forumService";

function SubForum() {
  const userRaw = localStorage.getItem("user");
  const user = JSON.parse(userRaw!);
  const subforumId = useParams();
  interface ForumCard {
    subforum_id: number;
    subforum_title: string;
    subforum_content: string;
    create_time: string;
  }

  const [hasChanged, setHasChanged] = useState(false);
  const [forumCards, setForumCards] = useState<ForumCard[]>([]);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [titleForum, setTitleForum] = useState("");
  const [content, setContent] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (e: Event) => {
    e.preventDefault();
    const newSubForum = {
      user_id: user.id!,
      subforum_id: parseInt(subforumId.id!),
      subforum_title: title,
      subforum_content: content,
    };
    addSubForum(newSubForum);
    setHasChanged(!hasChanged);
    handleClose();
  };

  useEffect(() => {
    fetch(`http://localhost:5000/forum/subforum/${subforumId.id}`)
      .then((resp) => resp.json())
      .then((data) => {
        if (!data.error) {
          return setForumCards(data.data);
        }
      })
      .catch((error) => console.error(error.message));
  }, [subforumId, hasChanged]);

  useEffect(() => {
    const getForumName = async () => {
      const result = await getNamesForum();
      result.forums.find((object: { forum_id: number; forum_type: SetStateAction<string>; }) => {
        if (object.forum_id === parseInt(subforumId.id!)) {
          setTitleForum(object.forum_type!);
        }
      });
    };
    getForumName();
  }, [subforumId.id]);

  return (
    <main className="flex flex-col items-center gap-4 font-Montserrat ml-60 mt-10">
      <div className="flex items-center self-start">
        <Link to={'/forums'} >
          <h1 className=" text-4xl font-semibold text-[#8B6956] flex items-center mt-4 mb-6 data-forumspath">
            FOROS <img src="/assets/arrow-symbol.svg" className="inline w-4 mx-6" />{" "}

          </h1>
        </Link>
        <span className="text-2xl text-marron"> {titleForum}</span>
      </div>
      {forumCards.length > 0 && <section className="grid grid-cols-2 mw150:flex mw150:flex-col justify-center gap-6 border-2 border-[#DDBEA9] p-8 -pr-8 -ml-[12rem] mb-4 w-5/6">
        {forumCards?.map(
          ({
            subforum_id,
            subforum_title: title,
            subforum_content: content,
            create_time: time,
          }) => (
            <Link
              to={`/forum/subforum/${subforumId.id}/discussion/${subforum_id}`}
              key={subforum_id}
            >
              <article className="flex flex-col gap-2 bg-white rounded-md p-3 border-2 border-[#8D5E44] drop-shadow-md">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="h-6 overflow-hidden text-ellipsis w-fit">
                  {content}
                </p>
                <time className="italic">{time.slice(0, 10)}</time>
              </article>
            </Link>
          )
        )}
        <button
          onClick={handleClickOpen}
          className="absolute p-2 text-4xl text-white rounded-lg bg-marron bottom-8 right-8"
        >
          +
        </button>
      </section>}
      <div>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Crear nuevo tema</DialogTitle>
          <DialogContent>
            <TextField
              required
              autoFocus
              margin="dense"
              id="outlined-required"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              fullWidth
              placeholder="Escribe un título..."
            />

            <TextField
              required
              autoFocus
              margin="dense"
              id="outlined-required"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              type="text"
              fullWidth
              placeholder="Escribe tus pensamientos o dudas..."
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancelar</Button>
            <Button onClick={handleSubmit}>Añadir comentario</Button>
          </DialogActions>
        </Dialog>
      </div>
    </main>
  );
}

export default SubForum;
