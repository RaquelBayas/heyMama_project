import { User } from "../schemas/User.js";
import {sendQuery} from '../db/connectDB.js'
import { zodErrorMap } from '../helpers/zodErrorMap.js';

async function signUp(req,res,next) {
    console.log(req.body)
    
    const { success, error, data } = User.safeParse(req.body);
    console.log(success,error,data)

    if (!success) {
      const errors = zodErrorMap(error);
      return res.send({
        ok: false,
        data: null,
        error: errors
      });
    }

    //Comprobar que el usuario está registrado
    //Comprobar si tiene el dato 'num_colegiado/profesion' --> type_user_id = 2 (prof)
    //Admin (1), Prof. (2), Wom. (3)
    const { userType, name, surname, email, password, phone, job, numCollege} = data;

    try {
        const type_user_id = {
          'admin': 1,
          'prof': 2,
          'user': 3
        }
        
        if(userType === 'prof') {
            await sendQuery('INSERT INTO users (name, surname, email, password, phone, job, numCollege, type_user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [name, surname, email, password, phone, job, numCollege, type_user_id[userType]]);
        } else if(userType === 'user') {
            await sendQuery('INSERT INTO users (name, surname, email, password, phone, type_user_id) VALUES (?, ?, ?, ?, ?, ?)', [name, surname, email, password, phone, type_user_id[userType]]);
        }
        
    } catch (error) {
        return next(new Error(error.message));
    }

    res.send({
        ok: true,
        error: null,
        data: null,
        message: 'Usuario registrado correctamente.'
      });

    next()
}

export {signUp}