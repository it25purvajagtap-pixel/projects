import React from "react";
import { Link } from "react-router-dom";
import "./styles/NavBar.css";

const Navbar = () => {
  return (
    <header className="header">
      {/* 🔹 First Line: Logo + Home/Help/Login/Register */}
      <div className="top-bar">
        <div className="nav-left">
         <img src="/smartqr-logo.png" alt="Smart QR Logo" />
          <span className="nav-brand">SmartQR</span>
        </div>

        <div className="nav-right">
          <Link to="/">Home</Link>
          <Link to="/help">Help</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>

      {/* 🔹 Second Line: QR Options */}
      <nav className="bottom-bar">
        <ul className="nav-center">
          <li><Link to="/url">URL</Link></li>
          <li><Link to="/text">TEXT</Link></li>
          <li><Link to="/email">EMAIL</Link></li>
          <li><Link to="/phone">PHONE</Link></li>
          <li><Link to="/sms">SMS</Link></li>
          <li><Link to="/vcard">VCARD</Link></li>
          <li><Link to="/mecard">MECARD</Link></li>
          <li><Link to="/location">LOCATION</Link></li>
          <li><Link to="/facebook">FACEBOOK</Link></li>
          <li><Link to="/twitter">TWITTER</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
