
function About() {

    return (
        <main className='bg-primary w-full h-full flex flex-col p-4 font-anybody'>
            <div className='flex justify-around items-center h-full pt-20'>
                <h1 className='font-semibold text-4xl tracking-widest lg:text-6xl'>¿Quiénes somos?</h1>
                <article className='font-light text-lg w-450 h-450 pt-20 flex flex-col text-justify gap-5 lg:w-550 lg:text-xl'>
                    <p>Lorem ipsum dolor sit amet consectetur. Accumsan cursus tempus in purus at.</p>
                    <hr className='bg-black py-[0.5px] border-none my-10' />
                    <p>Lorem ipsum dolor sit amet consectetur. Ultrices auctor aenean in id imperdiet vel. Consequat quis egestas faucibus netus aliquam ac scelerisque tortor commodo.</p>
                    <hr className='bg-black py-[0.5px] border-none my-10' />
                    <p>Lorem ipsum dolor sit amet consectetur. Accumsan cursus tempus in purus at.</p>
                </article>
            </div>
            <section className='flex justify-between h-full justify-self-end'>
                <img src="./src/assets/flower.svg" alt="flower" className='' />
                <NavLink
                    to={'/'}
                    className='absolute bottom-12 right-6 flex flex-row justify-start gap-2 m-4  bg-background border border-solid border-black p-3 px-5 rounded-full shadow-md cursor-pointer lg:bottom-24 lg:right-40 hover:scale-125 transition-transform duration-300 ease-in-out'
                >
                    <FaArrowRight className='my-0.5' />
                    <button className='w-max text-xl'>VOLVER AL INICIO</button>
                </NavLink>
            </section>
        </main>
    )
}

export default About