import React from "react";
import svg1 from "../../images/page_icons-05.png";
import svg2 from "../../images/page_icons-04.png";
import svg3 from "../../images/page_icons-07.png";
import svg4 from "../../images/page_icons-06.png";
import { Link } from "react-router-dom";

const ITConsultancySection2 = () => {
  return (
    <div>
      <h1 className=" w-[100%] px-3 mx-auto text-2xl sm:text-3xl  font-bold text-center my-5">
        The Competitive Advantage
      </h1>
      <div className="w-[90%] mx-auto flex flex-col gap-10 justify-items-center py-10">
        <div className=" flex flex-col md:flex-row">
          <div className=" w-[100%] md:w-1/4 flex justify-items-center">
            <img src={svg1} className="max-w-[100px] mx-auto" />
          </div>
          <div className="w-[100%] px-5 md:w-3/4">
            <h1 className="text-center md:text-left text-xl py-5">
              Client Success
            </h1>
            <p className=" text-sm sm:text-base text-center md:text-left text-gray-400">
              We've successfully helped Fortune100/500 companies and start-ups
              alike to deliver tailored solutions with technical excellence.
            </p>
          </div>
        </div>
        <div className=" flex flex-col md:flex-row ">
          <div className=" w-[100%] md:w-1/4 flex justify-items-center">
            <img src={svg2} className="max-w-[100px] mx-auto" />
          </div>
          <div className="w-[100%] px-5 md:w-3/4">
            <h1 className="text-center md:text-left text-xl py-5">
              Technology Expertise
            </h1>
            <p className=" text-sm sm:text-base text-center md:text-left text-gray-400">
              Our team of technology professionals and project managers have
              broad experience across various IT, building & energy technology,
              and services projects to deliver comprehensive and complete
              solutions.
            </p>
          </div>
        </div>
        <div className=" flex flex-col md:flex-row ">
          <div className=" w-[100%] md:w-1/4 flex justify-items-center">
            <img src={svg3} className="max-w-[100px] mx-auto" />
          </div>
          <div className="w-[100%] px-5 md:w-3/4">
            <h1 className="text-center md:text-left text-xl py-5">
              Vender Agnostic
            </h1>
            <p className=" text-sm sm:text-base text-center md:text-left text-gray-400">
              We’re vendor independent and free to choose the best solution for
              every project spanning a broad range of industries, to educational
              institutions, and government entities.
            </p>
          </div>
        </div>
        <div className=" flex flex-col md:flex-row ">
          <div className=" w-[100%] md:w-1/4 flex justify-items-center">
            <img src={svg4} className="max-w-[100px] mx-auto" />
          </div>
          <div className="w-[100%] px-5 md:w-3/4">
            <h1 className="text-center md:text-left text-xl py-5">
              Diverse Experience
            </h1>
            <p className=" text-sm sm:text-base text-center md:text-left text-gray-400">
              We are one of the few consulting firms with the ability and
              expertise to deal with all aspects of infrastructure – developing
              customer-centric solutions to complex requirements.
            </p>
          </div>
        </div>
      </div>
      <div className=" flex flex-col  items-center justify-center gap-5">
        <h1 className=" w-[100%] px-3 mx-auto text-2xl sm:text-3xl  font-bold text-center my-5">
          Our Mission
        </h1>
        <p className=" w-[100%]  text-sm sm:text-base text-center text-gray-400">
          We are a full-service Information & Communications Technologies
          working with architects, , integrated solutions.
        </p>
        <button className=" my-5 text-white bg-black  px-5 py-2 rounded-md">
          <Link to="/contactus">Request a Consultation</Link>
        </button>
      </div>
    </div>
  );
};

export default ITConsultancySection2;
