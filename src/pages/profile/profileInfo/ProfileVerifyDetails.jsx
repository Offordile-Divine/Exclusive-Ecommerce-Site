import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { PiGreaterThan } from "react-icons/pi";
import imgOrder from "../../../assets/images/select1.png";
import { useState } from "react";
import { FaCheck } from "react-icons/fa6";

const ProfileVerifyDetails = () => {
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
          <Link id="orderHistoryTitle">Pickup Location</Link>
        </div>
      </div>

      <div className="wrapDetail1">
        <div className="requestReturnChange">
          <h5 id="requestAReturnText">Request A Return</h5>
          <div className="linkRequestDetail">
            <Link>
              Change <PiGreaterThan />
            </Link>
          </div>
        </div>

        <div className="orderDetailWrap">
          <h2 id="orderDate">Order Date : 27 September 2024</h2>
          <div>
            <div className="orderPrice">
              <div className="paymentOrderMethod">
                <p id="totalPriceOrder">Total:</p>
                <p id="totalPriceOrder">$3000</p>
              </div>
              <p id="totalPriceOrder">Delivery Address:</p>
            </div>
            <div className="orderPrice">
              <div className="paymentOrderMethod">
                <p id="totalPriceOrder">Payment Method: Card Payment</p>
              </div>
              <div>
                <p id="totalPriceOrder">
                  16 Otigba Street Adj Computer Village Ikeja
                </p>
              </div>
            </div>
            <div className="orderQuantity">
              <p id="totalPriceOrder">Order No. G273767775238</p>
              <p id="proQuantity">Quantity: 1</p>
            </div>
          </div>
          <div className="imgOrderProf">
            <img src={imgOrder} />
          </div>

          <p id="proQuantity">Phone: +2348XXXXXXXXX</p>
          <p id="proQuantity">Selected Reason: Equipment is faulty</p>
          <p id="proQuantity">
            More information: It automatically turns off on it’s own during use.
          </p>
        </div>
      </div>

      <div className="wrapDetail1">
        <div className="requestReturnChange">
          <h5 id="requestAReturnText">Refund Method</h5>
          <div className="linkRequestDetail">
            <Link>
              Change <PiGreaterThan />
            </Link>
          </div>
        </div>
        <div className="bankDepositRequestDetail">
          <h5 id="textBankDeposit">Bank Deposit</h5>
          <p id="writeUpBankDeposit">
            Upon validation, your refund will be processed with 24 hours to the
            bank account provided above. Please ensure that the details provided
            above are correct. We will not be held accountable for any error on
            your part.
          </p>
        </div>
      </div>

      <div className="wrapDetail1">
        <div className="requestReturnChange">
          <h5 id="requestAReturnText">Pickup Option</h5>
          <div className="linkRequestDetail">
            <Link>
              Change <PiGreaterThan />
            </Link>
          </div>
        </div>
        <div className="bankDepositRequestDetail">
          <h5 id="textBankDeposit">Send a rideer to come pick it up</h5>
          <p id="writeUpBankDeposit">
            We’ll send a rider to come pickup the item using the address
            provided during delivery. The item will be picked up within two
            business day.
          </p>
        </div>
      </div>

      <div className="submitRefundCancel">
        <Link onClick={clickOpen}>Submit</Link>
      </div>

      {open && (
        <div className="popOrderDetail">
          <div className="popOrderDetail2">
            <h5>Your request has been sent for a review</h5>
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

export default ProfileVerifyDetails;
