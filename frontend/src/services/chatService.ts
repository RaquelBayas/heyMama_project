interface Response {
    error: string
}
async function newChat(user_id:number, user2_id:number){
    const baseUrl = 'https://heymamaproject.onrender.com/chat/';

    try {
        const resp = await fetch(baseUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({sender:user_id,receiver:user2_id})
        });
        if (!resp.ok) {
          const errorResponse: Response = await resp.json();
          throw new Error(`Server error: ${errorResponse.error}`);
        }
        return await resp.json();
    } catch (e) {
        console.error(e);
        return { error: 'Error during mood register' };
    }
}

async function getChat(userId:number){
    const baseUrl = `https://heymamaproject.onrender.com/chat/${userId}`;

    try {
        const resp = await fetch(baseUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        });
        if (!resp.ok) {
          const errorResponse: Response = await resp.json();
          throw new Error(`Server error: ${errorResponse.error}`);
        }
        return await resp.json();
    } catch (e) {
        console.error(e);
        return { error: 'Error during mood register' };
    }
}

export {newChat, getChat};