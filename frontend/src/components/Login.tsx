import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaArrowRight } from "react-icons/fa";
import { IoEyeOffSharp } from "react-icons/io5";
import { LogInForm } from "../models/LogInForm";
import useUserContext from "../hooks/useUserContext";
import Swal from "sweetalert2";

interface FormError {
    [key: string]: string
}


function Login() {
    const { logIn } = useUserContext();
    const navigate = useNavigate();
    const [hidden, setHidden] = useState(true);

    const [formData, setFormData] = useState<LogInForm>({
        email: '',
        password: '',
    });

    const [error, setError] = useState<FormError | null>(null);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const baseUrl = 'http://localhost:5000/users/login';

        try {
            const resp = await fetch(baseUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await resp.json();

            if (!resp.ok && resp.status === 400) {
                setError(data.error);
            }

            if (!resp.ok && resp.status === 403) {

                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    footer: '<a href="">This account has been disabled</a>'
                });
            }

            if (resp.ok) {
                setError(null);
                console.log(data);

                localStorage.setItem('token', data.data.token);
                localStorage.setItem('user', JSON.stringify(data.data.user));
                logIn(data.data.user);

                return navigate("/forum");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section>
            <div className="box-border w-screen h-screen bg-center bg-no-repeat bg-contain font-anybody bg-img-login">
                <div className='absolute top-0 bottom-0 left-0 right-0 bg-shade-bg'>
                    <div className="relative flex flex-col text-center -translate-x-1/2 -translate-y-1/2 w-550 top-1/2 left-1/2">
                        <h1 className="text-5xl tracking-wide">¡BIENVENIDA!</h1>
                        <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => {handleSubmit(e)}}>
                            <div className="flex flex-col h-[82px] mx-6 mt-8 mb-4 text-start text-xl">
                                <label>Email:</label>
                                <input
                                    type='text'
                                    name='email'
                                    id='email'
                                    value={formData.email}
                                    required
                                    autoComplete="off"
                                    onChange={handleChange}

                                    className='h-10 mt-2 text-lg tracking-wide text-gray-600 bg-transparent border-2 border-transparent border-solid border-b-black focus:outline-none'
                                />
                                {error?.email && <span className="text-[18px] text-red-500 p-3">{error.email}</span>}
                            </div>
                            <div className="box-border flex flex-col h-[82px] mx-6 mt-8 mb-4 text-start text-xl">
                                <label>Contraseña:</label>
                                <button
                                    className='absolute transform -translate-y-1/2 cursor-pointer right-8 top-56'

                                    type='button'
                                    onClick={() => setHidden(!hidden)}>
                                    {hidden ? <FaEye /> : <IoEyeOffSharp />}
                                </button >
                                <input
                                    type={hidden ? 'text' : 'password'}
                                    name='password'
                                    id='password'
                                    value={formData.password}
                                    onChange={handleChange}
                                    autoComplete="off"

                                    className='w-full text-lg text-gray-600 bg-transparent border-2 border-b-2 border-transparent border-solid border-dark_brownh-10 border-b-black focus:outline-none'
                                />
                                {error?.password && <span className="text-[18px] text-red-500 p-3">{error.password}</span>}
                            </div>
                            <div className="flex flex-row justify-center gap-10 mt-8 text-center align-bottom">
                                <h2>¿No tienes una cuenta?</h2>
                                <Link to='/register' className="text-lg font-bold tracking-wider transition-transform duration-300 ease-in-out hover:scale-110">Registrate</Link>
                            </div>
                            <div className='flex flex-row justify-start w-56 gap-2 p-3 px-5 mx-auto mt-8 text-xl transition-transform duration-300 ease-in-out border border-black border-solid rounded-full shadow-md cursor-pointer bg-primary hover:scale-110'>
                                <FaArrowRight className='my-0.5' />
                                <button type="submit">INICIAR SESIÓN</button>
                            </div>
                        </form>
                    </div>
                    <Link
                        to={'/'}
                        className='absolute flex flex-row justify-start gap-2 p-3 px-5 m-4 align-middle transition-transform duration-300 ease-in-out border border-black border-solid rounded-full shadow-md cursor-pointer bottom-12 left-6 bg-primary lg:bottom-24 lg:left-40 hover:scale-110'
                    >
                        <FaArrowRight className='my-0.5' />
                        <button className='text-xl w-max sm:text-base'>VOLVER AL INICIO</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Login;