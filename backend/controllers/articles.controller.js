import { sendQuery } from '../db/connectDB.js'
import { zodErrorMap } from '../helpers/zodErrorMap.js';
import { Articles } from '../schemas/Articles.js';

async function addArticle(req,res,next) {
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
        await sendQuery('INSERT INTO article (title, author, content) VALUES (?, ?, ?)', [title, author, content]);
    } catch (error) {
        return next(new Error(error.message));
    };

    res.send({
        ok: true,
        error: null,
        data: null,
        message: 'Usuario registrado correctamente.'
      });

    next()

}

export {addArticle};