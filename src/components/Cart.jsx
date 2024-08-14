import React, { useEffect, useState, useContext } from "react";
import { getCartItems } from "../services/cartServices";
import { AuthContext } from "../context/AuthContext";

const Cart = () => {
  const { auth } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      const items = await getCartItems(auth.token);
      setCartItems(items?.products || []);
    };
    fetchCartItems();
  }, [auth.token]);

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <div key={item.productId._id}>
          <h4>{item.productId.name}</h4>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
