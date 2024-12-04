import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import imgOrder from "../../../assets/images/select1.png";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

const ProfileCancelOrder = () => {
  const schema = yup.object().shape({
    phoneNumber: yup.string().required(),
    reason: yup.string().required(),
    moreInfo: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = () => {
    const [reason, setReason] = useState("");
    const [moreInfo, setMoreInfo] = useState("");
  };
  return (
    <div className="profileOrder">
      <div className="orderHistoryNAv">
        <div className="orderWrap">
          <Link>
            <FaArrowLeft id="arrowBack" />
          </Link>
          <Link id="orderHistoryTitle">Cancel Order</Link>
        </div>
      </div>
      <div>
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
        </div>

        <hr id="hrOrderCancel" />

        <div className="orderCancelInput">
          <p id="deleteOrderP">
            Please fill in all details for your cancel request
          </p>
          <form className="cancelOrderForm">
            <div className="deleteOrderphoneNo">
              <label id="labelDeleteOrder">Phone</label>
              <input type="number" id="deletePhoneNo" />
            </div>
            <div className="deleteOrderReason">
              <label id="labelDeleteOrder">Reason</label>
              {/* <input type="text" id="deleteReason" /> */}
              <select id="deleteReason">
                <option>Yoo</option>
              </select>
            </div>
            <div className="deleteOrderInfo">
              <label id="labelDeleteOrder">More Information</label>
              <textarea id="textareaInfo"></textarea>
            </div>

            <div className="deleteNext">
              {/* <Link to="/profile/cancelOrder">Cancel Order</Link> */}
              <Link to="/profile/RefundMethodCancel">Next</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileCancelOrder;
