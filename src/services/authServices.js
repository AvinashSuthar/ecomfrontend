import axios from "axios";

const API_URL = "http://localhost:3000/api/auth";

export const register = async (name, email, password) => {
  const response = await axios.post(`${API_URL}/register`, {
    name,
    email,
    password,
  } , {withCredentials: true});
  return response.data;
};

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password } , {withCredentials: true});
  return response.data;
};


export const logout = async () => {
    try {
      // Ensure that the token exists and is being sent
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No token found, user may not be authenticated.');
        return;
      }
  
      // Perform the logout request
      const response = await axios.post(`${API_URL}/logout`, {}, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
  
      // Log the response to confirm the logout was successful
      console.log('Logout response:', response.data);
  
      // Clear token from local storage
      localStorage.removeItem('token');
  
      // Redirect to login page
      window.location.href = '/login';
    } catch (error) {
      // Log error details
      console.error('Logout failed:', error.response ? error.response.data : error.message);
    }
  };
  