import React from "react";

const Sidebar = ({ filters, onFilterChange }) => {
  const handleCategoryChange = (e) => {
    onFilterChange({ ...filters, category: e.target.value });
  };

  const handleBrandChange = (e) => {
    onFilterChange({ ...filters, brand: e.target.value });
  };

  const handleSortChange = (e) => {
    onFilterChange({ ...filters, sort: e.target.value });
  };

  return (
    <div
      className="sidebar p-3 border bg-light"
      style={{ maxWidth: "300px", minHeight: "100vh" }}
    >
      <div className="mb-3">
        <h4 className="mb-2">Category</h4>
        <select className="form-control" onChange={handleCategoryChange}>
          <option value="">All</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          {/* Add more categories as needed */}
        </select>
      </div>
      <div className="mb-3">
        <h4 className="mb-2">Brand</h4>
        <select className="form-control" onChange={handleBrandChange}>
          <option value="">All</option>
          <option value="apple">Apple</option>
          <option value="samsung">Samsung</option>
          {/* Add more brands as needed */}
        </select>
      </div>
      <div>
        <h4 className="mb-2">Sort by</h4>
        <select className="form-control" onChange={handleSortChange}>
          <option value="">None</option>
          <option value="price_desc">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default Sidebar;
