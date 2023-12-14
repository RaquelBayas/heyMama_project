import { ForumCard } from '../../schemas/Forums.js'
import { sendQuery } from '../../db/connectDB.js'
import { zodErrorMap } from '../../helpers/zodErrorMap.js'

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


export { getForumById }