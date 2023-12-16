import { useState } from "react";
import useUserContext from "../../hooks/useUserContext";

function ProfileConfig(){

    const [ configData, setConfigData ] = useState({
        username: '',
        name: '',
        surname:'',
        phone: '',
        email:'',
    });

    const [ biographyData, setBiographyData ] = useState({
        biography: '',
    })

    function handleChange (e:  React.ChangeEvent<HTMLInputElement>){
        setConfigData({
            ...configData,
            [e.target.name]:e.target.value
        });

        setBiographyData({
            ...biographyData,
            [e.target.name]: e.target.value
        })
    }

    async function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const { user } = useUserContext();

        const userId = user ? user.id : '';

        const baseUrl = `http://localhost:5000/users/config/:${userId}`;

        try {
            const response = await fetch(baseUrl,{
                method:'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...configData,
                    ...biographyData,
                }),
            });

            if (response.ok){
                const result = await response.json();
                console.log(result);
            } else{
                console.error('Error al enviar datos al servidor');
            }
        } catch (error) {
            console.error(error);
        }
    }

    return(
        <div className='flex flex-col gap-5 text-xl ml-14'>
            <h1 className='mt-10 mb-4 text-4xl tracking-wider text-center uppercase lg:text-start lg:ml-10'>Ajustes</h1>

            <form
            onSubmit={handleSubmit}
                className="flex flex-col justify-start gap-8"
            >
                <h3>Foto de perfil:</h3>
                <label htmlFor="avatar">
                    <input 
                        type="file" 
                        accept='image/*' 
                        id='avatar'
                        name="avatar" 
                        className='hidden' />
                    <img 
                        src="./src/assets/avatar-person.svg" alt="avatar" 
                        className='ml-4 max-w-[6rem] cursor-pointer' 
                    />
                </label>

            <div 
                className="flex flex-col">
                <label htmlFor="username">Nombre de usuario:</label>
                <input
                    name="username" 
                    value={configData.username}
                    onChange={handleChange}
                    className='w-[400px] text-gray-500 mt-2 mb-4 border-2 border-transparent border-b-black bg-transparent focus:outline-none'/>
            </div>

            <div className="flex flex-col">
                <label htmlFor="name">Nombre:</label>
                <input 
                    name="name"
                    value={configData.name}
                    onChange={handleChange}
                    className='w-[400px] text-gray-500 mt-2 mb-4 border-2 border-transparent border-b-black bg-transparent focus:outline-none'/>
            </div>
            
            <div className="flex flex-col">
                <label htmlFor="name">Apellido:</label>
                <input 
                    name="surname"
                    value={configData.surname}
                    onChange={handleChange}
                    className='w-[400px] text-gray-500 mt-2 mb-4 border-2 border-transparent border-b-black bg-transparent focus:outline-none' />
            </div>
            
            <div className="flex flex-col">
                <label htmlFor="name">Teléfono:</label>
                <input 
                    name="phone"
                    value={configData.phone}
                    onChange={handleChange}
                    className='w-[400px] text-gray-500 mt-2 mb-4 border-2 border-transparent border-b-black bg-transparent focus:outline-none'/>
            </div>


            <div className="flex flex-col">
                <label htmlFor="biography">Biografía:</label>
                <input 
                    name="biography"
                    value={biographyData.biography}
                    onChange={handleChange}
                    className='w-[400px] text-gray-500 mt-2 mb-4 border-2 border-transparent border-b-black bg-transparent focus:outline-none'/>
            </div>

            <button
                className="p-2 w-[200px] bg-background border-2 border-black rounded-xl hover:bg-lime-400 hover:scale-110"
            >
                Actualizar perfil
            </button>
            </form>
        </div>                
    )
}

export default ProfileConfig;