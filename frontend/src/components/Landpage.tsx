import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-scroll";
import '../index.css';

function Landpage() {

    return (
      <>
        <div className='w-screen h-screen bg-bottom bg-no-repeat bg-contain bg-img-mom  font-anybody'>
        <div className='h-screen w-screen flex flex-col bg-shade-bg leading-none'>

        <nav className='flex flex-row justify-start w-screen gap-10 p-4 mt-0 text-xl border-2 border-solid shadow-md border-b-marron bg-piel-claro sm:pl-0 lg:pl-0'>
              <Link 
                to= '/about'
                spy={true} 
                smooth={true} 
                offset={50} 
                duration={500}
                className='mx-10 tracking-wider transition-transform duration-300 ease-in-out transform scale-100 cursor-pointer hover:scale-125 lg:ml-24 uppercase'
              >Info</Link>
              <NavLink to='/contact' className='mx-2 tracking-wider transition-transform duration-300 ease-in-out transform scale-100 cursor-pointer hover:scale-125 uppercase'>Contacto</NavLink> 
        </nav>

        <h1 className='flex flex-col gap-16 mx-10 my-auto text-5xl tracking-wider lg:mx-24 lg:text-6xl uppercase'>
          <p>No estás sola,</p>
          <p>¡Únete a nuestra</p>
          <p>comunidad!</p>
        </h1>
        </div>

        <div className='absolute flex flex-row justify-start gap-2 p-3 px-5 text-xl transition-all duration-300 ease-in-out border border-black border-solid rounded-full shadow-md cursor-pointer w-60 bottom-32 right-6 bg-primary lg:bottom-44 lg:right-40 hover:w-64 uppercase'>
          <FaArrowRight className='my-0.5'/>
          <Link to='/login'>Iniciar sesión</Link>
        </div>

        <div className='absolute flex flex-row justify-start gap-2 p-3 px-5 text-xl transition-all duration-300 ease-in-out border border-black border-solid rounded-full shadow-md cursor-pointer w-60 bottom-12 right-6 bg-primary lg:bottom-24 lg:right-40 hover:w-64'>
          <FaArrowRight className='my-0.5'/>
          <NavLink to='/register' className='uppercase'>Regístrate aquí</NavLink>
        </div>
      </div>
      </>
    )
  }
  
  export default Landpage;
  