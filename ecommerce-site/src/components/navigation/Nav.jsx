import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React from "react";
import Home from "../../pages/home/Home";
import Reg_nav from "./register-nav/Reg_nav";
import Products from "../../pages/products/Products";
import About from "../../pages/about/About";
import Help from "../../pages/help/Help";
import Get_started from "../../pages/get-started/Get_started";
import Reg from "../../pages/registration/Reg";

const Nav = () => {
  return (
    <div>
      <Router>
        <Reg_nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
          <Route path="/registration" element={<Reg />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Nav;
