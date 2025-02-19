import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import ManagementDrop from "../../../utils/dropdown/profile-dropdown/ManagementDrop";
import OrderProfileDrop from "../../../utils/dropdown/profile-dropdown/OrderProfileDrop";
import WalletProfileDrop from "../../../utils/dropdown/profile-dropdown/WalletProfileDrop";
import { CgProfile } from "react-icons/cg";
import { CiHome } from "react-icons/ci";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
import { MdOutlineTrackChanges } from "react-icons/md";
import { MdOutlineSaveAlt } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdOutlinePolicy } from "react-icons/md";
import { MdContactMail } from "react-icons/md";
import { FaQuestion } from "react-icons/fa";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import { IoMdLogOut } from "react-icons/io";
import { LiaTimesSolid } from "react-icons/lia";
import { AuthContext } from "../../../context/AuthProvider";
import axios from "axios";

const HomeNav = () => {
  const [click1, setClick1] = useState(false);
  const [click2, setClick2] = useState(false);
  const [cancel, setCancel] = useState(true);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const { isAuthenticated } = useContext(AuthContext);

  const handleClick1 = () => {
    setClick1(!click1);
  };

  const handleClick2 = () => {
    setClick2(!click2);
  };

  const handleCancel = () => {
    setCancel(!cancel);
  };

  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("accessToken");
    console.log("Token", token, "UserId", userId);

    if (!token) {
      navigate("/login");
    }

    const fetchUserDetail = async () => {
      const authLogin = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
      try {
        const response = await axios.get(
          `https://one00daysofcoding.onrender.com/user/v1/profile`,
          authLogin
        );

        if (response.status === 200) {
          const { firstname, lastname, email } = response.data.data;
          setFirstname(firstname);
          setLastname(lastname);
          setEmail(email);
        }
        console.log(response);
      } catch { }
    };

    fetchUserDetail();
  }, [navigate]);
  return (

    <header className="h-[65px]  z-[10001] top-0 left-0 right-0 fixed bg-white shadow-[0px_3px_2px_rgba(0,0,0,0.3)]">
      <nav className=" w-full h-full flex px-4">
        <div className=" flex w-full ">
          <li className="text-3xl font-bold text-[#161c2d] ">
            <Link to="/" id="logo" className="block w-full h-full" style={{ textDecoration: "none" }}>
              {<BiLogoApple size={35} />}
              Company
            </Link>
          </li>

          <li className="flex flex-1 my-2">
            <div className=" w-full flex justify-center ">
              <div className="flex w-full md:w-[560px] items-center pl-4 gap-2">
                <span className="w-full border border-[#808080de] p-2 rounded-[3px] flex items-center">
                  <BiSearchAlt2 size={20} />
                  <input type="text" className="w-[100%] pl-2 font-Noto font-normal" placeholder="What are you looking for" />
                </span>

              </div>
            </div>
          </li>
          {/* {isAuthenticated ? (
              <></>
            ) : (
              <div className="logReg2">
                <Link id="navLogLink2" to="/registration">
                  Login
                </Link>
                <Link id="register2" to="/registration">
                  Register
                </Link>
              </div>
            )} */}
          < li className="flex items-center ml-auto font-Noto font-[600]">
            {/* <Link to="/products">Products</Link> */}
            {/* <Link to="/about" >About</Link> */}
            <ProfileDropdown />
            <HelpDropdown />
            <Link to="/cart" className="prof p-2">
              {<MdAddShoppingCart size={20} />}
              Cart
            </Link>
          </li>

        </div>
      </nav>
    </header>

  );
};

export default HomeNav;
{/*<>

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

      <ul className={click1 ? "mbNavHome_toggle active" : "mbNavHome_toggle"}>
        <ManagementDrop />
        <OrderProfileDrop />
        <WalletProfileDrop />
      </ul>

     <ul
        className={click2 ? "mbHamburger_toggle active" : "mbHamburger_toggle"}
      >
        {/* !Important 

        <div className="cancelClick">
          <button onClick={handleClick2}>
            <LiaTimesSolid />
          </button>
        </div>

        {isAuthenticated ? (
          <div className="userAcctDetail">
            <div className="firstLetterDiv">
              <h1 className="firstLetter">{firstname.charAt(0)}</h1>
            </div>
            <div className="userDetailDescription">
              <h3>
                {firstname} {lastname}
              </h3>
              <p>{email}</p>
              <Link>Edit Profile</Link>
            </div>
          </div>
        ) : (
          <div className="wrapRegLog">
            <div className="logINUserDetail">
              <Link to="/login">Login</Link>
            </div>
            <div className="registerUserDetail">
              <Link to="/registration">Register</Link>
            </div>
          </div>
        )}

        <hr />
        <div className="homeLinkNavWrap">
          <li className="mbNavHome_tog">
            <Link to="/" className="homeNavRm" onClick={handleClick2}>
              Home {<CiHome id="iconHomeNav" />}
            </Link>
          </li>
          <hr />
          <li className="mbNavHome_tog">
            <Link to="/profile" className="homeNavRm" onClick={handleClick2}>
              Profile {<CgProfile id="iconHomeNav" />}
            </Link>
          </li>
          <hr />
          <li className="mbNavHome_tog">
            <Link to="/inbox" className="homeNavRm" onClick={handleClick2}>
              Inbox {<MdOutlineForwardToInbox id="iconHomeNav" />}
            </Link>
          </li>
          <hr />
          <li className="mbNavHome_tog">
            <Link to="/shop" className="homeNavRm" onClick={handleClick2}>
              Product/Categories
              {<MdProductionQuantityLimits id="iconHomeNav" />}
            </Link>
          </li>
          <hr />
          <li className="mbNavHome_tog">
            <Link to="/track" className="homeNavRm" onClick={handleClick2}>
              Track My Orders {<MdOutlineTrackChanges id="iconHomeNav" />}
            </Link>
          </li>
          <hr />
          <li className="mbNavHome_tog">
            <Link to="/savedItems" className="homeNavRm" onClick={handleClick2}>
              Saved Items/Favourites {<MdOutlineSaveAlt id="iconHomeNav" />}
            </Link>
          </li>
          <hr />
          <li className="mbNavHome_tog">
            <Link
              to="/paymentWallet"
              className="homeNavRm"
              onClick={handleClick2}
            >
              Payment/Wallet Setting {<RiSecurePaymentLine id="iconHomeNav" />}
            </Link>
          </li>
          <hr />
          <li className="mbNavHome_tog">
            <Link
              to="/returnPolicy"
              className="homeNavRm"
              onClick={handleClick2}
            >
              Return Policy{<MdOutlinePolicy id="iconHomeNav" />}
            </Link>
          </li>
          <hr />
          <li className="mbNavHome_tog">
            <Link to="/contact" className="homeNavRm" onClick={handleClick2}>
              Contact Us {<MdContactMail id="iconHomeNav" />}
            </Link>
          </li>
          <hr />
          <li className="mbNavHome_tog">
            <Link to="/faq" className="homeNavRm" onClick={handleClick2}>
              Faq {<FaQuestion id="iconHomeNav" />}
            </Link>
          </li>
          <hr />
          <li className="mbNavHome_tog">
            <Link to="/about" className="homeNavRm" onClick={handleClick2}>
              About {<FaPersonCircleQuestion id="iconHomeNav" />}
            </Link>
          </li>
          <hr />
          <li className="mbNavHome_tog">
            <Link to="/logOut" className="homeNavRm" onClick={handleClick2}>
              LogOut {<IoMdLogOut id="iconHomeNav" />}
            </Link>
          </li>
        </div>
      </ul>
</>*/}