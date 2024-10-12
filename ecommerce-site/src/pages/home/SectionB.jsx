import React from "react";
import { Goods } from "../../db";
import bag from "../../assets/images/bag.png";
import { IoIosStarOutline } from "react-icons/io";
import "./home.css";
import { Link } from "react-router-dom";

const SectionB = ({ img, price, name }) => {
  return (
    <div className="WrapHome">
      <div className="sectionB">
        <div className="imgSectionB">
          <img src={img} />
        </div>
        <div className="sectionBDescription">
          <h5 className="priceSec">
            <p id="checkedPrice">{price}</p>
            <p id="unCheckedPrice">$270</p>
          </h5>
          <p id="productName">Bag</p>
          <div className="star">
            <IoIosStarOutline id="itemStar" />
            <IoIosStarOutline />
            <IoIosStarOutline />
            <IoIosStarOutline />
            <IoIosStarOutline />
          </div>
        </div>
      </div>
      <div className="btnHome">
        <Link id="buyNow">Buy Now</Link>
        <Link id="addToCartHome">Add to Cart</Link>
      </div>
    </div>
  );
};

export default SectionB;
