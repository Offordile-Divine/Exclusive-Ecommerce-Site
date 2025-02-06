import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { LuUser2 } from "react-icons/lu";
import { GoLocation } from "react-icons/go";
import { TbMessageCircleUser } from "react-icons/tb";

const ProfileEditDelete = () => {
 return (
 <div className="submitAddress">
 <div className="deliveryOpt">
 <Link>
 <FaArrowLeft id="arrowBack" />
 </Link>
 <div className="linkbtn">
 <Link id="addressId">Delivery Address</Link>
 <Link
 to="/profile/myAdddress/deliveryDrop"
 id="btn_newAddress"
 onClick={() => setSummitLayout(1)}
 >
 Add new Address
 </Link>
 </div>
 </div>
 <div className="userDetail">
 <div className="user_info">
 <p id="defaultDeliveryAddress">Default Delivery Address</p>
 <div className="delEdit">
 <Link id="user_del">Delete</Link>
 <Link to={`/profile/myAddress/deliveryDrop`} id="user_edit">
 Edit
 </Link>
 </div>
 </div>
 <div className="usersData">
 <div className="userDataDetail">
 <LuUser2 id="iconPersonal" />
 <p id="personalUserInfo">Bruce</p>
 </div>
 <div className="userDataDetail">
 <GoLocation id="iconPersonal" />
 <p id="personalUserInfo">Customer Address</p>
 </div>
 <div className="userDataDetail">
 <TbMessageCircleUser id="iconPersonal" />
 <p id="personalUserInfo">Customers Phone Number</p>
 </div>
 </div>
 </div>
 </div>
 );
};

export default ProfileEditDelete;

