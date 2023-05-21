import React from "react";
import svg1 from "../../images/icn-expert-ltbl-20.svg";
import svg2 from "../../images/icn-rocket-ltbl-20.svg";
import svg3 from "../../images/icn-report-analytics-verified-ltbl-20.svg";
// import svg4 from "../../images/icn-expanded-vision-ltbl-20.svg";
// import svg5 from "../../images/icn-cir-expertise-ltbl-20.svg";

const ProactiveSection2 = () => {
  return (
    <div>
      <div className="bg-[rgba(16,44,81,255)] w-full text-center py-5">
        <h1 className=" w-[100%] px-3 mx-auto text-xl sm:text-2xl text-white font-bold">
          Take the proactive monitoring approach with MSP
        </h1>
        <div className=" w-1/2 h-1 mx-auto bg-white my-7"></div>
        <h1 className=" w-[100%] px-3 mx-auto text-lg sm:text-xl text-white font-bold">
          DON’T RISK MISSING A POTENTIALLY DISASTROUS PROBLEM
        </h1>
      </div>
      <div className=" w-full text-center mt-10">
        <h1 className=" w-[100%] px-3 mx-auto text-2xl sm:text-3xl  font-bold">
          Why You Need Our Proactive Monitoring & Alert Management Service
        </h1>
        <div className="w-[90%] mx-auto flex flex-col gap-5 justify-items-center py-10">
          <div className=" flex flex-col md:flex-row ">
            <div className=" w-[100%] md:w-1/4 flex justify-items-center">
              <img src={svg1} className="max-w-[100px] mx-auto" />
            </div>
            <div className="w-[100%] px-5 md:w-3/4">
              <h1 className="text-center md:text-left text-xl py-5">
                CUSTOMIZABLE:
              </h1>
              <p className=" text-sm sm:text-base text-center md:text-left text-gray-400">
                MSP can customize a monitoring and alert management solution to
                fit your organization’s specific needs. We’ll see only what you
                determine we need to see, so you’re provided with an effective
                solution without any worries of unwanted intrusion.
              </p>
            </div>
          </div>
          <div className=" flex flex-col md:flex-row ">
            <div className=" w-[100%] md:w-1/4 flex justify-items-center">
              <img src={svg2} className="max-w-[100px] mx-auto" />
            </div>
            <div className="w-[100%] px-5 md:w-3/4">
              <h1 className="text-center md:text-left text-xl py-5">
                CONSOLIDATION:
              </h1>
              <p className=" text-sm sm:text-base text-center md:text-left text-gray-400">
                As your place in the digital market has grown, it’s likely
                you’re now utilizing multiple tools to safeguard your
                business-critical infrastructure. Managing those tools can be a
                costly and cumbersome burden. With MSP, you’ll have one central
                point. One tool consolidating information in a holistic,
                completely detailed view that will help reduce incident
                resolution time from hours to minutes.
              </p>
            </div>
          </div>
          <div className=" flex flex-col md:flex-row ">
            <div className=" w-[100%] md:w-1/4 flex justify-items-center">
              <img src={svg3} className="max-w-[100px] mx-auto" />
            </div>
            <div className="w-[100%] px-5 md:w-3/4">
              <h1 className="text-center md:text-left text-xl py-5">
                PREVENTION:
              </h1>
              <p className=" text-sm sm:text-base text-center md:text-left text-gray-400">
                MSP has the capability to not only monitor your environment and
                notify you of incidents, but also to take it a step further.
                Through our advanced tools, we can resolve potentially
                disastrous issues before they ever come to fruition, protecting
                your IT systems and preventing your organization from suffering
                at the hands of costly downtime and expensive fixes.
              </p>
            </div>
          </div>
          {/* <div className=" flex flex-col md:flex-row ">
            <div className=" w-[100%] md:w-1/4 flex justify-items-center">
              <img src={svg4} className="max-w-[100px] mx-auto" />
            </div>
            <div className="w-[100%] px-5 md:w-3/4">
              <h1 className="text-center md:text-left text-xl py-5">
                CONTINUOUS IMPROVEMENT:
              </h1>
              <p className=" text-sm sm:text-base  text-center md:text-left text-gray-400">
                ISC includes a continuous improvement process that identifies
                alerting trends that need problem remediation.
              </p>
            </div>
          </div> */}
        </div>
      </div>
      {/* <div className=" w-[100%] sm:w-[80%] sm:mx-auto">
        <div className="w-full px-7">
          <h1 className="text-center sm:text-left text-xl py-5">
            you need a helping hand
          </h1>
          <p className="text-center sm:text-left text-xs sm:text-base text-gray-400 py-3">
            While the nature of today’s business has come to demand 24×7 uptime
            and availability, today’s IT departments have come to face
            unprecedented challenges. In addition to the burdens of day-to-day
            fixes, patching and upgrades, they’re also combating security
            threats, satisfying changing certification requirements and sifting
            through piles of data, along with more critical business initiatives
            than they can count. They’re stretched thin and trying to provide
            that support can be overwhelming, inefficient and eventually costly
            to the organization, either by loss of talent or loss of the
            would-be revenue used to hire additional staff.
          </p>
        </div>
        <div className="w-full flex flex-col sm:flex-row py-5 gap-5">
          <div className="w-full sm:w-1/4">
            <img src={svg5} className="max-w-[100px] mx-auto" />
          </div>
          <div className=" w-full text-xs sm:text-base sm:w-3/4 text-center sm:text-left px-4">
            <p className="text-gray-400">
              But with MSP Integrated Service Center, neither is at risk. With
              ISC, we can help keep your staff focused on your business, while
              we focus on monitoring your infrastructure. We’ll provide you with
              the 24×7 coverage you need and the peace of mind you deserve by
              delivering advanced monitoring and alert capabilities and faster
              resolution times.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ProactiveSection2;
