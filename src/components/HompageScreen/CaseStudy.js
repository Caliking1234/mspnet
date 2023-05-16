import React from "react";
import Edu from "../../images/edu.jpg";
import Medi from "../../images/medi.png";
import Hospitality from "../../images/hospitality.jpg";
import Manu from "../../images/manufacturing.jpg";

const CaseStudy = () => {
  return (
    <div className=" bg-gray-200">
      <div className=" w-full text-center text-4xl font-extrabold pt-10 pb-5">
        <h1>Case Studies & Customer Success Stories</h1>
      </div>
      <div className=" flex flex-col md:flex-row gap-5 items-center justify-center py-5">
        <div className=" text-center text-xl text-blue-500 py-5">
          <img className=" w-[280px] h-[160px]" src={Edu} />
          <p className=" mt-5">Education</p>
        </div>
        <div className=" text-center text-xl text-blue-500 py-5">
          <img className=" w-[280px] h-[160px]" src={Medi} />
          <p className=" mt-5">Healthcare</p>
        </div>
        <div className=" text-center text-xl text-blue-500 py-5">
          <img className=" w-[280px] h-[160px]" src={Hospitality} />
          <p className=" mt-5">Hospitality</p>
        </div>
        <div className=" text-center text-xl text-blue-500 py-5">
          <img className=" w-[280px] h-[160px]" src={Manu} />
          <p className=" mt-5">Manufacturing</p>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
