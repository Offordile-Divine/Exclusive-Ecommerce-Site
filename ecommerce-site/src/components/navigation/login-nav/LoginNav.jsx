import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";
import { BiLogoApple } from "react-icons/bi";
import { IoMdArrowBack } from "react-icons/io";

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

      <div className="registrationNav">
        <div className="mb-regnav">
          <div className="mb-arrowName">
            <Link>
              <IoMdArrowBack id="backArrow" />
            </Link>

            <Link to="/" id="logo" style={{ textDecoration: "none" }}>
              {<BiLogoApple />} <h1 id="companyName">Company</h1>
            </Link>
          </div>
          <div className="userBtn">
            {/* <span onClick={handleClick}>
            <RxHamburgerMenu id="styleLogo" />
          </span> */}
            {/* <Link to="/cart">
            <MdAddShoppingCart id="styleLogo"/>
          </Link> */}
            <Link id="navLogLink" to="/registration">
              Login
            </Link>
          </div>
        </div>
        {/* <div className="inputRegDiv">
          <div className="mbRegInput">
            <input type="text" placeholder="What are you looking for" />
            <CiSearch id="search"/>
          </div>
        </div> */}
      </div>
      <hr id="line" />
    </div>
  );
};

export default LoginNav;
