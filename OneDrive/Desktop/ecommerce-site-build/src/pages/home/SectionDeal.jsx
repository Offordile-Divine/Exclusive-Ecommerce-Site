import React, { useContext } from "react";
import { Goods } from "../../db";
import bag from "../../assets/images/bag.png";
import { IoIosStarOutline } from "react-icons/io";
import "./home.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/Shop-context";

const SectionDeal = ({ id, img, price }) => {
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];

  return (
    <div>
      <div className="WrapDeal">
        <div className="sectionDeal">
          <div className="imgSectionDeal">
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
          <Link id="addToCartDeal" onClick={() => addToCart(id)}>
            Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SectionDeal;
