import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
const Navbar = () => {
  const [navOpen, setnavOpen] = useState(false);

  const handelnav = () => {
    setnavOpen(!navOpen);
  };
  return (
    <header className=" z-50 bg-black h-[80px] w-screen flex items-center justify-center md:gap-0 lg:gap-5 fixed top-0 left-0 text-white">
      <div className=" px-3 lg:px-6">
        <span>
          <h1 className=" text-5xl font-extrabold">MSPNET</h1>
        </span>
      </div>
      <nav className=" flex w-[100%] justify-items-center">
        <ul className=" hidden md:flex md:items-center md:relative md:top-0 md:left-0 md:w-[100%] md:text-xs lg:text-sm ">
          <li className=" my-3 py-3 px-4 w-1/2 lg:w-32 border-r-2 border-gray-200 transition-all duration-300 cursor-pointer text-center">
            Home
          </li>
          <li className=" my-3 py-3 px-4 w-1/2 lg:w-32 border-r-2 border-gray-200  transition-all duration-300 cursor-pointer text-center">
            More Info
          </li>
          <li className=" my-3 py-3 px-4 w-1/2 lg:w-32 border-r-2 border-gray-200  transition-all duration-300 cursor-pointer text-center">
            Contact Us
          </li>
          <li className=" my-3 py-3 px-4 w-1/2 lg:w-32 border-r-2 border-gray-200  transition-all duration-300 cursor-pointer text-center">
            Help Line
          </li>
          <li className=" my-3 py-3 px-4 w-1/2 lg:w-32 border-r-2 border-gray-200  transition-all duration-300 cursor-pointer text-center">
            Services
          </li>
          <li className=" my-3 py-3 px-4 w-1/2 lg:w-32 border-r-2 border-gray-200  transition-all duration-300 cursor-pointer text-center">
            login
          </li>
        </ul>
        <ul
          className={
            navOpen
              ? " z-50 py-7 bg-black w-[60%] h-screen absolute top-[80px] left-0 ease-in duration-500 md:hidden text-center text-white font-customised2"
              : " z-50 bg-black w-[60%] h-screen absolute top-[80px] left-[-150%] ease-in duration-500 text-center text-white font-customised2s"
          }
        >
          <li className=" mx-auto my-3 py-3 px-4 w-2/3 border-b-2 border-gray-400 transition-all duration-300">
            Home
          </li>
          <li className=" mx-auto my-3 py-3 px-4 w-2/3 border-b-2 border-gray-400  transition-all duration-300">
            More Info
          </li>
          <li className=" mx-auto my-3 py-3 px-4 w-2/3 border-b-2 border-gray-400  transition-all duration-300">
            Contact Us
          </li>
          <li className=" mx-auto my-3 py-3 px-4 w-2/3 border-b-2 border-gray-400  transition-all duration-300">
            Help Line
          </li>
          <li className=" mx-auto my-3 py-3 px-4 w-2/3 border-b-2 border-gray-400  transition-all duration-300">
            Services
          </li>
          <li className=" mx-auto my-3 py-3 px-4 w-2/3">login</li>
        </ul>
        <div
          onClick={handelnav}
          className=" cursor-pointer flex items-center justify-center absolute top-[50%] translate-y-[-50%] right-0 mr-5 sm:mr-10 md:hidden"
        >
          <i>
            {!navOpen ? (
              <MenuIcon fontSize="large" />
            ) : (
              <CloseIcon fontSize="large" />
            )}
          </i>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
