import Menu from "./Menu"
import Search from "./Search"

function Forum() {
    return (
        <>

            <div className='w-screen h-screen bg-background grid overflow-hidden grid-cols-[100px,1fr]'>
                <Menu />
                <div className="grid w-full grid-rows-[5em_1fr]">
                    <div className='flex flex-col justify-center mt-3 mb-3'>
                        <div className='flex justify-evenly'><Search /></div>
                        <div className='w-full mt-2 mb-2 border-b border-secondary'></div>
                    </div>

                    <main className="flex justify-center gap-4">
                        <section className="flex flex-col gap-6">
                            <h1 className="font-bold text-3xl text-[#755543]">¡BIENVENIDA, SARA!</h1>
                            <article className="flex bg-white rounded-md p-3 border-2 border-primary w-[42rem] drop-shadow-md">
                                <img src="./src/assets/foros.svg" alt="Una imagen de gente hablando" width='125px' className="mr-12 bg-primary" />
                                <div className="mr-12 mt-4">
                                    <h2 className="font-semibold text-xl my-2">Foros</h2>
                                    <p className="w-[18rem]">Comparte y resuelve tus dudas y pensamientos con personas como tú</p>
                                </div>
                            </article>
                            <article className="flex bg-white rounded-md p-3 border-2 border-primary w-[42rem]">
                                <img src="./src/assets/foro-info.svg" alt="Una bombilla" width='125px' className="mr-12 bg-orange-100" />
                                <div className="mr-12 mt-4">
                                    <h2 className="font-semibold text-xl my-2">Información</h2>
                                    <p className="w-[18rem]">Encuentra información más ampliada de parte de profesionales.</p>
                                </div>
                            </article>
                        </section>
                        <section className="w-[450px] flex-grow-0">

                        </section>


                    </main>
                </div>
            </div>

        </>
    )
}

export default Forum