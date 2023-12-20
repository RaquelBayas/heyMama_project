import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { ContactForm } from "../../models/ContactForm";

function Contact() {

    const [error, setError] = useState<ContactForm | null>(null);

    const [contactData, setContactData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
    }
    );

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setContactData({
            ...contactData,
            [e.target.name]: e.target.value
        });
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const baseUrl = 'http://localhost:5000/users/contact';

        try {
            const resp = await fetch(baseUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(contactData)
            });

            if (!resp.ok && resp.status === 400) {
                const data = await resp.json();
                setError(data.error);
            } else {
                setError(null);
            }

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div id='contact' className="w-full h-screen bg-background font-anybody">
            <div className="grid grid-cols-2 h-screen">

                <div className="flex flex-col gap-12 mx-auto my-auto pt-36 
                
                sm:pt-0 xl:mt-auto">

                    <h1 className="pb-8 text-4xl uppercase 
                    
                    sm:text-2xl 
                    md:text-3xl 
                    lg:text-4xl xl:text-6xl"
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
                    className="flex flex-col mt-auto mx-6 mt h-fit border-2 border-black border-solid bg-primary rounded-3xl overflow-hidden
                   

                   md:mt-24 
                   lg:my-auto lg:w-1/2 lg:ml-14"
                >
                    <div className="flex flex-col mx-6 mt-8 mb-4">
                        <label>Nombre:</label>
                        <input
                            type='text'
                            name='name'
                            value={contactData.name}
                            onChange={handleChange}
                            placeholder="Escriba su nombre"

                            className='mt-1 p-4 h-10 border-2 border-black border-solid rounded-xl text-sm'
                        />

                        {error?.name && <span className="text-[18px] text-red-500 p-3">{error.name}</span>}

                    </div>
                    <div className="flex flex-col mx-6 mt-8 mb-4">
                        <label>Teléfono:</label>
                        <input
                            type="number"
                            name="phone"
                            value={contactData.phone}
                            onChange={handleChange}
                            placeholder="Ejemplo +34 655 123 123"

                            className='mt-1 h-10 border-2 border-black border-solid rounded-xl p-4 text-sm'

                        />
                        {error?.phone && <span className="text-[18px] text-red-500 p-3">{error.phone}</span>}

                    </div>
                    <div className="flex flex-col mx-6 mt-8 mb-4">
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={contactData.email}
                            onChange={handleChange}
                            placeholder="email@gmail.com"

                            className='mt-1 h-10 border-2 border-black border-solid rounded-xl p-4 text-sm'
                        />
                        {error?.email && <span className="text-[18px] text-red-500 p-3">{error.email}</span>}
                    </div>
                    <div className="flex flex-col mx-6 mt-8 mb-4">
                        <label>Mensaje:</label>
                        <textarea
                            name="message"
                            rows={5}
                            value={contactData.message}
                            onChange={handleChange}
                            placeholder="Deje su mensaje"

                            className='mt-1 border-2 border-black border-solid h-52 rounded-xl lg:h-40 p-4 text-sm'
                        />
                        {error?.message && <span className="text-[18px] text-red-500 p-3">{error.message}</span>}
                    </div>
                    <div className="flex justify-center my-3">
                        <button
                            type="submit"

                            className="p-2 font-bold tracking-wider transition-all duration-300 ease-in-out border-2 border-black border-solid shadow-md cursor-pointer bg-background rounded-2xl hover:bg-lime-400 hover:scale-110"
                        >Enviar</button>
                    </div>

                </form>

            </div>
        </div>
    );
}

export default Contact;