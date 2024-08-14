import axios from 'axios';

const API_URL = "https://ecommercebackend-sb87.onrender.com/api/products";

// const API_URL = "http://localhost:3000/api/products";


export const getProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const filterAndSortProducts = async (filters) => {
  const response = await axios.get(`${API_URL}/filter`, { params: filters });
  return response.data;
};
