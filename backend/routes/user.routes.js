import express from "express";
import { signUp, logIn } from "../controllers/user.controller.js";
import { contact_form } from "../controllers/contact_form.js";
import deleteUserById from "../controllers/deleteUserById.js"

const userRoutes = express.Router();

userRoutes.post('/signup', signUp);
userRoutes.post('/login', logIn);
userRoutes.post('/contact', contact_form);

userRoutes.delete('/:userId', deleteUserById);

export { userRoutes };