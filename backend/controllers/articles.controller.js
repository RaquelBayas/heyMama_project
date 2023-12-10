import { sendQuery } from '../db/connectDB.js'
import { zodErrorMap } from '../helpers/zodErrorMap.js';
import { Articles } from '../schemas/Articles.js';

async function addArticle(req, res, next) {
    console.log(req.body)
    
    const { success, error, data } = Articles.safeParse(req.body);
    console.log(success,error,data)

    if (!success) {
      const errors = zodErrorMap(error);
      return res.send({
        ok: false,
        data: null,
        error: errors
      });
    }

    const { title, author, content} = data;

    try {
        await sendQuery('INSERT INTO articles (title, author, content) VALUES (?, ?, ?)', [title, author, content]);
    } catch (error) {
        return next(new Error(error.message));
    };

    res.send({
        ok: true,
        error: null,
        data: null,
        message: 'Artículo añadido correctamente.'
    });

    next();
}

async function deleteArticle(req, res, next) {
    const article_id = req.params;

    try {
        await sendQuery('DELETE FROM articles WHERE article_id=?', article_id);
    } catch (error) {
        return next(new Error(error.message));
    };

    res.send({
        ok: true,
        error: null,
        data: null,
        message: 'Artículo eliminado correctamente.'
      });

    next();
}

async function editArticle(req, res, next){
    const article_id = req.params;
    const newInfo = req.body;

    try {
        Articles.parse(newInfo);
        console.log(getArticles());
    } catch(error) {
        return next(new Error(error.message));
    }
}

async function getArticles() {
    try {
        const articles = await sendQuery('SELECT * FROM articles');
        return articles;
    }catch(error) {
        return next(new Error(error.message));
    }
    
}

export {addArticle, deleteArticle, editArticle, getArticles};