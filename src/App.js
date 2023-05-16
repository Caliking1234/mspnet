import "./App.css";
import Navbar from "./components/Navbar";
import Slider from "./components/HompageScreen/ImgSlider";
import Services from "./components/HompageScreen/Services";
import Cards from "./components/HompageScreen/Cards";
import ApplicationCards from "./components/HompageScreen/ApplicationCards";
import Footer from "./components/Footer";
import ITProjects from "./components/HompageScreen/ITProjects";
import FadeSlider from "./components/HompageScreen/FadeSlider";
import Partners from "./components/Partners";
import ExtraSection from "./components/HompageScreen/ExtraSection";
import CaseStudy from "./components/HompageScreen/CaseStudy";
function App() {
  return (
    <div className=" font-customised1">
      <Navbar />
      <Slider />
      <Services />
      {/* <Cards /> */}
      {/* <FadeSlider /> */}
      <ApplicationCards />
      <ITProjects />
      <ExtraSection />
      <Partners />
      <CaseStudy />
      <Footer />
    </div>
  );
}

export default App;
