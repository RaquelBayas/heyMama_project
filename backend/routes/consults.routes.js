import express from "express";
import { addConsult, getConsults, getConsultById, getConsult } from "../controllers/consults.controller.js";

const consultsRoutes = express.Router();
consultsRoutes.post('/addConsult', addConsult);
consultsRoutes.get('/:id/getConsults', getConsults);
consultsRoutes.get('/consult/:consult_id', getConsultById);
consultsRoutes.get('/getConsults/:user_id/:professional_id', getConsult);

export { consultsRoutes };