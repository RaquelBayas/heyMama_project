import express from "express";

import { addSubForum, getForum, getSubForum, getForumById, getSubForumById, getDiscussion, addCommentsToDiscussion, deleteSubForumComments, deleteCommentById } from '../controllers/forum.controllers.js'

import { validateForumId } from "../middlewares/index.js";

const forumRoutes = express.Router();

forumRoutes.get('/', getForum);
forumRoutes.get('/:forum_id', getForumById);
forumRoutes.post('/', addSubForum);
forumRoutes.get('/subforum/:id', getSubForum);
forumRoutes.get('/subforum/:id/:subforum_id', getSubForumById);
forumRoutes.get('/subforum/:forum_id/discussion/:subforum_id',getDiscussion);
forumRoutes.post('/subforum/:forum_id/discussion/:subforum_id/addComment',addCommentsToDiscussion);
forumRoutes.param('forum_id', validateForumId);

forumRoutes.delete('/subforum/:forum_id/discussion/:subforum_id/deleteComment/:discussion_id', deleteCommentById);
forumRoutes.delete('/subforum/:forum_id/discussion/:subforum_id', deleteSubForumComments);


export { forumRoutes };