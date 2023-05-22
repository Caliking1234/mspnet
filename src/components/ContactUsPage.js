import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Form from "./ContactUsPageScreen/Form";
import Form2 from "./ContactUsPageScreen/Form2";

const ContactUsPage = () => {
  return (
    <div className=" w-full min-h-screen mt-[80px] bg-cyan-700">
      <Navbar />
      <Form2 />
      <Footer />
    </div>
  );
};

export default ContactUsPage;
