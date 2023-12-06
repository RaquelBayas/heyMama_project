import {z} from 'zod'

const User = z.object({
  userType: z.nativeEnum(['user', 'prof']).optional() ,
  name: z.string(),
  surname: z.string(),
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
  }).min(4, {message: 'Mínimo 4 caracteres'}).max(32, { message: 'Máximo 32 caracteres' }),
});

const LoginUser = User.omit({ userType:true, name: true, surname:true, phone:true, job:true, numCollege:true });

export {User, LoginUser};