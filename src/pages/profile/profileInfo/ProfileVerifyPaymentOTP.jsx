import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import { FaCheck } from "react-icons/fa6";

const ProfileVerifyPaymentOTP = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };
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

      <div className="wrapVerifyPaymentOtp">
        <h5 id="verifyCode">Verify Otp Code</h5>
        <p id="codeSentTo">Enter code sent to +234xxxxxxxxxx </p>
        <div className="wrapInputVerifyPayment">
          <input type="number" placeholder="######" id="inputVerifyPayment" />
        </div>
        <div className="wrapSubmitVerifyPaymnet">
          <button id="submitVerifyPayment" onClick={handleOpen}>
            Submit
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="popOrderDetail">
          <div className="popOrderDetail2">
            <h5>Sucessful</h5>
            <FaCheck
              style={{
                fontSize: "30px",
                color: "rgba(22, 28, 45, 1)",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileVerifyPaymentOTP;
