import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HardwareRefreshSection1 from "./HardwareRefreshScreen/HardwareRefreshSection1";
import HardwareRefreshSection2 from "./HardwareRefreshScreen/HardwareRefreshSection2";

const HardwareRefresh = () => {
  return (
    <div className=" w-full">
      <Navbar />
      <HardwareRefreshSection1 />
      <HardwareRefreshSection2 />
      <Footer />
    </div>
  );
};

export default HardwareRefresh;
