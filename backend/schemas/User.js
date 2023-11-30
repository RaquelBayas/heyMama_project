import {z} from 'zod'

const User = z.object({
    name: z.string(),
    surname: z.string(),
    email: z.string({
      required_error: 'Campo obligatorio',
      invalid_type_error: 'El campo tiene que ser un string'
    }).email({ message: 'No has enviado un email válido'}),
    password: z.string({
      required_error: 'Campo obligatorio',
      invalid_type_error: 'El campo tiene que ser un string'
    }).min(4).max(32),
    phone: z.number().optional(),
    job: z.string().optional(),
    numCollege: z.number().optional()
  });

export {User};