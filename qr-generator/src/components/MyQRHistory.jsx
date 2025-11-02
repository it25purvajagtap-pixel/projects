import React, { useEffect, useState } from "react";
import "./styles/MyQRHistory.css";

function MyQRHistory() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Simulate fetch (replace with your backend API call)
    const storedData = JSON.parse(localStorage.getItem("qrHistory")) || [];
    setHistory(storedData);
  }, []);

  return (
    <div className="qr-history-container">
      <h2>📜 My QR History</h2>
      <p>View all your generated QR codes with details.</p>

      {history.length === 0 ? (
        <p className="no-data">No QR codes generated yet.</p>
      ) : (
        <div className="qr-list">
          {history.map((item, index) => (
            <div key={index} className="qr-card">
              <img src={item.qrImage} alt="QR" />
              <div className="qr-details">
                <p><strong>Data:</strong> {item.text}</p>
                <p><strong>Date:</strong> {item.date}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyQRHistory;
