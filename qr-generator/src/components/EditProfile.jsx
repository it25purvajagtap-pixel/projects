// src/components/EditProfile.jsx
import React, { useState } from "react";
import "./styles/EditProfile.css";

function EditProfile() {
  const [profile, setProfile] = useState({
    username: localStorage.getItem("username") || "",
    email: localStorage.getItem("email") || "",
    fullName: localStorage.getItem("fullName") || "",
    phone: localStorage.getItem("phone") || "",
    address: localStorage.getItem("address") || "",
    bio: localStorage.getItem("bio") || "",
    gender: localStorage.getItem("gender") || "",
    dob: localStorage.getItem("dob") || "",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Object.keys(profile).forEach((key) => {
      localStorage.setItem(key, profile[key]);
    });
    alert("✅ Profile updated successfully!");
  };

  return (
    <div className="edit-profile-page">
      <div className="edit-profile-card">
        <div className="profile-header">
          <img
            src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
            alt="User Avatar"
            className="profile-avatar"
          />
          <div>
            <h2>👤 Edit Profile</h2>
            <p>Keep your details up to date to personalize your experience.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="edit-form">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={profile.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={profile.username}
              onChange={handleChange}
              placeholder="Enter username"
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              placeholder="Enter email"
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              pattern="[0-9]{10}"
              required
            />
          </div>

          <div className="form-group">
            <label>Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={profile.dob}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Gender</label>
            <select
              name="gender"
              value={profile.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male ♂️</option>
              <option value="Female">Female ♀️</option>
              <option value="Other">Other ⚧️</option>
            </select>
          </div>

          <div className="form-group full-width">
            <label>Address</label>
            <textarea
              name="address"
              value={profile.address}
              onChange={handleChange}
              placeholder="Enter your address"
            ></textarea>
          </div>

          <div className="form-group full-width">
            <label>About / Bio</label>
            <textarea
              name="bio"
              value={profile.bio}
              onChange={handleChange}
              placeholder="Write a short bio about yourself..."
            ></textarea>
          </div>

          <button type="submit" className="save-btn">💾 Save Changes</button>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
