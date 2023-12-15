import { sendQuery } from "../db/connectDB.js";
import { zodErrorMap } from '../helpers/zodErrorMap.js';

async function addConsult(req, res, next) {

    const { success, error, data } = Mood.safeParse(req.body);

    if (!success) {
        const errors = zodErrorMap(error);
        return res.send({
          ok: false,
          data: null,
          error: errors
        });
    }

    const {user_id, profesional_id, consult} = data;

    try {
        await sendQuery('INSERT INTO consult(user_id,profesional_id,consult) VALUES (?,?,?)', [user_id,profesional_id,consult]);
        res.send({
            ok: true,
            error: null,
            data: null,
            message: 'Consulta registrada correctamente.'
          });
    
        next();
    } catch (error) {
        return next(new Error(error.message));
    }
}

async function getConsults
async function getConsultsByProfId(req, res, next) {
    const {profesional_id} = req.params;
    
    try {
        const consult = await sendQuery('SELECT * FROM consult WHERE profesional_id=?', [profesional_id]);
        res.send({
            ok: true,
            error: null,
            data: consult,
            message: 'Consultas enviadas al profesional '+profesional_id
        });
    
        next();
    } catch (error) {
        return next(new Error(error.message));
    }
}

async function getConsultByUserId(req, res, next) {
    const {user_id} = req.params;
    
    try {
        const consult = await sendQuery('SELECT * FROM consult WHERE user_id=?', [user_id]);
        res.send({
            ok: true,
            error: null,
            data: consult,
            message: 'Consultas realizadas por el usuario '+user_id
        });
    
        next();
    } catch (error) {
        return next(new Error(error.message));
    }
}

async function deleteConsult(req, res, next) {
    const {consult_id} = req.params;

    try {
        await sendQuery('DELETE FROM consult WHERE consult_id=?',consult_id);
        res.send({
            ok: true,
            error: null,
            data: null,
            message: 'Consulta eliminada'
          });
    
        next();
    } catch (error) {
        return next(new Error(error.message));
    }
}


export {addConsult, getConsultsByProfId, getConsultByUserId, deleteConsult};