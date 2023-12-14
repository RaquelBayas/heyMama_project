import { User } from "../schemas/User.js";
import { sendQuery } from '../db/connectDB.js';

async function profileConfig(){
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

    const { username, name, surname, phone } = configData;

    const { biography } = biographyData;

    const { userId } = req.params.userId;

    try {

        const updateProfileDataQuery = 'UPDATE users SET username = IFNULL(?,username), name = IFNULL(?,name), surname = (?, surname), phone = IFNULL(?,phone) WHERE id = ?';

        const [result] = await sendQuery(updateProfileDataQuery, [username, name, surname, phone, userId]);

        const updateBiography = 'UPDATE data_users SET biography = IFNULL(?,biography) WHERE id = ?';

        const []
        
    } catch (error) {
        console.error(error);
    }

}

export default profileConfig;