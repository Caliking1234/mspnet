import React from "react";
import svg1 from "../../images/network-infrastructure-design-feat-1.svg";

const NetworkINfraSection = () => {
  return (
    <div className=" w-full mt-[80px]">
      <div className="w-full text-center bg-gray-200 py-10">
        <h1 className=" px-5 text-xl sm:text-3xl md:text-4xl py-6 text-[rgba(16,44,81,255)]">
          Avoid Expensive Crashes & Resolve Slowdowns
        </h1>
        <p className=" px-5 text-base md:text-lg py-3 text-[rgba(16,44,81,255)]">
          Design & Deploy a State-of-the-Art Network That Eliminates Manual
          Device Assessments with EI’s Network Infrastructure Design
        </p>
      </div>
      <div className="w-[80%] mx-auto">
        <h1 className=" w-full text-center text-lg sm:text-xl md:text-4xl py-6 text-[rgba(16,44,81,255)]">
          Identify & Troubleshoot Costly Interruptions Much Faster & Much Easier
          Than Before
        </h1>
        <div className=" text-gray-400 py-10">
          <div className=" flex flex-row py-3">
            <div>-</div>
            <div>
              Do you have a need to speed up response times so you have the
              opportunity to apply appropriate fixes where and when they are
              needed in real time?
            </div>
          </div>

          <div className=" flex flex-row py-3">
            <div>-</div>
            <div>
              Have you been forced to install emergency utilities to protect
              your systems from the latest malware threats while you waited for
              your antimalware manufacturer to catch up and finally put out a
              signature update?
            </div>
          </div>
          <div className=" flex flex-row py-3">
            <div>-</div>
            <div>
              How would you like to be able to identify network problems – even
              those hidden away deep within your system – in seconds instead of
              days or weeks?
            </div>
          </div>
        </div>
      </div>
      <div className=" w-[50%] h-1 mx-auto bg-[rgba(16,44,81,255)] my-7"></div>
      <div className="w-full bg-gray-200 mt-5">
        <h1 className=" text-center text-xl md:text-4xl py-6 text-[rgba(16,44,81,255)]">
          Get an Architectural Strategy & Roadmap That Reduces the Complexity of
          Transforming Your Network
        </h1>
        <div className="flex flex-col sm:flex-row">
          <div className=" w-[80%] pl-6 md:pl-0 md:w-1/2  mx-auto text-gray-500 py-10 flex flex-col justify-center md:ml-[80px]">
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Locate and fix interruptions in your network accurately and in
                real-time
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Eliminate the need to inspect your network on a device-by-device
                basis
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Determine the operational status of your network’s hardware and
                software assets at a glance
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>Dramatically speed up response times</div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Resolve problems with a greater degree of ease and speed
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>Complete tasks in minutes instead of hours or days</div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Ensure you are utilizing your network infrastructure for maximum
                efficiency
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>Eliminate disruptions</div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>Improve processes</div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>Lower your cost of ownership</div>
            </div>
          </div>
          <div className=" w-full md:w-[50%] min-h-full flex justify-center items-center py-5">
            <img src={svg1} className=" max-w-[280px] p-5" />
          </div>
        </div>
      </div>
      <div className="bg-[rgba(16,44,81,255)] w-full text-center py-5">
        <h1 className=" w-[100%] px-3 mx-auto text-lg sm:text-2xl text-white font-bold">
          Our experience has furnished us with a clear understanding of the
          complex challenges network administrators and IT professionals face
          today.
        </h1>
        <div className=" w-1/2 h-1 mx-auto bg-white my-7"></div>
        <h1 className=" w-[100%] px-3 sm:px-5 mx-auto text-base sm:text-xl text-white font-bold">
          LET US DESIGN A NETWORK INFRASTRUCTURE CUSTOMIZED TO YOUR UNIQUE
          BUSINESS NEEDS.
        </h1>
      </div>
      <div className="w-full min-h-[50px] bg-gray-200"></div>
    </div>
  );
};

export default NetworkINfraSection;
