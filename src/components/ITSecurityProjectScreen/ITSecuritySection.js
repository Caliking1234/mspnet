import React from "react";
import Img1 from "../../images/Managed-IT-Security-Services.png";
import Img2 from "../../images/network-managed-services.png";
import Img3 from "../../images/managed-it-security-services-benefits.png";
import { Link } from "react-router-dom";

const ITSecuritySection = () => {
  return (
    <div className=" mt-[80px]">
      <div className="w-full text-center bg-gray-200 py-5">
        <p className=" px-5 text-base md:text-lg py-3 text-[rgba(16,44,81,255)]">
          Drive your business forward knowing it is safe and secure in the
          expert hands of a partner like Enterprise Integration
        </p>
      </div>
      <div className="w-[80%] mx-auto">
        <h1 className=" w-full text-center text-lg sm:text-xl md:text-4xl py-6 text-[rgba(16,44,81,255)]">
          Securing Your Business, Its Users, Customers and Data Is More
          Important Than Ever
        </h1>
        <p className=" w-full text-center text-lg sm:text-xl md:text-2xl py-6 text-[rgba(16,44,81,255)]">
          Information Security is more important than ever, but it is also more
          complex than ever. With threats emerging from all sides, business
          leaders are forced to focus on security at all times or often pay
          costly consequences.
        </p>
        <p className=" w-full text-center text-base sm:text-lg md:text-xl py-6 text-gray-500">
          Or you can join forces with Enterprise Integration, a partner with
          decades of experience identifying, mitigating and preventing security
          threats, so you can focus on moving your business forward. How can we
          help you secure your business? Or do you need a security assessment to
          identify where you are most at risk? Wherever you are today, we can
          ensure the future of your business is more secure.
        </p>
      </div>
      {/* <div className=" grid grid-cols-1 sm:grid-cols-2 items-center">
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
      </div> */}
      <div>
        {/* <div className="w-full text-center bg-gray-200 py-5">
          <p className=" px-5 text-base md:text-lg py-3 text-[rgba(16,44,81,255)]">
            Flexible and Scalable Network Services
          </p>
        </div> */}
        <div className=" py-10 grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
          <div className=" w-[260px] h-[260px] mx-auto group [perspective:1000px] ">
            <div className=" text-center w-[260px] h-[260px] relative [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)] transition-transform duration-700 delay-100 rotate-180">
              <div className=" flex flex-col justify-center items-center  text-xl h-[260px] w-[260px] absolute  [transform:rotate(180deg)] ">
                <img className=" w-[120px]" src={Img1} />
                <h1>MSSP Management</h1>
              </div>
              <div className="flex flex-col items-center justify-around text-xs px-2 py-6 h-[260px] w-[260px]  bg-[rgba( bg-[rgba(16,44,81,255)] text-white absolute [transform:rotateX(180deg)] [backface-visibility:hidden]">
                <p>
                  Not only can we help you identify the IT security risks that
                  could bring your business down, but we can build a roadmap
                  that will help you overcome your weaknesses and deploy the
                  technologies and strategies that can be your strengths going
                  forward.
                </p>
                <Link to="/mssp-managed-security-service">
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
                <h1>IT Consulting Services</h1>
              </div>
              <div className="flex flex-col items-center justify-around text-xs px-2 py-6 h-[260px] w-[260px]  bg-[rgba( bg-[rgba(16,44,81,255)] text-white absolute [transform:rotateX(180deg)] [backface-visibility:hidden]">
                <p>
                  Get on-demand access to industry-leading security resources
                  and talent that will align the right technologies and
                  processes with your business goals.
                </p>
                <Link to="/it-constancy">
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
                <h1>IT Risk & Security</h1>
                <h1>Management</h1>
              </div>
              <div className="flex flex-col items-center justify-around text-xs px-2 py-6 h-[260px] w-[260px]  bg-[rgba( bg-[rgba(16,44,81,255)] text-white absolute [transform:rotateX(180deg)] [backface-visibility:hidden]">
                <p>
                  MSP relies on an elite team of security experts and access to
                  the industry’s most effective tools to help your organization
                  tighten its security while maximizing productivity.
                </p>
                <Link to="/it-risk-security-management">
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

export default ITSecuritySection;
