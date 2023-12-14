import { User } from "../schemas/User.js";
import { sendQuery } from '../db/connectDB.js';

async function profileConfig(){
    const { success, error, data } = User.safeParse(req.body);

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

    const userId = 

    try {

        const updateProfileDataQuery = 'UPDATE users SET username = IFNULL(?,username), name = IFNULL(?,name), surname = (?, surname), phone = IFNULL(?,phone) WHERE id = ?';

        const [result] = await sendQuery(updateProfileDataQuery, [username, name, surname, phone, userId])
        
    } catch (error) {
        console.error(error);
    }

}

export default profileConfig;