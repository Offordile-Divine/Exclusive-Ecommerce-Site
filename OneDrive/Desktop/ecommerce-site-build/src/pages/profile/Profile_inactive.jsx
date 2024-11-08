import React, { Children, useState } from "react";
import HomeNav from "../../components/navigation/home-nav/HomeNav";
import TpsNav from "../../components/navigation/terms-privacy-support-nav/TpsNav";
import { Link, Outlet, RouterProvider } from "react-router-dom";
import "./profile.css";
import { BsSlashLg } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import ManagementDrop from "../../utils/dropdown/profile-dropdown/ManagementDrop";
import OrderProfileDrop from "../../utils/dropdown/profile-dropdown/OrderProfileDrop";
import WalletProfileDrop from "../../utils/dropdown/profile-dropdown/WalletProfileDrop";
import ProfileInactive from "./profileInfo/ProfileInactive";
import ProfileAccountInfo from "./profileInfo/ProfileAccountInfo";
import ProfileDeliveryDrop from "./profileInfo/ProfileDeliveryDrop";
import ProfileSubmitAddress from "./profileInfo/ProfileSubmitAddress";

const Profile_inactive = (props) => {
  const [profileLayout, setProfileLayout] = useState(0);
  return (
    <div>
      <HomeNav />
      <div className="profile_inactive">
        <div className="pi_nav">
          <Link to="/">Home</Link>
          <BsSlashLg id="pi_icon" />
          <Link className="proof" to="/profile">
            Profile
          </Link>
          <BsSlashLg id="pi_icon" />
          <Link className="pi_focus">Account Information</Link>
        </div>
        <section className="section_inaction">
          <div className="profDrop">
            {/* <ManagementDrop setLayout={(x) => setProfileLayout(x)} /> */}
            <ManagementDrop />
            <OrderProfileDrop />
            <WalletProfileDrop />
          </div>
          <div className="wrap-layout">
            <Outlet />
            {/* // Inactive */}
            {/* {profileLayout === 0 && <ProfileAccountInfo />} */}
            {/* Profile Delivery Drop */}
            {/* {profileLayout === 1 && <ProfileDeliveryDrop />} */}
            {/* Profile  Delivery info */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile_inactive;
