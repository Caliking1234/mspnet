import React, { useState, useEffect } from "react";
import ConstructionIcon from "@mui/icons-material/Construction";
import LanguageIcon from "@mui/icons-material/Language";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import LockIcon from "@mui/icons-material/Lock";
import HubIcon from "@mui/icons-material/Hub";
import gify from "../../images/working.gif";

const FadeSlider = () => {
  const [scrollCor, setScrollCor] = useState(0);

  const scrollHandler = (e) => {
    let y = window.scrollY;
    setScrollCor(y);
    console.warn(scrollCor);
  };

  const addAnimaton = () => {
    let height = window.screen.height;
    let slide1 = document.getElementById("slide1");
    let slide2 = document.getElementById("slide2");
    let slide3 = document.getElementById("slide3");

    if (scrollCor > 0 && scrollCor < 2 * height) {
      slide1.style.opacity = 1;
      slide1.style.transform = "translate(0px,0px)";
      slide1.style.transform = "scale(1,1)";

      slide2.style.opacity = 0;
      slide2.style.transform = "translate(0px,250px)";
      slide2.style.transform = "scale(0.8,0.8)";

      slide3.style.opacity = 0;
      slide3.style.transform = "translate(0px,250px)";
      slide3.style.transform = "scale(0.8,0.8)";
    } else if (scrollCor >= 2 * height && scrollCor < 4 * height) {
      slide1.style.opacity = 0;
      slide1.style.transform = "translate(0px,250px)";
      slide1.style.transform = "scale(0.8,0.8)";

      slide2.style.opacity = 1;
      slide2.style.transform = "translate(0px,0px)";
      slide2.style.transform = "scale(1,1)";

      slide3.style.opacity = 0;
      slide3.style.transform = "translate(0px,250px)";
      slide3.style.transform = "scale(0.8,0.8)";
    } else if (scrollCor >= 4 * height) {
      slide1.style.opacity = 0;
      slide1.style.transform = "translate(0px,250px)";
      slide1.style.transform = "scale(0.8,0.8)";

      slide2.style.opacity = 0;
      slide2.style.transform = "translate(0px,250px)";
      slide2.style.transform = "scale(0.8,0.8)";

      slide3.style.opacity = 1;
      slide3.style.transform = "translate(0px,0px)";
      slide3.style.transform = "scale(1,1)";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    console.warn(scrollCor);
    addAnimaton();
  });
  return (
    <div className=" bg-white font-customised1 ">
      <div className=" flex justify-center flex-col px-5">
        <div className=" w-full text-center font-extrabold font-customised1">
          <h1 className=" text-black font-bold text-2xl md:text-3xl">
            MSP Tech
          </h1>
          <p className=" my-2 text-2xl md:text-xl text-black">
            The Industry's most complete Managed Solution
          </p>
        </div>
        <div className=" w-full text-center my-10">
          <button className=" text-black bg-transparent border-solid border-black border-2 px-5 py-2 hover:bg-black hover:text-gray-300 transition-all duration-300 rounded-md">
            Speak With An Expert
          </button>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <div className=" relative h-[600vh] w-full">
          <div className=" sticky top-0 left-0 h-screen w-full">
            <div className=" h-full w-fit">
              <div
                className=" absolute top-0 left-0 flex justify-center items-center gap-5 flex-col h-[100%] w-[100%] p-16 opacity-1 translate-y-[0px] transition-all duration-700 delay-200 rounded-lg"
                rounded-lg
                id="slide1"
              >
                <div className=" w-72 md:w-50 h-40 flex flex-col items-center justify-evenly rounded-md shadow-md shadow-black bg-gray-200  lg:text-2xl">
                  <i>
                    <ConstructionIcon fontSize="large" />
                  </i>
                  <div>
                    <h2>Cloud Solution</h2>
                    <h2>Meraki Wireless</h2>
                  </div>
                </div>
                <div className=" w-72 md:w-50 h-40 flex flex-col items-center justify-evenly rounded-md shadow-md shadow-black bg-gray-200 lg:text-2xl">
                  <i>
                    <LanguageIcon fontSize="large" />
                  </i>
                  <h2>Enterprise Networking</h2>
                </div>
                <div className=" w-72 md:w-50 h-40 flex flex-col items-center justify-evenly rounded-md shadow-md shadow-black bg-gray-200 lg:text-2xl">
                  <i>
                    <SignalCellularAltIcon fontSize="large" />
                  </i>
                  <h2>MSSP</h2>
                </div>
              </div>
              <div
                className=" absolute top-0 left-0 flex flex-col items-center justify-evenly h-[100%] w-[100%] mx-auto p-16 opacity-0 translate-y-[250px] transition-all duration-700 delay-200 rounded-lg"
                id="slide2"
              >
                <div className=" w-72 md:w-50 h-40 flex flex-col items-center justify-evenly rounded-md shadow-md shadow-black bg-gray-200 lg:text-2xl">
                  <i>
                    <ArchitectureIcon fontSize="large" />
                  </i>
                  <div className=" text-center">
                    <h2>Penetration on</h2>
                    <h2>Testing</h2>
                  </div>
                </div>
                <div className=" w-72 md:w-50 h-40 flex flex-col items-center justify-evenly rounded-md shadow-md shadow-black bg-gray-200 lg:text-2xl">
                  <i>
                    <LockIcon fontSize="large" />
                  </i>
                  <h2>IT Consultancy</h2>
                </div>
                <div className=" w-72 md:w-50 h-40 flex flex-col items-center justify-evenly rounded-md shadow-md shadow-black bg-gray-200 lg:text-2xl">
                  <i>
                    <HubIcon fontSize="large" />
                  </i>
                  <div className=" text-center">
                    <h2>Global Operation</h2>
                    <h2>Center</h2>
                  </div>
                </div>
              </div>
              <div
                className=" absolute top-0 left-0 flex flex-col items-center justify-evenly h-[100%] w-[100%] p-16 opacity-0 translate-y-[250px] transition-all duration-700 delay-200 rounded-lg"
                id="slide3"
              >
                <div className=" w-72 md:w-50 h-40 flex flex-col items-center justify-evenly rounded-md shadow-md shadow-black bg-gray-200 lg:text-2xl">
                  <i>
                    <ArchitectureIcon fontSize="large" />
                  </i>
                  <h2>IT Integration</h2>
                </div>
                <div className=" w-72 md:w-50 h-40 flex flex-col items-center justify-evenly rounded-md shadow-md shadow-black bg-gray-200 lg:text-2xl">
                  <i>
                    <LockIcon fontSize="large" />
                  </i>
                  <h2>Cisco sdwan</h2>
                </div>
                <div className=" w-72 md:w-50 h-40 flex flex-col items-center justify-evenly rounded-md shadow-md shadow-black bg-gray-200 lg:text-2xl">
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
            {/* <img
              className=" w-[280px] h-[280px] sm:w-[400px] sm:h-[400px]"
              src={gify}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FadeSlider;
