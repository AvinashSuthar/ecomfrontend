import React, { useEffect, useState } from 'react';
import { getProducts, filterAndSortProducts } from '../services/productService';
import Product from '../components/Product';
import Sidebar from '../components/Sidebar';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      const data = filters.category || filters.brand || filters.sort 
        ? await filterAndSortProducts(filters) 
        : await getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, [filters]);

  return (
    <div className="homepage">
      <Sidebar filters={filters} onFilterChange={setFilters} />
      <div className="products">
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
