import express from "express";
import { contact_form } from "../controllers/contact_form.js";
import { profileConfig } from "../controllers/profileConfig.js";
import { signUp, logIn, isLogIn } from "../controllers/user.controller.js";
import initialLogin from "../controllers/initialLogin.js";

const userRoutes = express.Router();

userRoutes.post('/signup', signUp);
userRoutes.post('/login', logIn);
userRoutes.post('/isLogIn', isLogIn);
userRoutes.post('/contact', contact_form);
userRoutes.get('/initialLogin', initialLogin);

userRoutes.put('config/:userId', profileConfig);

export { userRoutes };