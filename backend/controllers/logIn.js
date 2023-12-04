import { ZodErrorMap } from 'zod';
import { sendQuery } from '../db/connectDB.js';
import { LoginUser } from '../schemas/User.js';

async function logIn (req, res, next) {
    const { success, error, data } = LoginUser.safeParse(req.body);

    if(!success){
        const errors = ZodErrorMap(error);

        return res.status(400). send({
            ok:false,
            data:null,
            message: null,
            error: errors
        })
    }

    const { email, password } = data;

    try {
        const [user] = await sendQuery(query.checkEmail, [email]);
        if(!user) {
            return next(new HttpError(400, 'Email y/o contraseña incorrectos.'))
        }

        res.send({
            ok:true,
            message: 'Logeado correctamente',
            error:null
        })
        
    } catch (error) {
        return next(error)
    }
}

export { logIn }
