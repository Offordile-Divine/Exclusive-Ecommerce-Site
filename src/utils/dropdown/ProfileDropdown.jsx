
import React, { useContext, useEffect, useState ,useRef} from "react";
import { Link, useNavigate } from "react-router-dom";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { SlArrowDown } from "react-icons/sl";
import { IoIosArrowUp } from "react-icons/io";
import "./dropdown.css";
import { IoIosArrowDown } from "react-icons/io";
import { AppContext } from "../../App";
import { CgProfile } from "react-icons/cg";
import { CiHome } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
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
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { AuthContext } from "../../context/AuthProvider";
import axios from "axios";

const ProfileDropdown = () => {
  const [click, setClick] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const dropDownRef = useRef(null)
  const dropRef2=useRef(null)

  const navigate = useNavigate();

  const { isAuthenticated } = useContext(AuthContext);

  const handleClick = () => {
    setClick(!click);
  };

  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("accessToken");
    // console.log("Token", token, "UserId", userId);

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
          const { firstname, lastname } = response.data.data;
          setFirstname(firstname);
          console.log(firstname);
          setLastname(lastname);
        }
        console.log(response);
      } catch (err) {
        console.error("Error occured", err.response);
      }
    };

    fetchUserDetail();
  }, [navigate]);

  console.log(dropDownRef)

  useEffect(() => {
    function handleOutsideClick(e) {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)&&dropRef2.current && !dropRef2.current.contains(e.target)) {
        setClick(false)
    
      }
    }
    document.addEventListener('mousedown', handleOutsideClick)
    return () => { document.removeEventListener('mousedown', handleOutsideClick) }
  }, [])

  return (
    <nav className="relative p-2">
      <div className="tog">
        <div ref={dropRef2} className="flex items-center gap-2" onClick={handleClick}>
          <span id="tog_prof" className="relative flex items-center gap-2">
          {<CgProfile size={20} />} 
          <p className="max-lg:hidden">Profile</p>
          </span>
          {click ? (
            <IoIosArrowDown
              style={{
                cursor: "pointer",
                textAlign: "center",
              }}
            />
          ) : (
            <IoIosArrowUp
              style={{
                cursor: "pointer",
                textAlign: "center",
              }}
            />
          )}
        </div>
      </div>
      <ol ref={dropDownRef} className={click ? "prof_toggle active bg-[#fdfbfb] fixed  top-20 w-[250px] rounded-[7px] right-[9%] shadow-[0px_4px_10px_rgba(0,0,0,0.3)] " : "prof_toggle "}>
        {isAuthenticated ? (
          <h1 id="customerName">
            Hii,{firstname} {lastname}
          </h1>
        ) : (
          <h1>No User</h1>
        )}

        <li className="prof_tog">
          <Link to="/profile" className="rm">
            My profile {<CgProfile size={20} />}
          </Link>
        </li>

        <li className="prof_tog">
          <Link to="/orders" className="rm">
            Orders {<MdOutlineFavoriteBorder size={20} />}
          </Link>
        </li>
        <li className="prof_tog">
          <Link to="/savedItems" className="rm">
            Saved Items
            {<MdOutlineFavoriteBorder size={20} />}
          </Link>
        </li>
        <li className="prof_tog">
          <Link to="/inbox" className="rm">
            Inbox {<MdOutlineForwardToInbox size={20} />}
          </Link>
        </li>
        <li className="prof_tog">
          <Link to="/track" className="rm">
            Track My Order {<MdOutlineTrackChanges size={20} />}
          </Link>
        </li>
        <li className="prof_tog">
          <Link to="/paymentWallet" className="rm">
            Payment/Wallet Setting {<RiSecurePaymentLine size={20} />}
          </Link>
        </li>
        <li className="prof_tog">
          <Link to="/logOut" className="rm">
            Log Out {<IoMdLogOut size={20} />}
          </Link>
        </li>
      </ol>
    </nav>

  )
};

export default ProfileDropdown;
