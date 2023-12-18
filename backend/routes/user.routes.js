import express from "express";

import checkUsername from "../middlewares/checkUsername.js";
import { contact_form } from "../controllers/contact_form.js";

import { signUp, logIn, isLogIn, getUserById, initialLogin, findUser } from "../controllers/user.controller.js";
import profileSetting from "../controllers/setting/profileSetting.js";
import accountSetting from "../controllers/setting/accountSetting.js";
import isPrivate from "../controllers/setting/isPrivate.js";
import { addAvatar, getDataUser } from "../controllers/profile.controller.js";


const userRoutes = express.Router();

userRoutes.post('/signup', [checkUsername], signUp);
userRoutes.post('/login', logIn);
userRoutes.post('/isLogIn', isLogIn);
userRoutes.post('/contact', contact_form);
userRoutes.post('/findUser',findUser);

userRoutes.get('/getUserById/:userId', getUserById);
userRoutes.get('/initialLogin', initialLogin);
userRoutes.get('/getDataUser/:userId',getDataUser);

userRoutes.put('setting/:userId', profileSetting);
userRoutes.put('setting/account/:userId', accountSetting);
userRoutes.put('/setting/account/privacy/:userId',isPrivate);
userRoutes.put('/:userId/addAvatar', addAvatar);

export { userRoutes };