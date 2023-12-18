import { Comment } from "../models/Comment";
import { SubForum } from "../models/SubForum";

interface Response {
  error: string;
}
async function addComment(comment: Comment) {
  const baseUrl = `http://localhost:5000/forum/subforum/${comment.forum_id}/discussion/${comment.subforum_id}/addComment`;

  try {
    const resp = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    });
    if (!resp.ok) {
      const errorResponse: Response = await resp.json();
      throw new Error(`Server error: ${errorResponse.error}`);
    }
    return await resp.json();
  } catch (e) {
    console.error(e);
    return { error: "Error while adding comment" };
  }
}

async function addSubForum(subforum: SubForum) {
  const baseUrl = `http://localhost:5000/forum`;

  try {
    const resp = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(subforum),
    });
    if (!resp.ok) {
      const errorResponse: Response = await resp.json();
      throw new Error(`Server error: ${errorResponse.error}`);
    }
    return await resp.json();
  } catch (e) {
    return { error: "Error while adding subforum" };
  }
}

async function getNamesForum() {

  const baseUrl = `http://localhost:5000/forum`;
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
    return { error: "Error getting forums names" };
  }
}

async function deleteComment(comment:Comment) {
    
    const baseUrl = `http://localhost:5000/forum/subforum/${comment.forum_id}/discussion/${comment.subforum_id}/deleteComment/${comment.discussion_id}`;
    
    console.log('forumservice,delete',comment);
    try {
        const resp = await fetch(baseUrl, {
          method: "DELETE",
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
        return { error: "Error deleting comment" };
      }
}


export { addComment, addSubForum, getNamesForum, deleteComment };
