import { User } from "../schemas/User.js";
import { sendQuery } from '../db/connectDB.js';
import { zodErrorMap } from "../helpers/zodErrorMap.js";

async function accountConfig(req, res){
    const { success, error, data } = User.safeParse(req.body);
    console.log(data);

    if (!success) {
        const errors = zodErrorMap(error);
        return res.send({
        ok: false,
        data: null,
        error: errors
        });
    }

    const { email, password } = data;
    const { active } = data;
    
    const { userId } = req.params;

    try {
        
        // preguntar como poner pwd 

        const updateAccountData = 'UPDATE users SET email = IFNULL(?,email), password(?,password) WHERE user_id = ?';

        const [ resultAccount ] = await sendQuery(updateAccountData, [email, password, userId]);

        const updateActiveState = 'UPDATE data_users SET isActive = 0 WHERE user_id = ?';

        const [ resultActiveState ] = await sendQuery(updateActiveState, [active,userId]);

        if (resultAccount.affectedRows > 0 || resultActiveState.affectedRows > 0) {
            res.send({
                ok: true,
                data: { message: 'Cuenta actualizada con éxito' },
                error: null
            });
        } else {
            res.send({
                ok: false,
                data: null,
                error: { message: 'No se realizaron actualizaciones en la cuenta' }
            });
        }

    } catch (error) {
        console.error(error);
    }
}

export default accountConfig;