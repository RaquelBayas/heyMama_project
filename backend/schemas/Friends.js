import {z} from 'zod';

const Friends = z.object({
    user_id: z.number(),
    user2_id: z.number(),
    state_id: z.number() //z.enum([1, 2, 3]).transform((value) => parseInt(value)),
});

const FriendRequestResponse = z.object({
    request_id: z.number(),
    state_id: z.enum(['ACCEPTED', 'REJECTED']),
});

export {Friends, FriendRequestResponse};