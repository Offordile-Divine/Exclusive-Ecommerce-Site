import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const ProfilePickUp = () => {
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

      <div className="titleSelectPickUp">
        <h5 id="selectPickUp">Select Pickup Location</h5>
        <p id="returnItemText">How do you want to return this Item</p>
      </div>
      <hr />

      <div className="wrapLocationCheck">
        <div>
          <input type="checkbox" id="checkLocation" />
        </div>
        <div className="divDropItem">
          <h5 id="selectPickUp2">Drop it a pickup station </h5>
          <p>
            Drop the item at our pickup location in your location. Failure to
            drop the item within three business days from the day the return was
            made will result in cancellation of your return.
          </p>
        </div>
      </div>

      <div className="wrapLocationCheck2">
        <div>
          <input type="checkbox" id="checkLocation" />
        </div>
        <div className="divDropItem">
          <h5 id="selectPickUp2">Send us to come pick it up</h5>
          <p>
            We’ll send a rider to come pickup the item using the address
            provided during delivery. The item will be picked up within two
            business day.
          </p>
        </div>
      </div>

      <div className="submitRefundCancel">
        <Link to={`/profile/verifyDetails`}>Submit</Link>
      </div>
    </div>
  );
};

export default ProfilePickUp;
