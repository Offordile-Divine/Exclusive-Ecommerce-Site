import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";
import { MdOutlineCancel } from "react-icons/md";

const ProfileOrderDetail = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };
  const handleClose = () => setIsOpen(false);
  const handleOpen2 = () => setIsOpen2(true);
  const handleClose2 = () => setIsOpen2(false);
  return (
    <div>
      <div className="orderDetail">
        <div className="orderWrap">
          <Link>
            <FaArrowLeft id="arrowBack" />
          </Link>
          <Link id="orderHistoryTitle" to={`/profile/orderHistory2`}>
            Polystar Smart TV
          </Link>
        </div>

        <form className="orderDetailForm">
          <div className="inputOrderDetail">
            <div className="inputOrderDetailSub">
              <label id="nameInputDetail">Postal Code</label>
              <input type="text" id="postCode" placeholder="Postal Code" />
            </div>
            <div className="inputOrderDetailSub">
              <label id="nameInputDetail">City</label>
              <input type="text" id="postCode" placeholder="City" />
            </div>
          </div>

          <div className="inputOrderDetail">
            <div className="inputOrderDetailSub">
              <label id="nameInputDetail">Phone</label>
              <input type="number" id="postCode" placeholder="Mobile no" />
            </div>
            <div className="inputOrderDetailSub">
              <label id="nameInputDetail">Country</label>
              <input type="text" id="postCode" placeholder="Country" />
            </div>
          </div>

          <div className="inputOrderDetail">
            <div className="inputOrderDetailSub">
              <label id="nameInputDetail">Sales Tax</label>
              <input type="number" id="postCode" placeholder="No tax" />
            </div>
            <div className="inputOrderDetailSub">
              <label id="nameInputDetail">Email</label>
              <input type="text" id="postCode" placeholder="Email Address" />
            </div>
          </div>

          <div className="addressDivOrder">
            <div className="addressDiv2Order">
              <label id="nameInputDetail">Address</label>
              <input id="addressOrderDetail" />
            </div>
          </div>

          <hr id="hrAddressDetail" />

          <div className="addressDivOrder">
            <div className="infoOrderDetail">
              <h5>Information</h5>
            </div>

            <div className="addressDiv2Order">
              <label id="nameInputDetail">Comment on Order</label>
              <textarea name="Comments" id="addressOrderDetailTextArea">
                Comments
              </textarea>
            </div>

            <div className="inputOrderDetail">
              <div className="inputOrderDetailSub">
                <label id="nameInputDetail">Payment Option</label>
                <input
                  type="number"
                  id="postCode"
                  placeholder="Payment option"
                />
              </div>
              <div className="inputOrderDetailSub">
                <label id="nameInputDetail">Shopping Cost</label>
                <input type="text" id="postCode" placeholder="Shopping cost" />
              </div>
            </div>

            <div className="inputOrderDetail">
              <div className="inputOrderDetailSub">
                <label id="nameInputDetail">Tracking Number</label>
                <input type="number" id="postCode" placeholder="Tracking no" />
              </div>
              <div className="inputOrderDetailSub">
                <label id="nameInputDetail">Delivery Date</label>
                <input
                  type="text"
                  id="postCode"
                  placeholder="Date Of Delivery"
                />
              </div>
            </div>

            <div className="orderDetailProdPrice">
              <label id="nameInputDetail">Product Price</label>
              <input type="text" id="inputProductPrice" />
            </div>
          </div>
          <div className="btnRequestReorder">
            <Link to={`/profile/b`} id="btnRequest">Request a return</Link>
            <button id="btnReturnOrder" onClick={handleOpen}>
              Re-order
            </button>
          </div>
        </form>

        {isOpen && (
          <div className="popOrderDetail">
            <div className="popOrderDetail2">
              <h5>Proceed to Checkout</h5>

              <div className="btnOrderDetailYesNo">
                <button id="btnDetailYes">
                  YES
                </button>
                <button id="btnDetailNo" onClick={handleClose}>
                  NO
                </button>
              </div>
            </div>
          </div>
        )}

        {/* {isOpen2 && (
          <div className="popOrderDetail">
            <div className="popOrderDetail2">
              <button>
                <MdOutlineCancel onClick={handleClose2} />
              </button>
              <h5>Your Order has been Canceled</h5>
              <div className="btnOrderDetailYesNo">
                <FaCheck id="checkpopCancel" />
              </div>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default ProfileOrderDetail;
