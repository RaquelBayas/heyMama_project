import { ForumCard } from '../../schemas/Forums.js'
import { sendQuery } from '../../db/connectDB.js'
import { zodErrorMap } from '../../helpers/zodErrorMap.js'

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

export { getSubForum };