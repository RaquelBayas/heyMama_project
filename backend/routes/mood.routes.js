import express from "express";
import { addMood, deleteMood, getMood } from "../controllers/mood.controller.js"

const moodRoutes = express.Router();


moodRoutes.post('/addMood', addMood);
moodRoutes.get('/getMood',getMood);
moodRoutes.delete('/deleteMood', deleteMood);

export { moodRoutes };