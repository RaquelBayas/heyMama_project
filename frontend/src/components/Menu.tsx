import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBookOpen, FaRegSmile } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { RiMentalHealthFill } from "react-icons/ri";
import { MdOutlineForum } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import { IoIosSettings } from "react-icons/io";
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';

function Menu() {
  const user = JSON.parse(localStorage.getItem('user')!);
  const [selectedLink, setSelectedLink] = useState(null);

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  const links = [
    { to: '/forum', icon: <FaHome className="text-3xl icons" />, text: 'Home' },
    { to: '/forums', icon: <MdOutlineForum className="text-3xl icons" />, text: 'Forums' },
    { to: '/articles', icon: <FaBookOpen className="text-3xl icons" />, text: 'Artículos' },
    { to: '/chat', icon: <FaMessage className="text-3xl icons" />, text: 'Chat' },
    { to: '/moods', icon: <FaRegSmile className="text-3xl" />, text: 'Estado de ánimo' },
    { to: '/breathing', icon: <RiMentalHealthFill className="text-3xl" />, text: 'Relajación' },
    { to: `/profile/${user.id}`, icon: <BsPersonCircle className="text-3xl icons" />, text: 'Perfil' },
    { to: '/setting', icon: <IoIosSettings className="text-3xl icons" />, text: 'Ajustes' },
  ];

  return (
    <div className="absolute z-10 top-0 bg-primary h-24 flex-col w-screen sm:h-screen sm:w-[100px] flex items-center sm:flex-col shadow-md shadow-amber-950">
      <ul className="flex flex-row h-full align-middle sm:align-top sm:flex-col place-content-evenly">
        {links.map((link, index) => (
          <li className="my-auto sm:mb-4 " key={index}>
            <Tooltip
              title={link.text}
              position="right"
              trigger="mouseenter"
              interactive
              onClick={() => handleLinkClick(link)}
            >
              <Link to={link.to} className={`bg-secondary ${selectedLink === link ? 'selected' : ''}`}>
                {link.icon}
              </Link>
            </Tooltip>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
