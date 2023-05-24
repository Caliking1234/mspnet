import React from "react";
import ConstructionIcon from "@mui/icons-material/Construction";
import LanguageIcon from "@mui/icons-material/Language";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import LockIcon from "@mui/icons-material/Lock";
import HubIcon from "@mui/icons-material/Hub";

const SDConsultancySEction1 = () => {
  return (
    <div className=" mt-[80px] ">
      <div className="w-full text-center bg-gray-200 py-10">
        <h1 className=" px-5 text-2xl sm:text-4xl md:text-5xl py-10 text-[rgba(16,44,81,255)]">
          SD-WAN
        </h1>
        <p className=" px-5 text-xl md:text-3xl py-3 text-[rgba(16,44,81,255)]">
          THE NEW MORMAL FOR NETWORK
        </p>
      </div>
      <div className=" flex flex-col justify-center items-center gap-5 py-10 text-[rgba(16,44,81,255)]">
        <h1 className="w-full text-center text-xl md:text-3xl py-7">
          How We Help You Build A Better WAN ?
        </h1>
        <div className=" flex md:flex-row flex-col gap-5">
          <div className=" w-72 md:w-50 h-40 flex flex-col items-center justify-evenly rounded-md shadow-md shadow-black hover:shadow-lg hover:shadow-black hover:scale-110 transition-all duration-300 delay-100 bg-gradient-to-r from-white to-gray-300  lg:text-2xl">
            <i>
              <ConstructionIcon fontSize="large" />
            </i>
            <div>
              <h2>Implementation</h2>
            </div>
          </div>
          <div className=" w-72 md:w-50 h-40 flex flex-col items-center justify-evenly rounded-md shadow-md shadow-black hover:shadow-lg hover:shadow-black hover:scale-110 transition-all duration-300 delay-100 bg-gradient-to-r from-white to-gray-300  lg:text-2xl">
            <i>
              <LanguageIcon fontSize="large" />
            </i>
            <div>
              <h2>SD-WAN & SASE</h2>
              <h2>Sourcing</h2>
            </div>
          </div>
          <div className=" w-72 md:w-50 h-40 flex flex-col items-center justify-evenly rounded-md shadow-md shadow-black hover:shadow-lg hover:shadow-black hover:scale-110 transition-all duration-300 delay-100 bg-gradient-to-r from-white to-gray-300  lg:text-2xl">
            <i>
              <SignalCellularAltIcon fontSize="large" />
            </i>
            <div>
              <h2>Requirements</h2>
              <h2>Assessment</h2>
            </div>
          </div>
        </div>
        <div className=" flex md:flex-row flex-col gap-5">
          <div className=" w-72 md:w-50 h-40 flex flex-col items-center justify-evenly rounded-md shadow-md shadow-black hover:shadow-lg hover:shadow-black hover:scale-110 transition-all duration-300 delay-100 bg-gradient-to-r from-white to-gray-300  lg:text-2xl">
            <i>
              <ArchitectureIcon fontSize="large" />
            </i>
            <div>
              <h2>Architectre & Design</h2>
            </div>
          </div>
          <div className=" w-72 md:w-50 h-40 flex flex-col items-center justify-evenly rounded-md shadow-md shadow-black hover:shadow-lg hover:shadow-black hover:scale-110 transition-all duration-300 delay-100 bg-gradient-to-r from-white to-gray-300  lg:text-2xl">
            <i>
              <LockIcon fontSize="large" />
            </i>
            <div>
              <h2>Cyber Security &</h2>
              <h2>Risk Transformation</h2>
            </div>
          </div>
          <div className=" w-72 md:w-50 h-40 flex flex-col items-center justify-evenly rounded-md shadow-md shadow-black hover:shadow-lg hover:shadow-black hover:scale-110 transition-all duration-300 delay-100 bg-gradient-to-r from-white to-gray-300  lg:text-2xl">
            <i>
              <HubIcon fontSize="large" />
            </i>
            <div>
              <h2>Supplier Managment</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SDConsultancySEction1;
