import React from "react";
import { useContext } from "react";
import { ShopContext } from "../../context/Shop-context";

const CartItem = (props) => {
  const { id, productImage, img, name, price, productName } = props.data;
  const { cartItems, setCart } = useContext(ShopContext);
  // updateCartItemCount, addToCart, removeFromCart
  const quantity = cartItems[id]?.quantity || 0;
  console.log(quantity);

  const handleIncrease = () => {
    updateCartItemCount(id, quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      updateCartItemCount(id, quantity - 1);
    }
  };

  // const handleRemove = () => {
  //     removeFromCart(id);
  // };

  return (
    <div className="ct_details">
      <table className="ct_table">
        <thead className="ct_head">
          <th className="ct_product">Product</th>
          <th className="ct_Size">Size</th>
          <th className="ct_Quality">Quality</th>
          <th className="ct_Remove">Remove</th>
          <th className="ct_Price">Price</th>
        </thead>
        <tbody>
          <td className="ct_image">
            <img src={img} />
            <p>
              <b> {name} </b>
            </p>
          </td>
          {/* onClick={()=>addToCart(id) */}

          <td className="ct_size">
            <button>5</button>
          </td>

          <td>
            <div className="ct_countHandler">
              <button
                type="button"
                onClick={() => handleIncrease(id)}
                className="ct_positive"
              >
                <b>+</b>
              </button>
              <input
                value={cartItems[id]}
                onChange={(e) =>
                  updateCartItemCount(Number(e.target.value), id)
                }
              />
              <button
                type="button"
                onClick={() => handleDecrease(id)}
                className="ct_negative"
              >
                <b>-</b>
              </button>
            </div>
          </td>

          <td className="ct_remove">
            <button>X</button>
          </td>

          <td className="ct_price">
            <p>
              <b> ${price} </b>
            </p>
          </td>
        </tbody>
      </table>
    </div>
  );
};

export default CartItem;

// import React, { useContext } from 'react';
// import { ShopContext } from "../../context/Shop-context";

// const CartItem = (props) => {
//     const { id, productName, price, productImage } = props.data;
//     const { cartItems, updateCartItemQuantity, removeFromCart } = useContext(ShopContext);

//     const quantity = cartItems[id]?.quantity || 0;

//     const handleIncrease = () => {
//         updateCartItemQuantity(id, quantity + 1);
//     };

//     const handleDecrease = () => {
//         if (quantity > 0) {
//             updateCartItemQuantity(id, quantity - 1);
//         }
//     };

//     const handleRemove = () => {
//         removeFromCart(id); o
//     };

//     return (
//         <div className="ct_content">
//             <table className="ct_table">
//                 <thead>
//                     <tr>
//                         <th className="ct_product">Product</th>
//                         <th className="ct_size">Size</th>
//                         <th className="ct_quality">Quality</th>
//                         <th className="ct_remove">Remove</th>
//                         <th className="ct_price">Price</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td className="ct_product">
//                           <img src={productImage} alt={productName} />
//                           <p><b>{productName}</b></p>
//                         </td>
//                         <td className="ct_size"><button>5</button></td>
//                         <td>
//                             <div className="ct_countHandler">
//                                 <button className="ct_positive" onClick={handleIncrease}><b>+</b></button>
//                                 <input type="number" value={CartItem[id]} readOnly />
//                                 <button className="ct_negative" onClick={handleDecrease}><b>-</b></button>
//                             </div>
//                         </td>
//                         <td className="ct_remove">
//                             <button onClick={handleRemove}>X</button>
//                         </td>
//                         <td className="ct_price">
//                             <p><b>${(price * quantity).toFixed(2)}</b></p>
//                         </td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default CartItem;
