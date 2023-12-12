import express from "express";
import { addSubForum } from '../controllers/forum/addSubForum.js'
import { getForum } from "../controllers/forum/getForum.js";
import { getSubForum } from "../controllers/forum/getSubForum.js";
import { deleteSubForum } from "../controllers/forum/deleteSubForum.js";
import { getForumById } from "../controllers/forum/getForumById.js";
import getSubForumById from "../controllers/forum/getSubForumById.js";
import { validateForumId } from "../middlewares/index.js";

const forumRoutes = express.Router();

forumRoutes.get('/', getForum);
forumRoutes.post('/', addSubForum);
forumRoutes.get('/subforum', getSubForum);
forumRoutes.get('/subforum/:id', getSubForumById);
forumRoutes.param('forum_id', validateForumId);
forumRoutes.get('/:forum_id', getForumById);
forumRoutes.delete('/subforum/:forum_id', deleteSubForum);


export { forumRoutes };