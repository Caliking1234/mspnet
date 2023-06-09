import React from "react";
import { Link } from "react-router-dom";
import ConstructionIcon from "@mui/icons-material/Construction";
import LanguageIcon from "@mui/icons-material/Language";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import LockIcon from "@mui/icons-material/Lock";
import HubIcon from "@mui/icons-material/Hub";

const ApplicationCards = () => {
  return (
    <div className=" w-full  bg-white py-10">
      <div className=" my-5 text-[rgba(16,44,81,255)]">
        <div className=" w-2/3 text-center font-extrabold font-customised1 mx-auto">
          <h1 className=" font-bold text-4xl md:text-6xl">MSP Tech</h1>
          <p className=" my-2 text-2xl md:text-lg ">
            The Industry's most complete Managed Solution
          </p>
        </div>
        <div className=" w-full text-center my-10">
          <button className=" bg-[rgba(16,44,81,255)] text-white border-solid border-black border-2 px-5 py-2 hover:text-gray-200 transition-all duration-300 rounded-sm">
            <Link to="/contactus">Get An Expert</Link>
          </button>
        </div>
        <div className=" w-full h-fit flex flex-col gap-5 md:gap-14 my-5 px-4 justify-center items-center md:flex-row">
          <div className=" w-72 md:w-50 h-40 flex flex-col items-center justify-evenly rounded-md shadow-md shadow-black hover:shadow-lg hover:shadow-black hover:scale-110 transition-all duration-300 delay-100 bg-gradient-to-r from-white to-gray-300  lg:text-2xl">
            <i>
              <ConstructionIcon fontSize="large" />
            </i>
            <div>
              <h2>Cloud Solution</h2>
              <h2>Meraki Wireless</h2>
            </div>
          </div>
          <Link
            to="/enterprise-networking"
            className=" w-72 md:w-50 h-40 flex flex-col items-center justify-evenly rounded-md shadow-md shadow-black hover:shadow-lg hover:shadow-black hover:scale-110 transition-all duration-300 delay-100 bg-gradient-to-r from-white to-gray-300 lg:text-2xl"
          >
            <i>
              <LanguageIcon fontSize="large" />
            </i>
            <h2>Enterprise Networking</h2>
          </Link>
          <Link
            to="/mssp-managed-security-service"
            className=" w-72 md:w-50 h-40 flex flex-col items-center justify-evenly rounded-md shadow-md shadow-black hover:shadow-lg hover:shadow-black hover:scale-110 transition-all duration-300 delay-100 bg-gradient-to-r from-white to-gray-300 lg:text-2xl"
          >
            <i>
              <SignalCellularAltIcon fontSize="large" />
            </i>
            <h2>MSSP</h2>
          </Link>
        </div>
      </div>
      <div className=" my-10  text-[rgba(16,44,81,255)]">
        <div className=" w-full h-fit flex flex-col gap-5 md:gap-14 my-5 px-4 justify-center items-center md:flex-row">
          <Link
            to="/penetration-testing"
            className=" w-72 md:w-50 h-40 flex flex-col items-center justify-evenly rounded-md shadow-md shadow-black hover:shadow-lg hover:shadow-black hover:scale-110 transition-all duration-300 delay-100 bg-gradient-to-r from-white to-gray-300 lg:text-2xl cursor-pointer"
          >
            <i>
              <ArchitectureIcon fontSize="large" />
            </i>
            <div className=" text-center">
              <h2>Penetration on</h2>
              <h2>Testing</h2>
            </div>
          </Link>
          <Link
            to="/it-constancy"
            className=" w-72 md:w-50 h-40 flex flex-col items-center justify-evenly rounded-md shadow-md shadow-black hover:shadow-lg hover:shadow-black hover:scale-110 transition-all duration-300 delay-100 bg-gradient-to-r from-white to-gray-300 lg:text-2xl"
          >
            <i>
              <LockIcon fontSize="large" />
            </i>
            <h2>IT Consultancy</h2>
          </Link>
          <Link
            to="/global-operation-center"
            className=" w-72 md:w-50 h-40 flex flex-col items-center justify-evenly rounded-md shadow-md shadow-black hover:shadow-lg hover:shadow-black hover:scale-110 transition-all duration-300 delay-100 bg-gradient-to-r from-white to-gray-300 lg:text-2xl"
          >
            <i>
              <HubIcon fontSize="large" />
            </i>
            <div className=" text-center">
              <h2>Global Operation</h2>
              <h2>Center</h2>
            </div>
          </Link>
        </div>
      </div>
      <div className=" my-10  text-[rgba(16,44,81,255)]">
        <div className=" w-full h-fit flex flex-col gap-5 md:gap-14 my-5 px-4 justify-center items-center md:flex-row">
          <Link
            to="/penetration-testing"
            className=" w-72 md:w-50 h-40 flex flex-col items-center justify-evenly rounded-md shadow-md shadow-black hover:shadow-lg hover:shadow-black hover:scale-110 transition-all duration-300 delay-100 bg-gradient-to-r from-white to-gray-300 lg:text-2xl"
          >
            <i>
              <ArchitectureIcon fontSize="large" />
            </i>
            <h2>IT Integration</h2>
          </Link>
          <Link
            to="/sd-wan-consultancy-services"
            className=" w-72 md:w-50 h-40 flex flex-col items-center justify-evenly rounded-md shadow-md shadow-black hover:shadow-lg hover:shadow-black hover:scale-110 transition-all duration-300 delay-100 bg-gradient-to-r from-white to-gray-300 lg:text-2xl"
          >
            <i>
              <LockIcon fontSize="large" />
            </i>
            <h2>Cisco sdwan</h2>
          </Link>
          <Link
            to="/sd-wan-consultancy-services"
            className=" w-72 md:w-50 h-40 flex flex-col items-center justify-evenly rounded-md shadow-md shadow-black hover:shadow-lg hover:shadow-black hover:scale-110 transition-all duration-300 delay-100 bg-gradient-to-r from-white to-gray-300 lg:text-2xl"
          >
            <i>
              <HubIcon fontSize="large" />
            </i>
            <div className="text-center">
              <h2>Palo Alto</h2>
              <h2>sdwan</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ApplicationCards;
