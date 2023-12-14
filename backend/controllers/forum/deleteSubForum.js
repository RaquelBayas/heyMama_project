import { ForumCard } from '../../schemas/Forums.js'
import { sendQuery } from '../../db/connectDB.js'
import { zodErrorMap } from '../../helpers/zodErrorMap.js'


async function deleteSubForum(req, res, next) {

    const forum_id = req.params.forum_id;

}

export { deleteSubForum };