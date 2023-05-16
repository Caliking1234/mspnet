import React from "react";
import Typed from "react-typed";
import DevicesOtherIcon from "@mui/icons-material/DevicesOther";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import ConstructionIcon from "@mui/icons-material/Construction";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Cards = () => {
  return (
    <div className=" my-5 text-center flex flex-col justify-center items-center h-[calc(50vh-80px)] text-white font-extrabold">
      <div className=" flex flex-row">
        <h1 className=" text-base sm:text-3xl lg:text-4xl">
          Providing Solutions For
        </h1>
        <Typed
          className=" text-base sm:text-2xl lg:text-4xl pl-2 bg-gray-300 rounded-md mx-2 text-black font-customised2"
          strings={[
            "Managed Service",
            "Consulting Service",
            "Break-Fix Service",
          ]}
          typeSpeed={150}
          backSpeed={200}
          loop
        />
      </div>
      <p className=" my-5 text-gray-500 font-customised2">
        You Unique IT problem Requires,An unique IT Solution
      </p>
    </div>
  );
};

export default Cards;
