import express from "express";

import { addSubForum, getForum, getSubForum, deleteSubForum, getForumById, getSubForumById, getDiscussion } from '../controllers/forum.controllers.js'

import { validateForumId } from "../middlewares/index.js";

const forumRoutes = express.Router();

forumRoutes.get('/', getForum);
forumRoutes.get('/:forum_id', getForumById);
forumRoutes.post('/', addSubForum);
forumRoutes.get('/subforum/:id', getSubForum);
forumRoutes.get('/subforum/:id/:subforum_id', getSubForumById);
forumRoutes.get('/subforum/:forum_id/discussion/:id',getDiscussion);
forumRoutes.param('forum_id', validateForumId);

forumRoutes.delete('/subforum/:forum_id', deleteSubForum);


export { forumRoutes };