import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PenetrationSection1 from "./PenetrationTestingScreen/PenetrationSection1";
const PenetrationTesting = () => {
  return (
    <div className=" w-full">
      <Navbar />
      <PenetrationSection1 />
      <Footer />
    </div>
  );
};

export default PenetrationTesting;
