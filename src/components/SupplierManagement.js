import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SupplierManagementSection from "./SupplierManagementScreen/SupplierManagementSection";

const SupplierManagement = () => {
  return (
    <div>
      <Navbar />
      <SupplierManagementSection />
      <Footer />
    </div>
  );
};

export default SupplierManagement;
