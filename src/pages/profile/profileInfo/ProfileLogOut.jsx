import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import { RiLogoutBoxLine } from "react-icons/ri";

const ProfileLogOut = () => {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setClick(false);
    navigate("/");
  };

  const handleOpen = () => setClick(true);
  return (
    <div className="profileOrder">
      <div className="orderHistoryNAv">
        <div className="orderWrap">
          <Link>
            <FaArrowLeft id="arrowBack" />
          </Link>
          <Link id="orderHistoryTitle">Log Out</Link>
        </div>
      </div>

      <div className="wrapLogOutProfile">
        <div className="logOutDetailProfile">
          <h5 id="certainText">
            Are you sure you want to log out your account ?
          </h5>
          <div className="btnLogOut">
            <button id="yes" onClick={handleOpen}>
              Yes
            </button>
            <button id="no" onClick={handleClose}>
              No
            </button>
          </div>
        </div>
      </div>

      {click && (
        <div className="popOrderDetail">
          <div className="popOrderDetail2">
            <h5>Logged Out</h5>
            <RiLogoutBoxLine style={{ fontSize: "26px" }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileLogOut;
