import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const ProfileAddNewCard = () => {
  return (
    <div className="profileOrder">
      <div className="orderHistoryNAv">
        <div className="orderWrap">
          <Link>
            <FaArrowLeft id="arrowBack" />
          </Link>
          <Link id="orderHistoryTitle">Payment Card</Link>
        </div>
      </div>

      <form className="formAddNewCard">
        <div className="inputWrapAddNewCard">
          <div className="inputAddNewCard">
            <label>Card Number</label>
            <input
              id="inputAddNewCard1"
              type="number"
              placeholder="****-****-****-****"
            />
          </div>
          <div className="inputAddNewCard">
            <label>Expiration Date</label>
            <input type="date" id="inputAddNewCard1" />
          </div>
        </div>

        <div className="inputWrapAddNewCard">
          <div className="inputAddNewCard">
            <label>CVV</label>
            <input type="number" id="inputAddNewCard1" placeholder="***" />
          </div>
          <div className="selectAddNewCard">
            <label>Bank Name</label>
            <div>
              <select id="selectAddNewCard1">
                <option>Fidelity Bank</option>
                <option>Access Bank</option>
              </select>
            </div>
          </div>
        </div>

        <div className="linkVerifyOTP">
          <Link to="/profile/verifyPaymentOTP" id="addNewCard">
            Submit
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ProfileAddNewCard;
