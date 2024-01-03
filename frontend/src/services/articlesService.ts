import { Article } from "../models/Article";

interface ArticleResponse {
    error: string
}
async function addArticle(article: Article){
    const baseUrl = 'https://heymamaproject.onrender.com/articles/addArticle';

    try {
        const resp = await fetch(baseUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(article)
        });
        if (!resp.ok) {
          const errorResponse: ArticleResponse = await resp.json();
          throw new Error(`Server error: ${errorResponse.error}`);
        }
        return await resp.json();
    } catch (e) {
        console.error(e);
        return { error: 'Error during mood register' };
    }
}

export {addArticle};
