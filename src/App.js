import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ContactUsPage from "./components/ContactUsPage";
function App() {
  return (
    <div className=" font-customised1">
      <Router>
        <Routes>
          <Route path="/mspnet" element={<HomePage />} exact />
          <Route path="/contactus" element={<ContactUsPage />} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
