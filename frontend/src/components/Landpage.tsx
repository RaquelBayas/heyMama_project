import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import '../index.css';

function Landpage() {

    return (
        <section id='landpage'>
          <div className='w-full max-w-full h-screen bg-bottom bg-no-repeat bg-contain bg-img-mom font-anybody lg:w-screen'>
          <div className='h-screen w-full flex flex-col bg-shade-bg leading-none lg:w-screen'>
            <h1 className='flex flex-col gap-16 mx-10 mt-auto text-5xl tracking-wider s:text-2xl s:gap-8 md:text-4xl md:mt-250 lg:mx-24 lg:text-6xl uppercase'>
              <p>No estás sola,</p>
              <p>¡Únete a nuestra</p>
              <p>comunidad!</p>
            </h1>
          
            <div className="flex flex-col gap-10 ml-auto pr-10 pb-10 s:pr-4 s:gap-6 md:mt-auto lg:pr-44 lg:pb-32 lg:gap-10">
              <div className=' flex flex-row justify-start gap-2 p-3 px-5  transition-all duration-300 ease-in-out border border-black border-solid rounded-full shadow-md cursor-pointer bg-primary hover:scale-110 uppercase s:text-sm s:w-48 lg:w-60 lg:text-xl'>
                <FaArrowRight className='my-0.5'/>
                <NavLink to='/login'>Iniciar sesión</NavLink>
              </div>
              <div className='flex flex-row justify-start gap-2 p-3 px-5 text-xl hover:scale-110 transition-all duration-300 ease-in-out border border-black border-solid rounded-full shadow-md cursor-pointer w-60 bg-primary  uppercase s:text-sm s:w-48 lg:w-60 lg:text-xl'>
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
