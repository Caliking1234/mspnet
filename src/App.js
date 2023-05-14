import "./App.css";
import Navbar from "./components/Navbar";
import Slider from "./components/HompageScreen/ImgSlider";
import Cards from "./components/HompageScreen/Cards";
import ApplicationCards from "./components/HompageScreen/ApplicationCards";
import Footer from "./components/Footer";
import ITProjects from "./components/HompageScreen/ITProjects";
import FadeSlider from "./components/HompageScreen/FadeSlider";
function App() {
  return (
    <div className=" font-customised1 bg-black">
      <Navbar />
      <Slider />
      <Cards />
      <FadeSlider />
      {/* <ApplicationCards /> */}
      <ITProjects />
      <Footer />
    </div>
  );
}

export default App;
