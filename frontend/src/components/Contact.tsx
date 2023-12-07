import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";

function Contact() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log('Data', name, email, phone, message);
        
    };

    return (
        <section id='contact' className="w-full h-screen bg-background font-anybody">
            <div className="grid grid-cols-2">
                
                <div className="flex flex-col gap-12 mx-auto my-auto pt-36 
                
                sm:pt-0">
                    
                    <h1 className="pb-8 text-4xl uppercase 
                    
                    sm:text-2xl 
                    md:text-3xl 
                    lg:text-4xl"
                    >
                        Ponte en contacto
                    </h1>
                    
                    <div className="flex flex-row gap-3 align-center">
                        <FaPhoneAlt className='my-0.5' />
                        <h2 className="text-2xl font-light">Números de interés</h2>
                    </div>

                    <h3 className="text-xl tracking-wide">Número Nacional de Emergencias</h3>
                    <p className="text-4xl font-light">112</p>

                </div>


                <form 
                    onSubmit={handleSubmit}
                   className="mx-6 mb-auto leading-4 h-fit border-2 border-black border-solid bg-primary rounded-3xl overflow-hidden
                   

                   md:mt-24 
                   lg:mt-32 lg:w-1/2 lg:ml-14 "
                >
                    <div className="flex flex-col mx-6 mt-8 mb-4">
                        <label>Nombre:</label>
                        <input
                            type='text'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Escriba su nombre"
                            
                            className='mt-1 p-4 h-10 border-2 border-black border-solid rounded-xl text-sm'
                        />
                    </div>
                    <div className="flex flex-col mx-6 mt-8 mb-4">
                        <label>Teléfono:</label>
                        <input
                            type="number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Ejemplo +34 655 123 123"

                            className='mt-1 h-10 border-2 border-black border-solid rounded-xl p-4 text-sm'
                            
                        />
                    </div>
                    <div className="flex flex-col mx-6 mt-8 mb-4">
                        <label>Email:</label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="email@gmail.com"
                            
                            className='mt-1 h-10 border-2 border-black border-solid rounded-xl p-4 text-sm'
                            
                        />
                    </div>
                    <div className="flex flex-col mx-6 mt-8 mb-4">
                        <label>Mensaje:</label>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Deje su mensaje"

                            className='mt-1 border-2 border-black border-solid h-52 rounded-xl lg:h-40 p-4 text-sm'
                            rows={5}
                        />
                    </div>
                    <div className="flex justify-center my-3">
                        <button
                            type="submit"

                            className="p-2 font-bold tracking-wider transition-all duration-300 ease-in-out border-2 border-black border-solid shadow-md cursor-pointer bg-background rounded-2xl hover:bg-lime-400 hover:scale-110"
                        >Enviar</button>
                    </div>
                
                </form>

            </div>
        </section>
    )
}

export default Contact;