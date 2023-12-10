import {z} from 'zod'

const Articles = z.object({
    title: z.string({
        required_error: 'Campo obligatorio'
    }),
    author: z.string({
        required_error: 'Campo obligatorio'
    }).transform(value => parseInt(value)),
    content: z.string({
        required_error: 'Campo obligatorio'
    })
})

export {Articles};