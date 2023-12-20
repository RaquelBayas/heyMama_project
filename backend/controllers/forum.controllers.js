import { sendQuery } from '../db/connectDB.js'
import { zodErrorMap } from '../helpers/zodErrorMap.js';
import { ForumCard } from '../schemas/Forums.js';
async function addSubForum(req, res, next) {
    console.log('addsubforum..',req);
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

    const { user_id, subforum_id, subforum_title, subforum_content } = data

    try {
        await sendQuery(`INSERT INTO subforum (user_id, forum_id, subforum_title, subforum_content) VALUES (?, ?, ?, ?)`, [user_id, subforum_id, subforum_title, subforum_content])

    } catch (error) {
        return next(new Error(error.message))
    }

    res.send({
        ok: true,
        error: null,
        data: null,
        message: 'SubForum added to ' + subforum_id + ' forum.'
    });

    next()
}

async function deleteCommentById(req, res, next) {
    const {discussion_id, forum_id, subforum_id} = req.params;

    try {
        await sendQuery(`DELETE FROM discussion WHERE discussion_id=? AND forum_id=? AND subforum_id=?`, [discussion_id,forum_id,subforum_id]);
        res.send({
            ok: true,
            error: null,
            data: null,
            message: 'SubForum comments ' + subforum_id + ' deleted.'
        });
    } catch (error) {
        return next(new Error(error.message))
    }
}


async function deleteSubForumComments(req, res, next) {
    console.log('deleteSubforum,',req.params)
    const {forum_id, subforum_id} = req.params;

    try {
        await sendQuery(`DELETE FROM discussion WHERE forum_id=? AND subforum_id=?`, [forum_id,subforum_id]);
        res.send({
            ok: true,
            error: null,
            data: null,
            message: 'SubForum comments ' + subForum_id + ' deleted.'
        });
    } catch (error) {
        return next(new Error(error.message))
    }
}

async function deleteSubForum(req, res, next) {
    const {forum_id} = req.params;
    try {
        await sendQuery(`DELETE FROM subforum WHERE subforum_id=?`, [subForum_id]);
        res.send({
            ok: true,
            error: null,
            data: null,
            message: 'SubForum ' + subForum_id + ' deleted.'
        });
        next();
    } catch (error) {
        return next(new Error(error.message));
    }
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
    const {id} = req.params;
    console.log('req.query:', id)

    try {
        const results = await sendQuery('SELECT * FROM subforum WHERE forum_id=?',id);
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
    const {id, subforum_id} = req.params;
    try {
        const subforum = await sendQuery('SELECT * FROM subforum WHERE forum_id = ? AND subforum_id=?', [id, subforum_id]);
        res.send({
            ok: true,
            error: null,
            data: subforum,
            message: 'Subforum.'
        });

        next();
    } catch (error) {
        return next(new Error(error.message));
    }
}

async function getDiscussion(req, res, next) {
    console.log('id.', req)
    const {forum_id, subforum_id} = req.params;
    
    try {
        const discussion = await sendQuery('SELECT * FROM discussion WHERE forum_id=? AND subforum_id=?', [forum_id, subforum_id]);
        res.send({
            ok: true,
            error: null,
            data: discussion,
            message: 'Discussion.'
        });
        next();
    } catch (error) {
        return next(new Error(error.message));
    }
}

async function addCommentsToDiscussion(req, res, next) {
    const {forum_id,subforum_id} = req.params;
    const {comments, author} = req.body;
    console.log('ids:',req.params);

    try {
        await sendQuery('INSERT INTO discussion(forum_id,subforum_id,comments,author) VALUES (?,?,?,?)',[forum_id,subforum_id,comments,author]);
        res.send({
            ok: true,
            error: null,
            data: null,
            message: 'Comment added to Forum ID: '+forum_id+' Subforum ID: '+subforum_id
        });
        next();
    } catch (error) {
        return next(new Error(error.message));
    }
}

export { addSubForum, deleteSubForumComments, deleteCommentById, getForum, getForumById, getSubForumById, getSubForum, getDiscussion, addCommentsToDiscussion };