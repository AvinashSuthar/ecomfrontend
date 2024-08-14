import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { addToCart } from "../services/cartServices";

const Product = ({ product }) => {
  const { auth } = useContext(AuthContext);

  const handleAddToCart = async () => {
    if (auth.isAuthenticated) {
      console.log("ha ha");
      console.log(localStorage.getItem("token"));
      await addToCart(product._id, 1, localStorage.getItem("token"));
    } else {
      alert("Please login to add products to cart");
    }
  };

  return (
    <div className="product-card border">
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
