import express from "express";
import { addConsult, deleteConsult, getConsultByUserId, getConsults, getConsultsByProfId } from "../controllers/consult.controller.js";


const consultRoutes = express.Router();
consultRoutes.get('/', getConsults);
consultRoutes.post('/addConsult', addConsult);
consultRoutes.get('/:user_id/:consult_id', getConsultByUserId);
consultRoutes.get('/:profesional_id/', getConsultsByProfId);
consultRoutes.delete('/:consult_id', deleteConsult);


export { consultRoutes };