import { sendQuery } from '../../db/connectDB.js'


async function getForumCard(req, res, next) {
    const results = await sendQuery('SELECT * FROM subforum');

    res.send({
        ok: true,
        forumcards: results,
        error: null,
    })
}

export { getForumCard }