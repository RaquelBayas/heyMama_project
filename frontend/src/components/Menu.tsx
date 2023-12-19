import { Link } from 'react-router-dom';
import { FaHome, FaBookOpen, FaRegSmile } from "react-icons/fa";
import { RiMentalHealthFill } from "react-icons/ri";
import { MdOutlineForum } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import { IoIosSettings } from "react-icons/io";

function Menu() {
  const user = JSON.parse(localStorage.getItem("user")!);
  return (
    <div className="bg-primary h-screen w-[100px] flex items-center flex-col shadow-md shadow-amber-950 fixed">
      <ul className='flex flex-col h-full align-top place-content-evenly'>
        <li className='mb-4'><Link to="/home"><FaHome className="text-3xl icons" /></Link></li>
        <li className='mb-4'><Link to="/forum"><MdOutlineForum className="text-3xl icons" /></Link></li>
        <li className='mb-4'><Link to="/articles"><FaBookOpen className="text-3xl icons" /></Link></li>
        <li className='mb-4'><Link to="/moods"><FaRegSmile className="text-3xl" /></Link></li>
        <li className='mb-4'><Link to="/breathing"><RiMentalHealthFill className="text-3xl"/></Link></li>
        <li className='mb-4'><Link to={`/profile/${user.id}`}><BsPersonCircle className="text-3xl icons" /></Link></li>
        <li className='mb-4'><Link to="/setting"><IoIosSettings className="text-3xl icons" /></Link></li>
      </ul>
    </div>

    
  );
}

export default Menu;