import { FaRegEye } from "react-icons/fa"
import { Link, NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function Login(){
    return(
        <body>
            <div className="w-screen h-screen font-anybody box-border bg-img-login bg-no-repeat bg-center bg-contain">
            <div className='absolute top-0 right-0 left-0 bottom-0 bg-shade-bg'>    
                <div className="flex flex-col w-550 text-center relative top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                    <h1 className="text-5xl tracking-wide">¡BIENVENIDA!</h1>
                    <form>
                        <div className="flex flex-col mx-6 mt-8 mb-4 text-start text-xl">
                            <label>Email:</label>
                            <input
                                className='h-10 border-2 border-solid border-transparent border-b-black bg-shade-bg'
                                type="text"
                                name="email"
                            />
                        </div>
                        <div className="flex flex-col mx-6 mt-8 mb-4 text-start text-xl">
                            <label>Contraseña:</label>
                                <FaRegEye className='ml-auto relative top-7'/>
                                <input
                                    className='w-full py-2 bg-transparent border-b-2 border-dark_brownh-10 border-2 border-solid border-transparent border-b-black'
                                    type="text"
                                    name="email"
                                />
                        </div>
                        <div className='mx-auto mt-14 w-56 text-xl bg-primary flex flex-row justify-start gap-2 border border-solid border-black p-3 px-5 rounded-full shadow-md cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out'>
                            <FaArrowRight className='my-0.5'/>
                            <Link to='/'>INICIAR SESIÓN</Link>
                        </div>
                    </form>
                </div>
                <NavLink 
                    to={'/'}
                    className='absolute bottom-12 left-6 flex flex-row justify-start gap-2 m-4 bg-primary border border-solid border-black p-3 px-5 rounded-full shadow-md cursor-pointer lg:bottom-24 lg:left-40 hover:scale-110 transition-transform duration-300 ease-in-out'
                >
                    <FaArrowRight />
                    <button className='w-max text-xl'>VOLVER AL INICIO</button>
                </NavLink>
            </div>
            </div>
        </body>
    )
}

export default Login;