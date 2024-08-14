import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="d-flex flex-direction-row m-3">
      {cartItems.map((item) => (
        <div className="card m-2"  key={item.productId._id} style={{ width: '18rem', height: '18rem' }}>
        <img
          src={item.productId.image}
          className="card-img-top img-custom"
          alt={item.productId.name}
        />
        <div className="card-body">
          <h5 className="card-title">{item.productId.name}</h5>
          <p className="card-text">${item.quantity}</p>
        </div>
      </div>
        // <div
        //   className="card m-3"
        //   style={{ width: "18rem" }}
        //   key={item.productId._id}
        // >
        //   <img src={item.image} className="card-img-top object-fit-fill" alt="..." />
        //   <div className="card-body">
        //     <h5 className="card-title">{item.productId.name}</h5>
        //     <p className="card-text">Quantity: {item.quantity}</p>
        //   </div>
        // </div>
      ))}
    </div>
  );
};

export default Cart;
