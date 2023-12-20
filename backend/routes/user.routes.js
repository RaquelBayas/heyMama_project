import express from "express";

import checkUsername from "../middlewares/checkUsername.js";
import { contact_form } from "../controllers/contact_form.js";

import { signUp, logIn, isLogIn, getUserById, initialLogin, findUser, getAllUsers } from "../controllers/user.controller.js";
import profileSetting from "../controllers/setting/profileSetting.js";
import accountSetting from "../controllers/setting/accountSetting.js";
import isPrivate from "../controllers/setting/isPrivate.js";
import addAvatarPic from "../controllers/setting/addAvatarPic.js";
import { addAvatar, getDataUser } from "../controllers/profile.controller.js";
import getAvatar from "../controllers/setting/getAvatar.js";
import userAuth from "../middlewares/userAuth.js";


const userRoutes = express.Router();

userRoutes.post('/signup', [checkUsername], signUp);
userRoutes.post('/login', logIn);
userRoutes.post('/isLogIn', isLogIn);
userRoutes.post('/contact', contact_form);
userRoutes.post('/findUser',findUser);
userRoutes.post('/avatar/:userId', addAvatarPic);

userRoutes.get('/getUserById/:userId' ,getUserById);
userRoutes.get('/initialLogin', initialLogin);
userRoutes.get('/getDataUser/:userId',getDataUser);
userRoutes.get('/all',getAllUsers);
userRoutes.get('/avatar/:nombreArchivo', getAvatar);


userRoutes.put('/setting/:userId', profileSetting);
userRoutes.put('/setting/account/:userId', accountSetting);
userRoutes.put('/setting/account/privacy/:userId',isPrivate);
userRoutes.put('/:userId/addAvatar', addAvatar);

export { userRoutes };