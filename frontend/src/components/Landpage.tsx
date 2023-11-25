import '../index.css';
import { FaArrowRight } from "react-icons/fa";

function Landpage() {
    return (
      <>
        <div className='bg-img-mom bg-no-repeat bg-contain bg-bottom w-screen h-screen md:mx-9 font-anybody'>
          <div className='absolute top-0 right-0 left-0 bottom-0 bg-shade-bg flex flex-col'>
  
          <div className='fixed w-screen border-b-marron bg-piel-claro border-2 border-solid shadow-md'>
            
            <div className='my-4 mx-10 text-xl flex flex-row justify-start gap-20 lg:mx-24 xl:mx-30'>
            
                <button className='mx-2 tracking-wider transition-all duration-300 ease-in-out hover:text-2xl cursor-pointer'>INFO</button>
                <button className='mx-2 tracking-wider border-2 border-solid border-transparent transition-all duration-300 ease-in-out hover:text-2xl cursor-pointer'>CONTACTO</button>
            </div>
          </div>
  
          <h1 className='my-auto mx-10 text-5xl flex flex-col gap-16 tracking-wider lg:mx-24 lg:text-6xl xl:mx-15'>
            <p>NO ESTÁS SOLA,</p>
            <p>¡ÚNETE A NUESTRA</p>
            <p>COMUNIDAD!</p>
          </h1>
          </div>
  
          <div className='w-60 text-xl absolute bottom-32 right-6 bg-bg2 flex flex-row justify-start gap-2 border border-solid border-black p-3 px-5 rounded-full cursor-pointer shadow-md lg:bottom-44 lg:right-40 transition-all duration-300 ease-in-out hover:w-64'>
            <FaArrowRight className='my-0.5'/>
            <button>INICIAR SESIÓN</button>
          </div>
  
          <div className='w-60 text-xl absolute bottom-12 right-6 bg-bg2 flex flex-row justify-start gap-2 border border-solid border-black p-3 px-5 rounded-full cursor-pointer shadow-md lg:bottom-24 lg:right-40 transition-all duration-300 ease-in-out hover:w-64'>
            <FaArrowRight className='my-0.5'/>
            <button>REGISTRATE AQUÍ</button>
          </div>
    
        </div>
      </>
    )
  }
  
  export default Landpage;
  