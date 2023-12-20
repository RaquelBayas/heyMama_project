import { sendQuery } from "../db/connectDB.js";

async function addPostTL(req, res, next) {
    const {user_id, comment} = req.body;
    try {
        await sendQuery(`INSERT INTO timeline (user_id,comment) VALUE(?, ?)`,[user_id,comment]);
        res.send({
            ok: true,
            error: null,
            data: null,
            message: 'Post added to Timeline'
        });
        next();
    } catch (error) {
        return next(new Error(error.message));
    }
}

async function getPostTLByUserId(req, res, next) {
    const {user_id} = req.params;

    try {
        const results = await sendQuery(`SELECT * FROM timeline WHERE user_id=?`, [user_id]);
        res.send({
            ok:true,
            error: null,
            data: results,
            message: 'Posts from timeline'
        })
    } catch (error) {
        return next(new Error(error.message));
    }
}

export {addPostTL, getPostTLByUserId};