import { User } from "../schemas/User.js";
import { sendQuery } from '../db/connectDB.js';

async function profileConfig(req, res){
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

    const { username, name, surname, phone } = data;
    const { biography } = data;

    const { userId } = req.params;

    try {

        const updateProfileDataQuery = 'UPDATE users SET username = IFNULL(?,username), name = IFNULL(?,name), surname = (?, surname), phone = IFNULL(?,phone) WHERE id = ?';

        const [resultProfile] = await sendQuery(updateProfileDataQuery, [username, name, surname, phone, userId]);

        const updateBiography = 'UPDATE data_users SET biography = IFNULL(?,biography) WHERE id = ?';

        const [resultBio] = await sendQuery(updateBiography, [biography]);

        if (resultProfile.affectedRows > 0 || resultBio.affectedRows > 0) {
            res.send({
                ok: true,
                data: { message: 'Perfil actualizado con éxito' },
                error: null
            });
        } else {
            res.send({
                ok: false,
                data: null,
                error: { message: 'No se realizaron actualizaciones en el perfil' }
            });
        }
        
    } catch (error) {
        console.error(error);
        res.send({
            ok: false,
            data: null,
            error: { message: 'Error al actualizar el perfil' }
        });
    }

}

export default profileConfig;