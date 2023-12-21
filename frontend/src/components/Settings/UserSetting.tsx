import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import AccountSetting from './AccountSetting';
import ProfileSetting from './ProfileSetting';
import useUserContext from '../../hooks/useUserContext';

function UserSetting() {
    const navigate = useNavigate()

    function handleClick() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/');
    }

    return (
        <div className='grid grid-cols-200 p-4 h-screen w-screen font-anybody'>
            <nav className='bg-background flex flex-col'>
                <div className='flex flex-col mt-32 mx-auto gap-20 text-xl flex-grow'>
                    <ul className='text-center'>
                        <div className='relative inline-block'>
                            <li className='group inline-block hover:animate-underline transition-all duration-500 ease-in-out'>
                                <Link to='/setting'>Ajustes de Perfil
                                    <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out'></span>
                                </Link>
                            </li>
                        </div>
                        <div className='relative inline-block'>
                            <li className='mt-10 group inline-block hover:animate-underline transition-all duration-500 ease-in-out'>
                                <Link to='/setting/account'>Ajustes de Cuenta
                                    <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out'></span>
                                </Link>
                            </li>
                        </div>
                    </ul>

                    <button
                        type='submit'
                        className='text-red-500 text-center mt-auto mb-16 text-2xl'
                        onClick={handleClick}
                    >
                        Cerrar sesión
                    </button>
                </div>
            </nav>

            <div
                className='flex flex-col ml-14 text-xl gap-2 lg:mx-auto'>
                <Routes>
                    <Route path='/' element={<ProfileSetting />} />
                    <Route path='/account' element={<AccountSetting />} />
                </Routes>
            </div>
        </div>
    );
}

export default UserSetting;