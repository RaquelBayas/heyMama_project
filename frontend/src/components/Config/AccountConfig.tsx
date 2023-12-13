import ToggleSwitch from "./Switch/ToggleSwitch";

function AccountConfig(){
    
    return(
        <form 
            id='account' 
            className='flex flex-col ml-14 text-xl gap-10'
        >
            
            <h1 className='my-10 uppercase text-4xl text-center tracking-wider lg:text-start lg:ml-10'>Ajustes</h1>
            
            
            <div className="flex flex-col">
                <label htmlFor="name">Email:</label>
                <input 
                    className='w-[400px] text-gray-500 mt-2 mb-4 border-2 border-transparent border-b-black bg-transparent focus:outline-none'/>
            </div>
            
            <div className="flex flex-col">
                <label htmlFor="name">Contraseña:</label>
                <input 
                    className='w-[400px] text-gray-500 mt-2 mb-4 border-2 border-transparent border-b-black bg-transparent focus:outline-none'/>
            </div>
            
            <ToggleSwitch/>

            <button
                className="mr-auto hover:text-red-500 hover:scale-110"
            >
                Eliminar mi cuenta
            </button>

            <button
                className="p-2 w-[200px] bg-background border-2 border-black rounded-xl hover:bg-lime-400 hover:scale-110"
            >
                Actualizar perfil
            </button>
        </form>
    )
}

export default AccountConfig;