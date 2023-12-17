import { sendQuery } from "../../db/connectDB.js";

async function isPrivate (req, res){
    const userId = req.params;

    const { isPrivate } = req.body;

    try {
        const privacyQuery = 'UPDATE data_users SET isPrivate = ? WHERE user_id = ?';
        
        await sendQuery(privacyQuery, [isPrivate, userId]);

        res.json({
            message: 'Privacidad actualizada correctamente'
        })
    } catch (error) {
        res.status(500).json({
            message:'Error en servidor privacy'
        })
    }
}

export default isPrivate;