import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const ProfileUserDetail = () => {
  const navigate = useNavigate();

  const handleUserDetail = (e) => {
    e.preventDefault();

    navigate(`/profile/myProfile`);
  };
  return (
    <div className="profileOrder">
      <div className="orderHistoryNAv">
        <div className="orderWrap">
          <Link>
            <FaArrowLeft id="arrowBack" />
          </Link>
          <Link id="orderHistoryTitle">User Information</Link>
        </div>
      </div>

      <form className="userDetailForm">
        <div className="userDetailInput">
          <label>First Name</label>
          <input />
        </div>

        <div className="userDetailInput">
          <label>Last Name</label>
          <input />
        </div>

        <div className="userDetailInput">
          <label>Phone Number</label>
          <input />
        </div>

        <div className="userDetailInput">
          <label>Email Address</label>
          <input />
        </div>

        <div className="userDetailInput">
          <label>Address</label>
          <input />
        </div>
      </form>
      <div className="btnEditAcct">
        <button onClick={handleUserDetail}>Edit Account</button>
      </div>
    </div>
  );
};

export default ProfileUserDetail;
