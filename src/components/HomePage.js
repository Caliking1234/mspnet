import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Slider from "./HompageScreen/ImgSlider";
import Services from "./HompageScreen/Services";
import ApplicationCards from "./HompageScreen/ApplicationCards";
import ITProjects from "./HompageScreen/ITProjects";
import Partners from "./HompageScreen/Partners";
import ExtraSection from "./HompageScreen/ExtraSection";
import CaseStudy from "./HompageScreen/CaseStudy";
import AnotherSection from "./HompageScreen/AnotherSection";
// import IntegratedServiceCenter from "./IntegratedServiceCenter";

// import list1 from "./HompageScreen/list1.js";

const HomePage = () => {
  return (
    <div>
      {/* <IntegratedServiceCenter /> */}
      <Navbar />
      <Slider />
      <Services />
      <ApplicationCards />
      <ITProjects />
      <ExtraSection />
      <Partners />
      <CaseStudy />
      <AnotherSection />
      <Footer />
    </div>
  );
};

export default HomePage;
