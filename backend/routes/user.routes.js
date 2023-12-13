import express from "express";
import { contact_form } from "../controllers/contact_form.js";
import deleteUserById from "../controllers/deleteUserById.js"
import { signUp, logIn, isLogIn } from "../controllers/user.controller.js";

const userRoutes = express.Router();

userRoutes.post('/signup', signUp);
userRoutes.post('/login', logIn);
userRoutes.post('/isLogIn', isLogIn);
userRoutes.post('/contact', contact_form);

userRoutes.delete('/:userId', deleteUserById);

export { userRoutes };