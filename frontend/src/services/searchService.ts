interface Response {
    error: string
  }

async function findUser(user: string){
    const baseUrl = 'http://localhost:5000/users/findUser';

    try {
        const resp = await fetch(baseUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({user})
        });
        if (!resp.ok) {
          const errorResponse: Response = await resp.json();
          throw new Error(`Server error: ${errorResponse.error}`);
        }
        return await resp.json();
    } catch (e) {
        console.error(e);
        return { error: 'Error while searching user' };
    }
}

export {findUser};