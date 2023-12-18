import { sendQuery } from '../db/connectDB.js'
import { zodErrorMap } from '../helpers/zodErrorMap.js';
import { Articles } from '../schemas/Articles.js';

async function addArticle(req, res, next) {
    const { success, error, data } = Articles.safeParse(req.body);

    if (!success) {
        const errors = zodErrorMap(error);
        return res.send({
            ok: false,
            data: null,
            error: errors
        });
    }

    const { title, author, content } = data;
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
    const {article_id} = req.params;

    try {
        await sendQuery('DELETE FROM articles WHERE article_id=?', article_id);
        res.send({
            ok: true,
            error: null,
            data: null,
            message: 'Artículo eliminado correctamente.'
        });
        next();
    } catch (error) {
        return next(new Error(error.message));
    };    
}

async function editArticle(req, res, next) {
    const article_id = req.params.article_id;

    const { success, error, data } = Articles.safeParse(req.body);

    if (!success) {
        const errors = zodErrorMap(error);
        return res.send({
            ok: false,
            data: null,
            error: errors
        });
    }

    try {
        const article = await findArticleById(article_id);
        console.log('article:', article);
    } catch (error) {
        return next(new Error(error.message));
    }

    const { title, author, content } = data;

    try {
        await sendQuery('UPDATE articles SET title = ?, author = ?, content = ? WHERE article_id = ?', [title, author, content, article_id]);
    } catch (error) {
        return next(new Error(error.message));
    }
    res.send({
        ok: true,
        error: null,
        data: null,
        message: 'Artículo actualizado correctamente.'
    });
    next();
}

async function getArticles(req, res, next) {
    const results = await sendQuery('SELECT * FROM articles');

    if (!results) {
        const errors = zodErrorMap(error);
        return res.status(400).send({
            ok: false,
            data: null,
            error: errors
        });
    }

    res.send({
        ok: true,
        error: null,
        articles: results,
        message: 'Articles.'
    });

    next();
}

async function findArticleById(req, res, next) {
    const id = req.params.id;
    console.log('id.', id)
    try {
        const article = await sendQuery('SELECT * FROM articles WHERE article_id = ?', id);
        res.send({
            ok: true,
            error: null,
            data: article,
            message: 'Articles.'
        });

        next();
    } catch (error) {
        return next(new Error(error.message));
    }

}
export { addArticle, deleteArticle, editArticle, getArticles, findArticleById };