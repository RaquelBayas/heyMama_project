
function About() {

    function handleclick(e: object) {
        console.log(e);
    }

    return (
        <main className='flex flex-col w-screen h-screen p-4 bg-primary'>
            <section className='flex items-center justify-around h-full mt-6'>
                <h1 className='text-5xl font-semibold'>¿Quiénes somos?</h1>
                <article className='font-light text-lg max-w-[25rem] '>
                    <p>Lorem ipsum dolor sit amet consectetur. Accumsan cursus tempus in purus at.</p>
                    <hr className='bg-black py-[0.5px] border-none my-10' />
                    <p>Lorem ipsum dolor sit amet consectetur. Ultrices auctor aenean in id imperdiet vel. Consequat quis egestas faucibus netus aliquam ac scelerisque tortor commodo.</p>
                    <hr className='bg-black py-[0.5px] border-none my-10' />
                    <p>Lorem ipsum dolor sit amet consectetur. Accumsan cursus tempus in purus at.</p>
                </article>
            </section>
            <section className='flex justify-between h-full justify-self-end'>
                <img src="./src/assets/flower.svg" alt="flower" className='' />

                <button className='flex items-center self-end justify-center gap-2 p-3 m-4 rounded-full bg-secondary outline-black outline outline-2'
                    onClick={handleclick}>
                    <img src='./src/assets/arrow.svg' alt="back to home" className='-mt-[2px]' />
                    <span className='w-max'>VOLVER AL INICIO</span>
                </button>
            </section>
        </main>
    )
}

export default About