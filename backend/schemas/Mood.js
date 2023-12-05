import {z} from 'zod'

const Mood = z.object({
    user_id: z.number(),
    mood_type_id: z.number()
})

export {Mood}