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
