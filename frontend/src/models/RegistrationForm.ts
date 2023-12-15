export interface RegistrationFormState {
    userType: 'user' | 'prof',
    name: string;
    surname: string;
    job?: string;
    numCollege?: number;
    phone?: number;
    email: string;
    password: string;
    username: string;
}