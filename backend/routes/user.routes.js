import express from "express";
import { signUp } from "../controllers/user.controller.js";
import checkUsername from "../middlewares/checkUsername.js";

const userRoutes = express.Router();

userRoutes.post('/signup', [checkUsername], signUp);



export { userRoutes };