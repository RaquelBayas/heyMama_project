import express from "express";

import { addSubForum, getForum, getSubForum, deleteSubForum, getForumById, getSubForumById } from '../controllers/forum.controllers.js'

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