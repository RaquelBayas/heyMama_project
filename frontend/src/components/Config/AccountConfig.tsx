import ToggleSwitch from "./Switch/ToggleSwitch";

function AccountConfig(){
    
    return(
        <div id='account' className='flex flex-col ml-14 text-2xl gap-2'>
            <h1 className='my-10 uppercase text-4xl text-center tracking-wider lg:text-start lg:ml-10'>Ajustes</h1>
            <label htmlFor="email">Correo electrónico</label>
                <span className='text-gray-500 mb-4'>ejemplo@gmail.com</span>
            <label htmlFor="password">Contraseña</label>
                <span className='text-gray-500 mb-4'>***</span>
            <ToggleSwitch/>
        </div>
    )
}

export default AccountConfig;