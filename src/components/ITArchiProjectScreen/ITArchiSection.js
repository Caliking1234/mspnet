import React from "react";
import img1 from "../../images/icn-growth-2-dkbl-20.svg";
import img2 from "../../images/icn-business-champion-dkbl-20.svg";
import img3 from "../../images/icn-satisfied-th-dkbl-20.svg";
import img4 from "../../images/icn-award-dkbl-20.svg";

const ITArchiSection = () => {
  return (
    <div className=" mt-[80px]">
      <div className="w-full text-center bg-gray-200 py-5">
        <h1 className=" w-full text-center text-lg sm:text-xl md:text-4xl py-6 text-[rgba(16,44,81,255)]">
          Achieve Long-Lasting Success With IT Consulting Services
        </h1>
        <p className=" px-5 text-base md:text-lg py-3 text-[rgba(16,44,81,255)]">
          Capitalize on Innovative IT Strategies, Technology and People
        </p>
      </div>
      <div className="w-[80%] mx-auto">
        <p className=" w-full text-center text-lg sm:text-xl md:text-2xl py-6 text-[rgba(16,44,81,255)]">
          With Enterprise Integrations on-demand IT consulting services adopting
          new technologies and modernizing your processes just got less complex
        </p>
        <p className=" w-full text-center text-base sm:text-lg md:text-xl py-6 text-gray-500">
          The right technologies and processes can mean the difference between
          staying relevant in today’s ever-evolving business world and being
          swallowed up by more innovative competitors
          <br />
          <br /> But with a sea of solutions available, how do you know what’s
          right for you? <br />
          <br />
          How can you be sure that what you choose will lead to a boost to your
          bottom line performance?
        </p>
      </div>
      <div className="w-full text-center bg-gray-200 py-5">
        <h1 className=" w-full text-center text-lg sm:text-xl md:text-4xl py-6 text-[rgba(16,44,81,255)]">
          IT Consulting Services-Guidance through a complex world
        </h1>
        <p className=" px-5 text-base md:text-lg py-3 text-[rgba(16,44,81,255)]">
          Expertise and insight that gives you a winning advantage
        </p>
        <p className=" px-5 text-base md:text-lg py-3 text-[rgba(16,44,81,255)]">
          With IT Consulting Services from Enterprise Integration, you’ll get
          on-demand access to industry-leading experience, resources and talent
          that will align the right technologies and processes with your
          business goals; helping to free up your staff to focus more heavily on
          revenue-generating opportunities and critical business initiatives.
        </p>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 items-center">
        <div className=" w-[280px] h-[280px] p-5 flex flex-col justify-center items-center gap-2 mx-auto">
          <img src={img1} className=" p-3 w-[50%]" />
          <span className=" text-xl text-gray-500">INCREASED BUSINESS</span>
          <span className=" text-xl text-gray-500">PERFORMANCE</span>
        </div>
        <div className=" w-[280px] h-[280px] p-5 flex flex-col justify-center items-center gap-2 mx-auto">
          <img src={img2} className=" p-3 w-[50%]" />
          <span className=" text-xl text-gray-500">ENHANCED SYSTEMS</span>
          <span className=" text-xl text-gray-500">CAPABILITIES</span>
        </div>
        <div className=" w-[280px] h-[280px] p-5 flex flex-col justify-center items-center gap-2 mx-auto">
          <img src={img3} className=" p-3 w-[50%]" />
          <span className=" text-xl text-gray-500">SIMPLIFIED IT</span>
          <span className=" text-xl text-gray-500">ENVIRONMENT</span>
        </div>
        <div className=" w-[280px] h-[280px] p-5 flex flex-col justify-center items-center gap-2 mx-auto">
          <img src={img4} className=" p-3 w-[50%]" />
          <span className=" text-xl text-gray-500">IMPROVED</span>
          <span className=" text-xl text-gray-500">INFRASTRUCTURE</span>
          <span className=" text-xl text-gray-500">RELIABILITY</span>
        </div>
      </div>
    </div>
  );
};

export default ITArchiSection;
