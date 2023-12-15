import express from "express";

import checkUsername from "../middlewares/checkUsername.js";
import { contact_form } from "../controllers/contact_form.js";
import { signUp, logIn, isLogIn, getUserById } from "../controllers/user.controller.js";
import profileConfig from "../controllers/profileConfig.js";
import accountConfig from "../controllers/accountConfig.js";
import initialLogin from "../controllers/initialLogin.js";
import { addAvatar, getDataUser } from "../controllers/profile.controller.js";

const userRoutes = express.Router();

userRoutes.post('/signup', [checkUsername], signUp);
userRoutes.post('/login', logIn);
userRoutes.post('/isLogIn', isLogIn);
userRoutes.post('/contact', contact_form);
userRoutes.get('/getUserById/:userId', getUserById);
userRoutes.get('/initialLogin', initialLogin);
userRoutes.put('config/:userId', profileConfig);
userRoutes.put('config/account/:userId', accountConfig);
userRoutes.get('/getDataUser/:userId',getDataUser);
userRoutes.put('/:userId/addAvatar',addAvatar);

export { userRoutes };