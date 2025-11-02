package com.example.qrbackend.controller;

import com.example.qrbackend.model.QRCode;
import com.example.qrbackend.service.QRService;
import com.google.zxing.WriterException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/api/qr")
public class QRController {
    @Autowired
    private QRService qrService;

    @PostMapping("/generate")
    public ResponseEntity<QRCode> generateQRCode(@RequestBody String content) {
        try {
            QRCode qrCode = qrService.generateAndSaveQRCode(content);
            return ResponseEntity.ok(qrCode);
        } catch (WriterException | IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    @GetMapping("/{id}/image")
    public ResponseEntity<byte[]> getQRCodeImage(@PathVariable Long id) {
        QRCode qrCode = qrService.getQRCodeById(id);
        if (qrCode != null && qrCode.getImage() != null) {
            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=qr.png")
                    .contentType(MediaType.IMAGE_PNG)
                    .body(qrCode.getImage());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }
}