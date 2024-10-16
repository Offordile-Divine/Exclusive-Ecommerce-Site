import React, { useContext } from "react";
import PRODUCT from "../products/Product";
import { ShopContext } from "../../context/Shop-context";

export const Shop = ({ data }) => {
  const { id, productName, price, productImage } = data;
  console.log(data);
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];

  return (
    <div>
      <div className="pd_image">
        <img src="src/assets/images/glasses.png" />
      </div>

      <div className="pd_description">
        <p>
          <b>{productName}</b>
        </p>

        <p>
          <b>${price}</b>
        </p>

        <div className="pd_addToCart">
          <button onClick={() => addToCart(id)}>
            Add cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Shop;

// import React from "react";
// import { ShopContext } from "../../context/Shop-context";
// import { useContext } from "react";

// const ProductItem = (props) => {
//  const { id, productName, price, productImage } = props.data;
//  const { addToCart, cartItem } = useContext(ShopContext);

//  const cartItemAmount = cartItem[id];
//  return (
//  <div className="product">
//  <img src={productImage} />
//  <div className="description">
//  <p>
//  <b>{productName}</b>
//  </p>
//  <p>${price}</p>
//  </div>
//  <button className="addToCartBttn" onClick={() => addToCart(id)}>
//  Add cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
//  </button>
//  </div>
//  );
// };

// export default ProductItem; 
