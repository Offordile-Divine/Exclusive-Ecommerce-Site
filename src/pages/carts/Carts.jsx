import React, { useContext, useEffect } from "react";
import HomeNav from "../../components/navigation/home-nav/HomeNav";
import Footer from "../../components/footer/Footer";
import "./cart.css";
// import Products from "../products/Product";
import { PRODUCT } from "../../products";
import { ShopContext } from "../../context/Shop-context";
import CartItem from "./Cart-item";
import { Goods } from "../../db";
import { Link } from "react-router-dom";

const Carts = () => {
  const { cartItems } = useContext(ShopContext); // Assuming you have a context that provides cart items

  console.log(cartItems, "...cartitems");

  return (
    <>
      <HomeNav />
      <div className="ct_content">
        <div className="ct_header">
          <h1>My Shopping Cart</h1>
        </div>

        <div className="ct_main">
          <div className="ct_general">
            <div>
              <p className="ct_Product">
                <b>Product</b>
              </p>
            </div>
            <div>
              <p className="ct_Size">
                <b>Size</b>
              </p>
            </div>
            <div>
              <p className="ct_Quality">
                <b>Quality</b>
              </p>
            </div>
            <div>
              <p className="ct_Remove">
                <b>Remove</b>
              </p>
            </div>
            <div>
              <p className="ct_Price">
                <b>Price</b>
              </p>
            </div>
          </div>
          <hr />

          <div className="ct_general">
            <div className="ct_body">
              {Goods.map((product) => {
                if (cartItems[product.id] > 0) {
                  console.log(cartItems)
                  // return <CartItem key={product.id} data={product} />;
                  return (
                    <div>
                      <div>{product.img}</div>
                    </div>
                  );
                }
                return null; // Explicitly return null if the condition is not met
              })}
            </div>
          </div>

          <div className="ct_form">
            <button>Discount</button>
            <button>Delivery</button>
            <button>Total</button>
          </div>

          <br />
          <br />

          <div className="ct_paragraph">
            <p>If you have a promotion code, please enter it below:</p>
          </div>

          <div className="ct_promo">
            <div className="ct_discount">
              <input type="text" placeholder="Please enter your Promo code" />
              <button className="ct_first">Apply Discount</button>
            </div>

            <div className="ct_checkbox">
              <button className="ct_second">
                {" "}
                <Link to="/checkout">Checkout</Link>{" "}
              </button>
              <button>Update Quantity</button>
              <button>Continue Shopping</button>
            </div>
          </div>
        </div>
        <Footer />
      </div>

      <div className="ctm_content">
        <HomeNav />

        <div className="ctm_header">
          <h1>My Shopping Cart</h1>
        </div>

        <div className="ctm_main">
          <div className="ctm_data">
            <div className="ctm_general">
              <p className="ctm_Product">
                <b>Product</b>
              </p>
              <p className="ctm_Size">
                <b>Size</b>
              </p>
              <p className="ctm_Quality">
                <b>Quality</b>
              </p>
              <p className="ctm_Remove">
                <b>Remove</b>
              </p>
              <p className="ctm_Price">
                <b>Price</b>
              </p>
            </div>
            <hr />

            <div className="ctm_body">
              {Goods.map((product) => {
                if (cartItems[product.id]) {
                  return <CartItem key={product.id} data={product} />;
                }
                return null; // Explicitly return null if the condition is not met
              })}
            </div>
          </div>

          <div className="ctm_form">
            <button>Discount</button>
            <button>Delivery</button>
            <button>Total</button>
          </div>

          <br />
          <br />

          <div className="ctm_paragraph">
            <p>If you have a promotion code, please enter it below:</p>
          </div>

          <div className="ctm_promo">
            <div className="ctm_discount">
              <input type="text" placeholder="Please enter your Promo code" />
              <button className="ctm_first">Apply Discount</button>
            </div>

            <div className="ctm_checkbox">
              <button className="ctm_second">Checkout</button>
              <button>Update Quantity</button>
              <button>Continue Shopping</button>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Carts;
