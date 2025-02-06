import React, { useState } from "react";
import { RiLogoutBoxLine } from "react-icons/ri";
import { Link, useParams, Outlet, useNavigate } from "react-router-dom";
import "./profileDrop.css";

const LogOutDrop = () => {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();

  // const params = useParams();
  // console.log(params);

  const handleClick = (path) => {
    setClick(!click);
    navigate(path);
  };
  return (
    <div className="manage">
      <div className="pi_sidebar">
        <div className="pi_tog">
          <RiLogoutBoxLine
            className="pi_reactIcon"
            style={{ cursor: "pointer" }}
          />
          <div className="tog" onClick={handleClick}>
            {click ? (
              <h2
                className="pi_togHeader"
                style={{ cursor: "pointer", color: "rgba(22, 28, 45, 1)" }}
              >
                Log Out
              </h2>
            ) : (
              <h2
                className="pi_togHeader"
                style={{ cursor: "pointer", color: "grey" }}
              >
                Log Out
              </h2>
            )}
          </div>
        </div>
      </div>
      <div className={click ? "pi_linktarget active" : "pi_linktarget"}>
        <Link
          className="profP"
          to={`/profile/profileLogOut`}
          // onClick={() => props.setLayout(0)}
        >
          Log Out
        </Link>
      </div>
    </div>
  );
};

export default LogOutDrop;
