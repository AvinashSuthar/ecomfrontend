// src/components/Header.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext"; // Import CartContext or equivalent
import { FaShoppingCart } from "react-icons/fa";
import { logout } from "../services/authServices"; // Import logout function
const Header = () => {
  const { auth } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext); // Access cart items from CartContext
  const handleLogout = async () => {
    logout();
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Omninos E-commerce
        </a>
        
        <div className="" >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <FaShoppingCart className="mr-2" />
                {cartItems.length > 0 && (
                  <span className="badge badge-pill badge-danger">
                    {cartItems.length}
                  </span>
                )}
              </Link>
            </li>
            {auth.isAuthenticated ? (
              <li className="nav-item">
                <button
                  className="btn btn-outline-danger"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
