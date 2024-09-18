import React, { useState } from "react";
import "./profileDrop.css";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";

const OrderProfileDrop = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  return (
    <div className="manageDrop">
      <div className="pi_sidebar">
        <div className="pi_tog">
          <BsBag className="pi_reactIcon" style={{ cursor: "pointer" }} />
          <div className="tog" onClick={handleClick}>
            {click ? (
              <h2
                className="pi_togHeader"
                style={{ cursor: "pointer", color: "rgba(22, 28, 45, 1)" }}
              >
                My Orders
              </h2>
            ) : (
              <h2
                className="pi_togHeader"
                style={{ cursor: "pointer", color: "grey" }}
              >
                My Orders
              </h2>
            )}
          </div>
        </div>
      </div>
      <div className={click ? "pi_linktarget active" : "pi_linktarget"}>
        <Link to="/orderHistory">Order History</Link>
        <Link to="/orderReview">Order Review</Link>
      </div>
    </div>
  );
};

export default OrderProfileDrop;
