import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import '../index.css';

function Landpage() {

    return (
        <section id='landpage'>
          <div className='w-full h-screen max-w-full bg-bottom bg-no-repeat bg-contain bg-img-mom font-anybody lg:w-screen'>
          <div className='flex flex-col w-full h-screen leading-none bg-shade-bg lg:w-screen'>
            <h1 className='flex flex-col gap-16 mx-10 mt-auto text-5xl tracking-wider uppercase s:text-2xl s:gap-8 md:text-4xl md:mt-250 lg:mx-24 lg:text-6xl'>
              <p>No estás sola,</p>
              <p>¡Únete a nuestra</p>
              <p>comunidad!</p>
            </h1>
          
            <div className="flex flex-col gap-10 pb-10 pr-10 ml-auto s:pr-4 s:gap-6 md:mt-auto lg:pr-44 lg:pb-32 lg:gap-10">
              <div className='flex flex-row justify-start gap-2 p-3 px-5 uppercase transition-all duration-300 ease-in-out border border-black border-solid rounded-full shadow-md cursor-pointer  bg-primary hover:scale-110 s:text-sm s:w-48 lg:w-60 lg:text-xl'>
                <FaArrowRight className='my-0.5'/>
                <NavLink to='/login'>Iniciar sesión</NavLink>
              </div>
              <div className='flex flex-row justify-start gap-2 p-3 px-5 text-xl uppercase transition-all duration-300 ease-in-out border border-black border-solid rounded-full shadow-md cursor-pointer hover:scale-110 w-60 bg-primary s:text-sm s:w-48 lg:w-60 lg:text-xl'>
                <FaArrowRight className='my-0.5'/>
                <NavLink to='/register'>Regístrate aquí</NavLink>
              </div>
            </div>
          </div>
          </div>
        </section>
  )
}

export default Landpage;