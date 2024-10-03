import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React from "react";
import Home from "../../pages/home/Home";
import Reg_nav from "./register-nav/Reg_nav";
import Products from "../../pages/products/Product";
import About from "../../pages/about/About";
import Help from "../../pages/help/Help";
import Get_started from "../../pages/get-started/Get_started";
import Reg from "../../pages/registration/Reg";
import LoginNav from "./login-nav/LoginNav";
import Login from "../../pages/log-in/Login";
import Profile from "../../pages/profile/Profile";
import Carts from "../../pages/carts/Carts";


const Nav = () => {
  return (
    <div>
      <Router>
        {/* <Reg_nav /> */}
        {/* <LoginNav /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
          <Route path="/registration" element={<Reg />} />
          <Route path="/login" element={<Login />} />
          <Route path="/getStarted" element={<Get_started />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Carts/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default Nav;
