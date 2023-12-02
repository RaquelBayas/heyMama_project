export interface RegistrationFormState {
    userType: 'user' | 'prof',
    name: string;
    lastName: string;
    job?: string;
    numCollege?: number;
    phone?: number;
    email: string;
    password: string;
}