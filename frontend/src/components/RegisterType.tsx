import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function RegisterType() {
  return (
    <div className='grid w-screen h-screen mx-auto text-center grid-cols-auto sm:grid-cols-1 md:grid-cols-[24rem,1fr] bg-background'>
        <div className="hidden h-screen rotate-0 bg-center bg-no-repeat bg-cover w-96 bg-primary md:block lg:w-96"
        style={{ backgroundImage: `url('assets/img_registro2.png')` }}>
        </div>
        <div className="flex flex-col items-center justify-center h-screen mx-auto my-auto align-middle bg-background sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            <h1 className='my-auto text-4xl'>REGÍSTRATE COMO:</h1>
            <div className='flex flex-col items-center my-auto mt-8'>
                <button type="submit" className='inline-flex p-2 mb-4 text-2xl rounded-md font-anybody w-fit bg-primary'><span className='my-auto'><FaArrowRight /></span><NavLink to='/registerUser'>Usuario</NavLink></button>
                <button type="submit" className='inline-flex p-2 mt-4 text-2xl rounded-md font-anybody w-fit bg-primary'><span className='my-auto'><FaArrowRight /></span><NavLink to='/registerProf' >Profesional</NavLink></button>
            </div>
        </div>
    </div>
  )
}

export default RegisterType