interface ProfileResponse {
  error: string;
}
async function getFromDataUser(user_id: string) {
  const baseUrl = `http://localhost:5000/users/getDataUser/${user_id}`;
  try {
    const resp = await fetch(baseUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!resp.ok) {
      const errorResponse: ProfileResponse = await resp.json();
      throw new Error(`Server error: ${errorResponse.error}`);
    }
    return await resp.json();
  } catch (e) {
    console.error(e);
    return { error: "Error getting user profile data" };
  }
}

export { getFromDataUser };
