import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import '../index.css';

function Landpage() {
    return (
      <>
        <div className='bg-img-mom bg-no-repeat bg-contain bg-bottom w-screen h-screen md:mx-9 font-anybody'>
        <div className='absolute top-0 right-0 left-0 bottom-0 bg-shade-bg flex flex-col'>

        <nav className='fixed w-screen border-b-marron bg-piel-claro border-2 border-solid shadow-md mt-0 text-xl flex flex-row justify-start gap-10 p-4 sm:pl-0 lg:pl-0'>
              <NavLink to='/about' className='mx-10 tracking-wider transform scale-100 hover:scale-125 transition-transform duration-300 ease-in-out cursor-pointer lg:ml-24'>INFO</NavLink>
              <NavLink to='/contact' className='mx-2 tracking-wider transform scale-100 hover:scale-125 transition-transform duration-300 ease-in-out cursor-pointer'>CONTACTO</NavLink> 
        </nav>

        <h1 className='my-auto mx-10 text-5xl flex flex-col gap-16 tracking-wider lg:mx-24 lg:text-6xl'>
          <p>NO ESTÁS SOLA,</p>
          <p>¡ÚNETE A NUESTRA</p>
          <p>COMUNIDAD!</p>
        </h1>
        </div>

        <div className='w-60 text-xl absolute bottom-32 right-6 bg-primary flex flex-row justify-start gap-2 border border-solid border-black p-3 px-5 rounded-full shadow-md cursor-pointer lg:bottom-44 lg:right-40 transition-all duration-300 ease-in-out hover:w-64'>
          <FaArrowRight className='my-0.5'/>
          <button>INICIAR SESIÓN</button>
        </div>

        <div className='w-60 text-xl absolute bottom-12 right-6 bg-primary flex flex-row justify-start gap-2 border border-solid border-black p-3 px-5 rounded-full shadow-md cursor-pointer lg:bottom-24 lg:right-40 transition-all duration-300 ease-in-out hover:w-64'>
          <FaArrowRight className='my-0.5'/>
          <button>REGISTRATE AQUÍ</button>
        </div>
      </div>
      </>
    )
  }
  
  export default Landpage;
  