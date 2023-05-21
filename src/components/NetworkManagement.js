import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import NetworkManagementSection1 from "./NetworkManagmentScreen/NetworkManagementSection1";
import NetworkManagementSection2 from "./NetworkManagmentScreen/NetworkManagementSection2";

const NetworkManagement = () => {
  return (
    <div className=" w-full">
      <Navbar />
      <NetworkManagementSection1 />
      <NetworkManagementSection2 />
      <Footer />
    </div>
  );
};

export default NetworkManagement;
