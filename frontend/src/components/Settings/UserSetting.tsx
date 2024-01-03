import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import AccountSetting from './AccountSetting';
import ProfileSetting from './ProfileSetting';

function UserSetting() {
    const navigate = useNavigate()

    function handleClick() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/');
    }

    return (
        <div className='w-screen h-screen p-4 sm:grid sm:grid-cols-200 font-Montserrat'>
            <nav className='flex flex-col rounded-lg bg-background'>
                <div className='flex flex-col flex-grow mx-auto text-xl sm:mt-32 sm:gap-20'>
                    <ul className='flex flex-col text-center'>
                        <div className='relative inline-block'>
                            <li className='inline-block transition-all duration-500 ease-in-out group hover:animate-underline'>
                                <Link to='/setting'>Ajustes de Perfil
                                    <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out'></span>
                                </Link>
                            </li>
                        </div>
                        <div className='relative inline-block'>
                            <li className='inline-block mt-10 transition-all duration-500 ease-in-out group hover:animate-underline'>
                                <Link to='/setting/account'>Ajustes de Cuenta
                                    <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out'></span>
                                </Link>
                            </li>
                        </div>
                    </ul>

                    <button
                        type='submit'
                        className='mt-auto mb-4 text-2xl text-center text-red-500 sm:first-letter:mb-16'
                        onClick={handleClick}
                    >
                        Cerrar sesión
                    </button>
                </div>
            </nav>

            <div
                className='flex flex-col gap-2 text-xl lg:mx-auto'>
                <Routes>
                    <Route path='/' element={<ProfileSetting />} />
                    <Route path='/account' element={<AccountSetting />} />
                </Routes>
            </div>
        </div>
    );
}

export default UserSetting;