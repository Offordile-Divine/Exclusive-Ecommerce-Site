import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import img from "../../assets/images/phoneHome.png";
import { BsArrowRight } from "react-icons/bs";
import { ShopContext } from "../../context/Shop-context";

const SectionA = ({ id }) => {
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];
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
            <button id="addToCartBtnn" onClick={() => addToCart(id)}>
              Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
            </button>
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
