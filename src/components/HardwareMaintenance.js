import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HardwareMaintenanceSection1 from "./HardwareMaintenanceScreen/HardwareMaintenanceSection1";
import HardwareMaintenanceSection2 from "./HardwareMaintenanceScreen/HardwareMaintenanceSection2";

const HardwareMaintenance = () => {
  return (
    <div className=" w-full">
      <Navbar />
      <HardwareMaintenanceSection1 />
      <HardwareMaintenanceSection2 />
      <Footer />
    </div>
  );
};

export default HardwareMaintenance;
