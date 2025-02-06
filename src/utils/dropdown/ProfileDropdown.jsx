import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { SlArrowDown } from "react-icons/sl";
import { IoIosArrowUp } from "react-icons/io";
import "./dropdown.css";
import { AppContext } from "../../App";
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
 <nav className="ProfileDropDown">
 <div className="tog">
 <div className="prof-icon" onClick={handleClick}>
 <span id="tog_prof">Profile</span>
 {click ? (
 <SlArrowDown
 style={{
 cursor: "pointer",
 textAlign: "center",
 fontSize: "10px",
 marginLeft: "6px",
 }}
 />
 ) : (
 <IoIosArrowUp
 style={{
 cursor: "pointer",
 textAlign: "center",
 marginLeft: "6px",
 }}
 />
 )}
 </div>
 </div>

 <ul className={click ? "prof_toggle active" : "prof_toggle"}>
 {isAuthenticated ? (
 <h1 id="customerName">
 Hii,{firstname} {lastname}
 </h1>
 ) : (
 <h1>No User</h1>
 )}

 <hr />
 <li className="prof_tog">
 <Link to="/profile" className="rm">
 My profile {<CgProfile />}
 </Link>
 </li>
 <hr />
 <li className="prof_tog">
 <Link to="/orders" className="rm">
 Orders {<MdOutlineFavoriteBorder />}
 </Link>
 </li>
 <hr />
 <li className="prof_tog">
 <Link to="/savedItems" className="rm">
 Saved Items
 {<MdOutlineFavoriteBorder />}
 </Link>
 </li>
 <hr />
 <li className="prof_tog">
 <Link to="/inbox" className="rm">
 Inbox {<MdOutlineForwardToInbox />}
 </Link>
 </li>
 <hr />
 <li className="prof_tog">
 <Link to="/track" className="rm">
 Track My Order {<MdOutlineTrackChanges />}
 </Link>
 </li>
 <hr />
 <li className="prof_tog">
 <Link to="/paymentWallet" className="rm">
 Payment/Wallet Setting {<RiSecurePaymentLine />}
 </Link>
 </li>
 <hr />
 <li className="prof_tog">
 <Link to="/logOut" className="rm">
 Log Out {<IoMdLogOut />}
 </Link>
 </li>
 </ul>
 </nav>
 );
};

export default ProfileDropdown;

