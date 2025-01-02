import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import slide1 from "../../../assets/images/select1.png";
import { IoIosStarOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";

const ProfileOrderReview3 = () => {
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
          <Link id="orderHistoryTitle">Order Review</Link>
        </div>
      </div>

      <div className="wrapAllOrderReview2Detail">
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
          </div>
        </div>

        <div className="writeUpReview">
          <h5 id="h5Reviews">Reviews</h5>
          <div>
            <textarea placeholder="Write a review" />
          </div>

          <div className="submitReviewBtn">
            <button onClick={clickOpen}>Submit</button>
          </div>
        </div>
      </div>

      {open && (
        <div className="popOrderDetail">
          <div className="popOrderDetail2">
            <h5>Product Reviewed</h5>
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

export default ProfileOrderReview3;
