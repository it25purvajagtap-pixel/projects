import React from "react";
import "./styles/Help.css";

const Help = () => {
  return (
    <div className="help-container">
      <h1 className="help-title">Help & Support - QR Code Generator</h1>

      <section className="help-section">
        <h2>What is a QR Code?</h2>
        <p>
          A QR (Quick Response) code is a two-dimensional barcode that can store
          a variety of information such as URLs, text, contact details, Wi-Fi
          credentials, or payment information. QR codes can be scanned by
          smartphones or scanners to instantly access the stored data.
        </p>
      </section>

      <section className="help-section">
        <h2>How Does a QR Code Work?</h2>
        <p>
          QR codes consist of black squares arranged on a white grid. When you
          scan a QR code, your device's camera decodes the pattern and
          translates it into readable information such as a web link or text.
          The pattern includes:
        </p>
        <ul>
          <li><strong>Position markers</strong> – corners help scanners orient the code.</li>
          <li><strong>Timing patterns</strong> – define data grid structure.</li>
          <li><strong>Data area</strong> – contains encoded information.</li>
          <li><strong>Error correction</strong> – helps recover data even if the code is partially damaged.</li>
        </ul>
      </section>

      <section className="help-section">
        <h2>Types of QR Codes</h2>
        <p>There are several types of QR codes, each serving different purposes:</p>
        <ul>
          <li><strong>Static QR Codes:</strong> Contain fixed data that cannot be changed after generation.</li>
          <li><strong>Dynamic QR Codes:</strong> Allow editing of content even after the code is created.</li>
          <li><strong>Micro QR Codes:</strong> Smaller version suitable for limited space (like product labels).</li>
          <li><strong>Frame QR Codes:</strong> Include a space to insert a logo or call-to-action.</li>
          <li><strong>Logo QR Codes:</strong> Custom-designed codes that include branding elements.</li>
        </ul>
      </section>

      <section className="help-section">
        <h2>Applications of QR Codes</h2>
        <p>QR codes are used across industries for:</p>
        <ul>
          <li>Payments and transactions (e.g., Google Pay, Paytm, PhonePe).</li>
          <li>Event ticketing and boarding passes.</li>
          <li>Restaurant menus and ordering systems.</li>
          <li>Website URLs, app downloads, or promotional campaigns.</li>
          <li>Wi-Fi sharing, authentication, or IoT device pairing.</li>
          <li>Tracking product authenticity and inventory.</li>
        </ul>
      </section>

      <section className="help-section">
        <h2>Security and Privacy Tips</h2>
        <ul>
          <li>Always scan QR codes from trusted sources.</li>
          <li>Beware of malicious codes that can redirect to phishing websites.</li>
          <li>Do not scan random QR codes in public areas.</li>
          <li>Use antivirus or secure QR scanning apps.</li>
          <li>Never share sensitive personal information through a QR code link.</li>
        </ul>
      </section>

      <section className="help-section">
        <h2>FAQs - Frequently Asked Questions</h2>
        <div className="faq">
          <h3>1. How can I create a QR code?</h3>
          <p>
            You can generate QR codes using our QR Code Generator by entering
            your desired text, link, or information and clicking on “Generate QR
            Code.”
          </p>
        </div>

        <div className="faq">
          <h3>2. Is my QR code permanent?</h3>
          <p>
            If you created a static QR code, it is permanent and cannot be
            changed. Dynamic QR codes allow you to edit the data later.
          </p>
        </div>

        <div className="faq">
          <h3>3. Why isn’t my QR code scanning properly?</h3>
          <p>
            Ensure your camera is focused, the code has enough contrast, and it
            is not blurry or too small. Increase brightness or print quality for
            better results.
          </p>
        </div>

        <div className="faq">
          <h3>4. Can QR codes expire?</h3>
          <p>
            Static QR codes do not expire. Dynamic QR codes may expire based on
            your subscription or linked URL settings.
          </p>
        </div>

        <div className="faq">
          <h3>5. Can I track how many people scan my QR code?</h3>
          <p>
            Yes, dynamic QR codes can include tracking analytics such as number
            of scans, location, device type, and more.
          </p>
        </div>

        <div className="faq">
          <h3>6. Are QR codes free to generate?</h3>
          <p>
            Yes, most static QR codes are free to create. Advanced features like
            analytics, editing, or custom design may require premium services.
          </p>
        </div>

        <div className="faq">
          <h3>7. What formats can I download my QR code in?</h3>
          <p>
            You can download your generated QR codes as PNG, JPG, or SVG formats
            depending on your usage.
          </p>
        </div>
      </section>

      <section className="help-section">
        <h2>Troubleshooting</h2>
        <ul>
          <li>If your QR code doesn’t scan, check lighting and focus.</li>
          <li>Ensure you entered valid input data before generating.</li>
          <li>Use high-resolution QR codes for printing.</li>
          <li>For Wi-Fi or link-based QR codes, verify the destination URL or credentials.</li>
        </ul>
      </section>

      <section className="help-section">
        <h2>Contact Support</h2>
        <p>
          If you still face issues, please reach out to our support team at{" "}
          <a href="mailto:support@qrgenerator.com">support@qrgenerator.com</a>{" "}
          or use the in-app feedback form. We’re here to help you 24/7.
        </p>
      </section>
    </div>
  );
};

export default Help;
