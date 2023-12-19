import { sendQuery } from '../../db/connectDB.js';
import bcryp from 'bcrypt';
import { zodErrorMap } from "../../helpers/zodErrorMap.js";
import { getUserById } from '../user.controller.js';

async function accountSetting(req, res){

    const { email, pwdActual , pwdNueva, active } = req.body;

    const { userId } = req.params;

    try {
        
        // Email

        const updateEmail = 'UPDATE users SET email = IFNULL(?,email) WHERE user_id = ?';

        await sendQuery(updateEmail, [email, userId]);

        // Contraseña

      

        // Private - Public



        // Active

        const updateActiveState = 'UPDATE data_users SET isActive = 0 WHERE user_id = ?';

        await sendQuery(updateActiveState, [active,userId]);
        
        res.send({
            ok: true,
            data: { message: 'Cuenta actualizada con éxito' },
            error: null
        });

    } catch (error) {
        console.error(error);
    }
}

export default accountSetting;