import { FaPhoneAlt } from "react-icons/fa";

function Contact(){
    return(
        <body className="w-screen h-screen bg-background font-anybody">
            <div className="grid grid-cols-2">
                <div className="flex flex-col gap-12 mx-auto my-48">
                    <h1 className="text-4xl pb-8 lg:text-5xl">PONTE EN CONTACTO</h1>
                    <div className="flex flex-row gap-3 align-center">
                        <FaPhoneAlt className='my-0.5'/>
                        <h2 className="font-light text-2xl">Números de interés</h2>
                    </div>
                        <h3 className="text-xl tracking-wide">Número Nacional de Emergencias</h3>
                        <p className="font-light text-4xl">112</p>
                </div>
                <form className="my-16 mx-6 bg-primary border-2 border-solid border-black rounded-3xl lg:h-5/6 lg:w-3/5 lg:ml-14 lg:my-auto">
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
                        <button className="bg-background border-2 border-solid border-black rounded-2xl p-2 font-bold tracking-wider shadow-md cursor-pointer hover:bg-green">Enviar</button>
                    </div>
                </form>
            </div>
        </body>
    )
}

export default Contact;