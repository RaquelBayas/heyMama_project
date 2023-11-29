import ToggleSwitch from './ToggleSwitch.tsx'

function UserConf() {

    const handleClick = (e) => {
        console.log(e.target.alt);
        if (e.target.alt === 'avatar') {

        }

    }

    return (
        <main className='flex justify-center'>
            <form className='flex flex-col p-4 config w-max' onClick={handleClick}>

                <h1 className='mb-4'>Ajustes</h1>

                <label htmlFor="avatar">Avatar
                    <input type="file" accept='image/*' capture="camera" id='avatar' className='hidden' />
                    <img src="./src/assets/avatar-person.svg" alt="avatar" className='mb-4 -ml-4 max-w-[5rem]' />
                </label>

                <label htmlFor="name">Nombre</label>
                <span className='text-gray-400 mb-4'>Raquel</span>

                <label htmlFor="username">Nombre de usuario</label>
                <span className='text-gray-400 mb-4'>raquel</span>

                <label htmlFor="biography">Biografía</label>
                <span className='text-gray-400 mb-4'>¡Hola!</span>

                <label htmlFor="email">Correo electrónico</label>
                <span className='text-gray-400 mb-4'>ejemplo@gmail.com</span>

                <label htmlFor="password">Contraseña</label>
                <span className='text-gray-400 mb-2'>***</span>

                <ToggleSwitch />

            </form>
        </main>
    )
}

export default UserConf