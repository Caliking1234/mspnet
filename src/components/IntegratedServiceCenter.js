import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import IntegratedSection1 from "./IntegratedServicesCenterScreen/IntegratedSection1";
import IntegratedSection2 from "./IntegratedServicesCenterScreen/IntegratedSection2";

const IntegratedServiceCenter = () => {
  return (
    <div className=" w-full">
      <Navbar />
      <IntegratedSection1 />
      <IntegratedSection2 />
      <Footer />
    </div>
  );
};

export default IntegratedServiceCenter;
