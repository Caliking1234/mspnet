import React from "react";
import Working from "../../images/working.gif";

const AnotherSection = () => {
  return (
    <div className=" flex flex-col md:flex-row">
      <div className=" w-full md:w-1/2 md:h-screen flex flex-col justify-center">
        <div className=" flex flex-col items-center justify-center">
          <div className=" px-5 md:px-0 max-w-[400px] mx-auto font-extrabold font-customised1 py-5">
            <h1 className=" font-bold text-xl md:text-3xl py-5">
              Improve and Innovate with the Tech Trends
            </h1>
            <p className=" my-2 text-lg md:text-xl py-2 text-gray-400">
              We hire and build your own remote dedicated development teams
              tailored to your specific needs.
            </p>
          </div>
          <div className=" max-w-[400px] bg-slate-300 py-[10px] px-[20px] rounded-lg">
            <div className=" w-[100%] my-6">
              <div className=" flex flex-row justify-between items-center">
                <span className=" block text-sm font-semibold text-[#333]">
                  CUSTOM NETWORK & SECURITY
                </span>
                <span className=" block text-sm font-semibold text-[#333]">
                  82%
                </span>
              </div>

              <div className=" w-[100%] h-2 rounded-md bg-[rgba(0,0,0,0.1)] mt-2">
                <div className=" h-[100%] w-[0%] rounded-md bg-[#4070f4] animate-bar1"></div>
              </div>
            </div>
            <div className=" w-[100%] my-6">
              <div className=" flex flex-row justify-between items-center">
                <span className=" block text-sm font-semibold text-[#333]">
                  MANAGED SDWAN
                </span>
                <span className=" block text-sm font-semibold text-[#333]">
                  90%
                </span>
              </div>

              <div className=" w-[100%] h-2 rounded-md bg-[rgba(0,0,0,0.1)] mt-2">
                <div className=" h-[100%] w-[0%] rounded-md bg-[#4070f4] animate-bar2"></div>
              </div>
            </div>
            <div className=" w-[100%] my-6">
              <div className=" flex flex-row justify-between items-center">
                <span className=" block text-sm font-semibold text-[#333]">
                  CUSTOM NETWORK DESIGN & SETUP
                </span>
                <span className=" block text-sm font-semibold text-[#333]">
                  84%
                </span>
              </div>

              <div className=" w-[100%] h-2 rounded-md bg-[rgba(0,0,0,0.1)] mt-2">
                <div className=" h-[100%] w-[0%] rounded-md bg-[#4070f4] animate-bar3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full md:w-1/2 md:h-screen flex justify-center items-center">
        <img src={Working} className=" w-1/2 md:w-3/4 h-[100%] mx-auto" />
      </div>
    </div>
  );
};

export default AnotherSection;
