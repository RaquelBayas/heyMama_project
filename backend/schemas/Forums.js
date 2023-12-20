import { z } from 'zod'

const ForumCard = z.object({
    user_id: z.number(),
    subforum_id: z.number(),
    subforum_title: z.string(),
    subforum_content: z.string()
})

export { ForumCard }