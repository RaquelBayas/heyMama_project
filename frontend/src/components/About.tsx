
function About() {
    return (
        <div id='about' className='flex flex-row mx-auto bg-primary w-full h-screen p-4 font-anybody lg:w-screen'>
            <section className='flex gap-20 pt-60 mx-auto'>
                <div className="flex flex-col mb-10">
                    <h1 className='font-semibold text-5xl tracking-widest w-350 text-center pt-32 lg:text-6xl lg:w-650 uppercase'>¿Quiénes somos?</h1>
                    <img src="./src/assets/flower.svg" alt="flower" className='h-350 -ml-28 -mb-14 mt-auto lg:mr-auto' />
                </div>
            </section>
            <section className="flex flex-col gap-7 mx-auto center">
                <article className='font-light text-xl w-450 h-auto flex flex-col text-justify gap-4 my-auto md:text-lg md:gap-2 lg:w-550 lg:text-2xl lg:h-auto'>
                    <p>Lorem ipsum dolor sit amet consectetur. Accumsan cursus tempus in purus at.</p>
                    <hr className='bg-black py-[0.5px] border-none my-10' />
                    <p>Lorem ipsum dolor sit amet consectetur. Ultrices auctor aenean in id imperdiet vel. Consequat quis egestas faucibus netus aliquam ac scelerisque tortor commodo.</p>
                    <hr className='bg-black py-[0.5px] border-none my-10' />
                    <p>Lorem ipsum dolor sit amet consectetur. Accumsan cursus tempus in purus at.</p>
                </article>
            </section>
            
        </div>
    )
}

export default About