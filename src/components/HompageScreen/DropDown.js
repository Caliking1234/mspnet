import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const DropDown = ({ title, list1 }) => {
  const [IsOpen, setIsOpen] = useState(false);
  return (
    <div
      onClick={() => setIsOpen(!IsOpen)}
      className=" bg-[rgba(16,44,81,255)] relative w-fit"
    >
      <button className=" text-xs w-fit">{title}</button>
      {IsOpen ? (
        <ArrowDropUpIcon fontSize="small" />
      ) : (
        <ArrowDropDownIcon fontSize="small" />
      )}
      <div
        className={
          IsOpen
            ? " text-sm z-50 w-60 h-fit bg-gray-300 rounded-md text-gray-700 absolute top-[35px] md:top-[55px] left-[50%] translate-x-[-50%] opacity-100  transition-all duration-300"
            : "h-0 z-50 w-60 rounded-md md:top-[-100%] hidden left-[50%] translate-x-[-50%] transition-all duration-300"
        }
      >
        {list1.map((module, i) => {
          return (
            <div
              key={i}
              className=" text-[0.85rem] py-2 px-5 mx-auto  border-b-[1px] border-black"
            >
              <Link to={module.link}>{module.name}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DropDown;
