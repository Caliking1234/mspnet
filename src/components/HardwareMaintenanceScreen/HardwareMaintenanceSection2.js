import React from "react";
import svg1 from "../../images/icn-expert-ltbl-20.svg";
import svg2 from "../../images/icn-rocket-ltbl-20.svg";
import svg3 from "../../images/icn-expanded-vision-ltbl-20.svg";
import svg4 from "../../images/icn-report-analytics-verified-ltbl-20.svg";
import svg5 from "../../images/icn-checklist-verified-ltbl-20.svg";
import svg6 from "../../images/icn-cir-expertise-ltbl-20.svg";

const HardwareMaintenanceSection2 = () => {
  return (
    <div>
      <div className=" w-full text-center mt-10">
        <h1 className=" w-[100%] px-3 mx-auto text-2xl sm:text-3xl  font-bold">
          Why You Need Our Hardware Maintenance Service
        </h1>
        <div className="w-[90%] mx-auto flex flex-col gap-5 justify-items-center py-10">
          <div className=" flex flex-col md:flex-row ">
            <div className=" w-[100%] md:w-1/4 flex justify-items-center">
              <img src={svg1} className="max-w-[100px] mx-auto" />
            </div>
            <div className="w-[100%] px-5 md:w-3/4">
              <h1 className="text-center md:text-left text-xl py-5">
                REDUCE TOTAL COST OF OWNERSHIP (TCO) AND BOOST RETURN ON
                INVESTMENT (ROI)
              </h1>
              <p className=" text-sm sm:text-base text-center md:text-left text-gray-400">
                For example, we can help you extend server and storage area
                network hardware lifecycles beyond OEM-defined end of service
                life boundaries.
              </p>
            </div>
          </div>
          <div className=" flex flex-col md:flex-row ">
            <div className=" w-[100%] md:w-1/4 flex justify-items-center">
              <img src={svg2} className="max-w-[100px] mx-auto" />
            </div>
            <div className="w-[100%] px-5 md:w-3/4">
              <h1 className="text-center md:text-left text-xl py-5">
                MINIMIZE DOWNTIME AND BOOST PERFORMANCE
              </h1>
              <p className=" text-sm sm:text-base text-center md:text-left text-gray-400">
                For example, our proactive maintenance services and expertise
                keep a wide range of server products from Unix to Wintel up and
                running efficiently.
              </p>
            </div>
          </div>
          <div className=" flex flex-col md:flex-row ">
            <div className=" w-[100%] md:w-1/4 flex justify-items-center">
              <img src={svg3} className="max-w-[100px] mx-auto" />
            </div>
            <div className="w-[100%] px-5 md:w-3/4">
              <h1 className="text-center md:text-left text-xl py-5">
                HAVE 24/7 ACCESS TO HELP DESK SERVICE
              </h1>
              <p className=" text-sm sm:text-base text-center md:text-left text-gray-400">
                We will be there when you need us!
              </p>
            </div>
          </div>
          <div className=" flex flex-col md:flex-row ">
            <div className=" w-[100%] md:w-1/4 flex justify-items-center">
              <img src={svg4} className="max-w-[100px] mx-auto" />
            </div>
            <div className="w-[100%] px-5 md:w-3/4">
              <h1 className="text-center md:text-left text-xl py-5">
                BENEFIT FROM THE KNOWLEDGE AND EXPERIENCE OF OEM-TRAINED LEVEL 3
                ENGINEERS
              </h1>
              <p className=" text-sm sm:text-base  text-center md:text-left text-gray-400">
                … As well as techniques that have been proven effective in
                improving system performance. If an issue affects multiple
                pieces of hardware instead of dealing with multiple vendors and
                a lot of finger-pointing and delays, we can diagnose and resolve
                the issue fast!
              </p>
            </div>
          </div>
          <div className=" flex flex-col md:flex-row ">
            <div className=" w-[100%] md:w-1/4 flex justify-items-center">
              <img src={svg5} className="max-w-[100px] mx-auto" />
            </div>
            <div className="w-[100%] px-5 md:w-3/4">
              <h1 className="text-center md:text-left text-xl py-5">
                RECEIVE POST-WARRANTY MAINTENANCE AND SUPPORT
              </h1>
              <p className=" text-sm sm:text-base  text-center md:text-left text-gray-400">
                Many vendors like to declare End of Service Life (EOSL), which
                means they will no longer offer maintenance and support for your
                current software. Instead they will only offer a hardware
                upgrade. We allow you to get more value for your hardware
                investments!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto py-7">
        <p className="text-center text-base sm:text-xl font-customised2 text-gray-400 py-3">
          ENSURE A SMOOTH NETWORK TRANSITION EAGER TO HAVE YOUR MIGRATION
          COMPLETED ON SCHEDULE AND WITH NO
          <br /> UNPLEASANT SURPRISES?
          <br /> WANT TO SAVE MONEY ON MIGRATION EXPENSES AND AVOID TOO MUCH
          COSTLY DOWNTIME?
        </p>
      </div>
      <div className=" w-[100%] sm:w-[80%] sm:mx-auto">
        <div className="w-full px-7">
          <h1 className="text-center sm:text-left text-xl py-5">
            EXPERT NETWORK MIGRATION SOLUTIONS
          </h1>
          <p className="text-center sm:text-left text-xs sm:text-base text-gray-400 py-3">
            While network migrations can come with a variety of challenges,
            three of the biggest are getting a proper network assessment at the
            beginning of the process, deploying the solution on the best
            schedule and then monitoring the solution after the migration. At
            MSP, we are experts at all of these things – allowing you to put
            your personnel to work on other important matters.
          </p>
        </div>
        <div className="w-full flex flex-col sm:flex-row py-5 gap-5">
          <div className="w-full sm:w-1/4">
            <img src={svg6} className="max-w-[100px] mx-auto" />
          </div>
          <div className=" w-full text-xs sm:text-base sm:w-3/4 text-center sm:text-left px-4">
            <p className="text-gray-400">
              As technology continues to advice, network migrations are only
              going to become more complex and financially challenging. MSP
              gives you the well thought out plan and expert guidance you need
              to overcome any obstacles. We study your organization and develop
              a migration plan that offers minimal disruptions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HardwareMaintenanceSection2;
