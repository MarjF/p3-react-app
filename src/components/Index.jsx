import React from "react";
import "./index.css";
import Navbar from "./Navbar/Navbar";
import Mainpage from "./Mainpage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Calculators from "./Calculators/Calculators";
import AboutPage from "../components/AboutPage/AboutPage";

const Index = () => {
  return (
    <div className="mainContainer">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/calculators" element={<Calculators />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Index;
