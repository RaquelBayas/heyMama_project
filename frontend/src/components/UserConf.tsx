import ToggleSwitch from './ToggleSwitch.tsx'

function UserConf() {

    const handleClick = (e) => {
        console.log(e.target);

    }

    return (
        <main className='flex flex-col p-4 config' onClick={handleClick}>

            <h1 className='mb-4'>Ajustes</h1>

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

            <ToggleSwitch />

        </main>
    )
}

export default UserConf