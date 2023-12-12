import { sendQuery } from '../../db/connectDB.js'

async function getSubForumById(req, res, next) {
    const id = req.params.id;
    console.log('id.', id)
    try {
        const subforum = await sendQuery('SELECT * FROM subforum WHERE subforum_id = ?', id);
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

export default getSubForumById