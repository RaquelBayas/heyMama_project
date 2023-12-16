import { sendQuery } from "../db/connectDB";
import { zodErrorMap } from "../helpers/zodErrorMap";

async function addFriend(req, res, next) {
  const { success, error, data } = Friends.safeParse(req.body);

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
    await sendQuery(
      `INSERT INTO friend_request (user_id, user2_id, state_id) VALUES (?, ?, ?)`,
      [user_id, user2_id, state_id]
    );
    res.send({
      ok: true,
      error: null,
      data: null,
      message: "SubForum added to " + forum_id + " forum.",
    });

    next();
  } catch (error) {
    return next(new Error(error.message));
  }
}

async function updateFriendRequest(req, res, next) {
  const parsedResponse = FriendRequestResponse.parse(responseData);

  const { requestId, response } = parsedResponse;

  if (response === "ACCEPTED") {
    try {
      const updateQuery = `UPDATE friend_request SET state_id = 2 WHERE request_id = ?`;

      const insertFriendQuery = `INSERT INTO friends (user_id, user2_id, NOW()) 
                                SELECT user_id, user2_id, NOW() FROM friend_request WHERE request_id = ?`;

      await sendQuery(updateQuery, [requestId]);
      await sendQuery(insertFriendQuery, [requestId]);

    } catch (error) {
      return next(new Error(error.message));
    }
  }
}


async function deleteFriend(req, res, next) {

    const {user_id, user2_id} = req.body;

    try {
        const deleteQuery = `DELETE FROM friends WHERE (user_id = ? AND user2_id = ?) OR (user_id = ? AND user2_id = ?)`;
        await sendQuery(deleteQuery, [user_id, user2_id]);
    } catch (error) {
        return next(new Error(error.message));
    }

}


export { addFriend, updateFriendRequest, deleteFriend };
