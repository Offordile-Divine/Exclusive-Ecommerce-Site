import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { SlArrowDown } from "react-icons/sl";
import { BiLogoApple } from "react-icons/bi";
import { MdAddShoppingCart } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { LuUserSquare2 } from "react-icons/lu";
import "../nav.css";
import CartItem from "../../../pages/carts/Cart-item";
import HelpDropdown from "../../../utils/dropdown/HelpDropdown";
import ProfileDropdown from "../../../utils/dropdown/ProfileDropdown";
import { AiOutlineHome } from "react-icons/ai";

const HomeNav = () => {
  const [click1, setClick1] = useState(false);
  const [click2, setClick2] = useState(false);
  

  const handleClick1 = () => {
    setClick1(!click1);
  };

  const handleClick2 = () => {
    setClick2(!click2);
  };
  return (
    <>
      <div className="HomeNav">
        <div className="home_nav">
          <div className="nav_dir">
            <Link to="/" id="logo" style={{ textDecoration: "none" }}>
              {<BiLogoApple />} <h1>Company</h1>
            </Link>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About</Link>
            <HelpDropdown />
          </div>
        </div>
        <div className="loginRgInput">
          <div className="input">
            <input type="text" placeholder="What are you looking for" />
            <FaSearch />
          </div>
          <div className="logReg2">
            <Link id="navLogLink2" to="/registration">
              Login
            </Link>
            <Link id="register2" to="/registration">
              Register
            </Link>
          </div>
        </div>

        <div className="profcart">
          <ProfileDropdown />
          <Link to="/cart" className="prof">
            Carts {<MdAddShoppingCart style={{ marginLeft: "10px" }} />}
          </Link>
        </div>
        <hr id="line" />
      </div>

      <div className="mbHome_nav">
        <div className="mbHome_userNav">
          <span onClick={handleClick2}>
            <RxHamburgerMenu id="UserHomeNavIcon" />
          </span>
          <div>
            <Link to="/" id="logo" style={{ textDecoration: "none" }}>
              {<BiLogoApple />} <h1 style={{ fontSize: "16px" }}>Company</h1>
            </Link>
          </div>
          <div className="mb_UserHomeNav">
            <span onClick={handleClick1}>
              <LuUserSquare2 id="UserHomeNavIcon" />
            </span>
            <Link to="/cart">
              <MdAddShoppingCart id="UserHomeNavIcon" />
            </Link>
          </div>
        </div>
        <div className="mbHamburger_tog">
          <div id="mb_InputHomeNav">
            <input
              type="text"
              id="mb_InputHomeNav"
              placeholder="What are you looking for..."
            />
            <CiSearch />
          </div>
        </div>
      </div>
      <hr id="line" />

      <ul className={click1 ? "mbNavHome_toggle active" : "mbNavHome_toggle"}>
        {/* <h1 id="customerName">Hi, {name ?? "user"}</h1> */}
        <li className="mbNavHome_tog">
          <Link to="/profile" className="homeNavRm">
            My Profile {<LiaGreaterThanSolid />}
          </Link>
        </li>
        <hr />
        <li className="mbNavHome_tog">
          <Link to="/orders" className="homeNavRm">
            Orders {<LiaGreaterThanSolid />}
          </Link>
        </li>
        <hr />
        <li className="mbNavHome_tog">
          <Link to="/savedItems" className="homeNavRm">
            Saved Items {<LiaGreaterThanSolid />}
          </Link>
        </li>
        <hr />
        <li className="mbNavHome_tog">
          <Link to="/inbox" className="homeNavRm">
            Inbox {<LiaGreaterThanSolid />}
          </Link>
        </li>
        <hr />
        <li className="mbNavHome_tog">
          <Link to="/track" className="homeNavRm">
            Track My Orders {<LiaGreaterThanSolid />}
          </Link>
        </li>
        <hr />
        <li className="mbNavHome_tog">
          <Link to="/paymentWallet" className="homeNavRm">
            Payment/Wallet Setting {<LiaGreaterThanSolid />}
          </Link>
        </li>
        <hr />
        <li className="mbNavHome_tog">
          <Link to="/logOut" className="homeNavRm">
            Logout {<LiaGreaterThanSolid />}
          </Link>
        </li>
        <hr />
      </ul>

      <ul
        className={click2 ? "mbHamburger_toggle active" : "mbHamburger_toggle"}
      >
        {/* <h1 id="customerName">Hi, {name ?? "user"}</h1> */}
        <li className="mbNavHome_tog">
          <Link to="/" className="homeNavRm">
            Home <AiOutlineHome />
          </Link>
        </li>
        <hr />
        <li className="mbNavHome_tog">
          <Link to="/products" className="homeNavRm">
            Products {<LiaGreaterThanSolid />}
          </Link>
        </li>
        <hr />
        <li className="mbNavHome_tog">
          <Link to="/about" className="homeNavRm">
            About {<LiaGreaterThanSolid />}
          </Link>
        </li>
        <hr />
        <li className="mbNavHome_tog">
          <Link to="/help" className="homeNavRm">
            Help {<LiaGreaterThanSolid />}
          </Link>
        </li>
        <hr />
      </ul>
    </>
  );
};

export default HomeNav;
