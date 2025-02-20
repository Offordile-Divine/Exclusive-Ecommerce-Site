import React, { createContext, useState, useEffect } from "react";
import { PRODUCT } from "../products";
import Shop from "../pages/products/Shop";
import Products from "../pages/products/Product";
import { Goods } from "../db";

export const ShopContext = createContext();

// const getDefaultCart = () => {
//   let cart = {};
//   for (let i = 1; i < Goods.length; i++) {
//     cart[i] = 0;
//   }
//   return cart;
// };

// const getDefaultCart = () => {
//   let cart = {};
//   for (let i = 1; i <= Goods.length; i++) {
//     cart[i] = 0;
//   }
//   return cart;
// };

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < Goods.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(() => {
    return JSON.parse(localStorage.getItem("cartitems")) || getDefaultCart();
  });

  // Save to localStorage when cart updates
  useEffect(() => {
    localStorage.setItem("cartitems", JSON.stringify(cartItems));
  }, [cartItems]);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = ItemsList.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    console.log(cartItems);
  };

  const handleRemove = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    removeFromCart(id);
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    handleRemove,
  };

  console.log(cartItems);

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
