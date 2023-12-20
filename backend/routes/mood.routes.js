import express from "express";
import { addMood, deleteMood, getMood, getMoodName } from "../controllers/mood.controller.js"

const moodRoutes = express.Router();

moodRoutes.post('/addMood', addMood);
moodRoutes.get('/getMood/:user_id',getMood);
moodRoutes.get('/getMoodName', getMoodName);
moodRoutes.delete('/deleteMood', deleteMood);

export { moodRoutes };