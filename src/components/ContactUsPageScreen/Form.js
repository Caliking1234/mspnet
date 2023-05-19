import React from "react";
import ContacUsGif from "../../images/contactus.gif";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";

const Form = () => {
  return (
    <div className="w-[95%] min-h-screen mx-auto flex justify-center items-center ">
      <div className=" w-[100%] h-[70%] sm:min-h-[85%] bg-gray-200 sm:bg-white rounded-md flex flex-col sm:flex-row">
        <div className=" w-full sm:w-1/2 flex flex-col justify-around items-center sm:min-h-[100%]">
          <h1 className=" text-3xl sm:text-5xl font-bold tracking-wide text-gray-400">
            Contact Us
          </h1>
          <div className=" hidden sm:block">
            <div className="flex flex-row sm:flex-col sm:gap-4 text-gray-400 my-5">
              <a className=" hover:text-white" href="#">
                <i className="flex">
                  <LocationOnIcon fontSize="small" />
                  <p className=" sm:px-1 text-xs sm:text-sm">
                    our location :- APAC | EMEA | Americas
                  </p>
                </i>
              </a>
              <a className=" hover:text-white" href="#">
                <i className="flex">
                  <EmailIcon fontSize="small" />
                  <p className=" sm:px-1 text-xs sm:text-sm">
                    email :- sales@msptechnet.com
                  </p>
                </i>
              </a>
              <a className=" hover:text-white" href="#">
                <i className="flex">
                  <CallIcon fontSize="small" />
                  <p className=" sm:px-1 text-xs sm:text-sm">
                    Call Us :- +917827905347
                  </p>
                </i>
              </a>
            </div>
          </div>
          <img src={ContacUsGif} className="hidden sm:block max-w-[200px]" />
        </div>
        <div className=" w-full py-5 sm:py-0 sm:w-1/2 sm:min-h-[100%] flex flex-col items-center justify-center bg-gray-200 rounded-md">
          <form
            action=""
            className=" w-[90%] min-h-full flex flex-col items-center justify-center gap-3"
          >
            <input
              type="text"
              placeholder="Name"
              className=" ring ring-white w-full text-xs  rounded-sm px-4 py-2 outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="email"
              placeholder="email"
              className=" ring ring-white w-full text-xs  rounded-sm px-4 py-2 outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="number"
              placeholder="phone number"
              className=" ring ring-white w-full text-xs  rounded-sm px-4 py-2 outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="text"
              placeholder="company"
              className=" ring ring-white w-full text-xs  rounded-sm px-4 py-2 outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="text"
              placeholder="position"
              className=" ring ring-white w-full text-xs  rounded-sm px-4 py-2 outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="text"
              placeholder="company's industry"
              className=" ring ring-white w-full text-xs  rounded-sm px-4 py-2 outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="number"
              placeholder="no of employees"
              className=" ring ring-white w-full text-xs  rounded-sm px-4 py-2 outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="text"
              placeholder="country"
              className=" ring ring-white w-full text-xs  rounded-sm px-4 py-2 outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="text"
              placeholder="website"
              className=" ring ring-white w-full text-xs  rounded-sm px-4 py-2 outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="text"
              placeholder="type of query"
              className=" ring ring-white w-full text-xs  rounded-sm px-4 py-2 outline-none focus:ring-2 focus:ring-black"
            />
            <button className=" w-1/2  py-2 px-5 text-white bg-cyan-700 hover:bg-white hover:text-cyan-700  hover:border-black hover:border-solid hover:border-[1px] ease-in duration-150 delay-75">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
