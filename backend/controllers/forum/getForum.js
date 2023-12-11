import { ForumCard } from '../../schemas/Forums.js'
import { sendQuery } from '../../db/connectDB.js'
import { zodErrorMap } from '../../helpers/zodErrorMap.js'

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
        data: results,
        message: 'Forums.'
    });

    next()
}


export { getForum }