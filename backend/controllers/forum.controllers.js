import { sendQuery } from '../db/connectDB.js'
import { zodErrorMap } from '../helpers/zodErrorMap.js';

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
        message: 'SubForum added to ' + forum_id + ' forum.'
    });

    next()
}

async function deleteSubForum(req, res, next) {

    const subForum_id = req.params.subForum_id;

    try {
        await sendQuery(`DELETE FROM subforum WHERE ID = ? VALUES (?)`, [subForum_id])

    } catch (error) {
        return next(new Error(error.message))
    }

    res.send({
        ok: true,
        error: null,
        data: null,
        message: 'SubForum ' + subForum_id + ' deleted.'
    });

    next()

}

async function getForum(req, res, next) {
    const results = await sendQuery('SELECT * FROM forums');

    if (!results) {
        const errors = zodErrorMap(error);
        return res.status(400).send({
            ok: false,
            data: null,
            error: errors
        });
    }

    res.send({
        ok: true,
        error: null,
        forums: results,
        message: 'Forums.'
    });

    next()
}

async function getForumById(req, res, next) {
    console.log('getForumByid', req.params.forum_id)
    const forum_id = req.params.forum_id;

    const results = await sendQuery('SELECT * FROM forums WHERE forum_id=?', forum_id);

    if (!results) {
        const errors = zodErrorMap(error);
        return res.status(400).send({
            ok: false,
            data: null,
            error: errors
        });
    }

    res.send({
        ok: true,
        error: null,
        data: results
    });

    next();
}

async function getSubForum(req, res, next) {
    const id = req.query;
    console.log('req.query:', id)

    try {
        const results = await sendQuery('SELECT * FROM subforum WHERE forum_id=1');
        if (!results) {
            const errors = zodErrorMap(error);
            return res.status(400).send({
                ok: false,
                data: null,
                error: errors
            });
        }
        console.log('results.', results)
        res.send({
            ok: true,
            data: results,
            error: null,
        })
    } catch (error) {
        return next(new Error(error.message))
    }
    next();

}

async function getSubForumById(req, res, next) {
    const id = req.params.id;
    console.log('id.', id)
    try {
        const subforum = await sendQuery('SELECT * FROM subforum WHERE forum_id = ?', id);
        res.send({
            ok: true,
            error: null,
            data: subforum,
            message: 'Subforum.'
        });

        next()
    } catch (error) {
        return next(new Error(error.message));
    }

}

export { addSubForum, deleteSubForum, getForum, getForumById, getSubForumById, getSubForum };