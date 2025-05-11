import React from "react";
import "../CSS/navbar.css";
export default function Navbar() {
      return (
        <>
        <nav className="navbar">
          <div className="navbar-left">
            <p>Become A Seller</p>
            <p>About Us</p>
            <p>Free Delivery</p>
            <p>Returns Policy</p>
          </div>
          <div className="navbar-right">
            <div className="navbar-dropdown">
              <p>Help Center</p>
              <ul className="dropdown-menu">
                <li>
                  <i className="bi bi-headset"></i> Call Center
                </li>
                <li>
                  <i className="bi bi-chat-dots"></i> Live Chat
                </li>
              </ul>
            </div>
            <i className="bi bi-person-circle"></i>
            <button className="account-button">My Account</button>
          </div>
        </nav>
        </>
      );
}
