import {z} from 'zod';

const Friends = z.object({
    user_id: z.number(),
    user2_id: z.number(),
    state_id: z.enum([1, 2, 3]),
});

const FriendRequestResponse = z.object({
    requestId: z.number(),
    response: z.enum(['ACCEPTED', 'REJECTED']),
});

export {Friends, FriendRequestResponse};