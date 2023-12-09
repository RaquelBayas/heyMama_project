import {z} from 'zod'

const Articles = z.object({
    title: z.string(),
    author: z.number(),
    content: z.string()
})

export {Articles};