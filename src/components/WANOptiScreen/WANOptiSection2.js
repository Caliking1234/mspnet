import React from "react";
import svg1 from "../../images/icn-maximize-assets-2-ltbl-20.svg";
import svg2 from "../../images/icn-increased-visiblity-ltbl-20.svg";
import svg3 from "../../images/icn-computer-control-ltbl-20.svg";
import svg4 from "../../images/icn-global-tracking-ltbl-20.svg";
import svg5 from "../../images/icn-expertise-ltbl-20.svg";
import svg6 from "../../images/icn-cir-strategy-ltbl-20.svg";

const WANOptiSection2 = () => {
  return (
    <div>
      <div className=" w-full text-center mt-10">
        <h1 className=" w-[100%] px-3 mx-auto text-2xl sm:text-3xl  font-bold">
          Why You Need Our WAN Optimization Service
        </h1>
        <div className="w-[90%] mx-auto flex flex-col gap-5 justify-items-center py-10">
          <div className=" flex flex-col md:flex-row ">
            <div className=" w-[100%] md:w-1/4 flex justify-items-center">
              <img src={svg1} className="max-w-[100px] mx-auto" />
            </div>
            <div className="w-[100%] px-5 md:w-3/4">
              <h1 className="text-center md:text-left text-xl py-5">
                SCALABILITY:
              </h1>
              <p className=" text-sm sm:text-base text-center md:text-left text-gray-400">
                Through the utilization of smart, scalable WAN Optimization
                architecture, your response times won’t be cut down when your
                deployment needs increase. MSP will expand your solution to
                scale, making use of high availability and load-sharing
                processes to meet network-wide throughput.
              </p>
            </div>
          </div>
          <div className=" flex flex-col md:flex-row ">
            <div className=" w-[100%] md:w-1/4 flex justify-items-center">
              <img src={svg2} className="max-w-[100px] mx-auto" />
            </div>
            <div className="w-[100%] px-5 md:w-3/4">
              <h1 className="text-center md:text-left text-xl py-5">
                VISIBILITY:
              </h1>
              <p className=" text-sm sm:text-base text-center md:text-left text-gray-400">
                MSP integrates our industry-leading WAN Optimization
                capabilities with industry-leading network, application and end
                user visibility to help streamline management and provide prime
                application performance.
              </p>
            </div>
          </div>
          <div className=" flex flex-col md:flex-row ">
            <div className=" w-[100%] md:w-1/4 flex justify-items-center">
              <img src={svg3} className="max-w-[100px] mx-auto" />
            </div>
            <div className="w-[100%] px-5 md:w-3/4">
              <h1 className="text-center md:text-left text-xl py-5">
                CONTROL:
              </h1>
              <p className=" text-sm sm:text-base text-center md:text-left text-gray-400">
                A WAN Optimization solution from MSP can help you gain granular
                control over what is taking place on your WAN. Leveraging a
                simplified policy-based approach, MSP provides your organization
                with the ability to easily direct and prioritize various
                applications over diverse network paths, along with increased
                capabilities to proactively uncover issues and improve overall
                performance.
              </p>
            </div>
          </div>
          <div className=" flex flex-col md:flex-row ">
            <div className=" w-[100%] md:w-1/4 flex justify-items-center">
              <img src={svg4} className="max-w-[100px] mx-auto" />
            </div>
            <div className="w-[100%] px-5 md:w-3/4">
              <h1 className="text-center md:text-left text-xl py-5">
                ACCELERATION:
              </h1>
              <p className=" text-sm sm:text-base  text-center md:text-left text-gray-400">
                Due to the increasing data transfer efficiencies, WAN
                Optimization accelerates performance across your environment.
                Your organization will be able to deliver the best end user
                experience possible across the WAN, resolve problems faster with
                improved IT visibility into your applications and network, and
                deliver faster backups and data replication
              </p>
            </div>
          </div>
          <div className=" flex flex-col md:flex-row ">
            <div className=" w-[100%] md:w-1/4 flex justify-items-center">
              <img src={svg5} className="max-w-[100px] mx-auto" />
            </div>
            <div className="w-[100%] px-5 md:w-3/4">
              <h1 className="text-center md:text-left text-xl py-5">
                EXPERTISE:
              </h1>
              <p className=" text-sm sm:text-base  text-center md:text-left text-gray-400">
                MSP team of experienced WAN Optimization professionals make use
                of best-in-class tools and have the knowledge to utilize them
                effectively, making your integration seamless. Through our
                industry expertise, you’ll always have access to emerging
                technologies and the latest innovative WAN Optimization features
                and functionalities relevant to your business needs.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto py-7">
        <p className="text-center text-base sm:text-xl font-customised2 text-gray-400 py-3">
          GET AS MUCH AS YOU CAN FROM YOUR SOLUTION HOW DO YOU KEEP UP WITH THE
          PACE OF USER, DATA AND APPLICATION
          <br /> EVOLUTION?
          <br /> ARE YOUR BUSINESS-CRITICAL TECHNOLOGIES COLLECTIVELY DRIVING UP
          YOUR BANDWIDTH COSTS?
        </p>
      </div>
      <div className=" w-[100%] sm:w-[80%] sm:mx-auto">
        <div className="w-full px-7">
          <h1 className="text-center sm:text-left text-xl py-5">
            Confidently Optimised
          </h1>
          <p className="text-center sm:text-left text-xs sm:text-base text-gray-400 py-3">
            Organizations today are rapidly adopting emerging technologies to
            provide coverage for modern business-critical initiatives such as
            virtualization and video and cloud computing. While those
            technologies help increase efficiency and competitiveness, they may
            also cause deteriorating network performance and escalating
            bandwidth costs if the WAN is not effectively optimized
          </p>
        </div>
        <div className="w-full flex flex-col sm:flex-row py-5 gap-5">
          <div className="w-full sm:w-1/4">
            <img src={svg6} className="max-w-[100px] mx-auto" />
          </div>
          <div className=" w-full text-xs sm:text-base sm:w-3/4 text-center sm:text-left px-4">
            <p className="text-gray-400">
              With a WAN Optimization solution from Enterprise Integration, we
              will develop and manage an optimization strategy that will support
              the efficiency of your network’s data flow through the
              technologies that are critical to the success and survival of your
              organization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WANOptiSection2;
