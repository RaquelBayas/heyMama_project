import { Link } from "react-scroll";
import { IoHomeOutline } from "react-icons/io5";

function Navbar() {
    return (
        <nav className='fixed font-semibold w-full p-4 mt-0 pl-10 border-2 border-solid shadow-md border-b-marron bg-piel-claro'>
            <ul className="flex flex-row justify-between gap-5 text-anybody uppercase z-10
            
            sm:text-md md:text-xl lg:text-2xl lg:gap-8">
                <li className='cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out lg:ml-14'>
                    <Link activeClass="active"
                        to="landpage"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        <IoHomeOutline className='mt-0.5 text-3xl' />
                    </Link>
                </li>
                <div className="flex flex-row sm:mr-20 md:mr-20 lg:mr-24 xl:mr-30 2xl:mr-30 3xl:mr-40">
                    <li className='cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out'>
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                            className='mx-10 tracking-wider transition-transform duration-300 ease-in-out transform cursor-pointer hover:scale-125 uppercase'
                        >
                            Info
                        </Link>
                    </li>
                    <li className='cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out'>
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500} className='mx-2 tracking-wider transition-transform duration-300 ease-in-out transform cursor-pointer hover:scale-125 uppercase'
                        >
                            Contacto
                        </Link>
                    </li>
                </div>
            </ul>
        </nav>
    );
}

export default Navbar;