import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DropDown from "./HompageScreen/DropDown";
import Accordian from "./HompageScreen/Accordian";

const Navbar = () => {
  const [navOpen, setnavOpen] = useState(false);

  const [List1, setList1] = useState([
    {
      title: "Managed IT Services",
      module: [
        {
          name: "Integrated Service Center (NOC)",
          link: "/integrated-service-center",
        },
        {
          name: "Network Lifecycle Management",
          link: "/network-lifecycle-managment",
        },
        {
          name: "Proactive Monitoring & Alert Managment",
          link: "/proactive-monitoring-alert-managment",
        },
        {
          name: "Network Managment",
          link: "/network-managment",
        },
      ],
    },

    {
      title: "Managed Security Services",
      module: [
        {
          name: "NetWork Security Managment",
          link: "mspnet/network-security-managment",
        },
        {
          name: "Penetration Testing",
          link: "mspnet/penetration-testing",
        },
        {
          name: "Vulnerability Managment",
          link: "mspnet/vulnerability-managment",
        },
        {
          name: "Malware Protection Services",
          link: "mspnet/malware-protection-services",
        },
      ],
    },
    {
      title: "IT Project Services",
      module: [
        {
          name: "Network Infrastructure Design",
          link: "mspnet/network-infrastructure-design",
        },
        {
          name: "Network Optimization",
          link: "mspnet/networ-optimization",
        },
        {
          name: "WAN Optimization",
          link: "mspnet/wan-optimization",
        },
        {
          name: "System Migration",
          link: "mspnet/system-migration",
        },
        {
          name: "Network Refresh",
          link: "mspnet/network-refresh",
        },
        {
          name: "Tech Refresh",
          link: "mspnet/tech-refresh",
        },
        {
          name: "HardWare Maintenance",
          link: "mspnet/hardware-maintenance",
        },
        {
          name: "Network Migration",
          link: "mspnet/network-migration",
        },
        {
          name: "Hardware Refresh",
          link: "mspnet/hardware-refresh",
        },
        {
          name: "SD WAN Solution",
          link: "mspnet/sd-wan-sol",
        },
        {
          name: "Cloud Migration",
          link: "mspnet/cloud-migration",
        },
      ],
    },
  ]);

  const handelnav = () => {
    setnavOpen(!navOpen);
  };
  return (
    <header className=" z-50 h-[80px] w-screen flex items-center justify-center md:gap-0 lg:gap-5 fixed top-0 left-0 bg-[rgba(16,44,81,255)] text-white">
      <div className=" px-3 lg:px-6">
        <span>
          <h1 className=" text-3xl sm:text-5xl font-extrabold">MSPNET</h1>
        </span>
      </div>
      <nav className=" flex w-[100%] justify-items-center">
        <ul className=" hidden md:flex md:items-center md:relative md:top-0 md:left-0 md:w-[100%] md:text-xs lg:text-sm ">
          <li className=" my-3 py-3 px-2 w-fit hover:text-gray-500  transition-all duration-300 cursor-pointer text-center">
            <Link to="/mspnet">Home</Link>
          </li>
          {List1.map((item, index) => {
            return (
              <li
                key={index}
                className=" my-3 py-3 px-2 w-fit hover:text-gray-500  transition-all duration-300 cursor-pointer text-center"
              >
                <DropDown title={item.title} list1={item.module} />
              </li>
            );
          })}
        </ul>
        {/* <ul
          className={
            navOpen
              ? " z-50 py-7 bg-[rgba(16,44,81,255)] text-white w-[60%] h-screen absolute top-[80px] left-0 ease-in duration-500 delay-75 md:hidden text-center font-bold font-customised1"
              : " z-50 bg-[rgba(16,44,81,255)] text-white w-[60%] h-screen absolute top-[80px] left-[-150%] ease-in duration-500 delay-100 text-center font-bold font-customised1"
          }
        >
          <li className=" mx-auto my-3 py-3 px-4 w-fit ">Home</li>
          {List1.map((item, index) => {
            return (
              <li key={index} className=" mx-auto my-3 py-3 px-4 w-fit ">
                <Accordian
                  index={index}
                  title={item.title}
                  module={item.module}
                />
              </li>
            );
          })}
        </ul> */}
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
