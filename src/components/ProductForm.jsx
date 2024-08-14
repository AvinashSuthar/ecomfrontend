import React, { useState, useEffect } from 'react';

const ProductForm = ({ onAddProduct, onEditProduct, editingProduct, setEditingProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');

  useEffect(() => {
    if (editingProduct) {
      setName(editingProduct.name);
      setPrice(editingProduct.price);
      setCategory(editingProduct.category);
      setBrand(editingProduct.brand);
    }
  }, [editingProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const product = { name, price, category, brand };

    if (editingProduct) {
      onEditProduct({ ...editingProduct, ...product });
    } else {
      onAddProduct(product);
    }

    // Clear form
    setName('');
    setPrice('');
    setCategory('');
    setBrand('');
    setEditingProduct(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Price:</label>
        <input 
          type="number" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Category:</label>
        <input 
          type="text" 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Brand:</label>
        <input 
          type="text" 
          value={brand} 
          onChange={(e) => setBrand(e.target.value)} 
          required 
        />
      </div>
      <button type="submit">{editingProduct ? 'Update Product' : 'Add Product'}</button>
      {editingProduct && <button type="button" onClick={() => setEditingProduct(null)}>Cancel</button>}
    </form>
  );
};

export default ProductForm;
