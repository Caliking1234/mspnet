import React from "react";
import svg1 from "../../images/sdwan-solution-feat.svg";

const SDWANSection1 = () => {
  return (
    <div className=" w-full mt-[80px]">
      <div className="w-full text-center bg-gray-200 py-10">
        <h1 className=" px-5 text-xl sm:text-3xl md:text-4xl py-6 text-[rgba(16,44,81,255)]">
          Modernize Your Network
        </h1>
        <p className=" px-5 text-base md:text-lg py-3 text-[rgba(16,44,81,255)]">
          Gain unprecedented network visibility and control with an SD-WAN
          solution from Enterprise Integration
        </p>
      </div>
      <div className=" w-[50%] h-1 mx-auto bg-[rgba(16,44,81,255)] my-7"></div>
      <div className="w-full bg-gray-200 mt-5">
        <h1 className=" text-center text-xl md:text-4xl py-6 text-[rgba(16,44,81,255)]">
          A proper SD-WAN solution can unleash powerful, previously untapped
          capabilities to steer traffic intelligently.
        </h1>
        <div className="flex flex-col sm:flex-row">
          <div className=" w-[80%] pl-6 md:pl-0 md:w-1/2  mx-auto text-gray-500 py-10 flex flex-col justify-center md:ml-[80px]">
            <div>An SD-WAN solution from MSPNET will:</div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Help increase your organization’s application deployment time on
                any platform
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Deliver consistent and predictable performance for an overall
                better user experience
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Bring detailed application intelligence and advanced management
                capabilities to your organization
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Give you the ability to easily align application priority and
                performance with business initiatives
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>Deliver simplified deployment and operation of your WAN</div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Provide greater agility for your data transfers and applications
                while using less bandwidth
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Provide greater visibility across multiple WAN links and service
                providers
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>Optimize control over your network</div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Give you the ability to monitor the health of your WAN links
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Automatically reroute traffic onto an alternate path when the
                primary becomes congested
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Help to ensure your data reaches its destination quickly and
                without delay
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Enhance network security and limit opportunities for attack or
                damage
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Help you maximize cost savings by directing traffic according to
                policy-based rules
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Automatically divide traffic amongst low-cost and highly
                available WAN links
              </div>
            </div>
          </div>
          <div className=" w-full md:w-[50%] min-h-full flex justify-center items-center py-5">
            <img src={svg1} className=" max-w-[280px] p-5" />
          </div>
        </div>
      </div>
      <div className="bg-[rgba(16,44,81,255)] w-full text-center py-5">
        <h1 className=" w-[100%] px-3 mx-auto text-lg sm:text-2xl text-white font-bold">
          Simplify WAN Management with MSPNET
        </h1>
        <div className=" w-1/2 h-1 mx-auto bg-white my-7"></div>
        <h1 className=" w-[100%] px-3 sm:px-5 mx-auto text-base sm:text-xl text-white font-bold">
          DON’T LET YOUR BUSINESS SUFFER FROM DATA TRAFFIC CONGESTION AND
          INCONSISTENT
        </h1>
        <br />
        <h1 className=" w-[100%] px-3 sm:px-5 mx-auto text-base sm:text-xl text-white font-bold">
          NETWORK RESPONSE,ADOPT SD-WAN SOLUTION AND SUPERCHARGE YOUR WAN TODAY.
        </h1>
      </div>

      <div className="w-full min-h-[50px] bg-gray-200"></div>
    </div>
  );
};

export default SDWANSection1;
