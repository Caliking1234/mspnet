import React from "react";
import svg1 from "../../images/icn-expert-ltbl-20.svg";
import svg2 from "../../images/icn-rocket-ltbl-20.svg";
import svg3 from "../../images/icn-expanded-vision-ltbl-20.svg";
import svg4 from "../../images/icn-report-analytics-verified-ltbl-20.svg";
import svg5 from "../../images/icn-checklist-verified-ltbl-20.svg";
import svg6 from "../../images/icn-cir-expertise-ltbl-20.svg";

const NetworkMigrationSection2 = () => {
  return (
    <div>
      <div className=" w-full text-center mt-10">
        <h1 className=" w-[100%] px-3 mx-auto text-2xl sm:text-3xl  font-bold">
          Why You Need Our Hardware Refresh Service
        </h1>
        <div className="w-[90%] mx-auto flex flex-col gap-5 justify-items-center py-10">
          <div className=" flex flex-col md:flex-row ">
            <div className=" w-[100%] md:w-1/4 flex justify-items-center">
              <img src={svg1} className="max-w-[100px] mx-auto" />
            </div>
            <div className="w-[100%] px-5 md:w-3/4">
              <h1 className="text-center md:text-left text-xl py-5">
                AVOID COSTLY HARDWARE FAILURES:
              </h1>
              <p className=" text-sm sm:text-base text-center md:text-left text-gray-400">
                It is vital to have a hardware refresh cycle strategy to avoid
                hardware failures. We stay on top of the condition of your
                hardware and make sure that any hardware that needs to be
                replaced is replaced before it causes downtime.
              </p>
            </div>
          </div>
          <div className=" flex flex-col md:flex-row ">
            <div className=" w-[100%] md:w-1/4 flex justify-items-center">
              <img src={svg2} className="max-w-[100px] mx-auto" />
            </div>
            <div className="w-[100%] px-5 md:w-3/4">
              <h1 className="text-center md:text-left text-xl py-5">
                IMPROVE HARDWARE PERFORMANCE:
              </h1>
              <p className=" text-sm sm:text-base text-center md:text-left text-gray-400">
                We monitor how your equipment is running to avoid slow system
                performance, lower productivity and outages that can severely
                impact profits.
              </p>
            </div>
          </div>
          <div className=" flex flex-col md:flex-row ">
            <div className=" w-[100%] md:w-1/4 flex justify-items-center">
              <img src={svg3} className="max-w-[100px] mx-auto" />
            </div>
            <div className="w-[100%] px-5 md:w-3/4">
              <h1 className="text-center md:text-left text-xl py-5">
                LENGTHEN HARDWARE LIFESPAN:
              </h1>
              <p className=" text-sm sm:text-base text-center md:text-left text-gray-400">
                Sometimes upgrades and maintenance make more economic sense than
                a hardware refresh. We make sure that your hardware is handled
                in the most cost effective way for your business.
              </p>
            </div>
          </div>
          <div className=" flex flex-col md:flex-row ">
            <div className=" w-[100%] md:w-1/4 flex justify-items-center">
              <img src={svg4} className="max-w-[100px] mx-auto" />
            </div>
            <div className="w-[100%] px-5 md:w-3/4">
              <h1 className="text-center md:text-left text-xl py-5">
                MAXIMIZE VALUE OF HARDWARE ASSETS:
              </h1>
              <p className=" text-sm sm:text-base  text-center md:text-left text-gray-400">
                A 3 to 5 year automatic refresh cycle may be costing you money
                by causing you to get rid of perfectly fine equipment. We
                customize your refresh cycle so you can maximize the value of
                your hardware investments.
              </p>
            </div>
          </div>
          <div className=" flex flex-col md:flex-row ">
            <div className=" w-[100%] md:w-1/4 flex justify-items-center">
              <img src={svg5} className="max-w-[100px] mx-auto" />
            </div>
            <div className="w-[100%] px-5 md:w-3/4">
              <h1 className="text-center md:text-left text-xl py-5">
                CONTROL THE HARDWARE LEARNING CURVE:
              </h1>
              <p className=" text-sm sm:text-base  text-center md:text-left text-gray-400">
                When you replace equipment in a timely, controlled manner, you
                can also control the learning curve. You can research new
                hardware and implement new training before the hardware is
                actually put into use.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto py-7">
        <p className="text-center text-base sm:text-xl font-customised2 text-gray-400 py-3">
          AVOID HARDWARE OBSOLESCENCE… WORRIED ABOUT COMPETITORS UPGRADING &
          SURPASSING THE FUNCTIONALITY <br />
          OF YOUR TECH?
          <br /> WANT TO DO MORE WITH LESS WHILE SAVING MONEY?
        </p>
      </div>
      <div className=" w-[100%] sm:w-[80%] sm:mx-auto">
        <div className="w-full px-7">
          <h1 className="text-center sm:text-left text-xl py-5">
            REFRESH YOUR HARDWARE
          </h1>
          <p className="text-center sm:text-left text-xs sm:text-base text-gray-400 py-3">
            There are many advantages to regularly refreshing hardware – you
            avoid falling behind the competition, you receive increased
            functionality and you decrease failure rates and downtime. The key
            to any good hardware refresh workstation assessment is having it
            administered by experts you can trust. At EI, we always put clients’
            needs first. You can count on us to personalize a refresh strategy
            that works best for you.
          </p>
        </div>
        <div className="w-full flex flex-col sm:flex-row py-5 gap-5">
          <div className="w-full sm:w-1/4">
            <img src={svg6} className="max-w-[100px] mx-auto" />
          </div>
          <div className=" w-full text-xs sm:text-base sm:w-3/4 text-center sm:text-left px-4">
            <p className="text-gray-400">
              To ensure you experience the most benefits from a hardware refresh
              service, the service has to occur proactively instead of
              reactively. We will carefully study your organization and your
              hardware and will make sure you have the optimal refresh strategy
              – one that will boost performance, productivity and profits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkMigrationSection2;
