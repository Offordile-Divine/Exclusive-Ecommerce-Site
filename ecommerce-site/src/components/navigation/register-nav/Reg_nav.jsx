import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "./regNav.css";
const Reg_nav = () => {
  return (
    <div className="reg_nav">
      <Link to="/">
        <h1>Company</h1>
      </Link>
      <div className="nav_dir">
        <div className="input">
          <input type="text" placeholder="What are you looking for" />
          <FaSearch />
        </div>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/help">Help</Link>
        <Link to="/registration">Register</Link>
      </div>
    </div>
  );
};

export default Reg_nav;
