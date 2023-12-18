import { useParams } from "react-router-dom";
import Menu from "../Menu";
import Search from "../Search";
import { useEffect, useState } from "react";
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

function Discussion() {
  const discussionId = useParams();

  interface Discussion {
    article_id: number;
    title: string;
    comments: string;
    create_time: string;
    author: string;
  }

const [hasChanged, setHasChanged] = useState(false);
  const [discussions, setDiscussion] = useState<Comment[]>([]);
  const [theme, setTheme] = useState<SubForum>();
  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState("");

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
    setComment(comment);
    addComment(newComment);
    setHasChanged(!hasChanged);
    handleClose();
    setComment("");
  };
  const handleDeleteComment = async(index:number) => {
    const selectedComment = discussions.find((item:Comment) => {if(item.discussion_id==index) return item;});
    await deleteComment(selectedComment!);
    setHasChanged(hasChanged);

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
      .then((comentarios) => {
        if (!comentarios.error) {
          return setDiscussion(comentarios.data);
        }
      })
      .catch((error) => console.error(error.message));
  }, [forum_id, discussion_id, hasChanged]);

    return (
        <div className='w-screen h-screen bg-background grid grid-cols-[100px,1fr] overflow-x-hidden'>

            <Menu />
            <div className="grid w-screen grid-rows-[5em_1fr]">

                <div className='flex flex-col justify-center mt-3 mb-3 ml-[3.5rem]'>
                    <div className='flex justify-evenly'><Search /></div>
                    <div className='w-screen mt-2 mb-2 border-b border-[#DDBEA9]'></div>
                </div>
            </div>

            <main>

                <section className="flex flex-col w-2/4 gap-6 mx-auto mt-28">
                    {discussions?.map(({ article_id, title, comments, create_time, author }) => (
                        <article className="flex flex-col w-full p-3 bg-white border-4 border-green-300 rounded-lg min-h-min" key={article_id}>
                            <h2 className='mb-2 text-xl font-semibold'>Esto es un test de prueba</h2>
                            <p className="mb-4 text-gray-600">{comments}</p>

                            <span className="text-gray-400">
                                <time>{create_time.slice(0, 10)} {create_time.slice(11, 16)}</time>
                                <small className="block">Tester</small>
                            </span>
                        </article>
                    ))}
                </section>

            </main>

        </div>
    );
}

export default Discussion;
