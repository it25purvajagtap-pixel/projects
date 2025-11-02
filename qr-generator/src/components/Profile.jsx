import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Profile.css";

const Profile = ({ user }) => {
  const navigate = useNavigate();

  const handleEditProfile = () => {
    alert("Edit Profile feature coming soon!");
  };

  const handleHistory = () => {
    alert("QR History will be shown here soon!");
  };

  return (
    <div className="profile-container">
      {/* Sidebar */}
      <aside className="profile-sidebar">
        <div className="profile-info">
          <img
            src="/profile-icon.png"
            alt="user"
            className="profile-avatar"
            onError={(e) => (e.target.src = "/logo192.png")}
          />
          <h3>{user.name}</h3>
          <p>@{user.name.toLowerCase()}</p>
        </div>

        <div className="profile-links">
          <button onClick={handleHistory}>📜 My QR History</button>
          <button onClick={handleEditProfile}>⚙️ Edit Profile</button>
          <button onClick={() => navigate("/")}>🏠 Back to Home</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="profile-main">
        <h2>Welcome Back, {user.name}! 👋</h2>
        <p>This is your SmartQR Dashboard.</p>

        <div className="profile-cards">
          <div className="card">
            <h3>Total QR Codes</h3>
            <p>12 Generated</p>
          </div>

          <div className="card">
            <h3>Recent Activity</h3>
            <p>Last login: Just now</p>
          </div>

          <div className="card">
            <h3>Account Type</h3>
            <p>Free User</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
