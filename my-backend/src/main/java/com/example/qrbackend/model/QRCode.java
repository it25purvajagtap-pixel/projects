package com.example.qrbackend.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class QRCode {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String content;

    @Lob
    private byte[] image;
}