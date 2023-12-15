import express from "express";
import { addArticle, deleteArticle, editArticle, getArticles, findArticleById } from "../controllers/articles.controller.js";

const articlesRoutes = express.Router();

articlesRoutes.post('/addArticle', addArticle);
articlesRoutes.delete('/deleteArticle/:article_id', deleteArticle);
articlesRoutes.put('/editArticle/:article_id', editArticle);
articlesRoutes.get('/getArticles', getArticles);
articlesRoutes.get('/getArticlesByID/:id', findArticleById);

export { articlesRoutes };