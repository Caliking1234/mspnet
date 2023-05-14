import React from "react";
import ConstructionIcon from "@mui/icons-material/Construction";
import LanguageIcon from "@mui/icons-material/Language";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import LockIcon from "@mui/icons-material/Lock";
import HubIcon from "@mui/icons-material/Hub";

const ApplicationCards = () => {
  return (
    <div className=" w-screen  bg-white py-10">
      <div className=" my-5 text-slate-600">
        <div className=" w-2/3 text-center font-extrabold font-customised1 mx-auto">
          <h1 className=" text-black font-bold text-4xl md:text-6xl">
            MSP Tech
          </h1>
          <p className=" my-2 text-2xl md:text-lg text-black">
            The Industry's most complete Managed Solution
          </p>
        </div>
        <div className=" w-full text-center my-10">
          <button className=" text-black bg-transparent border-solid border-black border-2 px-5 py-2 hover:bg-black hover:text-gray-300 transition-all duration-300 rounded-md">
            Speak With An Expert
          </button>
        </div>
        <div className=" w-full h-fit flex flex-col gap-5 md:gap-14 my-5 px-4 justify-center items-center md:flex-row">
          <div className=" w-72 md:w-50 h-40 flex flex-col items-center justify-evenly rounded-md shadow-md shadow-black bg-black lg:text-2xl">
            <i>
              <ConstructionIcon fontSize="large" />
            </i>
            <div>
              <h2>Cloud Solution</h2>
              <h2>Meraki Wireless</h2>
            </div>
          </div>
          <div className=" w-72 md:w-50 h-40 flex flex-col items-center justify-evenly rounded-md shadow-md shadow-black bg-gradient-to-r from-white to-gray-300 lg:text-2xl">
            <i>
              <LanguageIcon fontSize="large" />
            </i>
            <h2>Enterprise Networking</h2>
          </div>
          <div className=" w-72 md:w-50 h-40 flex flex-col items-center justify-evenly rounded-md shadow-md shadow-black bg-gradient-to-r from-white to-gray-300 lg:text-2xl">
            <i>
              <SignalCellularAltIcon fontSize="large" />
            </i>
            <h2>MSSP</h2>
          </div>
        </div>
      </div>
      <div className=" my-10 text-slate-600">
        <div className=" w-full h-fit flex flex-col gap-5 md:gap-14 my-5 px-4 justify-center items-center md:flex-row">
          <div className=" w-72 md:w-50 h-40 flex flex-col items-center justify-evenly rounded-md shadow-md shadow-black bg-gradient-to-r from-white to-gray-300 lg:text-2xl">
            <i>
              <ArchitectureIcon fontSize="large" />
            </i>
            <div className=" text-center">
              <h2>Penetration on</h2>
              <h2>Testing</h2>
            </div>
          </div>
          <div className=" w-72 md:w-50 h-40 flex flex-col items-center justify-evenly rounded-md shadow-md shadow-black bg-gradient-to-r from-white to-gray-300 lg:text-2xl">
            <i>
              <LockIcon fontSize="large" />
            </i>
            <h2>IT Consultancy</h2>
          </div>
          <div className=" w-72 md:w-50 h-40 flex flex-col items-center justify-evenly rounded-md shadow-md shadow-black bg-gradient-to-r from-white to-gray-300 lg:text-2xl">
            <i>
              <HubIcon fontSize="large" />
            </i>
            <div className=" text-center">
              <h2>Global Operation</h2>
              <h2>Center</h2>
            </div>
          </div>
        </div>
      </div>
      <div className=" my-10 text-slate-600">
        <div className=" w-full h-fit flex flex-col gap-5 md:gap-14 my-5 px-4 justify-center items-center md:flex-row">
          <div className=" w-72 md:w-50 h-40 flex flex-col items-center justify-evenly rounded-md shadow-md shadow-black bg-gradient-to-r from-white to-gray-300 lg:text-2xl">
            <i>
              <ArchitectureIcon fontSize="large" />
            </i>
            <h2>IT Integration</h2>
          </div>
          <div className=" w-72 md:w-50 h-40 flex flex-col items-center justify-evenly rounded-md shadow-md shadow-black bg-gradient-to-r from-white to-gray-300 lg:text-2xl">
            <i>
              <LockIcon fontSize="large" />
            </i>
            <h2>Cisco sdwan</h2>
          </div>
          <div className=" w-72 md:w-50 h-40 flex flex-col items-center justify-evenly rounded-md shadow-md shadow-black bg-gradient-to-r from-white to-gray-300 lg:text-2xl">
            <i>
              <HubIcon fontSize="large" />
            </i>
            <div className="text-center">
              <h2>Palo Alto</h2>
              <h2>sdwan</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationCards;
