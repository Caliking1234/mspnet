import React from "react";
import svg1 from "../../images/network-security-mgmt-570x653-1-262x300.png";

const NetworkSecuritySection1 = () => {
  return (
    <div className=" w-full mt-[80px]">
      <div className="w-full text-center bg-gray-200 py-10">
        <h1 className=" px-5 text-xl sm:text-3xl md:text-4xl py-6 text-[rgba(16,44,81,255)]">
          Improve Protection and Visibility with Network Security Management
        </h1>
        <p className=" px-5 text-base md:text-lg py-3 text-[rgba(16,44,81,255)]">
          Gain insight into network-wide threats while ensuring the security and
          general health of your entire network
        </p>
      </div>
      <div className="w-[80%] mx-auto">
        <h1 className=" w-full text-center text-lg sm:text-xl md:text-4xl py-6 text-[rgba(16,44,81,255)]">
          Manage your security network more effectively with consolidated
          traffic visibility and correlated threat data
        </h1>
        <div className=" text-gray-400 py-10">
          <div className=" flex flex-row py-3">
            <div>-</div>
            <div>
              Do you know that there are new shocking details of yet another
              major network breach almost daily?
            </div>
          </div>

          <div className=" flex flex-row py-3">
            <div>-</div>
            <div>
              Are you aware that organized cyber criminals, as well as malicious
              black-hat hackers, are wreaking havoc on networks large and small
              the world over?
            </div>
          </div>
          <div className=" flex flex-row py-3">
            <div>-</div>
            <div>
              Did you know that no organization is immune to cyber-attacks, and
              that staying one step ahead of cyber criminals is now a priority
              and essential to the continuing success of a modern business
              entity?
            </div>
          </div>
        </div>
      </div>
      <div className=" w-[50%] h-1 mx-auto bg-[rgba(16,44,81,255)] my-7"></div>
      <div className="w-full bg-gray-200 mt-5">
        <h1 className=" text-center text-xl md:text-4xl py-6 text-[rgba(16,44,81,255)]">
          An expert network security management solution from MSP…
        </h1>
        <div className="flex flex-col sm:flex-row">
          <div className=" w-[80%] pl-6 md:pl-0 md:w-1/2  mx-auto text-gray-500 py-10 flex flex-col justify-center md:ml-[80px]">
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Does not require re-engineering of your core operational
                processes
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>Compliments your current environment</div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>Helps you carry out business with lightning speed</div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Performs and completes tasks faster than traditional solutions
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>Lessens and even eliminates human error</div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>Provides more accurate and reliable outcomes</div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>Helps you provide a superior customer experience</div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Keeps your business environment safe and moving forward 24/7/365
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Minimizes or eliminates costs associated with manual labor
              </div>
            </div>
          </div>
          <div className=" w-full md:w-[50%] min-h-full flex justify-center items-center py-5">
            <img src={svg1} className=" max-w-[350px] p-5" />
          </div>
        </div>
      </div>
      <div className="bg-[rgba(16,44,81,255)] w-full text-center py-5">
        <h1 className=" w-[100%] px-3 mx-auto text-lg sm:text-2xl text-white font-bold">
          Under EI’s network security management, you inherit a multi-tiered
          solution.
        </h1>
        <div className=" w-1/2 h-1 mx-auto bg-white my-7"></div>
        <h1 className=" w-[100%] px-3 sm:px-5 mx-auto text-base sm:text-xl text-white font-bold">
          ELIMINATE YOUR RISK OF DATA BREACHES WITH MSP AUTOMATED CUTTING-EDGE
          NETWORK SECURITY MANAGEMENT SYSTEM THAT SHIELDS COMPANIES FROM
          CRIPPLING INTRUSIONS.
        </h1>
      </div>
      <div className="w-full min-h-[50px] bg-gray-200"></div>
    </div>
  );
};

export default NetworkSecuritySection1;
