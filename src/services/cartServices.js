import axios from "axios";

const API_URL = "http://localhost:3000/api/cart";

export const addToCart = async (productId, quantity, token) => {
  const response = await axios.post(
    `${API_URL}/add`,
    { productId, quantity },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data;
};

export const getCartItems = async (token) => {
  const response = await axios.get(API_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
