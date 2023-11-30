import { Link } from "react-scroll";
import { IoHomeOutline } from "react-icons/io5";

function Navbar(){
    return(
        <nav className='fixed text-anybody text-2xl font-semibold w-full flex flex-row justify-start gap-10 p-4 mt-0 pl-10 border-2 border-solid shadow-md border-b-marron bg-piel-claro'>
            <IoHomeOutline className='text-3xl hover:scale-125 cursor-pointer transition-transform duration-300 ease-in-out '/>
            <Link 
                to= '/about'
                spy={true} 
                smooth={true} 
                offset={50} 
                duration={500}
                className='mx-10 tracking-wider transition-transform duration-300 ease-in-out transform cursor-pointer hover:scale-125 uppercase'
            >Info</Link>
            <Link to='/contact' className='mx-2 tracking-wider transition-transform duration-300 ease-in-out transform cursor-pointer hover:scale-125 uppercase'>Contacto</Link> 
        </nav>
    )
}

export default Navbar;