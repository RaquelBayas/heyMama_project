import express from "express";
import { addForumCard } from '../controllers'

const forumRoutes = express.Router();

forumRoutes.post('/forum/depresion', addForumCard)

export { forumRoutes };