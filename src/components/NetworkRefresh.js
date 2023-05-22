import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import NetworkRefreshSection from "./NetworkRefreshScreen/NetworkRefreshSection";

const NetworkRefresh = () => {
  return (
    <div className="w-full">
      <Navbar />
      <NetworkRefreshSection />
      <Footer />
    </div>
  );
};

export default NetworkRefresh;
