import { Routes, Route, Link } from 'react-router-dom';
import AccountConfig from './AccountConfig';
import ProfileConfig from './ProfileConfig';
import useUserContext from '../../hooks/useUserContext';

function UserConf() {

    const { logOut } = useUserContext();

    return (
        <form className='grid grid-cols-200 p-4 h-screen w-screen font-anybody'>
            <nav className='bg-background flex flex-col'>
                <div className='flex flex-col mt-32 mx-auto gap-20 text-xl flex-grow'>
                <ul className='text-center'>
                    <div className='relative inline-block'>
                        <li className='group inline-block hover:animate-underline transition-all duration-500 ease-in-out'>
                            <Link to='/config'>Ajustes de Perfil
                            <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out'></span>
                            </Link>
                        </li>
                    </div>
                    <div className='relative inline-block'>
                        <li className='mt-10 group inline-block hover:animate-underline transition-all duration-500 ease-in-out'>
                            <Link to='/config/account'>Ajustes de Cuenta
                            <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out'></span>
                            </Link>
                        </li>
                    </div>
                </ul>
               
                <button 
                    type='submit' 
                    className='text-red-500 text-center mt-auto mb-16 text-2xl'
                    onClick={logOut}
                >
                    Cerrar sesión
                </button>
                </div>
            </nav>
            
            <div className='flex flex-col ml-14 text-xl gap-2'>
                <Routes>
                    <Route path='/' element={<ProfileConfig/>} />  
                    <Route path='/account' element={<AccountConfig/>} />                      
                </Routes>
            </div>
        </form>
    )
}

export default UserConf;