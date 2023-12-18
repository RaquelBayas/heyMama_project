import express from "express";
import { addPostTL, getPostTLByUserId } from "../controllers/timeline.controller.js";

const timelineRoutes = express.Router();

timelineRoutes.post('/addPost', addPostTL);
timelineRoutes.get('/getPostsByUser/:user_id',getPostTLByUserId);

export { timelineRoutes };