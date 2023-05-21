import React from "react";
import svg1 from "../../images/network-migration-feat.svg";

const IntegratedSection1 = () => {
  return (
    <div className=" w-full mt-[80px]">
      <div className="w-full text-center bg-gray-200">
        <h1 className=" px-5 text-xl sm:text-3xl md:text-4xl py-6 text-[rgba(16,44,81,255)]">
          IT Problem Resolution Made Easy
        </h1>
        <p className=" px-5 text-base md:text-lg py-3 text-[rgba(16,44,81,255)]">
          Get back to work faster with 24×7 first-contact resolution from MSP
          Integrated Service Center
        </p>
      </div>
      <div className="w-[80%] mx-auto">
        <h1 className=" w-full text-center text-lg sm:text-xl md:text-4xl py-6 text-[rgba(16,44,81,255)]">
          Finally, a Next Generation Service Desk & Monitoring Solution Has
          Arrived…
        </h1>
        <div className=" text-gray-400 py-10">
          <div className=" flex flex-row py-3">
            <div>-</div>
            <div>
              Tired of the communication difficulties that arise when using an
              overseas network operations center?
            </div>
          </div>

          <div className=" flex flex-row py-3">
            <div>-</div>
            <div>
              Fed up with dealing with techs that don’t have the skill or
              knowledge to help you, which leads to you or your customer being
              bounced from employee to employee to employee?
            </div>
          </div>
          <div className=" flex flex-row py-3">
            <div>-</div>
            <div>
              Looking for an automated service desk solution that reduces per
              call costs while dramatically improving customer experience?
            </div>
          </div>
        </div>
      </div>
      <div className=" w-1/2 h-1 mx-auto bg-[rgba(16,44,81,255)] my-7"></div>
      <div className="w-full bg-gray-200 mt-5">
        <h1 className=" text-center text-2xl md:text-4xl py-6 text-[rgba(16,44,81,255)]">
          A Next-level Network Operations Center
        </h1>
        <div className="flex flex-col sm:flex-row">
          <div className=" w-[80%] pl-6 md:pl-0 md:w-1/2  mx-auto text-gray-500 py-10 flex flex-col justify-center md:items-start">
            <h1 className=" text-xlpy-3">
              MSP Network Operations Center Will:
            </h1>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Reduce the noise from monitoring tools to ensure no critical
                alert goes unanswered
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>Automate system alerts for consistent results</div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Create a fully integrated, closed-loop network monitoring and
                management environment
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Include solutions in the knowledge base for quicker remediation
                of recurring events
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Provide centralized visibility of information in the IT Service
                Management System
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Deliver automated self-healing capabilities through MSP advanced
                tools
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>Monitor the user experience while watching for errors</div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Supply MSP technicians with the ability to quickly identify the
                root cause of an end point issue
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

export default IntegratedSection1;
