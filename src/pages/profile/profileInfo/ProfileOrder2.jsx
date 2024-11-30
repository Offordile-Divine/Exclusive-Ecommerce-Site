import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import imgOrder from "../../../assets/images/select1.png";

const ProfileOrder2 = () => {
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

          <div className="cancelOrderBtn">
            <Link to="/profile/cancelOrder">Cancel Order</Link>
          </div>
          <div className="viewOrderDetailBtn">
            <Link to={`/profile/orderDetail`}>View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileOrder2;
