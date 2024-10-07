import React from "react";
import "../profile.css";
import { Link, Outlet } from "react-router-dom";
import ManagementDrop from "../../../utils/dropdown/profile-dropdown/ManagementDrop";
import OrderProfileDrop from "../../../utils/dropdown/profile-dropdown/OrderProfileDrop";
import WalletProfileDrop from "../../../utils/dropdown/profile-dropdown/WalletProfileDrop";
import { BsSlashLg } from "react-icons/bs";

const ProfileInactive = () => {
  return <div className="pi_image"></div>;
};

export default ProfileInactive;
