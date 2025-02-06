import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import slide1 from "../../../assets/images/select1.png";
import { IoIosStarOutline } from "react-icons/io";

const ProfileOrderReview2 = () => {
  return (
    <div className="profileOrder">
      <div className="orderHistoryNAv">
        <div className="orderWrap">
          <Link>
            <FaArrowLeft id="arrowBack" />
          </Link>
          <Link id="orderHistoryTitle">Order Review</Link>
        </div>
      </div>

      <div className="wrapAllOrderReview2Detail">
        <p id="noOrderReview">1.</p>

        <div className="wrapDescriptionOrderReview2">
          <div className="imgOrderReview2">
            <img src={slide1} />
          </div>
          <div className="description2">
            <h5 id="productNameReview">Polystar Smart TV</h5>
            <p id="priceOfProductReview">$192.00</p>
            <p id="descriptionOnProductNameReview">
              Lorum ipsum is a dummy text. Lorum ipsum is a dummy text. Lorum
              ipsum is a dummy text. Lorum ipsum is a dummy text.
            </p>
          </div>

          <div className="starRateOrderReview2">
            <div className="pd_review">
              <IoIosStarOutline id="pd_itemStar" />
              <IoIosStarOutline id="pd_itemStar" />
              <IoIosStarOutline id="pd_itemStar" />
              <IoIosStarOutline id="pd_itemStar" />
              <IoIosStarOutline id="pd_itemStar" />
              <p id="noReview">(150 Reviews)</p>
            </div>

            <div className="btnReviewOrder">
              <Link to={`/profile/orderReview3`}>Write a review</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileOrderReview2;
