package com.example.qrbackend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Scan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long qrCodeId;  // Reference to the QRCode
    private String scannedBy;  // e.g., user or device
    private String timestamp;  // e.g., when the scan occurred

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public Long getQrCodeId() { return qrCodeId; }
    public void setQrCodeId(Long qrCodeId) { this.qrCodeId = qrCodeId; }
    public String getScannedBy() { return scannedBy; }
    public void setScannedBy(String scannedBy) { this.scannedBy = scannedBy; }
    public String getTimestamp() { return timestamp; }
    public void setTimestamp(String timestamp) { this.timestamp = timestamp; }
}