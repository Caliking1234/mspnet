import React from "react";
import svg1 from "../../images/network-migration-feat.svg";

const NetworkManagementSection1 = () => {
  return (
    <div className=" w-full mt-[80px]">
      <div className="w-full text-center bg-gray-200 py-10">
        <h1 className=" px-5 text-xl sm:text-3xl md:text-4xl py-6 text-[rgba(16,44,81,255)]">
          Automated Network Management with Maximum ROI
        </h1>
        <p className=" px-5 text-base md:text-lg py-3 text-[rgba(16,44,81,255)]">
          Easily Optimize Your Network with a Scalable Network Management
          Solution from MSP
        </p>
      </div>
      <div className="w-[80%] mx-auto">
        <h1 className=" w-full text-center text-lg sm:text-xl md:text-4xl py-6 text-[rgba(16,44,81,255)]">
          The optimization of your network is critical, as the demands on your
          network continues to grow at exponential rates
        </h1>
        <div className=" text-gray-400 py-10">
          <div className=" flex flex-row py-3">
            <div>-</div>
            <div>Are you ready to cut costs and improve productivity?</div>
          </div>

          <div className=" flex flex-row py-3">
            <div>-</div>
            <div>
              Would your productivity improve if you could reduce downtime?
            </div>
          </div>
          <div className=" flex flex-row py-3">
            <div>-</div>
            <div>
              Would you like to discover a low-cost structure that is optimized
              and fits into your budget – and delivers a consistent free flow of
              data, producing a maximum ROI?
            </div>
          </div>
        </div>
      </div>
      <div className=" w-1/2 h-1 mx-auto bg-[rgba(16,44,81,255)] my-7"></div>
      <div className="w-full bg-gray-200 mt-5">
        <h1 className=" text-center text-2xl md:text-4xl py-6 text-[rgba(16,44,81,255)]">
          MSP Leading-Edge Network Management Solution Can Save You Time, Money,
          and Increase Reliability
        </h1>
        <div className="flex flex-col sm:flex-row">
          <div className=" w-[80%] pl-6 md:pl-0 md:w-1/2  mx-auto text-gray-500 py-10 flex flex-col justify-center md:items-start">
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>Provide an optimal network design</div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>Deliver a low-cost structure that fits your budget</div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>Deliver a consistent free flow of data</div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>Maximize ROI</div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Ensure processes are completed within mere minutes, instead of
                hours or even days
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Provide a step-by-step approach to network management that is
                customized around your specific needs
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Help you achieve faster data transfers including bulk data
                transfers
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>Help in disaster recovery capabilities</div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>Reduce bandwidth expenses</div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Improve response times for interactive applications like
                databases and software applications
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Help improve the performance of applications with better
                bandwidth
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Help in maximizing network speeds between remote locations
              </div>
            </div>
          </div>
          <div className=" w-full md:w-1/4 min-h-full flex justify-center items-center py-5">
            <img src={svg1} className=" w-[280px] p-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkManagementSection1;
