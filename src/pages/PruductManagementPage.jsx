import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const ProductManagementPage = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddProduct = async (product) => {
    try {
      const response = await axios.post('/api/products', product);
      setProducts([...products, response.data]);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const handleEditProduct = async (product) => {
    try {
      const response = await axios.put(`/api/products/${product._id}`, product);
      setProducts(products.map(p => (p._id === product._id ? response.data : p)));
      setEditingProduct(null);
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`/api/products/${id}`);
      setProducts(products.filter(p => p._id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div>
      <h2>Product Management</h2>
      <ProductForm 
        onAddProduct={handleAddProduct} 
        onEditProduct={handleEditProduct} 
        editingProduct={editingProduct}
        setEditingProduct={setEditingProduct}
      />
      <ProductList 
        products={products} 
        onEdit={setEditingProduct} 
        onDelete={handleDeleteProduct}
      />
    </div>
  );
};

export default ProductManagementPage;
