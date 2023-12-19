import { sendQuery } from '../db/connectDB.js'
import { zodErrorMap } from '../helpers/zodErrorMap.js';


async function addConsult(req, res, next) {
    const { success, error, data } = Consult.safeParse(req.body);

    if (!success) {
        const errors = zodErrorMap(error);
        return res.send({
            ok: false,
            data: null,
            error: errors
        });
    }

    const { user_id, professional_id, consult } = data;
    try {
        await sendQuery('INSERT INTO consults (user_id, professional_id, consult) VALUES (?, ?, ?)', [user_id, professional_id, consult]);
    } catch (error) {
        return next(new Error(error.message));
    };

    res.send({
        ok: true,
        error: null,
        data: null,
        message: 'Consulta añadida correctamente.'
    });
    next();
}


async function getConsult(req, res, next) {
    
    const {user_id, professional_id} = req.params;
    try {
        const results = await sendQuery('SELECT * FROM consults WHERE user_id=? AND professional_id=?', [user_id, professional_id, consult]);
        res.send({
            ok: true,
            error: null,
            data: results,
            message: 'Consulta.'
        });
        next();
    } catch (error) {
        return next(new Error(error.message));
    };
}


export {addConsult, getConsult};