import React, { useContext } from "react";
import HomeNav from "../../components/navigation/home-nav/HomeNav";
import Footer from "../../components/footer/Footer";
import "./cart.css";
// import Products from "../products/Product";
import { PRODUCT } from "../../products";
import { ShopContext } from "../../context/Shop-context";
import CartItem from "./Cart-item";

const Carts = () => {
  const { cartItems } = useContext(ShopContext); // Assuming you have a context that provides cart items
   console.log(cartItems, "...cartitems")
  return (
    <>
      <HomeNav />
      <div className="ct_content">
        <div className="ct_header">
          <h1>My Shopping Cart</h1>
        </div>

        <div className="ct_general">
        <div className="ct_main">
          
        </div>

        
          <div className="ct_body">
            {PRODUCT.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem key={product.id} data={product} />;
            }
            return null; // Explicitly return null if the condition is not met
           })}
          </div>

        
          <div className="ct_form">
            <form action="">
              <table>
                <tr>
                  <td><input type="text" placeholder="Discount                     $0.00"  /></td>
                  <td className="ct_first"><input type="text" placeholder="Delivery                     $0.00" /></td>
                  <td><input type="text" placeholder="Total                        $200.00" /> </td>
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

                <div className="ct_sbutton"><button>Checkout</button></div>
                <div className="ct_tbutton"><button>Update Quantity</button></div>
                <div className="ct_lbutton"><button>Continue Shopping</button></div>
              
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Carts;


// import React, { useContext } from "react";
// import HomeNav from "../../components/navigation/home-nav/HomeNav";
// import Footer from "../../components/footer/Footer";
// import "./cart.css"
// // import Products from "../products/Product";
// import { PRODUCT } from "../../products";
// import CartItem  from "./Cart-item";
// import { ShopContext } from "../../context/Shop-context"

// const Carts = ({}) => {
//   return (
//     <>
//       <HomeNav />
//       <div className="ct_content">
//         <div className="ct_header">
//           <h1>My Shopping Cart</h1>
//         </div>

//           <div className="ct_body">
//             {PRODUCT.map((product) => {
//               if (cartItem[product.id] !==0) {
//                 return <cartItem data= {product}/>;
//               }
//             })}
//           </div>
//         </div>
//       <Footer />
//       </>
//   );
// };

// export default Carts;
