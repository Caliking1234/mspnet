import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import RiskSecuritySection from "./RiskSecurityManagementScreen/RiskSecuritySection";

const RiskSecurityManagement = () => {
  return (
    <div>
      <Navbar />
      <RiskSecuritySection />
      <Footer />
    </div>
  );
};

export default RiskSecurityManagement;
