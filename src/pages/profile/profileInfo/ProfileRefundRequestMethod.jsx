import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import imgOrder from "../../../assets/images/select1.png";
import { useState } from "react";
import { AiTwotoneExclamationCircle } from "react-icons/ai";

const ProfileRefundRequestMethod = () => {
  return (
    <div className="profileOrder">
      <div className="orderHistoryNAv">
        <div className="orderWrap">
          <Link>
            <FaArrowLeft id="arrowBack" />
          </Link>
          <Link id="orderHistoryTitle">Refund Method</Link>
        </div>
      </div>
      <h5 id="bankDepo">Bank Deposit</h5>
      <form className="refundMethodCancel">
        <p id="textRefundCancel">
          Please fill in correct details for your cancel request
        </p>

        <div className="div1RefundCancel">
          <label id="nameRefundCancel">Account Name</label>
          <input
            type="text"
            id="inputRefundCancel"
            placeholder="Enter your fullname"
          />
        </div>

        <div className="div1RefundCancel">
          <label id="nameRefundCancel">Account Number</label>
          <input
            type="text"
            id="inputRefundCancel"
            placeholder="Enter Account Number"
          />
        </div>

        <div className="div1RefundCancel">
          <label id="nameRefundCancel">Bank Name</label>
          <input
            type="text"
            id="inputRefundCancel"
            placeholder="Enter Bank Name"
          />
        </div>

        <div className="profDisclaimer">
          <p id="textDisclaimer">
            <AiTwotoneExclamationCircle id="disclaimer" />
            Upon validation, your refund will be processed with 24 hours to the
            bank account provided above. Please ensure that the details provided
            above are correct. We will not be held accountable for any error on
            your part
          </p>
        </div>

        <div className="submitRefundCancel">
          <Link to={`/profile/pickUp`}>Next</Link>
        </div>
      </form>
    </div>
  );
};

export default ProfileRefundRequestMethod;
