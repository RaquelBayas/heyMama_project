import { sendQuery } from '../../db/connectDB.js';
import deleteAvatar from '../../helpers/deleteAvatar.js';
import saveAvatar from '../../helpers/saveAvatar.js';
import { HttpError } from '../../models/HttpError.js';

async function profileSetting(req, res, next){

    const avatar = req.files?.avatar;
    
    const { username, name, surname, phone, biography } = req.body;

    const { userId } = req.params;

    if(!avatar){
        return next(new HttpError(400, 'No has enviado ninguna foto de avatar'))
    }

    try {
        // avatar

        const checkingAvatar = 'SELECT avatar FROM data_users WHERE user_id = ?;';

        const [result] = await sendQuery(checkingAvatar, [userId]);

        if(result.avatar){
            try {
                deleteAvatar(result.avatar);
            } catch (error) {
                console.error(error.message);
            }
        }

        const avatarFileName = saveAvatar(avatar, 150);

        const updateAvatarQuery = 'UPDATE data_users SET avatar = ? WHERE user_id = ?;';

        await sendQuery(updateAvatarQuery, [avatarFileName, userId]);

        // username, name, surname, phone

        const checkingUserQuery = 'SELECT username, name, surname, phone FROM users WHERE user_id = ?;'
        const [ checkingUser ] = await sendQuery(checkingUserQuery, [userId]);
        
        const checkingUserDataQuery = 'SELECT biography FROM data_users WHERE user_id = ?;'
        const [ checkingUserData ] = await sendQuery(checkingUserDataQuery, [userId]);

        if(!checkingUser && !checkingUserData){        
            return res.status(404).send({ ok: false, error: 'No se ha encontrado el usuario.'})         
        }

        const updateProfileDataQuery = 'UPDATE users SET username = IFNULL(?, username), name = IFNULL(?, name), surname = IFNULL(?, surname), phone = IFNULL(?, phone) WHERE user_id = ?;';

        // biography
        
        const updateBioQuery = 'UPDATE data_users SET biography = IFNULL(?, biography) WHERE user_id = ?;';

        await sendQuery(updateProfileDataQuery, [username, name, surname, phone, userId]);
        
        await sendQuery(updateBioQuery, [biography, userId]);

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