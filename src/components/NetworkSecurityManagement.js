import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import NetworkSecuritySection1 from "./NetworkSecurityScreen/NetworkSecuritySection1";

const NetworkSecurityManagement = () => {
  return (
    <div className=" w-full">
      <Navbar />
      <NetworkSecuritySection1 />
      <Footer />
    </div>
  );
};

export default NetworkSecurityManagement;
