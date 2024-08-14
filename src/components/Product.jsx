import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { addToCart } from "../services/cartServices";
import "./Product.css";
const Product = ({ product }) => {
  const { auth } = useContext(AuthContext);

  const handleAddToCart = async () => {
    if (auth.isAuthenticated) {
      console.log("ha ha");
      console.log(localStorage.getItem("token"));
      await addToCart(product._id, 1, localStorage.getItem("token"));
      alert("Added to cart");
    } else {
      alert("Please login to add products to cart");
    }
  };

  return (
    // <div className="product-card border">
    //   <h3>{product.name}</h3>
    //   <p>${product.price}</p>
    //   <button onClick={handleAddToCart}>Add to Cart</button>
    // </div>

    <div className="card m-2" style={{ width: '18rem', height: '23rem' }}>
    <img
      src={product.image}
      className="card-img-top img-custom"
      alt={product.name}
    />
    <div className="card-body">
      <h5 className="card-title">{product.name}</h5>
      <p className="card-text">${product.price}</p>
      <button className=" btn btn-dark mt-3" onClick={handleAddToCart}>Add to Cart</button>
    </div>
  </div>
  );
};

export default Product;
