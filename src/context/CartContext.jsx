// src/context/CartContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { addToCart, getCartItems } from "../services/cartServices";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    const fetchCartItems = async () => {
      const items = await getCartItems(auth.token);
      setCartItems(items?.products || []);
    };
    fetchCartItems();
  }, [auth.token , addToCart]);


  return (
    <CartContext.Provider value={{ cartItems }}>
      {children}
    </CartContext.Provider>
  );
};
