import { User } from "../../schemas/User.js";
import { sendQuery } from '../../db/connectDB.js';
import { zodErrorMap } from "../../helpers/zodErrorMap.js";
import { getUserById } from '../user.controller.js';

async function accountSetting(req, res){
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

    const { email, pwdActual , pwdNueva } = data;
    const { active } = dataUser;

    const salt = 10;
    const hashedPassword = bcrypt.hashSync(pwdNueva, salt);
    
    const { userId } = req.params;

    try {
        
        // Email

        const updateEmail = 'UPDATE users SET email = IFNULL(?,email) WHERE user_id = ?';

        await sendQuery(updateEmail, [email, userId]);

        // Contraseña

        try {
            await getUserById(userId);

            const user = userData.data[0];
            console.log(user);

            const match = await bcrypt.compare(pwdActual, hashedPassword);

            if (!match) {
                return next(new HttpError(400, "Contraseña no coincide"));
            } else {
                await updatePwdInBBDD(userId, hashedPassword)
            }
        } catch (error) {
            console.error(error);
        }

        async function updatePwdInBBDD(userId, hashedPassword){
            const pwdQuery = 'UPDATE users SET password = ? WHERE user_id = ?;';

            await sendQuery(pwdQuery, [hashedPassword, userId])
        } 

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