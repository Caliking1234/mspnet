import React from "react";
import DevicesIcon from "@mui/icons-material/Devices";
import AssessmentIcon from "@mui/icons-material/Assessment";
import BuildIcon from "@mui/icons-material/Build";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <div className=" my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 text-white">
        <Link to="/managed-services" className=" cursor-pointer">
          <div className=" px-5 w-[280px] sm:w-[300px] h-[100px] text-xl mx-auto text-center font-bold hover:mt-[-20px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-row items-center justify-between ease-in duration-200 delay-75">
            <span>Managed Services</span>
            <DevicesIcon fontSize="large" />
          </div>
        </Link>
        <Link to="/it-constancy" className=" cursor-pointer">
          <div className=" px-5 w-[280px] sm:w-[300px] h-[100px] text-xl mx-auto text-center font-bold hover:mt-[-20px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-row items-center justify-between ease-in duration-200 delay-75">
            <span>Consulting Services</span>
            <AssessmentIcon fontSize="large" />
          </div>
        </Link>
        <Link to="/break-fix" className=" cursor-pointer">
          <div className=" px-5 w-[280px] sm:w-[300px] h-[100px] text-xl mx-auto text-center font-bold hover:mt-[-20px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-row items-center justify-between ease-in duration-200 delay-75">
            <span>Break-Fix Services</span>
            <BuildIcon fontSize="large" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Services;
