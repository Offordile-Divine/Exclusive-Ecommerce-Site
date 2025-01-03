import React, { useState } from "react";
import TpsNav from "../../components/navigation/terms-privacy-support-nav/TpsNav";
import Profile_inactive from "./Profile_inactive";
import ProfileInactive from "./profileInfo/ProfileInactive";
import HomeNav from "../../components/navigation/home-nav/HomeNav";
import { Link, Outlet } from "react-router-dom";
import { BsSlashLg } from "react-icons/bs";
import "./profile.css";
import ManagementDrop from "../../utils/dropdown/profile-dropdown/ManagementDrop";
import OrderProfileDrop from "../../utils/dropdown/profile-dropdown/OrderProfileDrop";
import WalletProfileDrop from "../../utils/dropdown/profile-dropdown/WalletProfileDrop";
import LogOutDrop from "../../utils/dropdown/profile-dropdown/LogOutDrop";

const Profile = () => {
  const [activeProfile, setActiveProfile] = useState(true);
  return (
    <div>
      <HomeNav />
      <div>
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
              <LogOutDrop />
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
    </div>
  );
};

export default Profile;
