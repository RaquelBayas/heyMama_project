import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@mui/material";
import { useEffect, useState } from "react";
import { PostTL } from "../../models/PostTL";
import { addPostTL, getPostByUser } from "../../services/timelineService";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { getUserById } from "../../services/userService";

function Timeline({ userId, loggedUser }) {

  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);
  const [hasChanged, setHasChanged] = useState(false);
  const [likePost, setLikePost] = useState<{ [post_timeline_id: number]: boolean }>({});
  const [comment, setComment] = useState("");
  const [posts, setPosts] = useState<PostTL[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      const results = await getPostByUser(userId);
      setPosts(results.data);
      
      const nameUser = await getUserById(userId);
      setName(nameUser.data[0].name + ' ' + nameUser.data[0].surname);
    };
    getPosts();
  }, [userId, hasChanged]);
  
  const handleLike = (post_timeline_id:number) => {
    setLikePost((prevStates) => {
      const updatedStates = { ...prevStates, [post_timeline_id]: !prevStates[post_timeline_id] };
      return updatedStates;
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    const newPost: PostTL = {
      user_id: loggedUser,
      comment: comment,
    };
    await addPostTL(newPost);
    setHasChanged(!hasChanged);

    handleClose();
  };

  return (
    <div className="ml-12">
      {posts?.map(({ post_timeline_id,user_id, comment }) => (
        <article key={post_timeline_id} className="flex mb-4 bg-white rounded-md gap-24 p-3 border-2 border-primary drop-shadow-md w-[52rem] mw150:w-max mw68:flex-col mw68:gap-4 mw45:text-center">
          <div className="flex flex-col w-full mt-4 mr-12 mw150:m-0">
            <h2 className="my-2 text-xl font-semibold mh150:m-0">{name}</h2>
            <p className="w-full mw68:w-[15rem] mw45:hidden ">{comment}</p>
            <div className="flex justify-end">
            <button onClick={() => handleLike(post_timeline_id!)}>
                {likePost[post_timeline_id!] ? <FaHeart className="text-2xl" /> : <FaRegHeart className="text-2xl" />}
              </button>
            </div>
          </div>
        </article>
      ))}
      <div>
       {
        loggedUser.id == userId &&  (<button
          className="absolute p-4 text-white rounded-md text-md bottom-8 right-8 bg-marron"
          onClick={handleClickOpen}
        >
          Añadir post
        </button>)
       }
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
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancelar</Button>
            <Button onClick={handleSubmit}>Añadir comentario</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default Timeline;
