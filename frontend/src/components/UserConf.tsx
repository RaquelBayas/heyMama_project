import ToggleSwitch from './ToggleSwitch.tsx'

function UserConf() {

    const handleClick = (e) => {
        console.log(e.target);

    }

    return (
        <main className='grid grid-cols-200 p-4 h-screen w-screen font-anybody'>
            <nav className='bg-background flex flex-col'>
                <div className='flex flex-col mt-32 mx-auto text-start gap-6 text-xl flex-grow'>
                    <h2>Ajustes de perfil</h2>
                    <h2>Ajustes de cuenta</h2>
                    <h2 className='text-red-500 text-center mt-auto mb-16 text-2xl'>Cerrar sesión</h2>
                </div>
            </nav>

            <div className='flex flex-col ml-14 text-xl gap-2'>
                <h1 className='my-10 uppercase text-4xl text-center tracking-wider lg:text-start lg:ml-10'>Ajustes</h1>
                <label htmlFor="name">Nombre</label>
                <span className='text-gray-400 mb-4'>Raquel</span>
                <label htmlFor="username">Nombre de usuario</label>
                <span className='text-gray-400 mb-4'>raquel</span>
                <label htmlFor="biography">Biografía</label>
                <span className='text-gray-400 mb-4'>¡Hola!</span>
                <label htmlFor="email">Correo electrónico</label>
                <span className='text-gray-400 mb-4'>ejemplo@gmail.com</span>
                <label htmlFor="password">Contraseña</label>
                <span className='text-gray-400 mb-4'>***</span>
                <ToggleSwitch/>
            </div>

        </main>
    )
}

export default UserConf