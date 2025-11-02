import React from "react";
import { Link } from "react-router-dom";
import "./styles/MenuBar.css";

function MenuBar() {
  return (
    <div className="menu-container">
      <ul className="menu-bar">
        <li><Link to="/">URL</Link></li>
        <li><Link to="/text">TEXT</Link></li>
        <li><Link to="/email">EMAIL</Link></li>
        <li><Link to="/phone">PHONE</Link></li>
        <li><Link to="/sms">SMS</Link></li>
        <li><Link to="/mecard">MECARD</Link></li>
        <li><Link to="/location">LOCATION</Link></li>
        <li><Link to="/facebook">FACEBOOK</Link></li>
        <li><Link to="/twitter">TWITTER</Link></li>
      </ul>
    </div>
  );
}

export default MenuBar;
