import express from "express";

import checkUsername from "../middlewares/checkUsername.js";
import { contact_form } from "../controllers/contact_form.js";

import { signUp, logIn, isLogIn, getUserById, initialLogin } from "../controllers/user.controller.js";
import profileConfig from "../controllers/settings/profileConfig.js";
import accountConfig from "../controllers/settings/accountConfig.js";
import isPrivate from "../controllers/settings/isPrivate.js";
import { addAvatar, getDataUser } from "../controllers/profile.controller.js";


const userRoutes = express.Router();

userRoutes.post('/signup', [checkUsername], signUp);
userRoutes.post('/login', logIn);
userRoutes.post('/isLogIn', isLogIn);
userRoutes.post('/contact', contact_form);

userRoutes.get('/getUserById/:userId', getUserById);
userRoutes.get('/initialLogin', initialLogin);
userRoutes.get('/getDataUser/:userId',getDataUser);

userRoutes.put('config/:userId', profileConfig);
userRoutes.put('config/account/:userId', accountConfig);
userRoutes.put('/config/account/privacy/:userId',isPrivate);
userRoutes.put('/:userId/addAvatar',addAvatar);

export { userRoutes };