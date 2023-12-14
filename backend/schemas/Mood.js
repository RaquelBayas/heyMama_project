import {z} from 'zod'

const Mood = z.object({
    mood_id: z.number().optional(),
    user_id: z.number(),
    mood_date: z.date().optional(),
    mood_type_id: z.number()
})

export {Mood}