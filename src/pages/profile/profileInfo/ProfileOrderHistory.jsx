import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../profile.css";

const ProfileOrderHistory = () => {
  return (
    <div className="profileOrder">
      <div className="orderHistoryNAv">
        <div className="orderWrap">
          <Link>
            <FaArrowLeft id="arrowBack" />
          </Link>
          <Link id="orderHistoryTitle" to={`/profile/orderHistory2`}>
            Order History
          </Link>
        </div>
      </div>
      <div className="titleHeadOrder">
        <h4 id="noOrder">No Order History</h4>
      </div>
    </div>
  );
};

export default ProfileOrderHistory;
