import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WANOptiSection from "./WANOptiScreen/WANOptiSection";
import WANOptiSection2 from "./WANOptiScreen/WANOptiSection2";

const WanOptimization = () => {
  return (
    <div className=" w-full">
      <Navbar />
      <WANOptiSection />
      <WANOptiSection2 />
      <Footer />
    </div>
  );
};

export default WanOptimization;
