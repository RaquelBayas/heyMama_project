
import { z } from 'zod'

const Consult = z.object({
    user_id: z.number(),
    professional_id: z.number(),
    consult: z.string(),
    consult_time: z.date().optional(),
})

export { Consult }