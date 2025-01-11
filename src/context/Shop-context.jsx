import React, { createContext, useState } from "react";
import { PRODUCT } from "../products";
import Shop from "../pages/products/Shop";
import Products from "../pages/products/Product";
import { Goods } from "../db";

export const ShopContext = createContext();

const getDefaultCart = () => {
  let cart = {};
//   for (let i = 1; i < Goods.length; i++) {
//     cart[i] = 0;
//   }
  return cart;
};

// const getDefaultCart = () => {
//      let cart = {};
//      for (let i = 1; i < PRODUCT.length + 1; i++) {
//      cart[i] = 0;
//      }
//      return cart;
//     };

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCT.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };
  //   console.log(updateCartItemCount);

    const addToCart = (itemId) => {
      console.log(itemId)
      setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] ?? 0) + 1 }));
      console.log(cartItems, "contextCartItems");
    };


    const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
    };

    const handleRemove = (itemId) => {
       setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - [itemId]}))
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


  // const removeFromCart = (itemId) => {
  //   setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  // };

  // const contextValue = {
  //   cartItems,
  //   addToCart,
  //   removeFromCart,
  //   updateCartItemCount,
  //   getTotalCartAmount,
  // };


  console.log(cartItems);

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

// import React from "react";
// import { createContext } from "react";
// import { PRODUCT } from "../PRODUCT"
// import { useState } from "react";
// import PRODUCT from "../pages/PRODUCT/Product";

// export const ShopContext = createContext(null);

// const getDefaultCart = () => {
//  let cart = {};
//  for (let i = 1; i < PRODUCT.length + 1; i++) {
//  cart[i] = 0;
//  }
//  return cart;
// };

// const ShopContextProvider = (props) => {
//  const [cartItem, setCartItem] = useState(getDefaultCart());

//  const getTotalCartAmount = () => {
//  let totalAmount = 0;
//  for (const item in cartItem) {
//  if (cartItem[item] > 0) {
//  let itemInfo = PRODUCT.find((product) => product.id === Number(item));
//  totalAmount += cartItem[item] * itemInfo.price;
//  }
//  }
//  return totalAmount;
//  };

//  const updateCartItemCount = (newAmount, itemId) => {
//  setCartItem((prev) => ({ ...prev, [itemId]: newAmount }));
//  };

//  const addToCart = (itemId) => {
//  setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//  };

//  const removeFromCart = (itemId) => {
//  setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
//  };

//  const contextValue = {
//  cartItem,
//  addToCart,
//  removeFromCart,
//  updateCartItemCount,
//  getTotalCartAmount,
//  };

//  console.log(cartItem);

//  return (
//  <ShopContext.Provider value={contextValue}>
//  {props.children}
//  </ShopContext.Provider>
//  );
// };

// export default ShopContextProvider;
