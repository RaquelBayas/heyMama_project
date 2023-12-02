import {z} from 'zod'

const User = z.object({
  userType: z.nativeEnum(['user', 'prof']).optional() ,
  name: z.string(),
  lastName: z.string(),
  phone: z.string().transform(value => parseFloat(value)).optional(),
  job: z.string().optional(),
  numCollege:  z.string().transform(value => parseFloat(value)).optional(),
  email: z.string({
    required_error: 'Campo obligatorio',
    invalid_type_error: 'El campo tiene que ser un string'
  }).email({ message: 'No has enviado un email válido'}),
  password: z.string({
    required_error: 'Campo obligatorio',
    invalid_type_error: 'El campo tiene que ser un string'
  }).min(4).max(32),
});

export {User};