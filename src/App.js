import React from "react";
import Home from "./components/Home";
import Admin from "./components/Admin";
import Company from "./components/Company";
import Applicant from "./components/Applicant";
import CultureType from "./components/CultureType";
import Matches from "./components/Matches";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/CultureType" element={<CultureType />} />
        <Route path="/Company" element={<Company />} />
        <Route path="/Applicant" element={<Applicant />} />
        <Route path="/matches/:culture_type" element={<Matches />} />
      </Routes>
    </Router>
  );
}

export default App;
