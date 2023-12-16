import { Link } from 'react-router-dom';
import { FaHome, FaBookOpen, FaRegSmile } from "react-icons/fa";
import { MdOutlineForum } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import { IoIosSettings } from "react-icons/io";

function Menu() {
  return (
    <div className="bg-primary h-screen w-[100px] flex items-center flex-col shadow-md shadow-amber-950 fixed">
      <ul className='flex flex-col h-full align-top place-content-evenly'>
        <li className='mb-4'><Link to="/home"><FaHome className="text-3xl icons" /></Link></li>
        <li className='mb-4'><Link to="/forum"><MdOutlineForum className="text-3xl icons" /></Link></li>
        <li className='mb-4'><Link to="/articles"><FaBookOpen className="text-3xl icons" /></Link></li>
        <li className='mb-4'><Link to="/moods"><FaRegSmile className="text-3xl" /></Link></li>

        <li className='mb-4'><Link to="/profile"><BsPersonCircle className="text-3xl icons" /></Link></li>
        <li className='mb-4'><Link to="/config"><IoIosSettings className="text-3xl icons" /></Link></li>
      </ul>
    </div>

    
  );
}

export default Menu;