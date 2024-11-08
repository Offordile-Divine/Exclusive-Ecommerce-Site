import React, { useContext, useEffect } from "react";
import HomeNav from "../../components/navigation/home-nav/HomeNav";
import Footer from "../../components/footer/Footer";
import "./cart.css";
// import Products from "../products/Product";
import { PRODUCT } from "../../products";
import { ShopContext } from "../../context/Shop-context";
import CartItem from "./Cart-item";
import { Goods } from "../../db";

// const cartFromlocalStorage = JSON.parse(localStorage.getItem("cartitems"))  // "[]"

const Carts = () => {
  const { cartItems } = useContext(ShopContext); // Assuming you have a context that provides cart items

   console.log(cartItems, "...cartitems")

   React.useEffect (() => {
    localStorage.setItem("cartitems", JSON.stringify(cartItems));
   }, [cartItems]);

  //  useEffect (() => {
  //   localStorage.setItem("cartItems", cartItems)
  //  }, [cartItems]);


  console.log(cartItems, "...cartitems");
  console.log(Goods)

  return (
    <>
    <div className="ct_content">
      <HomeNav />

        <div className="ct_header">
          <h1>My Shopping Cart</h1>
        </div>

      
        <div className="ct_main">
          <div className="ct_general">
            <p className="ct_Product"><b>Product</b></p>
            <p className="ct_Size"><b>Size</b></p>
            <p className="ct_Quality"><b>Quality</b></p>
            <p className="ct_Remove"><b>Remove</b></p>
            <p className="ct_Price"><b>Price</b></p>
          </div>
          <hr />


        <div className="ct_general">
          <div className="ct_main"></div>

          <div className="ct_body">
            {Goods.map((product) => {
              if (cartItems[product.id]) {
                return <CartItem key={product.id} data={product} />;
              }
              return null; // Explicitly return null if the condition is not met
            })}
          </div>

          <div className="ct_form">

            <button className="ct_first">Discount</button>
            <button className="ct_second">Delivery</button>
            <button className="ct_third">Total</button>

            <form action="">
              <table>
                <tr>
                  <td>
                    <input
                      type="text"
                      placeholder="Discount                     $0.00"
                    />
                  </td>
                  <td className="ct_first">
                    <input
                      type="text"
                      placeholder="Delivery                     $0.00"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Total                        $200.00"
                    />
                  </td>
                </tr>
              </table>
            </form>

          </div>

          <br />
          <br />
          <div className="ct_paragraph">
            <p>If you have a promotion code, please enter it below</p>

            <div className="ct_discount">
              <input type="text" placeholder="Please enter your Promo code" />
              <button className="ct_fbutton">Apply Discount</button>

              <div className="ct_sbutton">
                <button>Checkout</button>
              </div>
              <div className="ct_tbutton">
                <button>Update Quantity</button>
              </div>
              <div className="ct_lbutton">
                <button>Continue Shopping</button>
              </div>
            </div>

          </div>

          <div className="ct_promo">
          <div className="ct_discount">
            <div><input type="text" placeholder="Please enter your Promo code" /></div>
            <div><button className="ct_fbutton">Apply Discount</button></div>
          </div>

          <div className="ct_checkbox">
            <div className="ct_general2">
            <div><button className="ct_sbutton">Checkout</button></div>
            <div><button className="ct_tbutton">Update Quantity</button></div>
            <div><button className="ct_lbutton">Continue Shopping</button></div>
            </div>
            </div>
         </div>
        </div>

      <Footer />
      </div>
      </div>
     
    
  <div className="ctm_content">   
  <HomeNav />

  <div className="ctm_header">
    <h1>My Shopping Cart</h1>
  </div>

  <div className="ctm_main">
    <div className="ctm_general">
      <p className="ctm_Product"><b>Product</b></p>
      <p className="ctm_Size"><b>Size</b></p>
      <p className="ctm_Quality"><b>Quality</b></p>
      <p className="ctm_Remove"><b>Remove</b></p>
      <p className="ctm_Price"><b>Price</b></p>
    </div>
    <hr />

    <div className="ctm_body">
      {PRODUCT.map((product) => {
      if (cartItems[product.id] !== 0) {
        return <CartItem key={product.id} data={product} />;
      }
      return null; // Explicitly return null if the condition is not met
     })}
    </div>

  
    <div className="ctm_form">
            <button className="ctm_first">Discount</button>
            <button className="ctm_second">Delivery</button>
            <button className="ctm_third">Total</button>
          </div>

          <br />
          <br />
          <div className="ctm_paragraph">
            <p>If you have a promotion code, please enter it below</p>
          </div>

          <div className="ctm_promo">
          <div className="ctm_discount">
            <div className="ctm_input"><input type="text" placeholder="Please enter your Promo code" /></div>
            <div><button className="ctm_fbutton">Apply Discount</button></div>
          </div>

          <div className="ctm_checkbox">
            <div className="ctm_general2">
            <div className="ctm_sbutton"><button>Checkout</button></div>
            <div className="ctm_tbutton"><button>Update Quantity</button></div>
            <div className="ctm_lbutton"><button>Continue Shopping</button></div>
            </div>
            </div>
         </div>
        </div>



</div>
     
</>
 ); 
};

export default Carts;

