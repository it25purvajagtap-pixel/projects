package com.example.qrbackend.repository;

import com.example.qrbackend.model.QRCode;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QRCodeRepository extends JpaRepository<QRCode, Long> {
}