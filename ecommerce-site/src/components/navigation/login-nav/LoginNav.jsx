import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";
import { BiLogoApple } from "react-icons/bi";
import "../nav.css";
import HelpDropdown from "../../../utils/dropdown/HelpDropdown";

const LoginNav = () => {
  return (
    <div>
      <div className="log_nav">
        <Link to="/" id="logo" style={{ textDecoration: "none" }}>
          {<BiLogoApple />} <h1>Company</h1>
        </Link>
        <div className="nav_dir">
          <div className="input">
            <input type="text" placeholder="What are you looking for" />
            <FaSearch />
          </div>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          {/* <Link id="help" to="/help">
            Help
            {<SlArrowDown style={{ marginLeft: "3px", fontSize: "10px" }} />}
          </Link> */}

          <HelpDropdown />
          <Link id="loginNav" to="/login">
            Login
          </Link>
        </div>
      </div>
      <hr id="line" />
    </div>
  );
};

export default LoginNav;
