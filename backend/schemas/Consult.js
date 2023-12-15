import {z} from 'zod';

const Consult = z.object({
    consult_id: z.number().optional(),
    user_id: z.number(),
    profesional_id: z.number(),
    consult: z.string()
});

export {Consult};