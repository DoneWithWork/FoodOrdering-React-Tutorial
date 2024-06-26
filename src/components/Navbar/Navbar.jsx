import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { useState } from "react";
const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
      <img src={assets.logo} className="logo" alt="logo" />
      <ul className="navbar-menu">
        <li className={menu === "home" ? "active" : ""}>Home</li>
        <li className={menu === "menu" ? "active" : ""}>Menu</li>
        <li className={menu === "mobile-app" ? "active" : ""}>Mobile App</li>
        <li className={menu === "contact-us" ? "active" : ""}>Contact Us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search icon" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="cart icons" />
          <div className="dot"></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
