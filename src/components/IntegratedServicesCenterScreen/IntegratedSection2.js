import React from "react";
import svg1 from "../../images/icn-expert-ltbl-20.svg";
import svg2 from "../../images/icn-rocket-ltbl-20.svg";
import svg3 from "../../images/icn-report-analytics-verified-ltbl-20.svg";
import svg4 from "../../images/icn-expanded-vision-ltbl-20.svg";
import svg5 from "../../images/icn-cir-expertise-ltbl-20.svg";

const IntegratedSection2 = () => {
  return (
    <div>
      <div className="bg-[rgba(16,44,81,255)] w-full text-center py-5">
        <h1 className=" w-[100%] px-3 mx-auto text-xl sm:text-2xl text-white font-bold">
          There’s no longer a need to painfully walk through steps to uncover a
          solution to your IT issue.
        </h1>
        <div className=" w-1/2 h-1 mx-auto bg-white my-7"></div>
        <h1 className=" w-[100%] px-3 mx-auto text-lg sm:text-xl text-white font-bold">
          MSP NETWORK OPERATIONS CENTER HAS THE EXPERT STAFF AND TOOLS IN PLACE
          TO REDUCE YOUR MTTR AND GET YOU BACK TO WORK FASTER.
        </h1>
      </div>
      <div className=" w-full text-center mt-10">
        <h1 className=" w-[100%] px-3 mx-auto text-2xl sm:text-3xl  font-bold">
          Why You Need the Intergrated Service Center
        </h1>
        <div className="w-[90%] mx-auto flex flex-col gap-5 justify-items-center py-10">
          <div className=" flex flex-col md:flex-row ">
            <div className=" w-[100%] md:w-1/4 flex justify-items-center">
              <img src={svg1} className="max-w-[100px] mx-auto" />
            </div>
            <div className="w-[100%] px-5 md:w-3/4">
              <h1 className="text-center md:text-left text-xl py-5">
                GET THE RIGHT TOOLS FOR THE JOBS:
              </h1>
              <p className=" text-sm sm:text-base text-center md:text-left text-gray-400">
                Monitoring solutions that claim they have one tool that monitors
                everything are inefficient and a poor return on investment. ISC
                delivers the best tool for each unique technology (servers,
                network, SAN, Endpoint) which is a much more efficient and
                cost-effective approach
              </p>
            </div>
          </div>
          <div className=" flex flex-col md:flex-row ">
            <div className=" w-[100%] md:w-1/4 flex justify-items-center">
              <img src={svg2} className="max-w-[100px] mx-auto" />
            </div>
            <div className="w-[100%] px-5 md:w-3/4">
              <h1 className="text-center md:text-left text-xl py-5">
                TUNE OUT FALSE ALERTS:
              </h1>
              <p className=" text-sm sm:text-base text-center md:text-left text-gray-400">
                Being able to tune out false alerts is critical to utilizing a
                monitoring solution effectively. MSP always makes this a
                priority during implementation
              </p>
            </div>
          </div>
          <div className=" flex flex-col md:flex-row ">
            <div className=" w-[100%] md:w-1/4 flex justify-items-center">
              <img src={svg3} className="max-w-[100px] mx-auto" />
            </div>
            <div className="w-[100%] px-5 md:w-3/4">
              <h1 className="text-center md:text-left text-xl py-5">
                CENTRALIZE ALL ALERTS TO THE SERVICE DESK:
              </h1>
              <p className=" text-sm sm:text-base text-center md:text-left text-gray-400">
                Through use of advanced automation, alerts that are presented to
                the Service Desk have predefined routing and categorization to
                eliminate ticket thrashing between service teams and to ensure
                escalation to the appropriate service team or individual.
              </p>
            </div>
          </div>
          <div className=" flex flex-col md:flex-row ">
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
          </div>
        </div>
      </div>
      <div className=" w-[100%] sm:w-[80%] sm:mx-auto">
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
      </div>
    </div>
  );
};

export default IntegratedSection2;
