import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import img from "../../assets/images/phoneHome.png";
import { BsArrowRight } from "react-icons/bs";

const SectionA = () => {
  return (
    <div className="sectionA">
      <div className="sectionAWrap">
        <div className="sectionDescription">
          <div className="category">
            <Link id="cat">Categories</Link>
          </div>
          <h1 id="productDescription">Lorem Ipsum Is a Dummy Text</h1>

          <div className="shopNowWrap">
            <Link id="shopNow">Shop Now</Link>
            <Link id="arrNow">
              <BsArrowRight />
            </Link>
          </div>
          <div className="addToCartBtn">
            <button id="addToCartBtnn">Add To Cart</button>
          </div>
        </div>
        <div className="imgHome">
          <img src={img} />
        </div>
      </div>
    </div>
  );
};

export default SectionA;
