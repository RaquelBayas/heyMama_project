import { sendQuery } from "../db/connectDB.js";
import { Mood } from "../schemas/Mood.js";
import { zodErrorMap } from '../helpers/zodErrorMap.js';


async function addMood(req, res, next) {
    console.log(req.body);
    const { success, error, data } = Mood.safeParse(req.body);

    if (!success) {
        const errors = zodErrorMap(error);
        return res.send({
          ok: false,
          data: null,
          error: errors
        });
    }

    const {user_id, mood_type_id} = data;
    const currentDate = new Date(Date.now());
    const mood_date = currentDate.toISOString().slice(0, 19).replace("T", " ");
    try {
        await sendQuery('INSERT INTO mood(user_id,mood_date, mood_type_id) VALUES (?,?,?)', [user_id,mood_date,mood_type_id]);
    } catch(error) {
        return next(new Error(error.message));
    }

    res.send({
        ok: true,
        error: null,
        data: null,
        message: 'Mood registrado correctamente.'
    });

    next()
}

async function getMoodName(req,res,next) {
    console.log(req.query);
    const {mood_id} = req.query;
    
    const name = await sendQuery('SELECT mood_type FROM mood_type WHERE mood_id=?',mood_id);
    res.send({
        ok:true,
        error:null,
        data:name,
        message: 'Mood name '+name
    })
    next();
}

async function getMood(req, res, next) {
    console.log(req.query);
    
   const {user_id} = req.params;

    const mood = await sendQuery('SELECT * FROM mood WHERE user_id=?',[user_id]);

    res.send({
        ok: true,
        error: null,
        data: mood,
        message: 'Historial de emociones del usuario '+user_id
    });

    next()
}

async function deleteMood(req, res, next) {
    console.log(req.query);
    
   const {user_id} = req.query;

    try{
        await sendQuery('DELETE FROM mood WHERE user_id=?',[user_id]);
    } catch(error) {
        return next(new Error(error.message));
    }

    res.send({
        ok: true,
        error: null,
        data: null,
        message: 'Historial de emociones del usuario '+user_id+' eliminado.'
      });

    next()
}

export {addMood, getMood, getMoodName, deleteMood}