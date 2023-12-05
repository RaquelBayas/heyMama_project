import forumCard from '../schemas/Forums.js'
import { sendQuery } from '../db/connectDB.js'
import { zodErrorMap } from '../helpers/zodErrorMap.js'

async function addForumCard(req, res, next) {
    console.log(req.body)

    const { success, error, data } = User.safeParse(req.body);
    console.log(success, error, data)

    if (!success) {
        const errors = zodErrorMap(error);
        return res.send({
            ok: false,
            data: null,
            error: errors
        });
    }

    const { text } = data

    try {
        await sendQuery('INSERT INTO subforum (user_id, subforum_content, create_time) VALUES (1, "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", NOW())')


    } catch (error) {
        return next(new Error(error.message))
    }

}