import React, { useState } from "react";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import "./profileDrop.css";

const ManagementDrop = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  return (
    <div className="manage">
      <div className="pi_sidebar">
        <div className="pi_tog">
          <CiUser className="pi_reactIcon" style={{cursor: "pointer"}}/>
          <div className="tog" onClick={handleClick}>
            {click ? (
              <h2
                className="pi_togHeader"
                style={{ cursor: "pointer", color: "rgba(22, 28, 45, 1)" }}
              >
                Manage my account
              </h2>
            ) : (
              <h2
                className="pi_togHeader"
                style={{ cursor: "pointer", color: "grey" }}
              >
                Manage my account
              </h2>
            )}
          </div>
        </div>
      </div>
      <div className={click ? "pi_linktarget active" : "pi_linktarget"}>
        <Link to="/profile">My profile</Link>
        <Link to="/deliveryAddress">Delivery Address</Link>
        <Link to="/deleteAccount">Delete Account</Link>
      </div>
    </div>
  );
};

export default ManagementDrop;
