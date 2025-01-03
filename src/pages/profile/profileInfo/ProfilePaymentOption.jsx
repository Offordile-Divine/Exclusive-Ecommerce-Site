import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const ProfilePaymentOption = () => {
  return (
    <div className="profileOrder">
      <Link>
        <FaArrowLeft id="arrowBack" />
      </Link>
      <div>
        <div className="linkbtn">
          <Link id="addressId">Payment Card</Link>
          <Link to={`/profile/addNewCard`} id="addNewCard">
            Add New Card
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfilePaymentOption;
