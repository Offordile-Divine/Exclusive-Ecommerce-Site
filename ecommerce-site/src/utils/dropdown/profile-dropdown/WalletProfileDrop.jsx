import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoWalletOutline } from "react-icons/io5";

const WalletProfileDrop = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  return (
    <div className="manage">
      <div className="pi_sidebar">
        <div className="pi_tog">
          <IoWalletOutline className="pi_reactIcon" style={{cursor: "pointer"}} />
          <div className="tog" onClick={handleClick}>
            {click ? (
              <h2
                className="pi_togHeader"
                style={{ cursor: "pointer", color: "rgba(22, 28, 45, 1)" }}
              >
                My Wallet
              </h2>
            ) : (
              <h2
                className="pi_togHeader"
                style={{ cursor: "pointer", color: "grey" }}
              >
                My Wallet
              </h2>
            )}
          </div>
        </div>
      </div>
      <div className={click ? "pi_linktarget active" : "pi_linktarget"}>
        <Link to="/paymentOption">My Payment Option</Link>
      </div>
    </div>
  );
};

export default WalletProfileDrop;
