import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function Landpage() {

  return (
    <section id='landpage'>
      <div className='w-full h-screen bg-bottom bg-no-repeat bg-contain bg-img-mom font-anybody'>
        <div className='flex flex-col w-full h-screen leading-none bg-shade-bg lg:w-screen'>

          <h1
            className='flex flex-col gap-16 mx-10 my-auto tracking-wider uppercase mt-52 sm:text-3xl sm:gap-8 md:text-4xl lg:text-5xl lg:mx-24 xl:text-6xl xl:mx-28 '>
            <p className="animate-fade-right animate-once animate-duration-[2000ms] animate-delay-300">No estás sola,</p>
            <p className="animate-fade-right animate-once animate-duration-[2000ms] animate-delay-1000">¡Únete a nuestra</p>
            <p className="animate-fade-right animate-once animate-duration-[2000ms] animate-delay-1000">comunidad!</p>
          </h1>

          <div className="flex flex-col pr-10 mt-auto ml-auto sm:pr-4 sm:pb-20 sm:gap-6 md:pr-10 md:pb-28 md:mt-auto lg:pr-44 lg:pb-40 lg:gap-6 xl:pr-52 xl:pb-52">
          <div className='flex flex-row justify-start gap-2 p-3 px-5 leading-relaxed uppercase transition-all duration-300 ease-in-out border border-black border-solid rounded-full shadow-md cursor-pointer resize bg-primary hover:scale-110'>
              <FaArrowRight className='my-0.5' />
              <Link to='/login'>Iniciar sesión</Link>
            </div>
            <div className='flex flex-row justify-start gap-2 p-3 px-5 leading-relaxed uppercase transition-all duration-300 ease-in-out border border-black border-solid rounded-full shadow-md cursor-pointer resize hover:scale-110 bg-primary'>
              <FaArrowRight className='my-0.5' />
              <Link to='/register'>Regístrate aquí</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landpage;