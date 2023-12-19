
import { z } from 'zod'

const Consult = z.object({
    user_id: z.number(),
    professional_id: z.number(),
    consult: z.string(),
    create_time: z.date().optional(),
})

export { Consult }