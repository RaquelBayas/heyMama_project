
function About() {
    return (
        <section 
        id='about' 
        className='m-0 p-0 flex flex-row w-full h-screen mx-auto bg-primary font-anybody'
        >
            <div className='flex flex-col w-2/5'>
                <h1 
                    className='mt-auto font-semibold tracking-widest text-center uppercase leading-loose
                    
                    sm:text-xl
                    md:text-2xl
                    lg:text-3xl
                    xl:text-4xl'
                >
                    ¿Quiénes somos?
                </h1>
                <img 
                    src="./src/assets/flower.svg" alt="flower" 
                    className='mt-0 h-350 mr-auto
                    
                    sm:h-250 s:mt-32
                    md:h-350 md:mt-24
                    lg:h-350 lg:mt-10
                    ' />
            </div>
                
                <article 
                    className='flex flex-col ml-auto my-auto h-auto gap-4 font-light text-justify
                    
                    sm:w-96 sm:mr-10 sm:text-sm
                    md:w-450 md:mr-12 md:text-md
                    lg:w-650 lg:mr-auto lg:text-xl
                    xl:w-650 xl:mr-auto xl:text-xl
                    '
                >

                    <p>Lorem ipsum dolor sit amet consectetur. Accumsan cursus tempus in purus at.</p>
                    <hr className='bg-black py-[0.5px] border-none my-10' />
                    <p>Lorem ipsum dolor sit amet consectetur. Ultrices auctor aenean in id imperdiet vel. Consequat quis egestas faucibus netus aliquam ac scelerisque tortor commodo.</p>
                    <hr className='bg-black py-[0.5px] border-none my-10' />
                    <p>Lorem ipsum dolor sit amet consectetur. Accumsan cursus tempus in purus at.</p>
                </article>

        </section>
    )
}

export default About