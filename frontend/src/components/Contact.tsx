import { FaPhoneAlt } from "react-icons/fa";

function Contact(){
    return(
        <section id='contact' className="w-full h-screen bg-background font-anybody lg:w-screen">
            <div className="grid grid-cols-2 s:flex s:flex-col sm:grid sm:grid-cols-2">
                <div className="flex flex-col gap-12 mx-auto my-auto pt-36 s:pt-20">
                    <h1 className="text-4xl pb-8 lg:text-5xl uppercase s:text-xl md:text-3xl">Ponte en contacto</h1>
                    <div className="flex flex-row gap-3 align-center">
                        <FaPhoneAlt className='my-0.5'/>
                        <h2 className="font-light text-2xl s:text-lg">Números de interés</h2>
                    </div>
                        <h3 className="text-xl tracking-wide s:text-lg">Número Nacional de Emergencias</h3>
                        <p className="font-light text-4xl s:text-xl md:text-4xl">112</p>
                </div>
                <form className="mt-48 mx-6 bg-primary border-2 border-solid border-black rounded-3xl s:mt-24 md:mt-40 lg:h-5/6 lg:w-1/2 lg:ml-14 lg:mt-32">
                    <div className="flex flex-col mx-6 mt-8 mb-4">
                        <label>Nombre:</label>
                        <input 
                            className='h-10 border-2 border-solid border-black rounded-xl' 
                            type="text"
                            name="nombre" 
                        />
                    </div>
                    <div className="flex flex-col mx-6 mt-8 mb-4">
                        <label>Teléfono:</label>
                        <input 
                            className='h-10 border-2 border-solid border-black rounded-xl' 
                            type="number"
                            name="telefono" 
                        />
                    </div>
                    <div className="flex flex-col mx-6 mt-8 mb-4">
                        <label>Email:</label>
                        <input 
                            className='h-10 border-2 border-solid border-black rounded-xl' 
                            type="text"
                            name="email" 
                        />
                    </div>
                    <div className="flex flex-col mx-6 mt-8 mb-4">
                        <label>Mensaje:</label>
                        <textarea 
                            className='h-52 border-2 border-solid border-black rounded-xl lg:h-40' 
                            rows={5}
                        />
                    </div>
                    <div className="my-3 flex justify-center">
                        <button 
                            className="bg-background border-2 border-solid border-black rounded-2xl p-2 font-bold tracking-wider shadow-md cursor-pointer hover:bg-lime-400 hover:scale-110 transition-all duration-300 ease-in-out"
                            type="submit"
                        >Enviar</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;