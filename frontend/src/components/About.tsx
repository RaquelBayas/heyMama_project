
function About() {
    return (
        <div 
        id='about' 
        className='flex flex-row w-full h-screen min-w-full p-4 mx-auto bg-primary font-anybody s:w-full lg:w-screen'
        >
            <section className='flex gap-20 mx-auto pt-60 s:pt-28 s:m-0'>
                <div className="flex flex-col mb-10">
                    <h1 className='pt-32 text-5xl font-semibold tracking-widest text-center uppercase w-350 s:text-3xl s:pt-72 s:w-60 md:w-80 md:text-4xl md:pt-48 lg:text-4xl lg:w-1/2 xl:w-1/2'>¿Quiénes somos?</h1>
                    <img src="./src/assets/flower.svg" alt="flower" className='mt-auto h-350 -ml-28 -mb-14 s:-ml-12 lg:mr-auto lg:ml-0 s:h-350' />
                </div>
            </section>
            <section className="flex flex-col mx-auto gap-7 center">
                <article className='flex flex-col h-auto gap-4 my-auto text-xl font-light text-justify w-450 s:text-md s:w-80 s:gap-0 s: md:text-sm md:w-72 md:gap-2 lg:w-650 lg:text-2xl lg:h-auto'>
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