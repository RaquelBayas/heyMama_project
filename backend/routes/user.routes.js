import express from "express";

import checkUsername from "../middlewares/checkUsername.js";
import { contact_form } from "../controllers/contact_form.js";
import deleteUserById from "../controllers/deleteUserById.js"
import { signUp, logIn, isLogIn, initialLogin } from "../controllers/user.controller.js";

const userRoutes = express.Router();

userRoutes.post('/signup', [checkUsername], signUp);
userRoutes.post('/login', logIn);
userRoutes.post('/isLogIn', isLogIn);
userRoutes.post('/contact', contact_form);
userRoutes.get('/initialLogin', initialLogin);
userRoutes.delete('/:userId', deleteUserById);

export { userRoutes };