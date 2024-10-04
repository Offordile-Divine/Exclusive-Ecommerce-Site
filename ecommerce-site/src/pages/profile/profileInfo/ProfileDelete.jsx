import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const ProfileDelete = () => {
  return (
    <div className="submitAddress">
      <div className="deliveryOpt">
        <Link>
          <FaArrowLeft id="arrowBack" />
        </Link>
        <div className="linkbtn">
          <Link id="addressId">Delete Account</Link>
        </div>
      </div>

      <div className="detailDel">
        <h1>Delete user content</h1>
      </div>

      <div className="delBtn">
        <button>Delete Account</button>
      </div>
    </div>
  );
};

export default ProfileDelete;
