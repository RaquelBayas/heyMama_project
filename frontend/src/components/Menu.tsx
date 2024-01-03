import { useState } from "react";
import { FaHome, FaBookOpen, FaRegSmile } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { FaMessage } from "react-icons/fa6";
import { RiMentalHealthFill } from "react-icons/ri";
import { MdOutlineForum } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import { IoIosSettings } from "react-icons/io";
//import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";
import Tooltip from '@mui/material/Tooltip';

function Menu() {
  const user = JSON.parse(localStorage.getItem("user")!);
  const [selectedLink, setSelectedLink] = useState<null | { to: string; icon: JSX.Element; text: string }>(null);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (link: null | { to: string; icon: JSX.Element; text: string }) => {
    setSelectedLink(link);
  };

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  const links = [
    {
      to: "/forum",
      icon: <FaHome className="text-4xl sm:text-3xl icons" />,
      text: "Home",
    },
    {
      to: "/forums",
      icon: <MdOutlineForum className="text-4xl sm:text-3xl icons" />,
      text: "Forums",
    },
    {
      to: "/articles",
      icon: <FaBookOpen className="text-4xl sm:text-3xl icons" />,
      text: "Artículos",
    },
    {
      to: "/chat",
      icon: <FaMessage className="text-4xl sm:text-3xl icons" />,
      text: "Chat",
    },
    {
      to: "/moods",
      icon: <FaRegSmile className="text-4xl sm:text-3xl" />,
      text: "Estado de ánimo",
    },
    {
      to: "/breathing",
      icon: <RiMentalHealthFill className="text-4xl sm:text-3xl" />,
      text: "Relajación",
    },
    {
      to: `/profile/${user.id}`,
      icon: <BsPersonCircle className="text-4xl sm:text-3xl icons" />,
      text: "Perfil",
    },
    {
      to: "/setting",
      icon: <IoIosSettings className="text-4xl sm:text-3xl icons" />,
      text: "Ajustes",
    },
  ];

  return (
    <div className="absolute z-10 top-0 bg-primary h-auto flex-col w-screen sm:h-screen sm:w-[100px] flex items-center sm:flex-col shadow-md shadow-amber-950">
      <div
        className="flex justify-end h-24 my-auto align-bottom sm:hidden"
        onClick={handleMenuClick}
      >
        <IoMenu className="my-auto text-4xl icons" />
      </div>
      <ul
        className={`flex flex-col h-full align-middle sm:align-top sm:flex-col place-content-evenly ${
          isMenuOpen ? "block" : "hidden sm:flex"
        }`}
      >
        {links.map((link, index) => (
          <li className="flex m-6 my-auto sm:p-4 sm:mb-4" key={index}>
            <Tooltip title={link.text} placement="right">
              <button
                onClick={() => handleLinkClick(link)}
                className={`tu-clase ${selectedLink === link ? "selected" : ""}`}
              >
                {link.icon} <span className="sm:hidden">{link.text}</span>
              </button>
            </Tooltip>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
