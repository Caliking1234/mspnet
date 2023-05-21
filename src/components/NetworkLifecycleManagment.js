import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import NetworkSection1 from "./NetworkLifecycleManagmentScreen/NetworkSection1";

const NetworkLifecycleManagment = () => {
  return (
    <div className=" w-full">
      <Navbar />
      <NetworkSection1 />
      <Footer />
    </div>
  );
};

export default NetworkLifecycleManagment;
