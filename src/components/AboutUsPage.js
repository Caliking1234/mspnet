import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AboutUsContent from "./AboutUsPageScreen/AboutUsContent";

const AboutUsPage = () => {
  return (
    <div className=" w-full min-h-screen mt-[80px] bg-cyan-700">
      <Navbar />
      <AboutUsContent />
      <Footer />
    </div>
  );
};

export default AboutUsPage;
