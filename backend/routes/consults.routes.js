import express from "express";
import { addConsult, getConsult } from "../controllers/consults.controller.js";

const consultsRoutes = express.Router();
consultsRoutes.post('/addConsult', addConsult);
consultsRoutes.get('/getConsult/:user_id/:professional_id', getConsult);

export { consultsRoutes };