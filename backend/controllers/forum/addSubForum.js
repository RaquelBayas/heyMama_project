import { ForumCard } from '../../schemas/Forums.js'
import { sendQuery } from '../../db/connectDB.js'
import { zodErrorMap } from '../../helpers/zodErrorMap.js'


async function addSubForum(req, res, next) {

    const { success, error, data } = ForumCard.safeParse(req.body);
    console.log(data)

    if (!success) {
        const errors = zodErrorMap(error);
        return res.status(400).send({
            ok: false,
            data: null,
            error: errors
        });
    }

    const { user_id, forum_id, subforum_title, subforum_content } = data

    try {
        await sendQuery(`INSERT INTO subforum (user_id, forum_id, subforum_title, subforum_content) VALUES (?, ?, ?, ?)`, [user_id, forum_id, subforum_title, subforum_content])

    } catch (error) {
        return next(new Error(error.message))
    }

    res.send({
        ok: true,
        error: null,
        data: null,
        message: 'SubForum added to '+forum_id+' forum.'
    });

    next()
}

export { addSubForum }