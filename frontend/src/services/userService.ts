
interface UserServiceResponse {
  error: string
}
async function getUserById(user_id:string) {
    const baseUrl = `http://localhost:5000/users/getUserById/${user_id}`;

    try {
        const resp = await fetch(baseUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        });
        if (!resp.ok) {
          const errorResponse: UserServiceResponse = await resp.json();
          throw new Error(`Server error: ${errorResponse.error}`);
        }
        return await resp.json();
    } catch (error) {
        console.error(error);
        return { error: 'Error during registration' };
    }   
}



export {getUserById};