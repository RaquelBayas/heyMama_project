import { ForumCard } from '../../schemas/Forums.js'
import { sendQuery } from '../../db/connectDB.js'
import { zodErrorMap } from '../../helpers/zodErrorMap.js'


async function addForumCard(req, res, next) {
    console.log(req.body)

    const { success, error, data } = ForumCard.safeParse(req.body);
    console.log(success, error, data)

    if (!success) {
        const errors = zodErrorMap(error);
        return res.status(400).send({
            ok: false,
            data: null,
            error: errors
        });
    }

    const { user_id, subforum_title, subforum_content } = data

    try {
        await sendQuery(`INSERT INTO subforum (user_id, subforum_title, subforum_content) VALUES (?, ?, ?)`, [user_id, subforum_title, subforum_content])

    } catch (error) {
        return next(new Error(error.message))
    }

    res.send({
        ok: true,
        error: null,
        data: null,
        message: 'Forum card added.'
    });

    next()
}

async function getForumCard(req, res, next) {
    console.log(req.body)

    const { success, error, data } = ForumCard.safeParse(req.body);
    console.log(success, error, data)

    if (!success) {
        const errors = zodErrorMap(error);
        return res.status(400).send({
            ok: false,
            data: null,
            error: errors
        });
    }

    const { user_id, subforum_title, subforum_content } = data

    try {
        await sendQuery(`INSERT INTO subforum (user_id, subforum_title, subforum_content) VALUES (?, ?, ?)`, [user_id, subforum_title, subforum_content])

    } catch (error) {
        return next(new Error(error.message))
    }

    res.send({
        ok: true,
        error: null,
        data: null,
        message: 'Forum card added.'
    });

    next()
}

export { addForumCard }