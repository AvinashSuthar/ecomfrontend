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
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Omninos E-commerce
        </a>

        <div className="">
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
      </nav> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom p-3">
        <a className="navbar-brand " href="#">
          E-Commerce
        </a>
       
        <div
          className=" navbar-collapse d-flex justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            {auth.isAuthenticated ? (
              <li style={{cursor:"pointer"}}
                className="nav-item active align-items-center ps-3  d-flex justify-content-center cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </li>
            ) : (
              <>
                <li className="nav-item ps-3  ">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item ps-3  ">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
              </>
            )}
            <li className="nav-item active ps-3  pe-4">
              <Link className="nav-link" to="/cart">
                <FaShoppingCart className="mr-2" />
                {cartItems.length > 0 && (
                  <span className="position-absolute  top-10 start-10 translate-middle badge rounded-pill text-danger">
                    {cartItems.length}
                    <span className="visually-hidden">items in cart</span>
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
