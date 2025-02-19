import React, { useContext, useEffect, useState } from "react";
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


  return (
    <nav className="ProfileDropDown p-2">
      <div className="tog">
        <div className="flex items-center gap-2" onClick={handleClick}>
          <span id="tog_prof">Profile</span>
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
    </nav>

  )
};

export default ProfileDropdown;

