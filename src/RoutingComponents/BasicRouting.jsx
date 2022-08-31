import React from "react";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import App from "../App";
import Nav from "../Nav";
import Profiles from "../Profiles";


const BasicRouting = () => {
  return (
    <div>
        <Nav/> 
      <Router>
        <Routes>
          <Route path="/" element={App} />
          <Route path="/Profiles" element={Profiles} />
          <Route path="*" element={ErrorPage} />
        </Routes>
      </Router>
    </div>
  );
};

export default BasicRouting;
