import express from "express";
import { signUp, logIn } from "../controllers/user.controller.js";

const userRoutes = express.Router();

userRoutes.post('/signup', signUp);
userRoutes.post('/login', logIn);

export { userRoutes };