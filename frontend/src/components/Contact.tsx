import { FaPhoneAlt } from "react-icons/fa";

function Contact(){
    return(
        <section id='contact' className="w-full h-screen bg-background font-anybody lg:w-screen">
            <div className="grid grid-cols-2 sm:grid sm:grid-cols-2">
                <div className="flex flex-col gap-12 mx-auto my-auto pt-36 s:pt-20">
                    <h1 className="pb-8 text-4xl uppercase lg:text-5xl s:text-2xl md:text-3xl">Ponte en contacto</h1>
                    <div className="flex flex-row gap-3 align-center">
                        <FaPhoneAlt className='my-0.5'/>
                        <h2 className="text-2xl font-light s:text-lg">Números de interés</h2>
                    </div>
                        <h3 className="text-xl tracking-wide s:text-lg">Número Nacional de Emergencias</h3>
                        <p className="text-4xl font-light s:text-xl md:text-4xl">112</p>
                </div>
                <form className="mx-6 mt-48 border-2 border-black border-solid bg-primary rounded-3xl s:mt-36 lg:h-5/6 lg:w-1/2 lg:ml-14 lg:mt-32">
                    <div className="flex flex-col mx-6 mt-8 mb-4">
                        <label>Nombre:</label>
                        <input 
                            className='h-10 border-2 border-black border-solid rounded-xl' 
                            type="text"
                            name="nombre" 
                        />
                    </div>
                    <div className="flex flex-col mx-6 mt-8 mb-4">
                        <label>Teléfono:</label>
                        <input 
                            className='h-10 border-2 border-black border-solid rounded-xl' 
                            type="number"
                            name="telefono" 
                        />
                    </div>
                    <div className="flex flex-col mx-6 mt-8 mb-4">
                        <label>Email:</label>
                        <input 
                            className='h-10 border-2 border-black border-solid rounded-xl' 
                            type="text"
                            name="email" 
                        />
                    </div>
                    <div className="flex flex-col mx-6 mt-8 mb-4">
                        <label>Mensaje:</label>
                        <textarea 
                            className='border-2 border-black border-solid h-52 rounded-xl lg:h-40' 
                            rows={5}
                        />
                    </div>
                    <div className="flex justify-center my-3">
                        <button 
                            className="p-2 font-bold tracking-wider transition-all duration-300 ease-in-out border-2 border-black border-solid shadow-md cursor-pointer bg-background rounded-2xl hover:bg-lime-400 hover:scale-110"
                            type="submit"
                        >Enviar</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;