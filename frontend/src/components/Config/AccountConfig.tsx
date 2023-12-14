import { useState } from "react";
import ToggleSwitch from "./Switch/ToggleSwitch";
import useUserContext from "../../hooks/useUserContext";

function AccountConfig(){

    const [ accountData, setAccountData ] = useState({
        email: '',
        password:'',
    });

    const [ active, setActive ] = useState({
        isActive: '1',
    });

    function handleDataChange (e:  React.ChangeEvent<HTMLInputElement>){
        setAccountData({
            ...accountData,
            [e.target.name]:e.target.value
        });
    }
    
    function handleActiveChange (e:React.ChangeEvent<HTMLButtonElement>){
        setActive({
            ...active,
            [e.target.name]:e.target.value
        })
    }

    async function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const { user } = useUserContext();

        const userId = user ? user.id : '';

        const baseUrl = `http://localhost:5000/users/config/account/:${userId}`;

        try {
            const response = await fetch(baseUrl,{
                method:'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...accountData,
                    ...active,
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
        <form 
            onSubmit={handleSubmit}
            id='account' 
            className='flex flex-col ml-14 text-xl gap-10'
        >
            
            <h1 className='my-10 uppercase text-4xl text-center tracking-wider lg:text-start lg:ml-10'>Ajustes</h1>
            
            
            <div className="flex flex-col">
                <label htmlFor="name">Email:</label>
                <input
                    name="email"
                    value={accountData.email} 
                    onChange={handleDataChange}
                    className='w-[400px] text-gray-500 mt-2 mb-4 border-2 border-transparent border-b-black bg-transparent focus:outline-none'/>
            </div>
            
            <div className="flex flex-col">
                <label htmlFor="name">Contraseña:</label>
                <input
                    name="password"
                    value={accountData.password}
                    onChange={handleDataChange} 
                    className='w-[400px] text-gray-500 mt-2 mb-4 border-2 border-transparent border-b-black bg-transparent focus:outline-none'/>
            </div>
            
            <ToggleSwitch/>

            <button
                name="active"
                value={active.isActive}
                onChange={handleActiveChange}
                className="mr-auto hover:text-red-500 hover:scale-110"
            >
                Eliminar mi cuenta
            </button>

            <button
                type="submit"
                className="p-2 w-[200px] bg-background border-2 border-black rounded-xl hover:bg-lime-400 hover:scale-110"
            >
                Actualizar perfil
            </button>
        </form>
    )
}

export default AccountConfig;