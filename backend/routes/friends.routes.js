import express from "express";
import { addFriend, updateFriendRequest, deleteFriend, getFriendsFromUserID, getFriendRequest, areFriends} from "../controllers/friends.controller.js";

const friendsRoutes = express.Router();
friendsRoutes.post('/addFriend', addFriend);
friendsRoutes.post('/areFriends',areFriends);
friendsRoutes.post('/friendRequest/:request_id', updateFriendRequest),
friendsRoutes.delete('/deleteFriend',deleteFriend);
friendsRoutes.get('/:user_id/friends',getFriendsFromUserID);
friendsRoutes.get('/:user_id/getFriendRequests',getFriendRequest);


export {friendsRoutes};