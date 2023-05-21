import React from "react";
import svg1 from "../../images/proactive-monitoring-alert-management-feat.svg";

const ProactiveSection1 = () => {
  return (
    <div className=" w-full mt-[80px]">
      <div className="w-full text-center bg-gray-200">
        <h1 className=" px-5 text-xl sm:text-3xl md:text-4xl py-6 text-[rgba(16,44,81,255)]">
          Preventing IT Problems through Automation
        </h1>
        <p className=" px-5 text-base md:text-lg py-3 text-[rgba(16,44,81,255)]">
          Proactive monitoring prevents major business-impacting incidents to
          your infrastructure before they can impact your organization
        </p>
      </div>
      <div className="w-[80%] mx-auto">
        <h1 className=" w-full text-center text-lg sm:text-xl md:text-4xl py-6 text-[rgba(16,44,81,255)]">
          Problems with your mission critical IT applications or infrastructure
          can have sudden and long-lasting negative effects on your organization
        </h1>
        <div className=" text-gray-400 py-10">
          <div className=" flex flex-row py-3">
            <div>-</div>
            <div>
              How many of these problems could be avoided if proactive
              monitoring was in place?
            </div>
          </div>

          <div className=" flex flex-row py-3">
            <div>-</div>
            <div>
              How many go undetected using monitoring solutions incapable of
              understanding that a problem exists, or lacking the intelligence
              to resolve it and documenting with an ITSM?
            </div>
          </div>
          <div className=" flex flex-row py-3">
            <div>-</div>
            <div>
              Can your current monitoring tool take action on its own to prevent
              a problem from impacting your organization?
            </div>
          </div>
        </div>
      </div>
      <div className=" w-1/2 h-1 mx-auto bg-[rgba(16,44,81,255)] my-7"></div>
      <div className="w-full bg-gray-200 mt-5">
        <h1 className=" text-center text-2xl md:text-4xl py-6 text-[rgba(16,44,81,255)]">
          Proactive Monitoring-The insight you need, before you need it
        </h1>
        <div className="flex flex-col sm:flex-row">
          <div className=" w-[80%] pl-6 md:pl-0 md:w-1/2  mx-auto text-gray-500 py-10 flex flex-col justify-center md:items-start">
            <h1 className=" text-xlpy-3">MSP Will:</h1>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>Monitor any device within your environment at all times</div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Supply granular information on your equipment and software
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Help quickly identify root causes of problems and issues
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Provide first contact resolution with expert Tier 2 call center
                staff
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Eliminate the frustration over unnecessary support escalation
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>Monitor a wide array of technologies in a single view</div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>Discover and resolve issues with great speed</div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Provide preventative, automated, self-healing incident
                resolution capabilities
              </div>
            </div>
          </div>
          <div className=" w-full md:w-1/4 min-h-full flex justify-center items-center py-5">
            <img src={svg1} className=" w-[280px] p-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProactiveSection1;
