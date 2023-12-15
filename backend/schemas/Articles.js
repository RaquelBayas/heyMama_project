import {z} from 'zod'

const Articles = z.object({
    title: z.string({
        required_error: 'Campo obligatorio'
    }),
    author: z.number({
        required_error: 'Campo obligatorio'
    }),
    content: z.string({
        required_error: 'Campo obligatorio'
    })
})

export {Articles};