import React from "react";
import svg1 from "../../images/penetration-testing-570x687-1-249x300.png";

const PenetrationSection1 = () => {
  return (
    <div className=" w-full mt-[80px]">
      <div className="w-full text-center bg-gray-200 py-10">
        <h1 className=" px-5 text-xl sm:text-3xl md:text-4xl py-10 text-[rgba(16,44,81,255)]">
          Penetration Testing Services – Fix Your Vulnerabilities With Ease
        </h1>
      </div>
      <div className="w-[80%] mx-auto">
        <h1 className=" w-full text-center text-lg sm:text-xl md:text-4xl py-6 text-[rgba(16,44,81,255)]">
          Discover The Gaps In Your Network Security With A Penetration Test,
          Then Plug Them!​
        </h1>
        <div className=" text-gray-400 py-10">
          <div className=" flex flex-row py-3">
            <div>-</div>
            <div>
              Have you been wondering what exactly would happen if your company
              was targeted by a determined attacker doing their best to break
              into your network?
            </div>
          </div>

          <div className=" flex flex-row py-3">
            <div>-</div>
            <div>
              When’s the last time you probed your organization’s entire online
              IP space, from the applications to the operating system to the
              wireless network?
            </div>
          </div>
          <div className=" flex flex-row py-3">
            <div>-</div>
            <div>
              Isn’t it time you found out for certain where the vulnerabilities
              in your organization lie so you can then create a plan to
              effectively deal with them?
            </div>
          </div>
        </div>
      </div>
      <div className=" w-[50%] h-1 mx-auto bg-[rgba(16,44,81,255)] my-7"></div>
      <div className="w-full bg-gray-200 mt-5">
        <h1 className=" text-center text-xl md:text-4xl py-6 text-[rgba(16,44,81,255)]">
          Engage MSP for Penetration Testing Services, and We’ll:
        </h1>
        <div className="flex flex-col sm:flex-row">
          <div className=" w-[80%] pl-6 md:pl-0 md:w-1/2  mx-auto text-gray-500 py-10 flex flex-col justify-center md:ml-[80px]">
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Utilize powerful penetration tools and techniques in an attempt
                to penetrate your systems
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>Perform testing without disrupting your productivity</div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Comb through your applications and operating systems to find
                costly misconfigurations
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>Probe your wireless network</div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Attempt to access data associated with business-sensitive
                systems
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Prioritize vulnerabilities for remediation based on likely
                business impact
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Identify potential roadblocks or difficulties standing in the
                way of vulnerability remediation
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Provide you with a full report with detailed test results
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>Provide a statement of work on demand</div>
            </div>
          </div>
          <div className=" w-full md:w-[50%] min-h-full flex justify-center items-center py-5">
            <img src={svg1} className=" max-w-[350px] p-5" />
          </div>
        </div>
      </div>
      <div className="bg-[rgba(16,44,81,255)] w-full text-center py-5">
        <h1 className=" w-[100%] px-3 mx-auto text-lg sm:text-2xl text-white font-bold">
          Today even a two-bit hacker can penetrate an average SMB’s security
          with the right tool and just a few keystrokes.
        </h1>
        <div className=" w-1/2 h-1 mx-auto bg-white my-7"></div>
        <h1 className=" w-[100%] px-3 sm:px-5 mx-auto text-base sm:text-xl text-white font-bold">
          WE USE TOP TOOLS IN THE INDUSTRY TO ATTEMPT TO PRY OPEN YOUR ONLINE
          DOOR THEN EXPLAIN HOW WE DID IT AND HOW TO STOP IT FROM EVER HAPPENING
          AGAIN.
        </h1>
      </div>
      <div className="w-full min-h-[50px] bg-gray-200"></div>
    </div>
  );
};

export default PenetrationSection1;
