import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CloudMigSection1 from "./CloudMigrationScreen/CloudMIgSection1";
import CloudMidSection2 from "./CloudMigrationScreen/CloudMigSection2";

const CloudMigration = () => {
  return (
    <div className=" w-full">
      <Navbar />
      <CloudMigSection1 />
      <CloudMidSection2 />
      <Footer />
    </div>
  );
};

export default CloudMigration;
