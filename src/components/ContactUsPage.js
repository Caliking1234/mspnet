import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Form from "./ContactUsPageScreen/Form";

const ContactUsPage = () => {
  return (
    <div className=" w-full min-h-screen mt-[80px] bg-cyan-700">
      <Navbar />
      <Form />
      <Footer />
    </div>
  );
};

export default ContactUsPage;
