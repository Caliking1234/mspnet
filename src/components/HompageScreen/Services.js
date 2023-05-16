import React from "react";
import DevicesIcon from "@mui/icons-material/Devices";
import AssessmentIcon from "@mui/icons-material/Assessment";
import BuildIcon from "@mui/icons-material/Build";

const Services = () => {
  return (
    <div>
      <div className=" my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 text-white">
        <div className=" px-5 w-[280px] sm:w-[300px] h-[100px] text-xl mx-auto text-center font-bold hover:mt-[-20px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-row items-center justify-between ease-in duration-100">
          <span>Managed Services</span>
          <DevicesIcon fontSize="large" />
        </div>
        <div className=" px-5 w-[280px] sm:w-[300px] h-[100px] text-xl mx-auto text-center font-bold hover:mt-[-20px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-row items-center justify-between ease-in duration-100">
          <span>Consulting Services</span>
          <AssessmentIcon fontSize="large" />
        </div>
        <div className=" px-5 w-[280px] sm:w-[300px] h-[100px] text-xl mx-auto text-center font-bold hover:mt-[-20px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-row items-center justify-between ease-in duration-100">
          <span>Break-Fix Services</span>
          <BuildIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default Services;
