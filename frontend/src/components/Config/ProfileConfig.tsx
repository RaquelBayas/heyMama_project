function ProfileConfig(){
    return(
        <div className='flex flex-col ml-14 text-xl gap-2'>
            <h1 className='my-10 uppercase text-4xl text-center tracking-wider lg:text-start lg:ml-10'>Ajustes</h1>
            <label htmlFor="avatar">Avatar
                <input type="file" accept='image/*' id='avatar' className='hidden' />
                <img src="./src/assets/avatar-person.svg" alt="avatar" className='mb-4 -ml-4 max-w-[5rem]' />
            </label>
            <label htmlFor="name">Nombre</label>
            <span className='text-gray-500 mb-4'>Raquel</span>
            <label htmlFor="username">Nombre de usuario</label>
            <span className='text-gray-500 mb-4'>raquel</span>
            <label htmlFor="biography">Biografía</label>
            <span className='text-gray-500 mb-4'>¡Hola!</span>

        </div>                
    )
}

export default ProfileConfig;