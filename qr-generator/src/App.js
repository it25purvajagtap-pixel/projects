import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import QrCodeGenerator from "./components/QrCodeGenerator";
import Help from "./components/Help";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import UserHome from "./components/UserHome";
import UserHistory from "./components/UserHistory";
import EditProfile from "./components/EditProfile";
import "./App.css";

function App() {
  // Retrieve user info from local storage
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("loggedInUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Handle login
  const handleLogin = (username) => {
    const loggedUser = { name: username };
    setUser(loggedUser);
    localStorage.setItem("loggedInUser", JSON.stringify(loggedUser));
  };

  // Handle logout
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("qrHistory");
  };

  return (
    <Router>
      {/* ✅ Navigation Bar */}
      <Navbar user={user} onLogout={handleLogout} />

      {/* ✅ App Layout */}
      <div style={{ marginTop: "120px", padding: "20px" }}>
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />

          {/* Help / FAQ Page */}
          <Route path="/help" element={<Help />} />

          {/* Public QR Generator Routes */}
          <Route path="/url" element={<QrCodeGenerator type="url" user={user} />} />
          <Route path="/text" element={<QrCodeGenerator type="text" user={user} />} />
          <Route path="/email" element={<QrCodeGenerator type="email" user={user} />} />
          <Route path="/phone" element={<QrCodeGenerator type="phone" user={user} />} />
          <Route path="/sms" element={<QrCodeGenerator type="sms" user={user} />} />
          <Route path="/vcard" element={<QrCodeGenerator type="vcard" user={user} />} />
          <Route path="/mecard" element={<QrCodeGenerator type="mecard" user={user} />} />
          <Route path="/location" element={<QrCodeGenerator type="location" user={user} />} />
          <Route path="/facebook" element={<QrCodeGenerator type="facebook" user={user} />} />
          <Route path="/twitter" element={<QrCodeGenerator type="twitter" user={user} />} />
        
          {/* Authenticated User Routes */}
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/profile"
            element={user ? <Profile user={user} /> : <Navigate to="/login" />}
          />
          <Route
            path="/userhome"
            element={user ? <UserHome user={user} /> : <Navigate to="/login" />}
          />
          <Route
  path="/user/history"
  element={user ? <UserHistory user={user} /> : <Navigate to="/login" />}
/>
<Route
  path="/user/edit"
  element={user ? <EditProfile user={user} onUpdateUser={setUser} /> : <Navigate to="/login" />}
/>

          {/* Fallback Route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
