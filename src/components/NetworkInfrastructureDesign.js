import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import NetworkINfraSection from "./NetworkInfrastructureScreen/NetworkINfraSection";

const NetworkInfrastructureDesign = () => {
  return (
    <div className=" w-full">
      <Navbar />
      <NetworkINfraSection />
      <Footer />
    </div>
  );
};

export default NetworkInfrastructureDesign;
