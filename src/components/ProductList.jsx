import React from "react";

const ProductList = ({ products, onEdit, onDelete }) => {
  return (
    <div>
      <h3>Product List</h3>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <div>
              <h4>{product.name}</h4>
              <p>Price: ${product.price}</p>
              <p>Category: {product.category}</p>
              <p>Brand: {product.brand}</p>
              <button onClick={() => onEdit(product)}>Edit</button>
              <button onClick={() => onDelete(product._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
