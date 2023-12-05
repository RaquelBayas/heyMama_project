import express from "express";
import { addForumCard } from '../controllers/forum/addforumcard.js'
import { getForumCard } from "../controllers/forum/getforumcard.js";

const forumRoutes = express.Router();

forumRoutes.post('/depresion', addForumCard)
forumRoutes.get('/depresion', getForumCard)

export { forumRoutes };