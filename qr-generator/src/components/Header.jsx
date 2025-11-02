import React from "react";
import { Link } from "react-router-dom";
import "./styles/Header.css";

function Header() {
  return (
    <header className="header">
      {/* 🔹 Top Bar (Logo + Nav Links) */}
      <div className="top-bar">
        <div className="brand">
          <img src="/logo192.png" alt="SmartQR Logo" className="logo" />
        </div>

        <nav className="top-nav">
          <Link to="/">Home</Link>
          <Link to="/help">Help</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </div>

      {/* 🔹 Second Line Menu */}
      <div className="menu-container">
        <ul className="menu-bar">
          <li><Link to="/">URL</Link></li>
          <li><Link to="/text">TEXT</Link></li>
          <li><Link to="/email">EMAIL</Link></li>
          <li><Link to="/phone">PHONE</Link></li>
          <li><Link to="/sms">SMS</Link></li>
          <li><Link to="/location">LOCATION</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/language">ENGLISH ▼</Link></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
