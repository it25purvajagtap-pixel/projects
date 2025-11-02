package com.example.qrbackend.service;

import com.example.qrbackend.model.QRCode;
import com.example.qrbackend.repository.QRCodeRepository;
import com.google.zxing.BarcodeFormat;
import com.google.zxing.WriterException;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.ByteArrayOutputStream;
import java.io.IOException;

@Service
public class QRService {
    @Autowired
    private QRCodeRepository qrCodeRepository;

    public QRCode generateAndSaveQRCode(String content) throws WriterException, IOException {
        if (content == null || content.trim().isEmpty()) {
            throw new IllegalArgumentException("QR code content cannot be empty");
        }

        QRCode qrCode = new QRCode();
        qrCode.setContent(content);

        QRCodeWriter qrCodeWriter = new QRCodeWriter();
        BitMatrix bitMatrix = qrCodeWriter.encode(content, BarcodeFormat.QR_CODE, 250, 250);

        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        MatrixToImageWriter.writeToStream(bitMatrix, "PNG", baos);
        qrCode.setImage(baos.toByteArray());

        return qrCodeRepository.save(qrCode);
    }

    public QRCode getQRCodeById(Long id) {
        return qrCodeRepository.findById(id).orElse(null);
    }
}