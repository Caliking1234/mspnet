import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import NetworkOptiSEction from "./NetworkOptimizationScreen/NetworkOptiSEction";
const NetworkOptimization = () => {
  return (
    <div className=" w-full">
      <Navbar />
      <NetworkOptiSEction />
      <Footer />
    </div>
  );
};

export default NetworkOptimization;
