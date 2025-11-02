import React, { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import axios from "axios";
import "./styles/QrCodeGenerator.css";

const QrCodeGenerator = ({ type }) => {
  const [input, setInput] = useState("");
  const [color, setColor] = useState("#000000");
  const [error, setError] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [savedId, setSavedId] = useState(null);        // FIXED
  const [saving, setSaving] = useState(false);         // FIXED
  const qrRef = useRef(null);

  const placeholders = {
    url: "Enter a valid URL (e.g. https://example.com)",
    text: "Enter any text",
    email: "Enter email (e.g. name@example.com)",
    phone: "Enter 10-digit phone number",
    sms: "Enter message for SMS",
    vcard: "Enter VCard details",
    mecard: "Enter MeCard details",
    location: "Enter location coordinates (lat, long)",
    facebook: "Enter Facebook profile link",
    twitter: "Enter Twitter profile link",
  };

  const validateInput = (value) => {
    switch (type) {
      case "url":
        return /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-]*)*$/.test(value)
          ? ""
          : "Please enter a valid URL (with https://)";
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ""
          : "Enter a valid email address";
      case "phone":
        return /^\d{10}$/.test(value) ? "" : "Phone number must be 10 digits";
      default:
        return value.trim() ? "" : "Input cannot be empty";
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    setError(validateInput(value));
  };

  const getQRCodeValue = () => {
    if (error || !input) return "";
    switch (type) {
      case "email": return `mailto:${input}`;
      case "phone": return `tel:${input}`;
      case "sms": return `sms:${input}`;
      case "url": return input.startsWith("http") ? input : `https://${input}`;
      default: return input;
    }
  };

  const handleDownload = () => {
    const canvas = qrRef.current?.querySelector("canvas");
    if (!canvas) return;
    const url = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = url;
    a.download = `SmartQR-${type}.png`;
    a.click();
  };

  const handleSave = async () => {
    if (error || !input) return;
    setSaving(true);
    try {
      const res = await axios.post("/api/qr/generate", {
        content: getQRCodeValue(),
      });
      setSavedId(res.data.id);
    } catch (err) {
      console.error(err);
      alert("Failed to save QR – is backend running on 8081?");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="qr-generator-container">
      <h1>QR Code Generator</h1>
      <p>Generate a QR code instantly for links, text, or contact info.</p>

      <input
        type="text"
        placeholder={placeholders[type] || "Enter text"}
        value={input}
        onChange={handleChange}
      />

      {error && <p className="error-msg">{error}</p>}

      <div className="color-picker">
        <label>Pick QR Color:</label>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>

      <div className="qr-wrapper">
        <div className="qr-preview" ref={qrRef}>
          {input && !error ? (
            <QRCodeCanvas value={getQRCodeValue()} size={200} fgColor={color} />
          ) : (
            <p className="hint">Type something above to generate your QR code.</p>
          )}
        </div>

        {input && !error && (
          <div className="qr-buttons">
            <button onClick={() => setShowPreview(true)}>Preview</button>
            <button onClick={handleDownload}>Download</button>
            <button onClick={handleSave} disabled={saving}>
              {saving ? "Saving…" : "Save to DB"}
            </button>
            {savedId !== null && (
              <p style={{ margin: "8px 0 0", color: "#0f0" }}>
                Saved! ID: {savedId}
              </p>
            )}
          </div>
        )}
      </div>

      {showPreview && (
        <div className="preview-modal">
          <div className="modal-content">
            <h3>QR Code Preview</h3>
            <QRCodeCanvas value={getQRCodeValue()} size={300} fgColor={color} />
            <button onClick={() => setShowPreview(false)} className="close-btn">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QrCodeGenerator;