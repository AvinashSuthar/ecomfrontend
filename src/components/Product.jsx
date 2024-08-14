import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { addToCart } from '../services/cartServices';

const Product = ({ product }) => {
  const { auth } = useContext(AuthContext);

  const handleAddToCart = async () => {
    if (auth.isAuthenticated) {
      await addToCart(product._id, 1, auth.token);
    } else {
      alert('Please login to add products to cart');
    }
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
