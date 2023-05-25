import React from "react";
import img1 from "../../images/icn-shield-security-dkbl-20.svg";
import img2 from "../../images/icn-growth-bars-dkbl-20.svg";
import img3 from "../../images/icn-rocket-dkbl-20.svg";
import img4 from "../../images/icn-strategy-dkbl-20.svg";

const ItInfrastructureSection = () => {
  return (
    <div className=" mt-[80px]">
      <div className="w-full text-center bg-gray-200 py-5">
        <p className=" px-5 text-base md:text-lg py-3 text-[rgba(16,44,81,255)]">
          Optimize Business Performance & Maintain a Competitive Edge! EI’s IT
          Infrastructure Services Ensure You ALWAYS Have the Data You Need to
          Succeed
        </p>
      </div>
      <div className="w-[80%] mx-auto">
        <h1 className=" w-full text-center text-lg sm:text-xl md:text-4xl py-6 text-[rgba(16,44,81,255)]">
          Having the Right IT Infrastructure is Critical to the Future Growth of
          Your Business
        </h1>
        <p className=" w-full text-center text-lg sm:text-xl md:text-2xl py-6 text-[rgba(16,44,81,255)]">
          IT infrastructure is something that is easy to overlook but can have a
          tremendous impact on a business’s productivity and security.
        </p>
        <p className=" w-full text-center text-base sm:text-lg md:text-xl py-6 text-gray-500">
          In fact, developing a strategic IT infrastructure can be just what is
          needed to power your
          <br /> business to higher levels of success. On the other hand,
          failing to have the right IT
          <br /> infrastructure in place can seriously damage long-term success
          like few other factors can.
        </p>
        <div className=" flex flex-row py-3 text-gray-500">
          <div>-</div>
          <div>
            Is your current IT infrastructure able to accommodate mobile access?
          </div>
        </div>
        <div className=" flex flex-row py-3 text-gray-500">
          <div>-</div>
          <div>
            Can it be easily integrated with cloud computing?Monitoring for
            quick problem resolution – if issues ever do arise
          </div>
        </div>
        <div className=" flex flex-row py-3 text-gray-500">
          <div>-</div>
          <div>
            Is it currently resulting in the inefficient use of important apps
            and software?
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 items-center">
        <div className=" w-[280px] h-[280px] p-5 flex flex-col justify-center items-center gap-2 mx-auto">
          <img src={img1} className=" p-3 w-[50%]" />
          <span className=" text-xl text-gray-500">ENHANCED NETWORK</span>
          <span className=" text-xl text-gray-500">MANAGEMENT</span>
        </div>
        <div className=" w-[280px] h-[280px] p-5 flex flex-col justify-center items-center gap-2 mx-auto">
          <img src={img2} className=" p-3 w-[50%]" />
          <span className=" text-xl text-gray-500">INCREASED BUSINESS</span>
          <span className=" text-xl text-gray-500">AGILITY</span>
        </div>
        <div className=" w-[280px] h-[280px] p-5 flex flex-col justify-center items-center gap-2 mx-auto">
          <img src={img3} className=" p-3 w-[50%]" />
          <span className=" text-xl text-gray-500">IMPROVED NETWORK</span>
          <span className=" text-xl text-gray-500">RELIABILITY</span>
        </div>
        <div className=" w-[280px] h-[280px] p-5 flex flex-col justify-center items-center gap-2 mx-auto">
          <img src={img4} className=" p-3 w-[50%]" />
          <span className=" text-xl text-gray-500">SIMPLIFIED NETWORK</span>
          <span className=" text-xl text-gray-500">MANAGEMENT</span>
        </div>
      </div>
      <div className="w-[80%] mx-auto">
        <h1 className=" w-full text-center text-lg sm:text-xl md:text-4xl py-6 text-[rgba(16,44,81,255)]">
          It’s Time to Improve Communication & Security Across Your
          Organization!
        </h1>
        <p className=" w-full text-center text-lg sm:text-xl md:text-2xl py-6 text-[rgba(16,44,81,255)]">
          We Give You a Database That Optimizes the Flow of Information WHILE
          Our Disaster Recovery Service Keeps Your Data Safe!
        </p>
        <p className=" w-full text-center text-base sm:text-lg md:text-xl py-6 text-gray-500">
          HERE ARE JUST OF FEW OF THE BENEFITS YOU CAN RECEIVE FROM OUR IT
          INFRASTRUCTURE SERVICES:
        </p>
      </div>
      <div className=" flex flex-col lg:flex-row items-center justify-around font-bold gap-6 text-gray-500 my-10">
        <div className=" w-full lg:w-[300px] px-3">
          <div className=" ml-4 py-3 text-sm">
            <li className=" list-disc ">
              Full database selection, installation, configuration & set up
            </li>
          </div>
          <div className=" ml-4 py-3 text-sm">
            <li className=" list-disc ">
              Capacity planning and performance tuning
            </li>
          </div>
          <div className=" ml-4 py-3">
            <li className=" list-disc text-sm">
              Recover critical business data while meeting RPO and RTO SLA’s
            </li>
          </div>
        </div>
        <div className=" w-full lg:w-[300px] px-3">
          <div className=" ml-4 py-3 text-sm">
            <li className=" list-disc ">
              Develop DR plans and procedures tailored for your business
            </li>
          </div>
          <div className=" ml-4 py-3 text-sm">
            <li className=" list-disc ">
              Configuration management and security assessments
            </li>
          </div>
          <div className=" ml-4 py-3">
            <li className=" list-disc text-sm">
              Full-time monitoring and problem resolution
            </li>
          </div>
        </div>
        <div className=" w-full lg:w-[300px] px-3">
          <div className=" ml-4 py-3 text-sm">
            <li className=" list-disc ">
              Upgrades and migrations, including cloud migration
            </li>
          </div>
          <div className=" ml-4 py-3 text-sm">
            <li className=" list-disc ">Proactive system health checks</li>
          </div>
          <div className=" ml-4 py-3">
            <li className=" list-disc text-sm">
              Closure of any disaster recovery plan gaps
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItInfrastructureSection;
