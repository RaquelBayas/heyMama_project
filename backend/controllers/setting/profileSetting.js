import { User } from "../../schemas/User.js";
import { sendQuery } from '../../db/connectDB.js';
import { zodErrorMap } from "../../helpers/zodErrorMap.js";

async function profileSetting(req, res, next){
    console.log(req.files);

    
    // const { success, error, data } = User.safeParse(req.body);
    // console.log(data);

    // if (!success) {
    //     const errors = zodErrorMap(error);
    //     return res.send({
    //     ok: false,
    //     error: errors
    //     });
    // }

    // const { username, name, surname, phone, biography } = data;

    const avatar = req.files?.avatar;
    const { username, name, surname, phone, biography } = req.body;



    const { userId } = req.params;

    try {

        const checkingUserQuery = 'SELECT username, name, surname, phone FROM users WHERE user_id = ?;'

        const [ checkingUser ] = await sendQuery(checkingUserQuery, [userId]);

        
        const checkingUserDataQuery = 'SELECT biography, avatar FROM data_users WHERE user_id = ?;'

        const [ checkingUserData ] = await sendQuery(checkingUserDataQuery, [userId]);

        if(!checkingUser && !checkingUserData){        
            return res.status(404).send({ ok: false, error: 'No se ha encontrado el usuario.'})         
        }

        const updateProfileDataQuery = 'UPDATE users SET username = IFNULL(?, username), name = IFNULL(?, name), surname = IFNULL(?, surname), phone = IFNULL(?, phone) WHERE user_id = ?;';
        
        const updateOthersProfileQuery = 'UPDATE data_users SET biography = IFNULL(?, biography), avatar = IFNULL(?, avatar) WHERE user_id = ?;';

        await sendQuery(updateProfileDataQuery, [username, name, surname, phone, userId]);
        
        await sendQuery(updateOthersProfileQuery, [biography, avatar.name, userId]);

        res.send({
            ok: true,
            data: { message: 'Perfil actualizado con éxito' },
            error: null
        });
       
    } catch (error) {
        console.error(error);
        next(error)
    }
}

export default profileSetting;