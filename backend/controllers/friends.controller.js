import { sendQuery } from "../db/connectDB.js";
import { zodErrorMap } from "../helpers/zodErrorMap.js";
import { Friends } from "../schemas/Friends.js";
import { FriendRequestResponse } from "../schemas/Friends.js";

async function addFriend(req, res, next) {
  const request = {
    user_id : req.body.user_id.id,
    user2_id : parseInt(req.body.user2_id),
    state_id : req.body.state_id
  }
  const { success, error, data } = Friends.safeParse(request);
  
  if (!success) {
    const errors = zodErrorMap(error);
    return res.status(400).send({
      ok: false,
      data: null,
      error: errors,
    });
  }

  const { user_id, user2_id, state_id } = data;

  try {
    const existingRequest = await sendQuery(
      `SELECT * FROM friend_request WHERE (user_id = ? AND user2_id = ? AND state_id=1) OR (user_id = ? AND user2_id = ? AND state_id=3)`,
      [user_id, user2_id, user2_id, user_id]
    );

    if (existingRequest.length > 0) {
      return res.status(400).send({
        ok: false,
        error: null,
        data: null,
        message:
          "Friend request already exists between user " +
          user_id +
          " and user " +
          user2_id,
      });
    }

    await sendQuery(
      `INSERT INTO friend_request (user_id, user2_id, state_id) VALUES (?, ?, ?)`,
      [user_id, user2_id, state_id]
    );
    res.send({
      ok: true,
      error: null,
      data: null,
      message:
        "Friend request sended from user " + user_id + " to user " + user2_id,
    });

    next();
  } catch (error) {
    return next(new Error(error.message));
  }
}
async function updateFriendRequest(req, res, next) {
  const parsedResponse = FriendRequestResponse.parse(req.body);
  const { request_id, state_id } = parsedResponse;

  try {
    const existingRequest = await sendQuery(
        `SELECT user_id, user2_id FROM friend_request WHERE request_id = ?`,
        [request_id]
      );
  
      if (existingRequest.length > 0) {
        return res.status(400).send({
          ok: false,
          error: null,
          data: null,
          message:
            "Friendship OK"             
        });
      }
  } catch(error) {
    return next(new Error(error.message));
  }

  if (state_id === "ACCEPTED") {
    try {
      const updateQuery = `UPDATE friend_request SET state_id = 2 WHERE request_id = ?`;

      await sendQuery(updateQuery, [request_id]);
      const insertFriendQuery = `INSERT INTO friends (user_id, user2_id) 
                                SELECT user_id, user2_id FROM friend_request WHERE request_id = ?`;
      
      await sendQuery(insertFriendQuery, [request_id]);
      res.send({
        ok: true,
        error: null,
        data: null,
        message: "Friend request accepted",
      });

      next();
    } catch (error) {
      return next(new Error(error.message));
    }
  } else if (state_id === "REJECTED") {
    try {
      const updateQuery = `UPDATE friend_request SET state_id = 3 WHERE request_id = ?`;
      await sendQuery(updateQuery, [request_id]);

      res.send({
        ok: true,
        error: null,
        data: null,
        message: "Friend request rejected",
      });
      next();
    } catch (error) {
      return next(new Error(error.message));
    }
  }
}

async function getFriendRequest(req, res, next) {
    const {user_id} = req.params;

    try {
        const friendRequestQuery = `SELECT * FROM friend_request WHERE user2_id=? AND state_id=1`;
        const results = await sendQuery(friendRequestQuery, [user_id]);
        res.send({
            ok: true,
            error: null,
            data: results,
            message: "List of friend request of user"+user_id,
          });
          next();
    } catch (error) {
        return next(new Error(error.message));
    }
}

async function deleteFriend(req, res, next) {
  const { user_id, user2_id } = req.body;

  try {
    const deleteQuery = `DELETE FROM friends WHERE (user_id = ? AND user2_id = ?) OR (user_id = ? AND user2_id = ?)`;
    await sendQuery(deleteQuery, [user_id, user2_id]);
    res.send({
      ok: true,
      error: null,
      data: null,
      message:
        "Friendship deleted between user " + user_id + " and user " + user2_id,
    });
    next();
  } catch (error) {
    return next(new Error(error.message));
  }
}

async function getFriendsFromUserID(req, res, next) {
    const {user_id} = req.params;

    try {
        const getFriendsQuery = `SELECT * FROM friends WHERE (user_id=?) OR (user2_id=?)`;
        const results = await sendQuery(getFriendsQuery, [user_id,user_id]);
        res.send({
            ok: true,
            error: null,
            data: results,
            message:
              "List of friends of user " + user_id,
          });
        next();
    } catch (error) {
        return next(new Error(error.message));
    }
}

async function areFriends(req, res, next) {
  const { user_id, user2_id } = req.body;
  
  try {
    const query = `
      SELECT *
      FROM friends
      WHERE (user_id = ? AND user2_id = ?) OR (user_id = ? AND user2_id = ?)
    `;
    const results = await sendQuery(query, [user_id.id, user2_id, user2_id, user_id.id]);
    if(results.length>0) {
      res.send({
        ok: true,
        error: null,
        data: null,
        message: "Friends: YES",
      });
      next();
    }
  } catch (error) {
    return res.status(500).send({
      ok: false,
      error: error.message,
      data: null,
      message: "Error checking frienship",
    });
  }
}

export { addFriend, updateFriendRequest, getFriendRequest, deleteFriend, areFriends, getFriendsFromUserID};
