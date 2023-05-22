import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import NetworkMigrationSection2 from "./NetworkMigrationScreen/NetworkMigrationSection2";
import NetworkMigrationSection1 from "./NetworkMigrationScreen/NetworkMigrationSection1";

const NetworkMigration = () => {
  return (
    <div className=" w-full">
      <Navbar />
      <NetworkMigrationSection1 />
      <NetworkMigrationSection2 />
      <Footer />
    </div>
  );
};

export default NetworkMigration;
