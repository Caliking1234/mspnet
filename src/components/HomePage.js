import React from "react";
import Navbar from "./Navbar";
import Slider from "./HompageScreen/ImgSlider";
import Services from "./HompageScreen/Services";
import ApplicationCards from "./HompageScreen/ApplicationCards";
import Footer from "./Footer";
import ITProjects from "./HompageScreen/ITProjects";
import Partners from "./Partners";
import ExtraSection from "./HompageScreen/ExtraSection";
import CaseStudy from "./HompageScreen/CaseStudy";
import AnotherSection from "./HompageScreen/AnotherSection";

const HomePage = () => {
  return (
    <div>
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
