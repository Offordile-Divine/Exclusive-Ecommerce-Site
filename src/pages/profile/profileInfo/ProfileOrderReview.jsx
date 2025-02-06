import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const ProfileOrderReview = () => {
  return (
    <div className="profileOrder">
      <div className="orderHistoryNAv">
        <div className="orderWrap">
          <Link>
            <FaArrowLeft id="arrowBack" />
          </Link>
          <Link to={`/profile/orderReview2`} id="orderHistoryTitle">
            Order Review
          </Link>
        </div>
      </div>
      <div className="wrapReview">
        <div className="reviewDetailWrap">
          <h5 id="productAvailable">No product available for review</h5>
          <p id="writeUpReview">
            After your product is delivered you can be able to write a review.
            Your review will be public to assist other customers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileOrderReview;
