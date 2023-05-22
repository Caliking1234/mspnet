import React from "react";
import svg1 from "../../images/hardware-maintenance-feat.svg";

const HardwareMaintenanceSection1 = () => {
  return (
    <div className=" w-full mt-[80px]">
      <div className="w-full text-center bg-gray-200 py-10">
        <h1 className=" px-5 text-xl sm:text-3xl md:text-4xl py-6 text-[rgba(16,44,81,255)]">
          Hardware Maintenance Services Improve Productivity, Efficiency and
          Security
        </h1>
        <p className=" px-5 text-base md:text-lg py-3 text-[rgba(16,44,81,255)]">
          Ensure Smooth Operation of Your Critical Business Processes
        </p>
      </div>
      <div className="w-[80%] mx-auto">
        <h1 className=" w-full text-center text-lg sm:text-xl md:text-4xl py-6 text-[rgba(16,44,81,255)]">
          Avoid Expensive Systems Failure and Operational Downtime
        </h1>
        <div className=" text-gray-400 py-10">
          <div className=" flex flex-row py-3">
            <div>-</div>
            <div>
              Concerned that faulty or failing hardware could wreak havoc on
              your company and lead to decreased productivity and even costly
              downtime?
            </div>
          </div>

          <div className=" flex flex-row py-3">
            <div>-</div>
            <div>
              Looking to leverage the warranty service purchased with a
              computer, network device or other hardware … or identify
              maintenance contracts for hardware that are no longer in support
              by the OEM?
            </div>
          </div>
          <div className=" flex flex-row py-3">
            <div>-</div>
            <div>
              Want to automate your hardware maintenance, such as version
              control and patching, and make it so you don’t have to worry about
              prolonged downtime or other hardware issues that could put your
              profits into a nosedive?
            </div>
          </div>
        </div>
      </div>
      <div className=" w-[50%] h-1 mx-auto bg-[rgba(16,44,81,255)] my-7"></div>
      <div className="w-full bg-gray-200 mt-5">
        <h1 className=" text-center text-xl md:text-4xl py-6 text-[rgba(16,44,81,255)]">
          We Minimize Your Downtime With Our Hardware Maintenance Service!
        </h1>
        <div className="flex flex-col sm:flex-row">
          <div className=" w-[80%] pl-6 md:pl-0 md:w-1/2  mx-auto text-gray-500 py-10 flex flex-col justify-center md:ml-[80px]">
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Proactive maintenance that prevents major issues from occurring
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Monitoring for quick problem resolution – if issues ever do
                arise
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>Improved up-time for your hardware</div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>Increased productivity for your staff</div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>Removal of unauthorized software from computers</div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Replacement of hardware that is failing or has failed with
                identical equipment
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>Upgraded firmware and up to date virus protection</div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>Simple rollout of new application software</div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>Insurance that backups are working</div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Performance of periodic data restores to verify integrity
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
          You can count on us to make sure that mission-critical hardware
          remains protected at all times and that your IT systems continually
          run at optimal levels.
        </h1>
        <div className=" w-1/2 h-1 mx-auto bg-white my-7"></div>
        <h1 className=" w-[100%] px-3 sm:px-5 mx-auto text-base sm:text-xl text-white font-bold">
          CONTACT US NOW TO START BUILDING THE MAINTENANCE SCHEDULE THAT’S RIGHT
          FOR YOUR BUSINESS
        </h1>
      </div>
    </div>
  );
};

export default HardwareMaintenanceSection1;
