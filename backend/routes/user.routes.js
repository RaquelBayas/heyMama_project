import express from "express";
import { signUp } from "../controllers/user.controller.js";

const userRoutes = express.Router();

userRoutes.post('/signup', signUp);



export { userRoutes };