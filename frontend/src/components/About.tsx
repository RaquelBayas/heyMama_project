import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function About() {
    return (
        <div id='about' className='flex flex-row mx-auto bg-primary w-screen h-screen p-4 font-anybody'>
            <section className='flex gap-20 pt-20 mx-auto lg:mx-20'>
                <div className="flex flex-col mb-10">
                    <h1 className='font-semibold text-5xl tracking-widest w-350 text-center pt-32 lg:text-6xl lg:w-650 uppercase'>¿Quiénes somos?</h1>
                    <img src="./src/assets/flower.svg" alt="flower" className='h-350 -ml-28 -mb-14 mt-auto lg:mr-auto' />
                </div>
            </section>
            <section className="flex flex-col gap-7 center lg:mx-auto">
                <article className='font-light text-lg w-350 h-auto pt-6 flex flex-col text-justify gap-4 my-auto md:text-lg md:gap-2 lg:w-550 lg:text-xl lg:h-auto'>
                    <p>Lorem ipsum dolor sit amet consectetur. Accumsan cursus tempus in purus at.</p>
                    <hr className='bg-black py-[0.5px] border-none my-10' />
                    <p>Lorem ipsum dolor sit amet consectetur. Ultrices auctor aenean in id imperdiet vel. Consequat quis egestas faucibus netus aliquam ac scelerisque tortor commodo.</p>
                    <hr className='bg-black py-[0.5px] border-none my-10' />
                    <p>Lorem ipsum dolor sit amet consectetur. Accumsan cursus tempus in purus at.</p>
                </article>
                <NavLink
                    to={'/'}
                    className='flex flex-row ml-auto w-250 justify-start gap-2 m-4  bg-background border border-solid border-black p-3 px-5 rounded-full shadow-md cursor-pointer lg:bottom-8 lg:right-20 hover:scale-125 transition-transform duration-300 ease-in-out xl:bottom-10 md:bottom-6'
                >
                    <FaArrowRight className='my-0.5'/>
                    <button className='w-max text-xl uppercase'>Volver al inicio</button>
                </NavLink>
            </section>
            
        </div>
    )
}

export default About