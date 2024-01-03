interface Response {
  error: string;
}

interface LoggedUser {
  id: number;
}
async function addFriend(loggedUser: number, userId: number) {
  const baseUrl = "https://heymamaproject.onrender.com/friends/addFriend";

  try {
    const resp = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: loggedUser,
        user2_id: userId,
        state_id: 1,
      }),
    });
    if (!resp.ok) {
      const errorResponse: Response = await resp.json();
      throw new Error(`Server error: ${errorResponse.error}`);
    }
    return await resp.json();
  } catch (e) {
    console.error(e);
    return { error: "Error while searching user" };
  }
}

async function checkFriends(loggedUser: number, userId: number) {
  const baseUrl = "https://heymamaproject.onrender.com/friends/areFriends";
  try {
    const resp = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: loggedUser,
        user2_id: userId,
      }),
    });
    if (!resp.ok) {
      const errorResponse: Response = await resp.json();
      throw new Error(`Server error: ${errorResponse.error}`);
    }
    return await resp.json();
  } catch (e) {
    console.error(e);
    return { error: "Error checking frienship" };
  }
}

async function getFriendRequests(loggedUser: LoggedUser) {
  const baseUrl = `https://heymamaproject.onrender.com/friends/${loggedUser.id}/getFriendRequests`;
  try {
    const resp = await fetch(baseUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!resp.ok) {
      const errorResponse: Response = await resp.json();
      throw new Error(`Server error: ${errorResponse.error}`);
    }
    return await resp.json();
  } catch (e) {
    console.error(e);
    return { error: "Error checking frienship" };
  }
}

async function getFriends(id: number) {
  const baseUrl = `https://heymamaproject.onrender.com/friends/${id}/friends`;
  try {
    const resp = await fetch(baseUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!resp.ok) {
      const errorResponse: Response = await resp.json();
      throw new Error(`Server error: ${errorResponse.error}`);
    }
    return await resp.json();
  } catch (e) {
    console.error(e);
    return { error: "Error checking frienship" };
  }
}

export { addFriend, checkFriends, getFriendRequests, getFriends };
