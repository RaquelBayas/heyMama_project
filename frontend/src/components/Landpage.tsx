import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import '../index.css';

function Landpage() {
    return (
      <>
        <div className='w-screen h-screen bg-bottom bg-no-repeat bg-contain bg-img-mom md:mx-9 font-anybody'>
        <div className='absolute top-0 bottom-0 left-0 right-0 flex flex-col bg-shade-bg'>

        <nav className='fixed flex flex-row justify-start w-screen gap-10 p-4 mt-0 text-xl border-2 border-solid shadow-md border-b-marron bg-piel-claro sm:pl-0 lg:pl-0'>
              <NavLink to='/about' className='mx-10 tracking-wider transition-transform duration-300 ease-in-out transform scale-100 cursor-pointer hover:scale-125 lg:ml-24'>INFO</NavLink>
              <NavLink to='/contact' className='mx-2 tracking-wider transition-transform duration-300 ease-in-out transform scale-100 cursor-pointer hover:scale-125'>CONTACTO</NavLink> 
        </nav>

        <h1 className='flex flex-col gap-16 mx-10 my-auto text-5xl tracking-wider lg:mx-24 lg:text-6xl'>
          <p>NO ESTÁS SOLA,</p>
          <p>¡ÚNETE A NUESTRA</p>
          <p>COMUNIDAD!</p>
        </h1>
        </div>

        <div className='absolute flex flex-row justify-start gap-2 p-3 px-5 text-xl transition-all duration-300 ease-in-out border border-black border-solid rounded-full shadow-md cursor-pointer w-60 bottom-32 right-6 bg-primary lg:bottom-44 lg:right-40 hover:w-64'>
          <FaArrowRight className='my-0.5'/>
          <button><NavLink to='/register'>INICIAR SESIÓN</NavLink></button>
        </div>

        <div className='absolute flex flex-row justify-start gap-2 p-3 px-5 text-xl transition-all duration-300 ease-in-out border border-black border-solid rounded-full shadow-md cursor-pointer w-60 bottom-12 right-6 bg-primary lg:bottom-24 lg:right-40 hover:w-64'>
          <FaArrowRight className='my-0.5'/>
          <button>REGISTRATE AQUÍ</button>
        </div>
      </div>
      </>
    )
  }
  
  export default Landpage;
  