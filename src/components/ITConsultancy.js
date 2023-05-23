import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ITConsultSection1 from "./ITConsultancyscreen/ITConsultSection1";
import ITConsultancySection2 from "./ITConsultancyscreen/ITConsultancySection2";

const ITConsultancy = () => {
  return (
    <div className="w-full">
      <Navbar />
      <ITConsultSection1 />
      <ITConsultancySection2 />
      <Footer />
    </div>
  );
};

export default ITConsultancy;
