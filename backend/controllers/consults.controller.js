import { sendQuery } from '../db/connectDB.js'
import { zodErrorMap } from '../helpers/zodErrorMap.js';
import { Consult } from '../schemas/Consult.js';

async function addConsult(req, res, next) {
    console.log('adding consult.', req.body);
    const { success, error, data } = Consult.safeParse(req.body);

    if (!success) {
        const errors = zodErrorMap(error);
        return res.json({
            ok: false,
            data: null,
            error: errors
        });
    }

    const { user_id, professional_id, consult } = data;

    try {
        // Verificar si ya existe una consulta abierta 
        const existingConsult = await sendQuery('SELECT consult_id FROM consults WHERE user_id = ? AND professional_id = ? AND consult_time IS NOT NULL', [user_id, professional_id]);

        if (existingConsult.length > 0) {
            const consultId = existingConsult[0].consult_id;
            await sendQuery('INSERT INTO consult_messages (consult_id, user_id, professional_id, message_text) VALUES (?, ?, ?, ?)', [consultId, user_id, professional_id, consult]);

            res.json({
                ok: true,
                error: null,
                data: null,
                message: 'Mensaje añadido correctamente.'
            });
        } else {
            const result = await sendQuery('INSERT INTO consults (user_id, professional_id) VALUES (?, ?)', [user_id, professional_id]);

            // Obtén el ID de la nueva consulta
            const consultId = result.insertId;

            await sendQuery('INSERT INTO consult_messages (consult_id, user_id, professional_id, message_text) VALUES (?, ?, ?, ?)', [consultId, user_id, professional_id, consult]);

            res.json({
                ok: true,
                error: null,
                data: null,
                message: 'Consulta y mensaje añadidos correctamente.'
            });
        }
    } catch (error) {
        return next(new Error(error.message));
    }
}

async function getConsults(req, res, next) {
    const {id} = req.params;
    try {
        const consults = await sendQuery('SELECT * FROM consults WHERE user_id=? OR professional_id=?', [id,id]);
        if (!consults) {
            const errors = zodErrorMap(error);
            return res.status(400).send({
                ok: false,
                data: null,
                error: errors
            });
        }
        console.log('consultasss',consults)
        res.send({
            ok: true,
            data: consults,
            error: null
        });
        next();
    }catch(error) {
        return next(new Error(error.message));
    }
}

async function getConsult(req, res, next) {
    const { user_id, professional_id } = req.params;
    
    try {
        const consultInfo = await sendQuery('SELECT * FROM consults WHERE user_id=? AND professional_id=?', [user_id, professional_id]);
        console.log('consultInfo.',consultInfo)
        if (consultInfo.length === 0) {
            return res.json({
                ok: false,
                error: 'No se encontró la consulta.',
                data: null
            });
        }

        const consultId = consultInfo[0].consult_id;
        const messages = await sendQuery('SELECT * FROM consult_messages WHERE consult_id=?', [consultId]);

        res.send({
            ok: true,
            error: null,
            data: {
                consultInfo: consultInfo[0],
                messages: messages
            },
            message: 'Consulta y mensajes recuperados correctamente.'
        });
        next();
    } catch (error) {
        return next(new Error(error.message));
    }
}

async function getConsultById(req, res, next) {
    const { consult_id } = req.params;

    try {
        const consult = await sendQuery('SELECT * FROM consults WHERE consult_id=?', [consult_id]);

        if (!consult || consult.length === 0) {
            return res.status(404).send({
                ok: false,
                data: null,
                error: 'No se encontró la consulta especificada.'
            });
        }

        const messages = await sendQuery('SELECT * FROM consult_messages WHERE consult_id=?', [consult_id]);

        res.send({
            ok: true,
            data: {
                consult: consult[0], // Tomamos el primer elemento, ya que debería ser único por consulta_id
                messages: messages
            },
            error: null
        });
    } catch (error) {
        return next(new Error(error.message));
    }
}

export {addConsult, getConsults, getConsultById, getConsult};