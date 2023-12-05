
import { z } from 'zod'

const forumCard = z.object({
    text: z.string()
})

export { forumCard }