import { sendQuery } from '../../db/connectDB.js'


async function getForumCard(req, res, next) {
    const results = await sendQuery('SELECT subforum_id, subforum_title, subforum_content, create_time FROM subforum');

    res.send({
        ok: true,
        forumcards: results,
        error: null,
    })
}

export { getForumCard }