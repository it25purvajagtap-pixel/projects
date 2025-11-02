// src/components/UserHome.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/UserHome.css";

const UserHome = ({ user }) => {
  const navigate = useNavigate();
  const [qrHistory, setQrHistory] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [qrColor, setQrColor] = useState("#007bff"); // Default QR color

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(`qrHistory_${user?.name}`)) || [];
    setQrHistory(saved);
  }, [user]);

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    alert("You have been logged out!");
    navigate("/login");
  };

  // Delete account (Sign Out permanently)
  const handleSignOut = () => {
    if (window.confirm("Are you sure you want to permanently delete your account?")) {
      localStorage.clear();
      alert("Account deleted successfully!");
      navigate("/");
    }
  };

  return (
    <div className="userhome">
      {/* Header */}
      <header className="userhome-header">
        <div className="user-info">
          <img
            src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
            alt="Profile"
            className="profile-pic"
          />
          <div>
            <h1>Welcome, {user?.name || "User"} 👋</h1>
            <p>Manage your QR codes, profile, and account easily.</p>
          </div>
        </div>

        {/* Account Menu */}
        <div className="account-menu">
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            ⚙️ Account
          </button>

          {menuOpen && (
            <div className="dropdown-menu">
              <button onClick={() => navigate("/user/edit")}>✏️ Edit Profile</button>
              <button onClick={handleLogout}>🚪 Logout</button>
              <button onClick={handleSignOut} className="delete-btn">
                ❌ Sign Out
              </button>
            </div>
          )}
        </div>
      </header>

      {/* QR Color Picker */}
      <div className="qr-color-container">
        <label>Pick QR Color:</label>
        <div
          className="color-box"
          style={{ borderColor: qrColor }}
          onClick={() => document.getElementById("colorInput").click()}
        >
          <span style={{ backgroundColor: qrColor }}></span>
        </div>
        <input
          type="color"
          id="colorInput"
          value={qrColor}
          onChange={(e) => setQrColor(e.target.value)}
          style={{ display: "none" }}
        />
      </div>

      {/* Action Cards */}
      <section className="action-grid">
        <div className="action-card" onClick={() => navigate("/user/history")}>
          <h3>📜 My QR History</h3>
          <p>View all your generated QR codes with details.</p>
        </div>

        <div className="action-card" onClick={() => navigate("/help")}>
          <h3>💡 Help & FAQs</h3>
          <p>Get answers and learn more about QR codes.</p>
        </div>
      </section>

      {/* QR Gallery */}
      <section className="qr-gallery">
        <h2>📸 Recent QR Codes</h2>
        {qrHistory.length > 0 ? (
          <div className="masonry-grid">
            {qrHistory.map((qr, i) => (
              <div key={i} className="qr-card">
                <img src={qr.image} alt="QR" />
                <div className="qr-info">
                  <p>{qr.text}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="empty-text">You haven’t generated any QR codes yet.</p>
        )}
      </section>
    </div>
  );
};

export default UserHome;
