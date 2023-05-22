import React from "react";
import svg1 from "../../images/tech-refresh-feat.svg";

const TechRefreshSection = () => {
  return (
    <div className=" w-full mt-[80px]">
      <div className="w-full text-center bg-gray-200 py-10">
        <h1 className=" px-5 text-xl sm:text-3xl md:text-4xl py-10 text-[rgba(16,44,81,255)]">
          Making the Correct Network Refresh Choice is Critical to Success
        </h1>
        <p className=" px-5 text-base md:text-lg py-3 text-[rgba(16,44,81,255)]">
          MSP Intent-Based Solution Automates Processes, Lowers Costs, and
          Aligns Business Needs to Infrastructure Execution
        </p>
      </div>
      <div className="w-[80%] mx-auto">
        <h1 className=" w-full text-center text-lg sm:text-xl md:text-4xl py-6 text-[rgba(16,44,81,255)]">
          Unexpected IT Downtime Costs Companies Billions of Dollars Every Year!
        </h1>
        <div className=" text-gray-400 py-10">
          <div className=" flex flex-row py-3">
            <div>-</div>
            <div>
              So do you know all the reasons why you shouldn’t just wait until
              your network hardware dies before you refresh your system?
            </div>
          </div>

          <div className=" flex flex-row py-3">
            <div>-</div>
            <div>
              Are you aware that the costs to your organization will rapidly
              increase when you are forced to replace systems in an emergency
              situation, as opposed to an event you have planned and budgeted
              for?
            </div>
          </div>
          <div className=" flex flex-row py-3">
            <div>-</div>
            <div>
              Do you know that reputable service providers can help you choose
              new hardware that extends the lifecycle from just a few years to
              6+ years?
            </div>
          </div>
        </div>
      </div>
      <div className=" w-[50%] h-1 mx-auto bg-[rgba(16,44,81,255)] my-7"></div>
      <div className="w-full bg-gray-200 mt-5">
        <h1 className=" text-center text-xl md:text-4xl py-6 text-[rgba(16,44,81,255)]">
          Acquire Assets ThatSupport Current and Future Needs While Maximum ROI
        </h1>
        <div className="flex flex-col sm:flex-row">
          <div className=" w-[80%] pl-6 md:pl-0 md:w-1/2  mx-auto text-gray-500 py-10 flex flex-col justify-center md:ml-[80px]">
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Get careful planning that ensures you acquire and deploy stable
                assets
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>Ensure continuous asset availability</div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>Avoid the astronomical costs of IT network downtime</div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>Increase productivity</div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Ensure voice, email and unified messaging are not impacted by
                unexpected downtime
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>Achieve your organization’s business goals faster</div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>Get a customized solution</div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>Get a robust and fail-proof IT network</div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Get an intent-based networking solution that’s compatible with
                all technologies and vendor products
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>Get a solution that conducts automated network checks</div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>Determine business goals without manual user input</div>
            </div>
          </div>
          <div className=" w-full md:w-[50%] min-h-full flex justify-center items-center py-5">
            <img src={svg1} className=" max-w-[280px] p-5" />
          </div>
        </div>
      </div>
      <div className="bg-[rgba(16,44,81,255)] w-full text-center py-5">
        <h1 className=" w-[100%] px-3 mx-auto text-lg sm:text-2xl text-white font-bold">
          Avoid Costly Delays & Rapidly Scale New Network Devices While Staying
          Within Your Budget … With MSP!
        </h1>
        <div className=" w-1/2 h-1 mx-auto bg-white my-7"></div>
        <h1 className=" w-[100%] px-3 sm:px-5 mx-auto text-base sm:text-xl text-white font-bold">
          CONTACT US NOW TO SCHEDULE A FREE NETWORK REFRESH CONSULTATION
        </h1>
      </div>
      <div className="w-full min-h-[50px] bg-gray-200"></div>
    </div>
  );
};

export default TechRefreshSection;
