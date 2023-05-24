import React from "react";
import { Link } from "react-router-dom";

const BreakFixSection = () => {
  return (
    <div className=" py-6 w-full  bg-gradient-to-r from-blue-700  to-indigo-700 text-white mt-[100px] mb-[20px] ">
      <div className=" w-full text-center">
        <div className=" text-3xl font-extrabold py-5 px-3">
          <h1>Customizable IT Network Support Service Levels</h1>
        </div>
        <div className=" text-sm py-5 px-3">
          <p>
            Adjust service levels or add and delete equipment from your IT
            network maintenance contract at any time.
          </p>
        </div>
      </div>
      <div className=" flex flex-col lg:flex-row items-center justify-around font-bold gap-6">
        <div className=" w-full lg:w-[300px] px-3">
          <div>
            <li className=" list-disc ">7 x 24 x 4</li>
          </div>
          <div className=" ml-4 py-3 text-sm">
            <li className=" list-disc ">24 hours a day, 7 days a week</li>
          </div>
          <div className=" ml-4 py-3 text-sm">
            <li className=" list-disc ">Initial phone-based diagnosis</li>
          </div>
          <div className=" ml-4 py-3">
            <li className=" list-disc text-sm">
              Field Engineer on-site (if required) within 4 hours after customer
              contact
            </li>
          </div>
        </div>
        <div className=" w-full lg:w-[300px] px-3">
          <div>
            <li className=" list-disc ">5 x 9 x 4</li>
          </div>
          <div className=" ml-4 py-3">
            <li className=" list-disc text-sm">
              8:00 AM to 5:00 PM, Monday through Friday
            </li>
          </div>
          <div className=" ml-4 py-3">
            <li className=" list-disc text-sm">
              Initial phone-based diagnosis
            </li>
          </div>
          <div className=" ml-4 py-3">
            <li className=" list-disc text-sm">
              Field Engineer on-site (if required) within 4 hours after customer
              contact
            </li>
          </div>
        </div>
        <div className=" w-full lg:w-[300px] px-3">
          <div>
            <li className=" list-disc ">Next Day</li>
          </div>
          <div className=" ml-4 py-3">
            <li className=" list-disc text-sm ">
              Initial phone-based diagnosis
            </li>
          </div>
          <div className=" ml-4 py-3">
            <li className=" list-disc text-sm">
              Field Engineer on-site (if required) the following business day
              after customer contact
            </li>
          </div>
        </div>
      </div>
      <div className=" w-full flex justify-center items-center my-7">
        <Link to="/contactus">
          <button className=" bg-green-700 rounded-md  px-5 py-3 ">
            GET SUPPORT
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BreakFixSection;
