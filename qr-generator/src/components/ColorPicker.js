import React, { useState } from "react";
import "./styles/UserHome.css"; // or wherever your CSS file is located

const ColorPicker = () => {
const [qrColor, setQrColor] = useState("#ff0000");

  return (
    <div className="url-container">
      {/* Left Section */}
      <div className="url-left">
        <div className="input-group">
         <label
  htmlFor="qrColor"
  style={{
    fontWeight: "600",
    fontSize: "16px",
    marginBottom: "5px",
    color: "white",
    display: "block"
  }}
>
  Pick QR Color:
</label>
          <div className="color-box">
            <input
              type="color"
              id="qrColor"
              value={qrColor}
onChange={(e) => setQrColor(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Right Section (Preview) */}
      <div className="url-right">
        <h3>QR Preview</h3>
        <div
          className="qr-preview"
          style={{
            backgroundColor: qrColor,
            width: "120px",
            height: "120px",
            margin: "0 auto",
            borderRadius: "8px",
            border: "4px solid #fff",
          }}
        ></div>
        <button className="download-btn">Download QR</button>
      </div>
    </div>
  );
};

export default ColorPicker;
