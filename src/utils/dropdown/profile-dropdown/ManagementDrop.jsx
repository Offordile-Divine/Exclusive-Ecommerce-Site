import React, { useState } from "react";
import { CiUser } from "react-icons/ci";
import { Link, useParams, Outlet, useNavigate } from "react-router-dom";
import "./profileDrop.css";

const ManagementDrop = (props) => {
  const [click, setClick] = useState(false);
  const navigate = useNavigate()

  // const params = useParams();
  // console.log(params);

  const handleClick = (path) => {
    setClick(!click);
    navigate(path)
  };
  return (
    <div className="manage">
      <div className="pi_sidebar">
        <div className="pi_tog">
          <CiUser className="pi_reactIcon" style={{ cursor: "pointer" }} />
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
        <Link
          className="profP"
          to={`/profile/myProfile`}
          // onClick={() => props.setLayout(0)}
        >
          My profile
        </Link>
        <Link
          className="profP"
          to={`/profile/myAdddress`}
          // onClick={() => props.setLayout(1)}
        >
          Delivery Address
        </Link>
        <Link className="profP" to={`/profile/delAcct`}>
          Delete Account
        </Link>
      </div>
    </div>
  );
};

export default ManagementDrop;
