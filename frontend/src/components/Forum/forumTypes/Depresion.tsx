import Menu from '../../Menu'
import Search from '../../Search'

function Depresion() {

    const main = document.querySelector('main')

    main?.classList.add('flex-col')
    main?.classList.remove('justify-center')

    return (
        <div className='w-screen h-screen bg-background grid grid-cols-[100px,1fr] overflow-x-hidden'>

            <Menu />
            <div className="grid w-screen grid-rows-[5em_1fr]">

                <div className='flex flex-col justify-center mt-3 mb-3 ml-[3.5rem]'>
                    <div className='flex justify-evenly'><Search /></div>
                    <div className='w-screen mt-2 mb-2 border-b border-[#DDBEA9]'></div>
                </div>

                <main className="flex flex-col gap-4 font-Montserrat ml-60 items-center">
                    <h1 className='self-start text-4xl font-semibold text-[#8B6956] flex items-center mt-4 mb-6 data-forumspath'>FOROS <img src="/src/assets/arrow-symbol.svg" className='inline mx-6 w-4' /> <span className='text-2xl'> Depresión</span></h1>

                    <section className="grid grid-cols-2 mw150:flex mw150:flex-col justify-around gap-6 border-2 border-[#DDBEA9] p-8 -pr-8 -ml-[12rem] mb-4">
                        <article className="bg-white rounded-md p-3 border-2 border-[#8D5E44] drop-shadow-md h-28 data-forumscard">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</article>
                        <article className="bg-white rounded-md p-3 border-2 border-[#8D5E44] drop-shadow-md h-28 data-forumscard">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</article>
                        <article className="bg-white rounded-md p-3 border-2 border-[#8D5E44] drop-shadow-md h-28 data-forumscard">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</article>
                        <article className="bg-white rounded-md p-3 border-2 border-[#8D5E44] drop-shadow-md h-28 data-forumscard">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</article>
                        <article className="bg-white rounded-md p-3 border-2 border-[#8D5E44] drop-shadow-md h-28 data-forumscard">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</article>
                        <article className="bg-white rounded-md p-3 border-2 border-[#8D5E44] drop-shadow-md h-28 data-forumscard">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</article>
                        <article className="bg-white rounded-md p-3 border-2 border-[#8D5E44] drop-shadow-md h-28 data-forumscard">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</article>
                        <article className="bg-white rounded-md p-3 border-2 border-[#8D5E44] drop-shadow-md h-28 data-forumscard">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</article>
                        <article className="bg-white rounded-md p-3 border-2 border-[#8D5E44] drop-shadow-md h-28 data-forumscard">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</article>
                        <article className="bg-white rounded-md p-3 border-2 border-[#8D5E44] drop-shadow-md h-28 data-forumscard">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</article>
                    </section>

                    {/* <section className="flex-grow-0 mt-16 mw150:hidden">
                    <article className="bg-white w-[300px] h-[400px]"></article>
                </section> */}

                </main>
            </div>
        </div>
    )
}

export default Depresion