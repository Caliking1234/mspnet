import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProactiveSection1 from "./ProactiveScreen/ProactiveSection1";
import ProactiveSection2 from "./ProactiveScreen/ProactiveSection2";

const Proactive = () => {
  return (
    <div className=" w-full">
      <Navbar />
      <ProactiveSection1 />
      <ProactiveSection2 />
      <Footer />
    </div>
  );
};

export default Proactive;
