import React, { useContext, useEffect, useState } from "react";
import { Goods } from "../../db";
import bag from "../../assets/images/bag.png";
import { IoIosStarOutline } from "react-icons/io";
import "./home.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/Shop-context";
import axios from "axios";

const SectionB = ({ id, img, price, name }) => {
 

 const { addToCart, cartItems } = useContext(ShopContext);
 console.log(id);
 const addCart = () => addToCart(cartItems, id);
 const cartItemAmount = cartItems[id];

 

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
 <p id="productName">{name}</p>
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
 <button id="addToCartHome" onClick={() => addCart()}>
 Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
 </button>
 </div>
 </div>
 );
};

export default SectionB;