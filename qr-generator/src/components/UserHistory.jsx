// src/components/UserHistory.jsx
import React, { useEffect, useState } from "react";
import "./styles/UserHistory.css";

const UserHistory = ({ user }) => {
  const [qrHistory, setQrHistory] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(`qrHistory_${user?.name}`)) || [];
    setQrHistory(saved);
  }, [user]);

  return (
    <div className="history-container">
      <h1>📜 {user?.name}'s QR Code History</h1>

      {qrHistory.length > 0 ? (
        <div className="history-grid">
          {qrHistory.map((qr, index) => (
            <div key={index} className="history-card">
              <img src={qr.image} alt="QR" />
              <div className="history-details">
                <p><strong>Data:</strong> {qr.text}</p>
                <p><strong>Date:</strong> {qr.date || "Unknown"}</p>
              </div>
              <a href={qr.image} download={`QR_${index + 1}.png`} className="download-btn">
                ⬇️ Download
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-history">No QR codes found in your history.</p>
      )}
    </div>
  );
};

export default UserHistory;
