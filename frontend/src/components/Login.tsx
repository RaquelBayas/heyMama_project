import { FaRegEye } from "react-icons/fa"
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";

function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit (e: React.FormEvent) {
        e.preventDefault();

        if(email === '' || password === '') return;

        console.log({email, password});
        setEmail('');
        setPassword(''); 
    };

    return(
        <body>
            <div className="w-screen h-screen font-anybody box-border bg-img-login bg-no-repeat bg-center bg-contain">
            <div className='absolute top-0 right-0 left-0 bottom-0 bg-shade-bg'>    
                <div className="flex flex-col w-550 text-center relative top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                    <h1 className="text-5xl tracking-wide">¡BIENVENIDA!</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col mx-6 mt-8 mb-4 text-start text-xl">
                            <label>Email:</label>
                            <input
                                className='h-10 mt-2 border-2 border-solid border-transparent border-b-black bg-transparent'
                                type='email'
                                name='email'
                                id='email'
                                value={email}
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="box-border flex flex-col mx-6 mt-8 mb-4 text-start text-xl">
                            <label>Contraseña:</label>
                                <FaRegEye className='ml-auto relative top-4'/>
                                <input
                                    className='w-full bg-transparent border-b-2 border-dark_brownh-10 border-2 border-solid border-transparent border-b-black'
                                    type='password'
                                    name='password'
                                    id='password'
                                    value={password}
                                    required
                                    onChange={(e) => setPassword(e.target.value)}
                                    />
                        </div>
                        <div className="flex flex-row text-center justify-center align-bottom gap-10 mt-8">
                            <h2>¿No tienes una cuenta?</h2>
                            <Link to='/register' className="font-bold tracking-wider text-lg hover:scale-110 transition-transform duration-300 ease-in-out">Registrate</Link>
                        </div>
                        <div className='mx-auto mt-8 w-56 text-xl bg-primary flex flex-row justify-start gap-2 border border-solid border-black p-3 px-5 rounded-full shadow-md cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out'>
                            <FaArrowRight className='my-0.5'/>
                            <button type="submit">INICIAR SESIÓN</button>
                        </div>
                    </form>
                </div>
                <Link 
                    to={'/'}
                    className='absolute bottom-12 left-6 flex flex-row justify-start gap-2 m-4 align-middle bg-primary border border-solid border-black p-3 px-5 rounded-full shadow-md cursor-pointer lg:bottom-24 lg:left-40 hover:scale-110 transition-transform duration-300 ease-in-out'
                >
                    <FaArrowRight className='mt-0.5'/>
                    <button className='w-max text-xl sm:text-base'>VOLVER AL INICIO</button>
                </Link>
            </div>
            </div>
        </body>
    )
}

export default Login;