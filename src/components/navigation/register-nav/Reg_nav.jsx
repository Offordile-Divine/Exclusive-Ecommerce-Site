import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";
import { BiLogoApple } from "react-icons/bi";
import "../nav.css";
import HelpDropdown from "../../../utils/dropdown/HelpDropdown";
import { LuUserSquare2 } from "react-icons/lu";
import { MdAddShoppingCart } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { MdOutlineLiveHelp } from "react-icons/md";
import { IoMdArrowBack } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { AppContext } from "../../../App";

const Reg_nav = () => {
  const [click, setClick] = useState(false);
  const { name, setName } = useContext(AppContext);

  const handleClick = () => {
    setClick(!click);
  };
  return (
    <div>
      <div className="reg_nav">
        <div className="nav_dir">
          <Link to="/" id="logo" style={{ textDecoration: "none" }}>
            {<BiLogoApple />} <h1>Company</h1>
          </Link>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>

          <HelpDropdown />
        </div>
        <div className="logInput2">
          <div className="input">
            <input type="text" placeholder="What are you looking for" />
            <FaSearch />
          </div>
          <Link id="register" to="/registration">
            Register
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
            <Link id="navRegLink" to="/registration">
              Register
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

      {/* <ul className={click ? "prof_toggle active" : "prof_toggle"}>
        <li className="prof_tog">
          <Link to="/" className="rm">
            Home {<AiOutlineHome />}
          </Link>
        </li>
        <hr />
        <li className="prof_tog">
          <Link to="/products" className="rm">
            Products {<MdOutlineProductionQuantityLimits />}
          </Link>
        </li>
        <hr />
        <li className="prof_tog">
          <Link to="/about" className="rm">
            About {<FcAbout />}
          </Link>
        </li>
        <hr />
        <li className="prof_tog">
          <Link to="/help" className="rm">
            Help {<MdOutlineLiveHelp />}
          </Link>
        </li>
        <hr />
      </ul> */}
    </div>
  );
};

export default Reg_nav;
