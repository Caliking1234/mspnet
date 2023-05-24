import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ManagedServicesSection1 from "./ManagedServicesScreen/ManagedServicesSection1";

const ManagedITServices = () => {
  return (
    <div className="w-full">
      <Navbar />
      <ManagedServicesSection1 />
      <Footer />
    </div>
  );
};

export default ManagedITServices;
