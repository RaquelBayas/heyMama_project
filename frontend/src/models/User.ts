import { z } from 'zod';

const User = z.object({
    name: z.string({
        invalid_type_error: 'Tiene que ser un nombre con letras',
        required_error: 'Campo obligatorio'
    }),
    email:z.string({
        invalid_type_error: 'El email debe ser un string',
        required_error: 'Campo obligatorio'
    }).email({
        message: 'Email no válido'
    }),
    password: z.string({
        invalid_type_error: 'El password debe ser un string',
        required_error: 'Campo obligatorio'
    }).min(6, {
        message: 'Mínimo 6 caracteres.'
    }). max(10, {
        message: 'Máximo 10 caracteres.'
    })
});

const LoginUser = User.omit({name:true});

export { User, LoginUser };