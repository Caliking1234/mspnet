import React from "react";
import img1 from "../../images/icn-growth-2-dkbl-20.svg";
import img2 from "../../images/icn-contracts-dkbl-20.svg";
import img3 from "../../images/icn-cycle-satisfaction-ltbl-20.svg";
import img4 from "../../images/icn-check-dkbl-20.svg";
import Img1 from "../../images/hm-workflow.png";
import Img2 from "../../images/us-blue-globe-money-icons.webp";
import Img3 from "../../images/network-managed-services.png";
import { Link } from "react-router-dom";

const ITNetworkSection1 = () => {
  return (
    <div className=" mt-[80px]">
      <div className="w-full text-center bg-gray-200 py-5">
        <p className=" px-5 text-base md:text-lg py-3 text-[rgba(16,44,81,255)]">
          Full Support of Your Rapidly Increasing Network Needs Help accelerate
          your organization’s innovation and growth with MSPNET IT Network
          Services
        </p>
      </div>
      <div className="w-[80%] mx-auto">
        <h1 className=" w-full text-center text-lg sm:text-xl md:text-4xl py-6 text-[rgba(16,44,81,255)]">
          Securely Connect to AWS, Azure and Other Cloud Hosting Models While
        </h1>
        <p className=" w-full text-center text-lg sm:text-xl md:text-2xl py-6 text-[rgba(16,44,81,255)]">
          Continuous insight that helps you easily optimize and scale networking
          processes and technologies
        </p>
        <p className=" w-full text-center text-base sm:text-lg md:text-xl py-6 text-gray-500">
          With IT Network Services from Enterprise Integration, you’ll get the
          support you need to simplify the increasing complexity of your network
          while gaining greater visibility, unifying your infrastructure and
          boosting performance with advanced management capabilities.
        </p>
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
      <div>
        <div className="w-full text-center bg-gray-200 py-5">
          <p className=" px-5 text-base md:text-lg py-3 text-[rgba(16,44,81,255)]">
            Flexible and Scalable Network Services
          </p>
        </div>
        <div className=" py-10 grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
          <div className=" w-[260px] h-[260px] mx-auto group [perspective:1000px] ">
            <div className=" text-center w-[260px] h-[260px] relative [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)] transition-transform duration-700 delay-100 rotate-180">
              <div className=" flex flex-col justify-center items-center  text-xl h-[260px] w-[260px] absolute  [transform:rotate(180deg)] ">
                <img className=" w-[120px]" src={Img1} />
                <h1>Network Infrastructure Design</h1>
              </div>
              <div className="flex flex-col items-center justify-around text-xs px-2 py-6 h-[260px] w-[260px]  bg-[rgba( bg-[rgba(16,44,81,255)] text-white absolute [transform:rotateX(180deg)] [backface-visibility:hidden]">
                <p>
                  Design and deploy a state-of-the-art network that improves
                  current processes, dramatically speeds up response times and
                  resolves problems more easily
                </p>
                <Link to="/network-infrastructure-design">
                  <button className=" w-28 h-10 text-white border-2 border-solid border-white rounded-md">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className=" w-[260px] h-[260px] mx-auto group [perspective:1000px] ">
            <div className=" text-center w-[260px] h-[260px] relative [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)] transition-transform duration-700 delay-100 rotate-180">
              <div className=" flex flex-col justify-center items-center  text-xl h-[260px] w-[260px] absolute  [transform:rotate(180deg)] ">
                <img className=" w-[120px]" src={Img2} />
                <h1>WAN Optimization</h1>
              </div>
              <div className="flex flex-col items-center justify-around text-xs px-2 py-6 h-[260px] w-[260px]  bg-[rgba( bg-[rgba(16,44,81,255)] text-white absolute [transform:rotateX(180deg)] [backface-visibility:hidden]">
                <p>
                  Combat slow data transfers and boost application performance
                  by maximizing data flow efficiency across your WAN with a
                  unique optimization strategy
                </p>
                <Link to="/wan-optimization">
                  <button className=" w-28 h-10 text-white border-2 border-solid border-white rounded-md">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className=" w-[260px] h-[260px] mx-auto group [perspective:1000px] ">
            <div className=" text-center w-[260px] h-[260px] relative [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)] transition-transform duration-700 delay-100 rotate-180">
              <div className=" flex flex-col justify-center items-center  text-xl h-[260px] w-[260px] absolute  [transform:rotate(180deg)] ">
                <img className=" w-[120px]" src={Img3} />
                <h1>SD-WAN Solution</h1>
              </div>
              <div className="flex flex-col items-center justify-around text-xs px-2 py-6 h-[260px] w-[260px]  bg-[rgba( bg-[rgba(16,44,81,255)] text-white absolute [transform:rotateX(180deg)] [backface-visibility:hidden]">
                <p>
                  Steer traffic intelligently and minimize congestion with
                  advanced management capabilities that provide simplified WAN
                  operation and increased agility
                </p>
                <Link to="/sd-wan-sol">
                  <button className=" w-28 h-10 text-white border-2 border-solid border-white rounded-md">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-center bg-gray-200 py-5">
        <h1 className=" w-full text-center text-3xl font-extrabold py-10 text-[rgba(16,44,81,255)]">
          Optimize network productivity and control
        </h1>
        <p className=" px-5 text-base md:text-lg py-3 text-[rgba(16,44,81,255)]">
          Eliminate the roadblocks that can slow your business
          <br /> By optimizing network performance through expertly designed
          services and solutions, organizations can gain next-generation agility
          and innovation to meet
          <br />
          forthcoming user demand.
        </p>
      </div>
      <div className=" flex flex-col lg:flex-row items-center justify-center lg:justify-around font-bold gap-6 text-gray-500 my-5">
        <div className=" w-[80%] lg:w-[300px] px-3">
          <div className="  py-3 text-sm">
            <li className=" list-disc ">
              Real-time network interruption discovery and resolution
            </li>
          </div>
          <div className="  py-3 text-sm">
            <li className=" list-disc ">
              Automatic traffic re-routing to minimize network congestion
            </li>
          </div>
          <div className="  py-3">
            <li className=" list-disc text-sm">
              Accelerated application delivery with increased throughput
            </li>
          </div>
        </div>
        <div className=" w-[80%] lg:w-[300px] px-3">
          <div className="  py-3">
            <li className=" list-disc text-sm">
              Seamless collaboration across any device from anywhere 24/7
            </li>
          </div>
          <div className="  py-3">
            <li className=" list-disc text-sm">
              End-to-end visibility of network performance
            </li>
          </div>
          <div className="  py-3">
            <li className=" list-disc text-sm">
              Automate network tasks with a mature artificial intelligence tool
            </li>
          </div>
        </div>
        <div className=" w-[80%] lg:w-[300px] px-3">
          <div className="  py-3">
            <li className=" list-disc text-sm ">
              Comprehensive network visibility with granular control
            </li>
          </div>
          <div className="  py-3">
            <li className=" list-disc text-sm">
              Eliminate communication roadblocks linked with business travel
            </li>
          </div>
          <div className="  py-3">
            <li className=" list-disc text-sm">
              Ensure maximum efficiency of network infrastructure
            </li>
          </div>
        </div>
      </div>
      <div className="w-full text-center bg-gray-200 py-5">
        <p className=" px-5 text-base md:text-lg py-3 text-[rgba(16,44,81,255)]">
          DON’T GET LEFT BEHIND WHILE MORE INNOVATIVE COMPETITORS WITH ENHANCED
          NETWORK
          <br /> CAPABILITIES LEAD YOUR INDUSTRY INTO THE FUTURE. ENSURE
          ENDURING COMPETITIVENESS WITH IT
          <br /> NETWORK SERVICES FROM EI.
        </p>
      </div>
    </div>
  );
};

export default ITNetworkSection1;
