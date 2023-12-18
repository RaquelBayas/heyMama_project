import { PostTL } from "../models/PostTL";

interface Response {
    error: string
}


async function addPostTL(post: PostTL){
    console.log('post-serv.',post);
    const baseUrl = 'http://localhost:5000/timeline/addPost';

    try {
        const resp = await fetch(baseUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(post)
        });
        if (!resp.ok) {
          const errorResponse: Response = await resp.json();
          throw new Error(`Server error: ${errorResponse.error}`);
        }
        return await resp.json();
    } catch (e) {
        console.error(e);
        return { error: 'Error while adding post to TL' };
    }
}

async function getPostByUser(user_id:string) {

    const baseUrl = `http://localhost:5000/timeline/getPostsByUser/${user_id}`;
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
        return { error: 'Error getting user profile data' };
    }
}

export {addPostTL, getPostByUser};