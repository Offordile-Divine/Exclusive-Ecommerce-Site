import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import imgOrder from "../../../assets/images/select1.png";
import { useState } from "react";

const ProfileRefundCancel = () => {
  const [open, setOpen] = useState(false);

  const clickOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };

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

        <div className="submitRefundCancel">
          <Link onClick={clickOpen}>submit</Link>
        </div>
      </form>

      {open && (
        <div className="popOrderDetail">
          <div className="popOrderDetail2">
            <button>{/* <MdOutlineCancel onClick={handleClose2} /> */}</button>
            <h5>Your Order has been Canceled</h5>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileRefundCancel;
