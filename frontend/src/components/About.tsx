
function About() {

    function handleclick(e: object) {
        console.log(e);
    }

    return (
        <main className='bg-primary flex flex-col h-screen p-4'>
            <section className='flex justify-around items-center h-full mt-6'>
                <h1 className='font-semibold text-5xl'>¿Quiénes somos?</h1>
                <article className='font-light text-lg max-w-[25rem] '>
                    <p>Lorem ipsum dolor sit amet consectetur. Accumsan cursus tempus in purus at.</p>
                    <hr className='bg-black py-[0.5px] border-none my-10' />
                    <p>Lorem ipsum dolor sit amet consectetur. Ultrices auctor aenean in id imperdiet vel. Consequat quis egestas faucibus netus aliquam ac scelerisque tortor commodo.</p>
                    <hr className='bg-black py-[0.5px] border-none my-10' />
                    <p>Lorem ipsum dolor sit amet consectetur. Accumsan cursus tempus in purus at.</p>
                </article>
            </section>
            <section className='justify-self-end flex justify-between h-full'>
                <img src="./src/assets/flower.svg" alt="flower" className='' />

                <button className='self-end flex justify-center items-center gap-2 m-4 bg-secondary p-3 rounded-full outline-black outline outline-2'
                    onClick={handleclick}>
                    <img src='./src/assets/arrow.svg' alt="back to home" className='-mt-[2px]' />
                    <span className='w-max'>VOLVER AL INICIO</span>
                </button>
            </section>
        </main>
    )
}

export default About