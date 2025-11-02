import React from "react";
import "./styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <h1>Welcome to SmartQR</h1>
        <p>
          SmartQR is your all-in-one QR Code generator platform. Generate, customize,
          and download QR codes for URLs, text, contact info, locations, and more.
        </p>
      </section>

      <section className="info-section">
        <h2>What is a QR Code?</h2>
        <p>
          A QR code (Quick Response code) is a type of matrix barcode that can
          be scanned using smartphones or QR scanners. It stores data such as
          website URLs, email addresses, phone numbers, or plain text, allowing
          instant access to digital content.
        </p>
      </section>

      <section className="types-section">
        <h2>Types of QR Codes You Can Generate</h2>
        <ul>
          <li><b>URL QR:</b> Instantly direct users to a website.</li>
          <li><b>Text QR:</b> Share messages or information offline.</li>
          <li><b>Email QR:</b> Open a pre-filled email window.</li>
          <li><b>Phone QR:</b> Dial a phone number instantly.</li>
          <li><b>SMS QR:</b> Send a pre-written text message.</li>
          <li><b>Location QR:</b> Show exact coordinates in Maps.</li>
        </ul>
      </section>

      <section className="footer-note">
        <p>Start creating your QR codes today — fast, free, and secure!</p>
      </section>
    </div>
  );
};

export default Home;
