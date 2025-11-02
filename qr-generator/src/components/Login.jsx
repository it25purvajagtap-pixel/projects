import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Login.css";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // (You can replace this with real authentication logic)
    if (username && password) {
      onLogin(username); // ✅ store user info in App state + localStorage
      navigate("/userhome"); // ✅ redirect after login
    } else {
      alert("Please enter username and password");
    }
  };

  return (
    <div className="login-container">
      <h2>🔐 Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
